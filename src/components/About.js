import React from 'react';
import UserClass from './UserClass';
import User from './User';


class About extends React.Component{
  constructor() {
    super();
    console.log('Parent Constructor');
  }

  componentDidMount() {
    console.log('Parent Component DidMount');
    // Make here api call
  }

  render() {
    console.log('Parent Render');
    return (
      <div className='about-page'>
        <h1>About Us</h1> <br />
        <User name="Beer Prata Singh - Functional Component" location="UP"/>
        <br />
        <UserClass name="Beer Prata Singh - ClassComponent" location="Mumbai" />
        <UserClass name="Biru Singh - ClassComponent" location="Mumbai" />
      </div>
    )
  }
}

// Step 1: Parent Constructor
// Step 2: Parent Render
  // Step 3: Name 1 Child Constructor
  // Step 4: Name 1 Child Render

  // Step 5: Name 2 Child Constructor
  // Step 6: Name 2 Child Render

  //DOM Updated - In a Single Batch
  // Step 7: Name 1 Child ComponetDidMount
  // Step 8: Name 2 Child ComponetDidMount

// Step 9: Parent ComponentDidMount

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1> <br />
//       <User name="Beer Prata Singh - Functional Component" location="UP"/>
//       <br />
//       <UserClass name="Beer Prata Singh - ClassComponent" location="Mumbai" />
//     </div>
//   )
// }

export default About
