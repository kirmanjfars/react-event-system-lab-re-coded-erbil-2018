// Code Keypad Component Here
<<<<<<< HEAD

import React from 'react';

class Keypad extends React.Component {

  enterPass = () => console.log('Entering password...')

  render() {
    return (
        <input  type="password"  onKeyUp={this.enterPass}  />
    )
  }
}

export default Keypad;
=======
import React from 'react';

export default Keypad from React.Component{
  
  render(){
    return(
      <div>
        <input 
          type="password"
          onKeyUp={this.handleInputPassword} 
        />
      </div>
      )
  }
}
>>>>>>> cb900493b4e8b8dd74f683b91d30211c8f0b9fe9
