import React from "react";
import { withStyles } from "@material-ui/core/styles";
import RssfeedSettingsAdd from "./rssfeedsettingsadd";
import RssfeedSettingsList from "./rssfeedsettingslist";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import I18n from "./../i18n";

const StyledTextField = withStyles({
    root: {
        width: "25ch",
    },
})(TextField);
/**
 * @type {(_theme: Theme) => import("@material-ui/styles").StyleRules}
 */
const styles = (_theme) => ({ // eslint-disable-line no-unused-vars
    root: {},
});

class RssfeedSettings extends React.Component {

    constructor(props) {
        super(props);
        this.socket = props.context.socket;
        this.sendTo = props.context.socket.sendTo;
        this.instanceId = props.context.instanceId;
        this.state={
            rss:this.props.rss||[],
            refresh:this.props.refresh||60,
            maxarticles:this.props.maxarticles||100,
            addData:{},
            alert:false,
            alertText:"",
            errmsg:     {
                refresh:        "",
                maxarticles:    "",
            },
        };
        this.handleChange = this.handleChange.bind(this);
        this.addHandler = this.addHandler.bind(this);
        this.edit1Handler = this.edit1Handler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.delHandler = this.delHandler.bind(this);
        this.closeAlertHandler = this.closeAlertHandler.bind(this);
    }
    addHandler(data) {
        var index=this.state.rss.findIndex(el=>el.name==data.name);
        if (index>=0) {
            this.alertOn("Duplicate entry!");
            return false;
        }
        const rss = Object.assign([], this.props.rss);
        data.refresh = data.refresh?data.refresh:this.state.refresh;
        rss.push(data);
        this.props.onChangeRss(rss);
        this.setState({
            addData:{},
            rss:rss
        });
        return true;
    }
    edit1Handler(data) {
        this.setState({addData:data});
    }
    updateHandler(data) {
        var index=this.state.rss.findIndex(el=>el.name==data.name);
        if (index>=0) {
            const rss = Object.assign([], this.props.rss);
            rss[index] = data;
            this.props.onChangeRss(rss);
            this.setState({
                addData:{},
                rss:rss
            });
            return true;
        } else {
            this.addHandler(data);
        }
        return false;
    }
    delHandler(data) {
        var index=this.state.rss.findIndex(el=>el.name==data.name);
        if (index>=0) {
            const rss = Object.assign([], this.props.rss);
            rss.splice(index,1);
            this.setState({
                addData:{},
                rss:rss
            });
            this.props.onChangeRss(rss);
            return true;
        }
        return false;
    }
    handleChange(e) {
        this.validate(e.target.name,e.target.value);
        const value = this.sanitize(e.target.name,e.target.value);
        this.setState({[e.target.name]:value});
    }
    sanitize(attr,value) {
        if (["refresh","maxarticles"].indexOf(attr)>=0 && this.state.errmsg[attr]=="") return parseInt(value);
        return value;
    }
    validate(attr,value,update=false) {
        const errmsg = this.state.errmsg;
        let error = "";
        if (attr == "refresh")          error = this.validateRefresh(value);
        if (attr == "maxarticles")      error = this.validateMaxarticles(value);
        if (attr == "name" && update)   error = this.validateName(value);
        errmsg[attr] = error;
        this.setState({errmsg:errmsg});
    }
    validateName(value) {
        if(value=="") return "value should not be epmpty";
        return "";
    }
    validateUrl(value) {
        if(value=="") return "value should not be epmpty";
        return "";
    }
    validateRefresh(value) {
        if(value=="") return "value should 60 or greater";
        if (isNaN(value)) return "invalid value";
        value = parseInt(value);
        if (value<60) return "value should 60 or greater";
        return "";
    }
    validateMaxarticles(value) {
        if(value=="") return "value should 1 or greater";
        if (isNaN(value)) return "invalid value";
        value = parseInt(value);
        if (value<1) return "value should 1 or greater";
        return "";
    }
    closeAlertHandler(event, reason) {
        if (reason === "clickaway") {
            return;
        }
        this.alertOff();
    }
    alertOn(msg) {
        this.setState({alert:true,alertText:msg});
    }
    alertOff() {
        this.setState({alert:false,alertText:""});
    }
    render() {
        
        const elements=[
            {title:"refresh",       attr:"refresh",     type:"text"},
            {title:"maxarticles",   attr:"maxarticles", type:"text"}
        ];        
        return (
            <div>
                <h3>{I18n.t("Base Parameter RSS Feeds")}</h3>            
                {elements.map((el) =>
                    <StyledTextField
                        name={el.attr}
                        key={el.attr}
                        label={I18n.t(el.title)}
                        select={el.type=="select"}
                        value={ this.state[el.attr]}
                        type={el.type || "text"}
                        onChange={this.handleChange}
                        error={((this.state["errmsg"][el.attr]||"")!="")}
                        helperText={this.state["errmsg"][el.attr]||""}
                        margin="normal"
                    >
                        {el.childs && el.childs.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </StyledTextField>
                )}
                <form>
                    <RssfeedSettingsAdd
                        addData={this.state.addData}
                        onUpdate={this.updateHandler}
                        onAdd={this.addHandler}
                    />
                </form>
                <RssfeedSettingsList
                    onDel={this.delHandler}
                    onEdit1={this.edit1Handler}
                    data={this.props.rss}
                />
                <Snackbar open={this.state.alert}
                    autoHideDuration={6000}
                    anchorOrigin={{vertical: "top",horizontal: "center"}}
                    onClose={this.closeAlertHandler}
                >
                    <Alert severity="error" onClose={this.closeAlertHandler}>
                        <h1>{this.state.alertText}</h1>
                    </Alert>
                </Snackbar>
            </div>
        );
    }
}
RssfeedSettings.propTypes = {
    context: PropTypes.object,
    rss: PropTypes.array,
    onChange: PropTypes.func

};
export default withStyles(styles)(RssfeedSettings);
