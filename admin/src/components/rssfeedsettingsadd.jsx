import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import I18n from "./../i18n";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";

/**
 * @type {(_theme: Theme) => import("@material-ui/styles").StyleRules}
 */
const styles = (_theme) => ({ // eslint-disable-line no-unused-vars
    root: {},
});
const StyledTextField = withStyles({
    root: {
        width: "25ch",
    },
})(TextField);

class RssfeedSettingsAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.assignState(props);
        this.handleChange = this.handleChange.bind(this);
        this.addHandler = this.addHandler.bind(this);
    }
    componentDidUpdate(prevProps) {
        if (this.props.addData!=prevProps.addData) this.setState(this.assignState(this.props));
    }
    assignState(props) {
        const template = {
            name:       props.name || "",
            cat:        props.cat || "",
            url:        props.url || "",
            refresh:    props.refresh || 60,
            errmsg:     {
                name:       "",
                cat:        "",
                url:        "",
                refresh:    "",
            },
        };
        return Object.assign(template,this.setData(props.addData));
    }
    handleChange(e) {
        this.validate(e.target.name,e.target.value);
        const value = this.sanitize(e.target.name,e.target.value);
        this.setState({[e.target.name]:value});
    }
    sanitize(attr,value) {
        if (["refresh"].indexOf(attr)>=0 && value!="" && this.state.errmsg[attr]=="") return parseInt(value);
        if (["name","cat"].indexOf(attr)>=0 && this.state.errmsg[attr]=="") return value.replace(/[^0-9a-zöÖüÜäÄß]/gi, ""); //eslint-disable-line
        return value;
    }
    validate(attr,value) {
        const errmsg = this.state.errmsg;
        let error = "";
        if (attr == "name")     error = this.validateName(value);
        if (attr == "cat")      error = this.validateCat(value);
        if (attr == "url")      error = this.validateUrl(value);
        if (attr == "refresh")  error = this.validateRefresh(value);
        errmsg[attr] = error;
        this.setState({errmsg:errmsg});
    }
    validateName(value) {
        if(value=="") return "value should not be empty";
        if (value.length>30) return "only 30 characters or less";
        return "";
    }
    validateCat(value) {
        if(value=="") return "";
        if (value.length>30) return "only 30 characters or less";
        return "";
    }
    validateUrl(value) {
        if(value=="") return "Url needed";
        return "";
    }
    validateRefresh(value) {
        if(value=="") return "";
        if (isNaN(value)) return "invalid value";
        value = parseInt(value);
        if (value<60) return "value should be empty, 60 or greater";
        return "";
    }
    isError() {
        return (this.state.errmsg.name=="" && this.state.errmsg.cat=="" && this.state.errmsg.url=="" && this.state.errmsg.refresh=="");
    }
    addHandler() {
        var data = this.getData(this.state);
        this.validate("name",data.name);
        this.validate("url",data.url);
        this.validate("refresh",data.refresh);        
        data.name = this.sanitize("name",data.name);
        data.url = this.sanitize("url",data.url);
        data.refresh = this.sanitize("refresh",data.refresh);
        if (!this.isError()) return
        if (Object.keys(this.props.addData).length==0) {
            if (this.props.onAdd(data)) {
                this.resetForm();
            }
        } else {
            if (this.props.onUpdate(data)) {
                this.resetForm();
            }
        }
    }

    resetForm() {
        this.setState(
            {
                name:       "",
                cat:        "",
                url:        "",
                refresh:    "",
                errmsg:     {
                    name:       "",
                    cat:        "",
                    url:        "",
                    refresh:    "",
                },
            }
        );
    }
    getData(state) {
        return {
            name:       state.name,
            cat:        state.cat,
            url:        state.url,
            refresh:    state.refresh,
        };
    }
    setData(rss){
        return {
            name:       rss.name||"",
            cat:        rss.cat||"",
            url:        rss.url||"",
            refresh:    rss.refresh||"",
        };
    }

    render() {
        const elements=[
            {title:"RSS Name",      attr:"name",    type:"text"},
            {title:"cat",       attr:"cat",     type:"text"},
            {title:"url",       attr:"url",     type:"text"},
            {title:"refresh",   attr:"refresh", type:"text"},
        ];
        return (
            <div>
                <h3>{I18n.t("Adding RSS Feeds")}</h3>
                <div>
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

                    <Fab
                        onClick={this.addHandler}
                        size="medium"
                        color="primary"
                        aria-label="add">
                        <AddIcon />
                    </Fab>
                </div>
            </div>
        );
    }
}
RssfeedSettingsAdd.propTypes = {
    addData: PropTypes.object,
    onAdd: PropTypes.func,
    onUpdate: PropTypes.func
};
export default withStyles(styles)(RssfeedSettingsAdd);
 