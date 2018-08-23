import React from 'react';

const Navigation = ({ onRouteChange, isSignIn }) => {
    if (isSignIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('SignIn')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
          <p onClick={() => onRouteChange('SignUp')} className='f3 link dim black underline pa3 pointer'>Sign Up</p>
        </nav>
      );
    }
}
export default Navigation;
