import React, { Component } from 'react';
import { View , Text  , StyleSheet  } from 'react-native';
import { Container, Button , Header, Content, Form, Item, Input, Left, Right , Body , Icon , Title} from 'native-base';
import {  DatePicker } from 'native-base';
import axios from 'axios'

class AddPatient extends Component {
   
    state = { 
        PatientName : '',
        Diseas: '',
        Medication: '',
        cost: '',
        dateOFArrival: new Date()
     }
    
 onSubmitHandler = async () => {
        const { PatientName , Diseas , Medication , cost , dateOFArrival } = this.state
        let data = { 
            PatientName,
            Diseas,
            Medication,
            cost,
            DateOFArrival : dateOFArrival.toString().substr( 4 , 12)
         }
         console.log("submit" , data )
      try {
        const response = await axios.post('https://patient-tracker-app-69.herokuapp.com/patientData' , data)
        console.log("Response" , response.data )
        this.props.history.push('/account') 
      }catch(error){
         console.log(error)
      }

    }
   
 setDate = (newDate) => {
    this.setState({ dateOFArrival: newDate });
  }

    render() { 
        return ( 
          <>
           <View style={styles.screen}>
            <Header style={styles.ScreenHeader} >
                <Left>
                    <Button  onPress={ () => this.props.history.push('/account') }>
                       <Text style={{color: "white"}}>BACK</Text>
                    </Button>
                </Left>
                  <Body>
                     <Text style={{fontSize: 20 , color: 'white'}}>Add Patient</Text>
                  </Body>
                <Right/>
            </Header>
           </View>
           <Container>
            <Content>
              <View>
                <Form>
                    <Item>
                      <Input onChangeText={ (PatientName) => this.setState({ PatientName }) } placeholder="PATIENT NAME" />
                    </Item>
                    <Item>
                      <Input onChangeText={ (Diseas) => this.setState({Diseas}) } placeholder="DISEAS" />
                    </Item>
                    <Item last>
                      <Input onChangeText={ (Medication) => this.setState({Medication}) } placeholder="MEDICATIONS" />
                    </Item>
                    <Item last>
                      <Input onChangeText={ (cost) => this.setState({cost}) } placeholder="COST" />
                    </Item>
                        <DatePicker
                            defaultDate={new Date(2019, 10, 26)}
                            minimumDate={new Date(2019, 10, 26)}
                            maximumDate={new Date(2020, 1, 20)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={ Date.now() }
                            modalTransparent={true}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="SELECT DATE OF ARRIVAL"
                            textStyle={{ color: "black" }}
                            placeHolderTextStyle={{ color: "black" }}
                            onDateChange={this.setDate}
                            disabled={false}
                            />
                            <Button style={styles.button} onPress={this.onSubmitHandler} success >
                                <Text>ADD PATIENT</Text>
                            </Button>
                </Form>
              </View>   
            </Content>
          </Container>
          </>
         );
    }
}


const styles = StyleSheet.create({
    ScreenHeader: {
        marginTop : 26
    },

    button: {
        paddingLeft: 100 ,
        marginTop: 40 ,
        width: '80%',
        marginLeft: 50
    }
})
 
export default AddPatient;