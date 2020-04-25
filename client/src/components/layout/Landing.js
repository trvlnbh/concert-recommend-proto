import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import RecShowList from "../show/Rec-showList";
import ScrollUpButton from "react-scroll-up-button";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: '#F2F2F2',
        },
        ul: {
            margin: 0,
            padding: 0,
        },
        li: {
            listStyle: 'none',
        },
    },
    heroContent: {
        padding: theme.spacing(1, 0, 2),
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
        textAlign: 'center'
    },
    cardHeader: {
        backgroundColor: theme.palette.grey[200],
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },

});

class Landing extends Component {
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="md" component="main" className={classes.heroContent}>
                    <Paper className={classes.mainFeaturedPostContent}>
                        <Typography component="h1" variant="h4" color="inherit" gutterBottom>
                            광고배너
                        </Typography>
                    </Paper>
                </Container>
                <Container maxWidth="lg" component="main">
                    <Typography component="h1" variant="h5" align="left" color="textPrimary" gutterBottom>
                        추천
                    </Typography>
                    <RecShowList />
                </Container>
            </React.Fragment >
        );
    }
}

export default withStyles(styles)(Landing);