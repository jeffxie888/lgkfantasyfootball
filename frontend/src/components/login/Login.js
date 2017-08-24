import React, { Component} from 'react'  
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form'  
import { connect } from 'react-redux'  
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import LGK from '../../lgklogo.png';
import Messages from '../notifications/Messages'  
import Errors from '../notifications/Errors'

import loginRequest from './actions'

// If you were testing, you'd want to export this component
// so that you can test your custom made component and not
// test whether or not Redux and Redux Form are doing their jobs
class Login extends Component {
  constructor(props) {
      super(props);
      this.submit = this.submit.bind(this);
  }  
  // Pass the correct proptypes in for validation
  static propTypes = {
    handleSubmit: PropTypes.func,
    loginRequest: PropTypes.func,
    login: PropTypes.shape({
      requesting: PropTypes.bool,
      successful: PropTypes.bool,
      messages: PropTypes.array,
      errors: PropTypes.array,
    }),
  }

  // Remember, Redux Form passes the form values to our handler
  // In this case it will be an object with `email` and `password`
  submit = (values) => {
    this.props.loginRequest(values)
  }

  render () {
    const {
      handleSubmit, // remember, Redux Form injects this into our props
      login: {
        requesting,
        successful,
        messages,
        errors,
      },
    } = this.props

    return (
      <div className="login">
        <form className="widget-form" onSubmit={handleSubmit(this.submit)}>
          <h1>
            <img src={LGK} alt="logo" />  
          </h1>
          <label htmlFor="email">Email</label>
          {/*
            Our Redux Form Field components that bind email and password
            to our Redux state's form -> login piece of state.
          */}
          <Field
            name="email"
            type="text"
            id="email"
            className="email"
            component="input"
          />
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            id="password"
            className="password"
            component="input"
          />
          <button className="btn btn-lg btn-block" action="submit">LOGIN</button>
        </form>
        <div className="auth-messages">
          {/* As in the signup, we're just using the message and error helpers */}
          {!requesting && !!errors.length && (
            <Errors message="Failure to login due to:" errors={errors} />
          )}
          {!requesting && !!messages.length && (
            <Messages messages={messages} />
          )}
          {requesting && <div>Logging in...</div>}
          {!requesting && !successful && (
            <Link to="/signup">Need to Signup? Click Here »</Link>
          )}
        </div>
      </div>
    )
  }
}

// Grab only the piece of state we need
const mapStateToProps = state => ({  
  login: state.login,
})

// make Redux state piece of `login` and our action `loginRequest`
// available in this.props within our component
const connected = withRouter(connect(mapStateToProps, { loginRequest })(Login))

// in our Redux's state, this form will be available in 'form.login'
const formed = reduxForm({  
  form: 'login',
})(connected)

// Export our well formed login component
export default formed






















// import React, { Component } from 'react';
// import { createStyleSheet, withStyles } from 'material-ui/styles';
// import LGK from '../../lgklogo.png';
// import Teams from '../mainview/Teams';
// import { Route, Redirect } from 'react-router';
// import Signup from '../signup/Signup';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { Form,
//         FormControl,
//         FormGroup,
//         Col, 
//         ControlLabel,
//         Checkbox,
//         Button } from 'react-bootstrap';
// import TextField from 'material-ui/TextField';
// import { store } from '../../store';
// import { getUserList } from '../mainview/actions';

// const styleSheet = createStyleSheet(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: '100%',
//   },
// }));

// class Login extends Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             username: '',
//             password: '',
//             isLoggedIn: false,
//             signedUp: false
//         };

//         this.mainPage = this.mainPage.bind(this);
//         this.signupPage = this.signupPage.bind(this);
//         this.validateForm = this.validateForm.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     validateForm() {
//         return this.state.username.length > 0
//             && this.state.password.length > 0;
//     }

//     mainPage() {
//         this.setState({
//             isLoggedIn: true
//         });
//         store.dispatch(getUserList());
//         console.log("Is Logged in = ", this.state.isLoggedIn)
//     }

//     signupPage() {
//         this.setState({
//             isSignedUp: true
//         });
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//     }

//     handleChange = (event) => {
//         this.setState({
//             [event.target.id]: event.target.value
//         });
//     }

//     render() {
//         const classes = this.props.classes;

//         var loginForm = (
//             <MuiThemeProvider>
//                 <div >
//                     {/* <form onSubmit={this.handleSubmit}> */}
//                         <Form className="form-signin" horizontal onSubmit={this.handleSubmit}> 
//                             <FormGroup controlId="username">
//                                 <img src={LGK} alt="logo" /> 
//                                 <FormControl 
//                                     autoFocus 
//                                     /* className="form-control"  */
//                                     type="email" 
//                                     placeholder="Email"
//                                     value={this.state.username}
//                                     onChange={this.handleChange} />
//                             </FormGroup>

//                             <FormGroup controlId="password">
//                                 <FormControl
//                                     /* className="form-control"  */
//                                     type="password" 
//                                     placeholder="Password"
//                                     value={this.state.password}
//                                     onChange={this.handleChange} />
//                             </FormGroup>

//                             <FormGroup>
//                                 <Checkbox>Remember me</Checkbox>
//                             </FormGroup>

//                             <FormGroup>
//                                 <Button 
//                                     className="btn btn-lg btn-primary btn-block" 
//                                     onClick={this.mainPage} 
//                                     type="submit" 
//                                     disabled={ ! this.validateForm() } >
//                                     Sign in
//                                 </Button>            
//                             </FormGroup>
                            
//                             <FormGroup>
//                                 <Button className="btn btn-lg btn-block" onClick={this.signupPage}>
//                                 Sign Up
//                                 </Button>            
//                             </FormGroup> 
//                         </Form> 
//                     {/* </form>  */}
//                 </div>
//             </MuiThemeProvider>
//         );

//         return(
//             <div>
//                 { this.state.isSignedUp ? <Redirect to="/signup"/> : null }
//                 { this.state.isLoggedIn ? <Redirect to="/"/> : loginForm }
//             </div>
//         );
//     }
// }

// export default withStyles(styleSheet)(Login);