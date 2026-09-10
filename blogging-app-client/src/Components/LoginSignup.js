```jsx
import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import Button from "@mui/material/Button";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import { Alert, Snackbar } from "@mui/material";
import { DataContext } from "./context/dataProvider";
import { useNavigate } from "react-router-dom";
import blog_img from "./images/blogimg.png";

function LoginSignup() {
    const navigator = useNavigate();
    const { setAccount } = useContext(DataContext);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            navigator("/home");
        }
    }, [navigator]);

    function SignUp() {
        const [toOpen, setToOpen] = useState(false);
        const [errorMessage, setErrorMessage] = useState("");
        const [isLoading, setLoading] = useState(false);

        const [signUp, setSignUp] = useState({
            username: "",
            email: "",
            password: "",
        });

        const showSnackBar = (message) => {
            setErrorMessage(message);
            setToOpen(true);
        };

        const onChangeValues = (e) => {
            setSignUp((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
            }));
        };

        const onSignUpSubmit = async () => {
            const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const strongRegExp = /[#?!@$%^&*-]/;
            const whitespaceRegExp = /\s+/;

            if (!signUp.username || !signUp.email || !signUp.password) {
                showSnackBar("All fields are required!");
                return;
            }

            if (!validRegex.test(signUp.email)) {
                showSnackBar("Enter Valid Email");
                return;
            }

            if (whitespaceRegExp.test(signUp.password)) {
                showSnackBar("Whitespaces are not allowed in password");
                return;
            }

            if (signUp.password.length <= 5 || !strongRegExp.test(signUp.password)) {
                showSnackBar(
                    "Weak Password, Password length must be greater than 5 and must include any special character"
                );
                return;
            }

            setLoading(true);

            try {
                const response = await axios.post(
                    "https://blog-platform-backend-zt3t.onrender.com/signup",
                    signUp,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                setAccount(response.data.username);
                setFlag(true);
                showSnackBar("Registration successful");
            } catch (e) {
                showSnackBar(
                    e.response?.data?.msg || "Signup failed"
                );
            } finally {
                setLoading(false);
            }
        };

        return (
            <div className="signup-container">
                <Snackbar
                    open={toOpen}
                    autoHideDuration={6000}
                    onClose={() => setToOpen(false)}
                >
                    <Alert
                        onClose={() => setToOpen(false)}
                        severity="error"
                        sx={{ width: "100%" }}
                    >
                        {errorMessage}
                    </Alert>
                </Snackbar>

                <div className="signup-form">
                    <img
                        src={blog_img}
                        className="blog-img"
                        alt="Blog"
                    />

                    <TextField
                        inputProps={{
                            style: {
                                textTransform: "lowercase",
                            },
                        }}
                        onChange={onChangeValues}
                        required
                        label="Username"
                        variant="outlined"
                        name="username"
                    />

                    <TextField
                        onChange={onChangeValues}
                        required
                        label="Email Address"
                        variant="outlined"
                        name="email"
                    />

                    <TextField
                        onChange={onChangeValues}
                        required
                        label="Password"
                        type="password"
                        variant="outlined"
                        name="password"
                    />

                    <Button
                        className="signup-button"
                        color="success"
                        onClick={onSignUpSubmit}
                        variant="contained"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <CircularProgress size={24} />
                        ) : (
                            "Register"
                        )}
                    </Button>

                    <p className="app-st">
                        Already a User?{" "}
                        <b
                            onClick={() => setFlag(true)}
                            style={{ cursor: "pointer" }}
                        >
                            Login
                        </b>
                    </p>
                </div>
            </div>
        );
    }

    function Login() {
        const [toOpen, setToOpen] = useState(false);
        const [errorMessage, setErrorMessage] = useState("");
        const [isLoading, setLoading] = useState(false);

        const [logInValues, setLoginValues] = useState({
            email: "",
            password: "",
        });

        const showSnackBar = (message) => {
            setErrorMessage(message);
            setToOpen(true);
        };

        const onChangeValues = (e) => {
            setLoginValues((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
            }));
        };

        const onLoginClick = async () => {
            if (!logInValues.email || !logInValues.password) {
                showSnackBar("Email and password are required!");
                return;
            }

            try {
                setLoading(true);

                const response = await axios.post(
                    "https://blog-platform-backend-zt3t.onrender.com/login",
                    logInValues,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                localStorage.setItem(
                    "accessToken",
                    response.data.accessToken
                );

                localStorage.setItem(
                    "username",
                    response.data.username
                );

                localStorage.setItem(
                    "refreshToken",
                    response.data.refreshToken
                );

                setAccount({
                    username: response.data.username,
                });

                navigator("/home");
            } catch (e) {
                showSnackBar(
                    e.response?.data?.msg || "Login failed"
                );
            } finally {
                setLoading(false);
            }
        };

        return (
            <div className="signup-container">
                <Snackbar
                    open={toOpen}
                    autoHideDuration={6000}
                    onClose={() => setToOpen(false)}
                >
                    <Alert
                        onClose={() => setToOpen(false)}
                        severity="error"
                        sx={{ width: "100%" }}
                    >
                        {errorMessage}
                    </Alert>
                </Snackbar>

                <div className="signup-form">
                    <img
                        src={blog_img}
                        className="blog-img"
                        alt="Blog"
                    />

                    <TextField
                        required
                        name="email"
                        label="Email Address"
                        variant="outlined"
                        onChange={onChangeValues}
                    />

                    <TextField
                        required
                        name="password"
                        label="Password"
                        type="password"
                        onChange={onChangeValues}
                        variant="outlined"
                    />

                    <Button
                        className="signup-button"
                        color="success"
                        onClick={onLoginClick}
                        variant="contained"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <CircularProgress size={24} />
                        ) : (
                            "Login"
                        )}
                    </Button>

                    <p className="app-st">
                        New to BlogNest?{" "}
                        <b
                            onClick={() => setFlag(false)}
                            style={{ cursor: "pointer" }}
                        >
                            Create Account
                        </b>
                    </p>
                </div>
            </div>
        );
    }

    return flag ? <Login /> : <SignUp />;
}

export default LoginSignup;
```
