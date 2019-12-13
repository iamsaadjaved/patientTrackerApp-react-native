import React, { Component } from 'react';
import { View , FlatList } from 'react-native'
import axios from 'axios'
import {ListItem , Button as ReactButton} from 'react-native-elements';
import {Form, Item, Input, Spinner} from 'native-base';




class NewAccount extends Component {
    state = { 
        patients: [],
        fullData : [],
        isLoading: true
     }


     
   async componentDidMount() {
        const response = await axios.get('https://patient-tracker-app-69.herokuapp.com/patientData')
        this.setState({patients: response.data , fullData: response.data , isLoading: false})
    }

    contain = ({PatientName, DateOFArrival}, query) => {
        if (PatientName.includes(query) || DateOFArrival.includes(query)) {
          return true;
        }}

    onSearchChangeText = text => {
        const formatQuery = text;
        const data = this.state.fullData.filter(patient => {
            return this.contain(patient, formatQuery);
        });
        this.setState({query: formatQuery, patients: data});
        };
  
          

    render() { 
        return ( 
               <View>
                   <ReactButton title="back" onPress={() => this.props.history.push('/account')} />
                  <Item>
                        <Input
                        onChangeText={this.onSearchChangeText}
                        placeholder="Search Patient by name or Date"
                        />
                </Item>
                { this.state.isLoading ? ( <Spinner color="Red" /> ) : (
                    <FlatList
                    keyExtractor={item => item._id}
                    data={this.state.patients}
                    renderItem={itemData => (
                        <ListItem onPress={() => this.props.history.push('/patientDetail/' + itemData.item._id) }
                        title={'Patient Name : ' + itemData.item.PatientName}
                        subtitle={"Appointment: " + itemData.item.DateOFArrival}
                        bottomDivider
                        />
                        )}
                    />

                ) }
            </View>
         );
    }
}

export default NewAccount;