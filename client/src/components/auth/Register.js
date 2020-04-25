import React, { Component } from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    '@global': {
        body: {
            backgroundImage: `url(${"/client/public/auth-background.jpg"})`
        },
    },
    paper: {
        backgroundColor: 'rgba(242, 242, 242, 0.7)',
        padding: theme.spacing(3),
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    warntext: {
        color: 'red',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        this.props.registerUser(newUser, this.props.history);
    };

    render() {
        const { errors } = this.state;
        const { classes } = this.props;

        return (
            <Container component="main" maxWidth="sm">
                <Paper className={classes.paper}>
                    <div>
                        <Typography component="h1" variant="h5">
                            회원가입
                        </Typography>
                        <p>
                            이미 계정이 있으면 <Link component={RouterLink} to="/login">로그인</Link>
                        </p>
                    </div>
                    <form className={classes.form} noValidate onSubmit={this.onSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    error={errors.name}
                                    autoComplete="name"
                                    name="name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    htmlFor="name"
                                    autoFocus
                                    className={classnames("", {
                                        invalid: errors.name
                                    })}
                                />
                                <span className={classes.warntext}>{errors.name}</span>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    htmlFor="email"
                                    name="email"
                                    className={classnames("", {
                                        invalid: errors.email
                                    })}
                                />
                                <span className={classes.warntext}>{errors.email}</span>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    htmlFor="password"
                                    type="password"
                                    id="password"
                                    className={classnames("", {
                                        invalid: errors.password
                                    })}
                                />
                                <span className={classes.warntext}>{errors.password}</span>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password2"
                                    label="Confirm Password"
                                    htmlFor="password2"
                                    type="password"
                                    id="password2"
                                    className={classnames("", {
                                        invalid: errors.password2
                                    })}
                                />
                                <span className={classes.warntext}>{errors.password2}</span>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            가입하기
                        </Button>
                    </form>
                </Paper>
            </Container>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(withStyles(styles)(Register)));