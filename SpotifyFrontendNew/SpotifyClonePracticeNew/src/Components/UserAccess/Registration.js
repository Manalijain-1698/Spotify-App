import { useState, useReducer, useEffect } from "react";
import stylesForReg from "./Registration.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import SpotifyTitle from "../UI/SpotifyTitle";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@") && action.val.includes(".com"),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@") && state.value.includes(".com"),
    };
  }
  return { value: "", isValid: false };
};

// const confirmEmailReducer = (state, action) => {
//   if (action.type === "USER_INPUT") {
//     return {
//       value: action.val,
//       isValid: action.val.includes("@") && action.val.includes(".com"),
//     };
//   }
//   if (action.type === "INPUT_BLUR") {
//     return {
//       value: state.value,
//       isValid: state.value.includes("@") && state.value.includes(".com"),
//     };
//   }
//   return { value: "", isValid: false };
// };

const phoneReducer = (state, action) => {
  const pattern = /^[0-9]{10}$/;
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: pattern.test(action.val),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: pattern.test(state.value),
    };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length >= 8,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length >= 8,
    };
  }
  return { value: "", isValid: false };
};

const usernameReducer = (state, action) => {
  const pattern = /^[A-Za-z ]*$/;
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: pattern.test(action.val) && action.val.trim().length > 0,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: pattern.test(state.value) && state.value.trim().length > 0,
    };
  }
  return { value: "", isValid: false };
};

const dobReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 0,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 0,
    };
  }
  return { value: "", isValid: false };
};

