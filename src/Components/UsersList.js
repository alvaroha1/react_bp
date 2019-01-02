import React from "react";
// import AddFishForm from "./AddFishForm"
// import EditFishForm from "./EditFishForm";
// import Login from "./Login";
// import PropTypes from "prop-types";
// import base, { firebaseApp } from "../base";
// import firebase from 'firebase';


class UsersList extends React.Component {
//   static propTypes = {
//     fishes: PropTypes.object,
//     updateFish: PropTypes.func,
//     deleteFish: PropTypes.func,
//     loadSampleFishes: PropTypes.func,
//   };

//   state = {
//     uid: null,
//     owner: null,
//   }

//   componentDidMount() {
//     firebase.auth().onAuthStateChanged(user => {
//       if(user) {
//         this.authHandler({ user });
//       }
//     })
//   }

//   authHandler = async authData  => {
//     // 1. Look up the current store in the firebase database
//     const store = await base.fetch(this.props.storeId, { context: this });
//     // 2. Claim it if there is no owner
//     if (!store.owner) {
//       //save it as our own
//       await base.post(`${this.props.storeId}/owner`, {
//         data: authData.user.uid
//       })
//     }
//     // 3. Set the state of the inventory component to reflect the current user
//     this.setState({
//       uid: authData.user.uid,
//       owner: store.owner || authData.user.uid,
//     });
//     console.log(authData);
//   }
//   authenticate = provider => {
//     // hauria de ser algo com
//     //const authProvider = new firebase.auth.GithubAuthProvider();
//     const authProvider = new firebase.auth[`${provider}AuthProvider`]();
//     firebaseApp
//       .auth()
//       .signInWithPopup(authProvider)
//       .then(this.authHandler);
//   };

//   logout = async () => {
//     console.log('Logging out!');
//     await firebase.auth().signOut();
//     this.setState({ uid: null });
//   }

//   render() {
//     const logout = <button onClick={this.logout}>Log Out!</button>;

//     //check if they are logged in
//     if (!this.state.uid) {
//       return <Login authenticate={this.authenticate} />;
//     }

//     //check if they are the owner of the store
//     if (this.state.uid !== this.state.owner) {
//       return <div>
//           <p>Sorry you are not the owner!</p>
//           {logout}
//       </div>
//     }

//     //3 they must be the owner just render the inventory
//     return (
//       <div className="inventory">
//         <h2>Inventory</h2>
//         {logout}
//         {Object.keys(this.props.fishes).map(key => (
//           <EditFishForm 
//             updateFish={this.props.updateFish} 
//             deleteFish={this.props.deleteFish}
//             index={key} 
//             key={key} 
//             fish={this.props.fishes[key]}/>))}
//         <AddFishForm 
//           addFish={this.props.addFish}/>
//         <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
//       </div>
//     );
//   }
// }

render() {
  return <p>userslist</p>
}
}

export default UsersList;
