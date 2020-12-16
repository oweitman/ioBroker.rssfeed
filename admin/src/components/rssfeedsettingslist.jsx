import React from "react";
import { withStyles } from "@material-ui/core/styles";
import I18n from "./../i18n";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";

/**
 * @type {(_theme: Theme) => import("@material-ui/styles").StyleRules}
 */
const styles = () => ({
    root: {
    },
    tablecell: {
        padding: "8px 8px",
    }
});

class RssfeedSettingsList extends React.Component {
    constructor(props) {
        super(props);
        this.delHandler = this.delHandler.bind(this);
        this.edit1Handler = this.edit1Handler.bind(this);
    }
    delHandler(e,rss) {
        this.props.onDel(rss);
    }
    edit1Handler(e,rss) {
        this.props.onEdit1(rss);
    }

    renderListItem(rss) {
        const { classes } = this.props;
        const StyledTableCellActions = withStyles({
            root: {
                "width": "1%",
                "whiteSpace": "nowrap",
                padding: "8px 8px",
            },
        })(TableCell);
        return (
            <TableRow key={rss.name}>
                <TableCell classes={{root:classes.tablecell}} >{rss.name}</TableCell>
                <TableCell classes={{root:classes.tablecell}} >{rss.cat}</TableCell>
                <TableCell classes={{root:classes.tablecell}} >{rss.url}</TableCell>
                <TableCell classes={{root:classes.tablecell}} >{rss.refresh}</TableCell>
                <StyledTableCellActions >
                    <Fab
                        onClick={(e) => this.edit1Handler(e,rss)}
                        size="small"
                        color="primary"
                        aria-label="add">
                        <EditIcon />
                    </Fab>
                    <Fab
                        onClick={(e) => this.delHandler(e,rss)}
                        size="small"
                        color="primary"
                        aria-label="add">
                        <DeleteIcon />
                    </Fab>
                </StyledTableCellActions>
            </TableRow>
        );
    }

    render() {
        const { classes } = this.props;
        const data = this.props.data || {};
        const StyledTableContainer = withStyles({
            root: {
                "width": "50%",
            },
        })(Table);

        return (
            <div>
                <h3>{I18n.t("List RSS Feeds")}</h3>
                <StyledTableContainer component={Paper} style={{maxHeight: 200, overflow: "auto"}}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell classes={{root:classes.tablecell}} ><b>{I18n.t("RSS Name")}</b></TableCell>
                                <TableCell classes={{root:classes.tablecell}}  ><b>{I18n.t("cat")}</b></TableCell>
                                <TableCell classes={{root:classes.tablecell}}  ><b>{I18n.t("url")}</b></TableCell>
                                <TableCell classes={{root:classes.tablecell}}  ><b>{I18n.t("refresh")}</b></TableCell>
                                <TableCell classes={{root:classes.tablecell}}  ><b>{I18n.t("actions")}</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.keys(data).map((key) => data[key]).map((rss) => {
                                return this.renderListItem(rss);
                            })}
                        </TableBody>
                    </Table>
                </StyledTableContainer>
            </div>
        );

    }
}

RssfeedSettingsList.propTypes = {
    onDel: PropTypes.func,
    onEdit1: PropTypes.func,
    data: PropTypes.array,
    classes: PropTypes.object
};

export default withStyles(styles)(RssfeedSettingsList);
 