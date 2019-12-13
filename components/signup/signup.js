import React , { Component } from 'react';
import { Container, Header, Content, Form, Item, Input , Body , Left , Icon , Text , Button ,Right } from 'native-base';
import { View , StyleSheet , TouchableOpacity } from 'react-native'
import axios from 'axios'
// import { connect } from 'react-redux'
// import SignupMiddleware from '../../store/middleware/signupMiddleware'
import { Button as ReactButton } from 'react-native-elements'
import SignupMiddleware from '../../src/store/middleware/signupMiddleware';
import {connect} from 'react-redux';


class Signup extends Component {
    
    state = { 
        username: '',
        email : '',
        password : ''
     }
    

   onSubmitHandler = async () => {
       const { username , email , password } = this.state
       let data = { 
           username,
           email,
           password
        }
        // console.log("submit" , data )

       this.props.signup(data)
       this.props.history.push('/')
        
   }

    render() { 
        return ( 
            <Container>
               <Header style={{marginTop: 26}} >
                    <Body>
                      <Text style={{fontSize: 15 , color: 'white'}}>Patient Tracker</Text>
                    </Body>
                  <Right/>
                </Header>
            <Content>
              <View>
                <Form>
                    <Item>
                      <Input onChangeText={ (username) => this.setState({username}) } placeholder="Username" />
                    </Item>
                    <Item>
                      <Input onChangeText={ (email) => this.setState({email}) } placeholder="Email" />
                    </Item>
                    <Item last>
                      <Input onChangeText={ (password) => this.setState({password}) } placeholder="Password" />
                    </Item>
                <View style={styles.button} > 
                     <ReactButton title="Signup" onPress={this.onSubmitHandler} />
                      <ReactButton title="Login" onPress={ () => this.props.history.push('/') }/>
                </View> 
                </Form>
              </View>   
            </Content>
          </Container>
         );
    }
}
 
const styles = StyleSheet.create({
    button: {
        padding:100,
        flexDirection: 'row',
        justifyContent: "space-between"

    }
})

const mapStateToProps = state => {
  return {
    user: state.signup
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (data) => dispatch(SignupMiddleware.signup(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);






