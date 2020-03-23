import React from 'react';
import { NavLink } from 'react-router-dom';
class Navigation extends React.Component{

    
    render(){
      /*
        const NavItem = props => {
            const pageURI = window.location.pathname+window.location.search
            const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
            const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
            return (
              <li className={liClassName}>
                <a href={props.path} className={aClassName}>
                  {props.name}
                  {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
                </a>
              </li>
            );
          }
          */

        return(
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <a class="navbar-brand" href="#">Bolos Assuncao</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/browse">Browse</NavLink>
                            <NavLink to="/pricing">Pricing</NavLink>
                            <NavLink to="/contact">Contact us</NavLink>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Account 
                                </a>
                            <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                <NavLink class="dropdown-item" to="/login">log in</NavLink>
                                <NavLink class="dropdown-item" to="#">Another action</NavLink>
                                <NavLink class="dropdown-item" to="#">Something else here</NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }



}

/*
class NavDropdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isToggleOn: false
      };
    }
    showDropdown(e) {
      e.preventDefault();
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
    render() {
      const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
      return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false"
            onClick={(e) => {this.showDropdown(e)}}>
            {this.props.name}
          </a>
          <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
            {this.props.children}
          </div>
        </li>
      )
    }
  }
*/
export default Navigation;