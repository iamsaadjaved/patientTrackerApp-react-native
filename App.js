import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import axios from 'axios'
import { NativeRouter , Route , Link } from 'react-router-native'
import Signup from "./components/signup/signup"
import Login from "./components/login/login"
import Account from "./components/account/account"
import AddPatient from "./components/patient/patient"
import PatientDetail from "./components/patientDeatail/patientDetail"
import { Provider } from 'react-redux'
import Store from './src/store/store'
// import ProtectedRoute from './components/protectedRoutes/protectedRoute'
import NewAccount from './components/account/newAccount'


export default function App() {

 

  return (
  <Provider store={Store} >
    <NativeRouter>
       <Route exact path="/" component={Login} />
       <Route path="/signup" component={Signup} />
       <Route path="/account" component={Account} />
       <Route path="/addpatient" component={ AddPatient } />
       <Route path="/patientdetail/:id" component={ PatientDetail } />
       <Route path="/new" component={ NewAccount } />
    </NativeRouter>
  </Provider>  
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  input: {
    padding: 10,
    margin: 10,
    borderBottomColor: 'black',
    borderWidth: 1,
    width: '80%'
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center'
  }



});


