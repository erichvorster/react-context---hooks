import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  //Static contentType can only be used inside class based components and not functional components
  static contextType = ThemeContext;

  render() { 
    
    const {isLightTheme, light, dark} = this.context;
    const theme = isLightTheme ? light : dark;

    return ( 
      <nav style={{background: theme.ui, color:theme.syntax}}>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}
 
export default Navbar;

//Alternative to "static contextType" is to use a consumer - in short the opposite of a provider
//This method can also be used inside class based components
//The advantage of using this method is that you can consume multiple contexts in one component
//With "static contextType" you can only consume one context

// return (
//   <ThemeContext.Consumer>{(context) => {
//     const {isLightTheme, light, dark} = context;
//     const theme = isLightTheme ? light : dark;
//     return(
//     <nav style={{background: theme.ui, color:theme.syntax}}>
//       <h1>Context App</h1>
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//     )
//   }}</ThemeContext.Consumer>
// )