//import liraries 
import React, { Component } from 'react';
import firebase from 'firebase'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import LoginForm from './LoginForm';
import Articles from './Articles';
import BG from '../images/bg.png'
import Loading from './Loading'


// create a component
class App extends Component{
 
  state={
    loggedIn:null
  }

  componentDidMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyAMKBsvQetF5JZrxVMZXmOrhp_HgVTiU7k",
      authDomain: "login-60196.firebaseapp.com",
      databaseURL: "https://login-60196.firebaseio.com",
      projectId: "login-60196",
      storageBucket: "login-60196.appspot.com",
      messagingSenderId: "727604520353",
      appId: "1:727604520353:web:daf8de053807c80d3c97e0",
      measurementId: "G-7NDSPWM5PD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
     firebase.auth().onAuthStateChanged(user => {
          if(user){
             this.setState({
               loggedIn:true
             })
          }else{
            this.setState({
              loggedIn:false
            })
          }
     })

   
  }


  renderContent = () =>{
    switch(this.state.loggedIn){
      case false:
        return <ImageBackground style={styles.container} source={BG} >
                  <LoginForm/>
               </ImageBackground>

        
      case true:
           return <Articles/>

           default:
             return <Loading/>


    }
  }

  render(){
    return (
      <View style={styles.container}>
       {this.renderContent()}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height:'100%',
    width:'100%'
 
  
  },
});

//make this component available to the app
export default App;
