import React, {Component} from 'react';
import {View, StyleSheet, Text , ScrollView} from 'react-native';
import {AsyncStorage} from '@react-native-community/async-storage';
import axios from 'axios';
import {FlatList} from 'react-native';
import {Form, Item, Input, Spinner} from 'native-base';
import {connect} from 'react-redux';
import PatientMiddleware from '../../src/store/middleware/patientMiddleware';
import {ListItem} from 'react-native-elements';
import {Button as ReactButton} from 'react-native-elements';
import LoginAction from '../../src/store/Actions/loginAction'

class Account extends Component {
  state = {
    patients: [],
    fullData: [],
    query: '',
    loader : false,
    username : ''
  };



  logout = async () => {
    
    try {
      this.props.history.push('/');
      // await AsyncStorage.removeItem("token")
      
    }catch(error){
      console.log(error)
    }
  };

  async componentDidMount() {
      
  }

  static getDerivedStateFromProps(props , state){
   
    return {
       loader: props.loader ,
       username : props.username,
    }
  }

  onSearchChangeText = text => {
    const formatQuery = text;
    const data = this.state.fullData.filter(patient => {
      return this.contain(patient, formatQuery);
    });
    this.setState({query: formatQuery, patients: data});
  };

  contain = ({PatientName, DateOFArrival}, query) => {
    if (PatientName.includes(query) || DateOFArrival.includes(query)) {
      return true;
    }

    return false;
  };

  DeletePatient = async id => {
    this.setState({
      patients: this.state.patients.filter(el => el._id !== id),
    });

    await axios.delete('http://192.168.0.110:5000/patientData/' + id);
  };




  render() {
    return (
      <View>
       <View style={ {width: 100} }>
         <ReactButton title="logout" onPress={this.logout} />
       </View>  
        <Form>
            { this.state.loader ? ( <Spinner color="Red" /> ) : ( <Text style={{fontSize: 20 , fontStyle : 'italic' , marginLeft: 80 , marginTop: 30}}>welcome Docter {this.state.username} </Text> ) } 
            <View style={styles.button} >
                    <ReactButton
                    title="Add Patient"
                    onPress={() => this.props.history.push('/addpatient')}
                    />
            </View>
        </Form>
              <View style={{marginVertical: 50 , width: 200 , marginLeft: 80} }>
                <ReactButton title="Patients List" onPress={() => this.props.history.push('/new')}/>
               
              </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
  button: {
    width : 150,
    marginLeft: 100,
    marginTop: 50,
    
    
  },
});

const mapStateToProps = state => {
  return {
    patients: state.patients.patients,
    loader: state.login.isLoading ,
    username: state.login.username

  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(PatientMiddleware.getData()),
    logout: () => dispatch( LoginAction.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