const Registration = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [registrationState, setRegistrationState] = useState(null);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const confirmEmailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
      return {
        value: action.val,
        isValid:
          action.val === emailState.value && action.val.trim().length > 0,
      };
    }
    if (action.type === "INPUT_BLUR") {
      return {
        value: state.value,
        isValid:
          state.value === emailState.value && state.value.trim().length > 0,
      };
    }
    return { value: "", isValid: false };
  };

  const [confirmemailState, dispatchConfirmEmailState] = useReducer(
    confirmEmailReducer,
    { value: "", isValid: null }
  );
  const [phoneState, dispatchPhoneState] = useReducer(phoneReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  const [usernameState, dispatchusernameState] = useReducer(usernameReducer, {
    value: "",
    isValid: null,
  });
  const [dobState, dispatchDobState] = useReducer(dobReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsvalid } = emailState;
  const { isValid: confirmEmailIsvalid } = confirmemailState;
  const { isValid: phoneIsvalid } = phoneState;
  const { isValid: passwordIsvalid } = passwordState;
  const { isValid: usernameIsvalid } = usernameState;
  const { isValid: dobIsvalid } = dobState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form Validity");
      setFormIsValid(
        emailIsvalid &&
          confirmEmailIsvalid &&
          phoneIsvalid &&
          passwordIsvalid &&
          usernameIsvalid &&
          dobIsvalid
      );
    }, 500);
    return () => {
      console.log("Clean up !!");
      clearTimeout(identifier);
    };
  }, [
    emailIsvalid,
    confirmEmailIsvalid,
    phoneIsvalid,
    passwordIsvalid,
    usernameIsvalid,
    dobIsvalid,
  ]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const confirmEmailChangeHandler = (event) => {
    dispatchConfirmEmailState({ type: "USER_INPUT", val: event.target.value });
  };

  const phoneChangeHandler = (event) => {
    dispatchPhoneState({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const usernameChangeHandler = (event) => {
    dispatchusernameState({ type: "USER_INPUT", val: event.target.value });
  };

  const dobChangeHandler = (event) => {
    dispatchDobState({ type: "USER_INPUT", val: event.target.value });
  };

  const emailBlurHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const confirmEmailBlurHandler = () => {
    dispatchConfirmEmailState({ type: "INPUT_BLUR" });
  };

  const phoneBlurHandler = () => {
    dispatchPhoneState({ type: "INPUT_BLUR" });
  };

  const passwordBlurHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const usernameBlurHandler = () => {
    dispatchusernameState({ type: "INPUT_BLUR" });
  };

  const dobBlurHandler = () => {
    dispatchDobState({ type: "INPUT_BLUR" });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (formIsValid) {
      console.log(
        `${emailState.value}\n${confirmemailState.value}\n${phoneState.value}\n${passwordState.value}\n${usernameState.value}\n${dobState.value}`
      );
      const response = await fetch("http://localhost:17846/api/User/", {
        // mode: "no-cors",
        method: "POST",
        body: JSON.stringify({
          Username: usernameState.value,
          Useremail: emailState.value,
          Phonenumber: phoneState.value,
          Password: passwordState.value,
          Dob: dobState.value,
        }),
        headers: {
          "Content-Type": "application/json",
          "Acces-Control-Allow-Origin": "*",
        },
      }).catch((error) => {
        console.error("Error: ", error);
      });
      if (response.ok) {
        console.log("Registration successful");
        setRegistrationState(true);
      } else {
        console.log("Something went wrong");
        setRegistrationState(false);
      }
    }
  };
  return (
    <div className={stylesForReg.mainContainer}>
      <SpotifyTitle />
      <br />
      <h1>
        <b>Sign up for free to start listening.</b>
      </h1>
      <form onSubmit={submitHandler}>
        <Input
          label="What's your email?"
          id="email"
          type="email"
          placeholder="Enter your email."
          isValid={emailIsvalid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailIsvalid === false && (
          <p className={stylesForReg.errorMessage}>
            Please enter a valid email.
          </p>
        )}
        <Input
          label="Confirm your email"
          id="confirmEmail"
          type="email"
          value={confirmemailState.value}
          isValid={confirmEmailIsvalid}
          placeholder="Enter your email again."
          onChange={confirmEmailChangeHandler}
          onBlur={confirmEmailBlurHandler}
        />
        {confirmEmailIsvalid === false && (
          <p className={stylesForReg.errorMessage}>The emails do not match.</p>
        )}
        <Input
          label="What's your phone number?"
          id="phnumber"
          type="text"
          isValid={phoneIsvalid}
          value={phoneState.value}
          placeholder="Enter your phone number."
          onChange={phoneChangeHandler}
          onBlur={phoneBlurHandler}
        />
        {phoneIsvalid === false && (
          <p className={stylesForReg.errorMessage}>
            Please enter a valid phone number.
          </p>
        )}
        <Input
          label="Create a password"
          id="password"
          type="password"
          isValid={passwordIsvalid}
          value={passwordState.value}
          placeholder="Create a password."
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
        {passwordIsvalid === false && (
          <p className={stylesForReg.errorMessage}>
            Please enter a password containing more than 8 characters.
          </p>
        )}
        <Input
          label="What should we call you?"
          id="username"
          type="text"
          isValid={usernameIsvalid}
          value={usernameState.value}
          placeholder="Enter a profile name."
          onChange={usernameChangeHandler}
          onBlur={usernameBlurHandler}
        />
        {usernameIsvalid === false && (
          <p className={stylesForReg.errorMessage}>
            Please enter a valid name.
          </p>
        )}
        <Input
          label="What's your date of birth?"
          id="dob"
          type="date"
          placeholder="Enter your date of birth."
          isValid={dobIsvalid}
          value={dobState.value}
          onChange={dobChangeHandler}
          onBlur={dobBlurHandler}
        />
        {dobIsvalid === false && (
          <p className={stylesForReg.errorMessage}>
            Please select a valid date of birth.
          </p>
        )}
        <Button id="signupButton" type="submit">
          Sign up
        </Button>
        {registrationState === true && formIsValid && (
          <p className={stylesForReg.successMessage}>
            Registration successfull.
          </p>
        )}
        {registrationState === false && formIsValid && (
          <p className={stylesForReg.errorMessage}>
            Something went wrong. Please try again.
          </p>
        )}
      </form>
      <p className={stylesForReg.loginLink}>
        Have an account? <a href="">Log in</a>
      </p>
    </div>
  );
};

export default Registration;
