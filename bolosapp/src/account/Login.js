import React from 'react';
import reactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import '../styles/Login.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            isLoginOpen: true, 
            isRegisterOpen: false
        };
    }

    showRegisterBox(){
        this.setState({isRegisterOpen: true, isLoginOpen: false});
    }

    showLoginBox(){
        this.setState({isLoginOpen:true, isRegisterOpen: false});
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="panel panel-login">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-sm" onClick={this.showLoginBox.bind(this)}>
                                        <a className="active">Login</a>
                                    </div>
                                    <div className="col-sm" onClick={this.showRegisterBox.bind(this)}>
                                        <a className="active">Register</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {this.state.isLoginOpen && <LoginBox/>}
                                {this.state.isRegisterOpen && <RegisterBox/>}
                            </div>
                        </div>
                     </div>
                 </div>
            </div>
        );
    }

}

class LoginBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    submitLogin(e){
        
    }

    render(){
        return(
        <div className="panel-body">
            <div className="d-flex justify-content-center">
                <div className="col-lg-12">
                    <form>
                        <div className="form-group">
                            <label htmlFor="username"></label>
                            <input type="text" name="username" className="login-input" placeholder="Username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"></label>
                            <input type="password" name="password" className="login-input" placeholder="Password"/>
                        </div>
                        <button type="submit" className="form-control btn-login" onClick={this.submitLogin.bind(this)}> Login </button>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

class RegisterBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            errors: []
        };
    }

    showValidationErr(elm, msg){
        this.setState((prevState) => ({errors: [...prevState.errors,{elm, msg}]} ));
    }

    clearValidationErr(elm){
        this.setState((prevState) => {
            let newArr = [];
            for(let err of this.state.errors){
                if(elm != err.elem){
                    newArr.push(err);
                }
            }
            return newArr;
        });
    }


    onUsernameChange(e){
        this.state({username: e.target.value });
    }
    onEmailChange(e){
        this.state({email: e.target.value });
    }
    onPasswordChange(e){
        this.state({password: e.target.value });
    }

    submitRegister(e){
        if(this.state.username == ""){
            return this.showValidationErr("username", "Username cannot be empty");
        }else if(this.state.email == ""){
            return this.showValidationErr("email", "Email cannot be empty");
        }else if(this.state.password == ""){
            return this.showValidationErr("Password", "Password cannot be empty");
        }

    }

    render(){
        let usernameErr = null, passwordErr = null, emailErr = null;

        for(let err of this.state.errors){
            if(err.elm == "username"){
                usernameErr = err.msg;
            }
            if(err.elm == "password"){
                passwordErr = err.msg;
            }
            if(err.elm =="email"){
                emailErr = err.msg;
            }
        }

        return(
            <div className="panel-body">
                <div className="d-flex justify-content-center">
                    <div className="col-lg-12">

                            <div className="form-group">
                                <label htmlFor="username"></label>
                                <input type="text" name="username" className="login-input" placeholder="Username" onChange={this.onUsernameChange.bind(this)}/>
                                <small>{usernameErr ? usernameErr : ""}</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"></label>
                                <input type="password" name="password" className="login-input" placeholder="Password"  onChange={this.onPasswordChange.bind(this)}/>
                                <small>{passwordErr ? passwordErr : ""}</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"></label>
                                <input type="text" name="email" className="login-input" placeholder="Email"  onChange={this.onEmailChange.bind(this)}/>
                                <small>{emailErr ? emailErr : ""}</small>
                            </div>
                            <button type="submit" className="form-control btn-login" onClick={this.submitRegister.bind(this)}> Register </button>
               
                    </div>
                </div>
            </div>
        );
    }
}


export default App;