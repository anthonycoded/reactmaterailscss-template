import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { TextField, Button, Divider, Box, InputAdornment } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { userLoginMain } from "../../store/actions/authActions";
import styles from "./style";
import logo from "";

const Login = () => {
  const classes = styles;
  const [showPassword, setshowPassword] = useState(false);
  const noPointer = { cursor: "pointer" };

  const loginState = useSelector((state) => state.user);

  const clientInformation = useSelector((state) => state.client);

  const dispatch = useDispatch();

  const [state, setState] = useState(null);
  const signInClick = () => {
    dispatch(userLoginMain());
    // dispatch(userLoginMainFetch());
  };
  return (
    <div className={classes.loginColumn} style={{ position: "relative" }}>
      <div className={classes.imageContainer}>
        <img src={logo} alt="company" className={classes.logoImage} />
      </div>

      <div className={classes.loginContainer} style={{ zIndex: 1 }}>
        <Box boxShadow={3} className={classes.loginForm}>
          <Box className={classes.loginTop} boxShadow={2}>
            <Link to={"/"} className={`${classes.link} ${classes.selected}`}>
              <span>login</span>
            </Link>
            <Link to={"/register"} className={classes.link}>
              <span>Signup</span>
            </Link>
          </Box>
          <div className={`${classes.loginFormBody} login-form__auth`}>
            <div className={classes.formItem}>
              <TextField label="User ID" className={classes.input} />
            </div>
            <div className={classes.formItem}>
              <TextField
                label="Password"
                className={classes.input}
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {showPassword ? (
                        <VisibilityIcon
                          onClick={() => setshowPassword(false)}
                          color="primary"
                          style={noPointer}
                          className={classes.icon}
                        />
                      ) : (
                        <VisibilityOffIcon
                          onClick={() => setshowPassword(true)}
                          color="primary"
                          style={noPointer}
                          className={classes.icon}
                        />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            {clientInformation?.uiSettings?.messageBoard !== null ? (
              <>
                <div
                  className={classes.formItemClientMessage}
                  dangerouslySetInnerHTML={{
                    __html: clientInformation?.uiSettings?.messageBoard,
                  }}
                ></div>
              </>
            ) : null}
            <div className={classes.formButton}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => signInClick()}
              >
                Sign In
              </Button>
            </div>
            <Divider className={classes.divider} />
            <div className={classes.formHelp}>
              <a
                target="_blank"
                href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"
                rel="noopener noreferrer"
              >
                Contact us
              </a>
              <a
                target="_blank"
                href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"
                rel="noopener noreferrer"
              >
                How Can we help?
              </a>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Login;
