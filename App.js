import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  Image, 
  StatusBar, 
  TextInput, 
  TouchableOpacity 
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import TextInputEmail from "./src/components/TextInputEmail";
import LoginButton from "./src/components/LoginButton";
import Menu from "./src/components/Menu";

const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  return ( 
  <View style={{flex: 1, backgroundColor: '#dbe4f3'}}>
    <StatusBar backgroundColor={'#dbe4f3'} barStyle="dark-content" />
    <View 
      style={{justifyContent: 'center', 
      alignItems: 'center',
      marginTop: 80,}}>
    <Image 
      source={require('./src/images/logo.jpeg')}
      style={{width:200, height:200}}
      />
      <Text style={{fontSize: 28, fontWeight: 'bold'}}>
      LIBRARY<Text style={{color: '#2396f2'}}> UNPAM</Text>
      </Text>
      <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 18}}>Login</Text>
    </View>
    
    <TextInputEmail
     state={email} 
     set={setEmail} 
     icon="envelope"
     placeholder="Masukan Email"
     isPassword={false}
     />
    <TextInputEmail 
    state={password} 
    set={setPassword} 
    icon="lock" 
    placeholder="Masukan Password"
    isPassword={true}
    />

    <LoginButton text="Login"/>

    <Menu signupText="Daftar" forgotPasswordText="Lupa Password"/>
  </View>
  );
};

export default App;