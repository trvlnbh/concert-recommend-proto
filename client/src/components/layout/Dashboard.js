import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";

const styles = theme => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.common.black}`
    },
    toolbar: {
        flexWrap: 'wrap',
        backgroundColor: '#FFFFFF',
        height: 80
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 4),
        paddingLeft: theme.spacing(3),
        borderLeft: `1px solid ${theme.palette.divider}`,
        padding: '0.5em',
    },
    profile: {
        margin: theme.spacing(1, 4),
        padding: '0.5em',
    },
    button: {
        margin: theme.spacing(1, 0.5),
    },
});

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { user } = this.props.auth;
        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Link
                            variant="h5" color="inherit"
                            component={RouterLink}
                            to="/dashboard"
                            className={classes.toolbarTitle}
                        >
                            전자상거래 4조
                        </Link>
                        <nav>
                            <Link
                                variant="button" color="textPrimary" href="#"
                                component={RouterLink}
                                to="/dashboard/show"
                                className={classes.link}
                            >
                                공연
                            </Link>
                        </nav>
                        <h4 className={classes.profile}>
                            <b>" </b> {user.name.split(" ")[0]} <b> "</b>
                        </h4>
                        <Button
                            href="#" color="primary" variant="contained"
                            component={RouterLink}
                            to="/dashboard/test"
                            className={classes.button}
                        >
                            공연 등록하기
                        </Button>
                        <Button
                            href="#" color="default" variant="outlined"
                            onClick={this.onLogoutClick}
                            className={classes.button}
                        >
                            로그아웃
                        </Button>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(withStyles(styles)(Dashboard));
