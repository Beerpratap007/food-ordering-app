import React from "react";

class UserClass extends React.Component{//As soon as as this UserClass loaded the constructor will call and then this.state variable is called after that render() wiil call with their default values(React updated with sum dummy data) Now our ComponentDidMount will call api and this.setState() will call and now Update phase will call .

  //By using the super constructor with a props argument, the component is able to inherit the properties of the parent component and also access the new props that have been passed in
  constructor(props) {
    super(props);//

    this.state = {
      userInfo: {
        name: 'Dummy Name',
        location: 'Dummy Location',
        avatar_url: 'https://avatars.githubusercontent.com/u/154552641?v=4'
      }
    }

    console.log(this.props.name+' '+ 'Child Constructor');
  }

  async componentDidMount() {
    console.log(this.props.name+' '+ 'Child Component DidMount');
    // Make here api call
    const data = await fetch('https://api.github.com/users/beerpratap007');
    const userData = await data.json();
    this.setState({
      userInfo: userData
    });
    console.log('userData', userData);
  }

  componentDidUpdate(PrevProps, PrevState) {//This will take argumants PrevProps, PrevState to check after that will update
    console.log('Component Did Update');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

  render(){
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(this.props.name+' '+ 'Child Render');
    console.log('this.state.userInfo', this.state.userInfo);
    return(
      <div className="user-details">
        <img src={avatar_url} />
        <div>
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h4>{avatar_url}</h4>
        </div>
      </div>
    )
  }
}
export default UserClass;

