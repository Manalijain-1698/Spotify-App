import Input from "../UI/Input";
import {useState,useReducer,useEffect} from "react";
import Button from "../UI/Button";
import SpotifyTitle from "../UI/SpotifyTitle";
import styleforLog from "./Login.module.css";


const emailReducer=(state,action)=>{
    if(action.type==="USER_INPUT"){
        return{
            value:action.val,
            isValid:action.val.includes("@") && action.val.includes(".com"),

        };
    }
    if(action.type==="INPUT_BLUR"){
        return{
            value:state.value,
            isValid:state.value.includes("@") && state.value.includes(".com"),

        };
    }

    return {value:"",isValid:false};
}

const passwordReducer=(state,action)=>{
    if(action.type==="USER_INPUT"){
        return{
            value:action.val,
            isValid:action.val.trim().length>=8,

        };
    }
    if(action.type==="INPUT_BLUR"){
        return{
            value:state.value,
            isValid:state.value.trim().length>=8,

        };
    }

    return {value:"",isValid:false};
}







const Login=()=>{
    
     const[formIsValid,setFormIsValid]=useState(false);

     const[loginState,setLoginState]=useState(null);
    
    
     const[emailState,dispatchEmail]=useReducer(emailReducer,{
         value:"",
         isValid:null,
     });
 
     const[passwordState,dispatchPassword]=useReducer(passwordReducer,{
         value:"",
         isValid:null,
     });
 
     
     const{isValid:emailIsvalid}=emailState;
     const{isValid:passwordIsvalid}=passwordState;
 
    const submitHandler = async(event) => {
        event.preventDefault();
        
        if(formIsValid){
            console.log(`${emailState.value}\n${passwordState.value}`);
            const response=await fetch("http://localhost:59794/api/Login/AuthenticateUser/",{
                method: "POST",
                body: JSON.stringify({
                Username: emailState.value,
                Password: passwordState.value,
                
            }),
            headers:{
                "Content-Type": "application/json",
                "Acces-Control-Allow-Origin": "*",
            },
        }).catch((error)=>{
            console.error("Error: ", error);
        });
        if (response.ok) {
            console.log("Login successful");
            setLoginState(true);
          } else {
            console.log("Something went wrong");
            setLoginState(false);
          }

        }

      };
   

   
    useEffect(()=>{
        const identifier=setTimeout(() => {
            console.log("Checking form Validity");
            setFormIsValid(
                emailIsvalid && passwordIsvalid

            );

        }, 500);
        return ()=>{
            console.log("Clean up!!");
            clearTimeout(identifier);
        };
    },[
        emailIsvalid,
        passwordIsvalid,
    ]);

    
    const emailChangeHandler=(event)=>{
        dispatchEmail({type:"USER_INPUT",val:event.target.value});   
    };

    
    const PasswordChangeHandler=(event)=>{
        dispatchPassword({type:"USER_INPUT",val:event.target.value});   
    };

    
    const emailBlurHandler=()=>{
        dispatchEmail({type:"INPUT_BLUR"});
    };

    
    const passwordBlurHandler=()=>{
        dispatchPassword({type:"INPUT_BLUR"});
    };

    



    return(
        <div className={styleforLog.maincontainer}>
            <SpotifyTitle/>
            <br/>
            <h3>
          <b>To continue, login to Spotify.</b>
            </h3>
            <br/>
            <form onSubmit={submitHandler}>
                <Input
                label="Email Address"
                id="email"
                type="email"
                isValid={emailIsvalid}
                value={emailState.value}
                placeholder="Email Address"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                />
                {emailIsvalid === false && (
                <p className={styleforLog.errorMessage}>
                    Please enter a valid email.
                </p>
                )}
                 <Input
                label="Password"
                id="password"
                type="password"
                placeholder="Password"
                isValid={passwordIsvalid}
                value={passwordState.value}
                onChange={PasswordChangeHandler}
                onBlur={passwordBlurHandler}
                />
                {passwordIsvalid ===false && (
                    <p className={styleforLog.errorMessage}>Enter vaild password.</p>
                )}
                <Button id="loginButton" type="submit">LOG IN </Button>
                {loginState ===true && formIsValid && (<p className={styleforLog.successMessage}>Login successful.</p>)}
                {loginState===false && formIsValid &&(<p className={styleforLog.errorMessage}>Something went wrong. Please try again.</p>)}

            </form>
            <br/>
            <hr></hr>
            <br/>
            <p className={styleforLog.linkpara}><b>Don't have an account?</b></p>
            <Button id="signupButton" >SIGN UP FOR SPOTIFY</Button>

        </div>

    );
}

export default Login;