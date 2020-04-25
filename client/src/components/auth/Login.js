import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
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
        alignItems: 'center'
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

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData);
    }

    render() {
        const { errors } = this.state;
        const { classes } = this.props;

        return (
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Paper className={classes.paper}>
                    <div>
                        <Typography component="h1" variant="h5">
                            로그인
                        </Typography>
                        <p>
                            계정이 없으면 <Link component={RouterLink} to="/register">회원가입</Link>
                        </p>
                    </div>
                    <form className={classes.form} noValidate onSubmit={this.onSubmit}>
                        <TextField
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            htmlFor="email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            className={classnames("", {
                                invalid: errors.email || errors.emailnotfound
                            })}
                        />
                        <span className={classes.warntext}>
                            {errors.email}
                            {errors.emailnotfound}
                        </span>
                        <TextField
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            htmlFor="password"
                            type="password"
                            id="password"
                            className={classnames("", {
                                invalid: errors.password || errors.passwordincorrect
                            })}
                        />
                        <span className={classes.warntext}>
                            {errors.password}
                            {errors.passwordincorrect}
                        </span>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            로그인
                        </Button>
                    </form>
                </Paper>
            </Container>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(withStyles(styles)(Login));
