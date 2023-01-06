import React, { useState }  from "react";
import { StyleSheet,View,Text,TouchableOpacity,TextInput,Image }   from "react-native";
const LoginScreen = ({ navigation }) => {

    const[email, setemail] = useState('');
    const[password, setpassword] = useState('');

    return(
        <View style={styles.mainBox}>
            <View style={styles.loginPicture}>
                <Image source={require('../assets/login.jpg')}
                style={styles.loginPictureStyliing} 
                />
            </View>
            <View style={styles.loginbox}>        
                <Text style={styles.LoginHeading} >Welcome Back!</Text>        
                <TextInput
                placeholder="Enter your email address"
                style={styles.loginEmail}
                onChange={setemail}
                value={email}
                />
                <TextInput
                placeholder="Enter your password"
                style={styles.loginEmail}
                onChange={setpassword}
                value={password}
                />
                <TouchableOpacity style={styles.LoginButton} onPress={()=>{navigation.navigate('WelcomeScreen')}}>
                    <Text style={styles.LoginButtonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.RegisterButton} onPress={()=>{navigation.navigate('RegisterScreen')}}>
                    <Text style={styles.RegisterButtonText}>Register</Text>
                </TouchableOpacity>
                
            </View>
            
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    mainBox:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginPicture:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    loginPictureStyliing:{
        width: 350,
        height: 300,
    },
    loginbox:{
        flex: 1,
        margin: 30,
     //   backgroundColor: '#C0DEFF',
        flexDirection: 'column',
    },
    loginEmail:{
        margin: 10,
        paddingBottom: 2,
        paddingHorizontal: 10,
        borderWidth: 1,
        fontSize: 14,
        height: 34,
        borderRadius: 5,
        width: 300,
        borderColor: '#82C3EC',
    },
    LoginHeading:{
        margin: 10,
        fontSize: 21,
        fontWeight: '600',
    },
    LoginButton:{
        width: 300,
        margin: 10,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: "#4B56D2",
    },
    RegisterButton:{
        width: 300,
        margin: 10,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#4B56D2",
    },
    LoginButtonText:{
        textAlign: 'center',
        color: '#fff',
        justifyContent: 'center',
    },
    RegisterButtonText:{
        textAlign: 'center',
        color: 'black',
        justifyContent: 'center',
    },

});