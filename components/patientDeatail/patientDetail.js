import React , { Component } from 'react';
import axios from 'axios'
import { StyleSheet } from 'react-native'

import { Container, Header, Content, Card, CardItem, Body, Text , Icon , Left , Right , Button } from 'native-base';


class PatientData extends Component {
    state = { patient : {} }

   async componentDidMount() {
       const patient = await axios.get('https://patient-tracker-app-69.herokuapp.com/patientDetail/'+this.props.match.params.id)
       console.log("patient  " , patient.data)
       this.setState({ patient : patient.data })
    }

    render() { 
        return (    
          <Container>
                <Header>
                <Left>
                    <Button onPress={() => this.props.history.push('/account')}>
                        <Text>Back</Text>
                    </Button>
                </Left>
                <Right/>
                </Header>
            <Content>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={ styles.text }>
                       PATIENT NAME : { this.state.patient.PatientName }
                    </Text>
                    <Text style={styles.text}>
                      COST : ${ this.state.patient.cost }
                    </Text>
                    <Text style={styles.text}>
                      MEDICATION: { this.state.patient.Medication }
                    </Text>
                    <Text style={styles.text}>
                       DATA OF ARRIVAL: { this.state.patient.DateOFArrival }
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Container> );
    }
}
 

const styles = StyleSheet.create({
    text : {
        fontStyle: 'italic',
        fontSize: 18,
        paddingLeft: 60
    }
})

export default PatientData;
