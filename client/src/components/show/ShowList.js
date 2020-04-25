import React, { Component } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import ShowCard from "./ShowCard";
import GenreModel from "../../rec-models/simpleGenreModel";

import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    showColumn: {
        marginBottom: 20
    },
});

export let genreModel = new GenreModel();

class ShowsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shows: [],
            completed: 0
        };
    }

    componentDidMount() {
        this.timer = setInterval(this.progress, 20);
        axios.get('/shows/')
            .then(response => {
                this.setState({ shows: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    progress = () => {
        const { completed } = this.state;
        this.setState({ completed: completed >= 100 ? 0 : completed + 1 })
    }

    render() {
        const { classes } = this.props;
        const { shows } = this.state;

        const showColumns = shows ? shows.map(show => (
            <Grid item className={classes.showColumn} key={show.title} xs={12} sm={6} md={4} lg={3}>
                <ShowCard show={show} genreModel={genreModel} />
            </Grid>
        )) : <CircularProgress variant="determinate" value={this.state.completed} />;

        return (
            <Container maxWidth="lg" component="main">
                <h3>공연</h3>
                <Grid container spacing={5} alignItems="flex-end">
                    {showColumns}
                </Grid>
            </Container>
        );
    }
}

export default withStyles(styles)(ShowsList);