import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
// const Dimensions = require('Dimensions');
import Dimensions from 'Dimensions';
import iconImg from '../images/icon3.png';

const ScreenWidth = Dimensions.get('window').width;

class LoginView extends Component {
  handlePress = ()=>{
    console.log("press");
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={iconImg} style={styles.iconStyle} ></Image>
        <View style={styles.inputWrapperStyle}>
          <TextInput placeholder="输入QQ号码" style={styles.inputStyle} keyboardType="numeric" ></TextInput>
        </View>
        <View style={styles.inputWrapperStyle}>
          <TextInput placeholder="输入密码" style={styles.inputStyle} secureTextEntry={true} ></TextInput>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={this.handlePress}>
          <View style={styles.textWrapperStyle}>
            <Text style={{color:'#fff',flex:1,textAlign:'center',alignSelf:'center'}}>登录</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', //主轴
    alignItems: 'center' //交叉轴居中对齐
  },
  iconStyle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#FFF',
    marginTop: 50,
    marginBottom: 30
  },
  inputWrapperStyle: {
    flexDirection: 'row',
    marginTop: 10,
    width: ScreenWidth - 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8
  },
  inputStyle: {
    flex: 1, //填满父容器
    textAlign: 'center'
  },
  textWrapperStyle:{
    flexDirection: 'row',
    backgroundColor: '#87CEFA',
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 8,
    height: 30,
    width: ScreenWidth - 30,
    marginTop: 20
  }
});

export default LoginView;