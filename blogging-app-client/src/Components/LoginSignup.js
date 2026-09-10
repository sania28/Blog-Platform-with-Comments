```jsx
import React, { useState, useContext } from "react";
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

    React.useEffect(() => {
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

        function showSnackBar(message) {
            setToOpen(true);
            setErrorMessage(message);
        }

        function onChangeValues(e) {
            setSignUp({
                ...signUp,
                [e.target.name]: e.target.value,
            });
        }

        async function onSignUpSubmit() {
            let isValidated = true;

            const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const strongRegExp = /[#?!@$%^&*-]/;
            const whitespaceRegExp = /\s+/;
            
            const strongPassword =
                signUp.password.match(strongRegExp);
            const whitespace =
                signUp.password.match(whitespaceRegExp);

            if (
                !signUp.username ||
                !signUp.email ||
                !signUp.password
            ) {
                isValidated = false;
                showSnackBar("All fields are required!");
            } else if (!signUp.email.match(validRegex)) {
                isValidated = false;
                showSnackBar("Enter Valid Email");
            } else if (whitespace) {
                isValidated = false;
                showSnackBar(
                    "Whitespaces are not allowed in password"
                );
            } else if (!strongPassword) {
                isValidated = false;
                showSnackBar(
                    "Weak Password, Password length must be greater than 5 and must include any special character"
                );
            }

            if (!isValidated) {
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
        }

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
                        alt="new"
                    />

                    <TextField
                        inputProps={{
                            style: {
                                textTransform: "lowercase",
                            },
                        }}
                        onChange={onChangeValues}
                        required
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        name="username"
                    />

                    <TextField
                        onChange={onChangeValues}
                        required
                        id="outlined-basic1"
                        label="Email Address"
                        variant="outlined"
                        name="email"
                    />

                    <TextField
                        onChange={onChangeValues}
                        required
                        id="outlined-password-input"
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
                    >
                        {isLoading ? (
                            <CircularProgress />
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

        function showSnackBar(message) {
            setToOpen(true);
            setErrorMessage(message);
        }

        function onChangeValues(e) {
            setLoginValues({
                ...logInValues,
                [e.target.name]: e.target.value,
            });
        }

        async function onLoginClick() {
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

                // Store RAW JWT token.
                // createPost.js will add "Bearer " before sending it.
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

                showSnackBar(response.data.msg);

                navigator("/home");
            } catch (e) {
                showSnackBar(
                    e.response?.data?.msg || "Login failed"
                );
            } finally {
                setLoading(false);
            }
        }

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
                        alt="new"
                    />

                    <TextField
                        required
                        id="outlined-basic1"
                        name="email"
                        label="Email Address"
                        variant="outlined"
                        onChange={onChangeValues}
                    />

                    <TextField
                        required
                        id="outlined-password-input"
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
                    >
                        {isLoading ? (
                            <CircularProgress />
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

    function LoginSignupRender() {
        if (flag) {
            return <Login />;
        }

        return <SignUp />;
    }

    return <LoginSignupRender />;
}

export default LoginSignup;
```
