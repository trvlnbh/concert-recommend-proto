import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
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
    button: {
        margin: theme.spacing(1, 0.5),
    },
});

class Navbar extends Component {
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                    <Toolbar className={classes.toolbar} >
                        <Link
                            variant="h5" color="inherit"
                            component={RouterLink}
                            to="/"
                            className={classes.toolbarTitle}
                        >
                            전자상거래 4조
                        </Link>
                        <nav>
                            <Link
                                variant="button" color="textPrimary" href="#"
                                component={RouterLink}
                                to="/show"
                                className={classes.link}
                            >
                                공연
                            </Link>
                        </nav>
                        <Button
                            href="#" color="primary" variant="outlined"
                            component={RouterLink}
                            to="/register"
                            className={classes.button}
                        >
                            회원가입
                        </Button>
                        <Button
                            href="#" color="default" variant="outlined"
                            component={RouterLink}
                            to="/login"
                            className={classes.button}
                        >
                            로그인
                        </Button>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Navbar);