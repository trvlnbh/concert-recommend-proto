import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { labelTransform, genreIndexInitial } from "../../rec-models/onehotEncode";

import Backdrop from "@material-ui/core/Backdrop"
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
    cardMedia: {
        height: 300,
        overflow: 'hidden'
    },
    card: {
        cursor: 'pointer',
        maxHeight: 550,
        overflow: 'hidden'
    },
    bgImage: {
        width: '100%'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalMedia: {
        maxHeight: 400
    },
    paper: {
        backgroundColor: '#f5f5f5',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: 1000
    },
    closeButton: {
        marginLeft: 550
    },
    modalButton: {
        margin: theme.spacing(1, 0, 1),
        width: 250
    },
    modalLine: {
        margin: theme.spacing(1, 0, 1)
    }
});

const io = new IntersectionObserver(
    entries => entries.forEach(this.onIntersecion),
    {
        threshold: 0.2
    }
);

class ShowCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            eval: undefined,
            seen: false
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    onLikeClick = (genreStr, val) => {
        const genreSplit = genreStr.split(',');
        const genreOnehot = labelTransform(genreSplit);
        genreIndexInitial();
        console.log(genreOnehot, val);
        this.props.genreModel.fit([genreOnehot], [[val]]);
        this.eval = this.props.show.id;
        console.log(this.props.genreModel.predict([genreOnehot]));
    };

    handleOpen() {
        this.setState({
            open: true
        });
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

    render() {
        const { classes } = this.props;
        const { show } = this.props;

        return (
            <div>
                <Card
                    className={classes.card}
                    onClick={() => this.handleOpen()}
                >
                    <CardActionArea>
                        <CardMedia className={classes.cardMedia}>
                            <img className={classes.bgImage} src={`/show_poster/${show.id}.png`} />
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h6">
                                {show.title.length > 13
                                    ? show.title.substring(0, 12) + "..."
                                    : show.title }
                            </Typography>
                            <Typography gutterBottom variant="subtitle2">
                                {show.date}
                            </Typography>
                            <Typography gutterBottom variant="subtitle2">
                                {show.location}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Modal
                    className={classes.modal}
                    open={this.state.open}
                    onClose={this.handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.state.open}>
                        <div className={classes.paper}>
                            <Grid container spacing={7}>
                                <Grid item xs={12} sm={4}>
                                    <img gclassName={classes.modalMedia} src={`/show_poster/${show.id}.png`} />
                                    <Button
                                        variant="outlined" color="inherit"
                                        className={classes.modalButton}
                                    >
                                        예매하기
                                    </Button>
                                    <Button
                                        variant="outlined" color="inherit"
                                        className={classes.modalButton}
                                        onClick={() => this.onLikeClick(show.genre, 1)}
                                    >
                                        좋아요❤
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <span className={classes.closeButton}>
                                        <IconButton onClick={this.handleClose}>
                                            <CloseIcon />
                                        </IconButton>
                                    </span>
                                    <div>
                                        <Typography gutterBottom variant="h5">
                                            {show.title}
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1">
                                            일시: {show.date}
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1">
                                            장소: {show.location}
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1">
                                            장르: {show.genre}
                                        </Typography>
                                    </div>
                                    <Divider variant="middle" className={classes.modalLine}/>
                                    <Typography gutterBottom variant="subtitle1" color="textSecondary">
                                        {show.subtitle}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    }
}

export default withStyles(styles)(ShowCard);