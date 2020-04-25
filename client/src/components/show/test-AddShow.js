import React, { Component } from 'react';
import axios from 'axios';

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export default class CreateShow extends Component {
    constructor(props) {
        super(props);

        this.onChangeShowId = this.onChangeShowId.bind(this);
        this.onChangeShowTitle = this.onChangeShowTitle.bind(this);
        this.onChangeShowDate = this.onChangeShowDate.bind(this);
        this.onChangeShowLocation = this.onChangeShowLocation.bind(this);
        this.onChangeShowSubtitle = this.onChangeShowSubtitle.bind(this);
        this.onChangeShowGenre = this.onChangeShowGenre.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            title: '',
            date: '',
            location: '',
            subtitle: '',
            genre: '',
        }
    }

    onChangeShowId(e) {
        this.setState({
            id: e.target.value
        });
    }

    onChangeShowTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeShowDate(e) {
        this.setState({
            date: e.target.value
        });
    }

    onChangeShowLocation(e) {
        this.setState({
            location: e.target.value
        });
    }

    onChangeShowSubtitle(e) {
        this.setState({
            subtitle: e.target.value
        });
    }

    onChangeShowGenre(e) {
        this.setState({
            genre: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newShow = {
            id: this.state.id,
            title: this.state.title,
            date: this.state.date,
            location: this.state.location,
            subtitle: this.state.subtitle,
            genre: this.state.genre,
        }

        axios.post('/shows/add', newShow)
            .then(res => console.log(res.data));

        this.setState({
            id: '',
            title: '',
            date: '',
            location: '',
            subtitle: '',
            genre: '',
        })
    }

    render() {
        return (
            <div>
                <h3> TEST ADD SHOW </h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <Typography>ID: </Typography>
                        <TextField
                            value={this.state.id}
                            onChange={this.onChangeShowId}
                        />
                    </div>
                    <div>
                        <Typography>Title: </Typography>
                        <TextField
                            value={this.state.title}
                            onChange={this.onChangeShowTitle}
                        />
                    </div>
                    <div>
                        <Typography>Date: </Typography>
                        <TextField
                            value={this.state.date}
                            onChange={this.onChangeShowDate}
                        />
                    </div>
                    <div>
                        <Typography>Location: </Typography>
                        <TextField
                            value={this.state.location}
                            onChange={this.onChangeShowLocation}
                        />
                    </div>
                    <div>
                        <Typography>Subtitle: </Typography>
                        <TextField
                            value={this.state.subtitle}
                            onChange={this.onChangeShowSubtitle}
                        />
                    </div>
                    <div>
                        <Typography>Genre: </Typography>
                        <TextField
                            value={this.state.genre}
                            onChange={this.onChangeShowGenre}
                        />
                    </div>
                    <div>
                        <Button 
                            type="submit" 
                            variant="contained"
                            color="primary"
                        >
                            ADD SHOW
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}