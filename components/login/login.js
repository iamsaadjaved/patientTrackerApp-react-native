import React , { Component } from 'react';
import { Container ,  Header, Content, Form, Item, Input , Left , Right , Body , Text  } from 'native-base';
import { View , StyleSheet , TouchableOpacity} from 'react-native'
import axios from 'axios'
import { Button } from 'react-native-elements'
import {connect} from 'react-redux';
import LoginMiddleware from '../../src/store/middleware/loginMiddleware';
 

class Login extends Component {
    
    state = { 
        email : '',
        password : ''
     }
    

  onSubmitHandler = () => {
       const { email , password } = this.state
       let data = { 
           email,
           password
        }
        console.log("submit" , data )
         this.props.login(data)
         this.props.history.push('/account')
     
      }

    render() { 
        
        return ( 
            <Container>
                 <Header style={{marginTop: 26}} >
                  <Left>
                      <Button onPress={ () => this.props.history.push('/account') } />
                  </Left>
                    <Body>
                      <Text style={{fontSize: 15 , color: 'white'}}>Patient Tracker</Text>
                    </Body>
                  <Right/>
                </Header>
            <Content>
              <View>
                <Form>
                    <Item>
                      <Input onChangeText={ (email) => this.setState({email}) } placeholder="Email" />
                    </Item>
                    <Item last>
                      <Input onChangeText={ (password) => this.setState({password}) } placeholder="Password" />
                    </Item>
                    <View style={styles.button} > 
                      <Button title="Login" onPress={this.onSubmitHandler}/>

                      <Button title="Signup" onPress={ () => this.props.history.push('/signup') }/>
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
        padding: 100 ,
        flexDirection: 'row',
        justifyContent: "space-between"
    }
})


const mapStateToProps = state => {
  return {
    user: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (data) => dispatch(LoginMiddleware.login(data) )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);





