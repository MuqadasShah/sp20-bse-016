import React, { useState }  from "react";
import { StyleSheet,View,Text,TouchableOpacity,TextInput,Image }   from "react-native";

const RegisterScreen = ({ navigation }) => {

    const[name, setname] = useState('');
    const[course, setcourse] = useState('');
    const[email, setemail] = useState('');
    const[password, setpassword] = useState('');
   

    return(
        <View style={styles.mainBox}>
            <View style={styles.loginbox}>        
                <Text style={styles.LoginHeading} >Register Now</Text>   
                <TextInput
                placeholder="Enter your name"
                style={styles.loginEmail}
                onChange={setpassword}
                value={password}
                />
                <TextInput
                placeholder="Enter your course"
                style={styles.loginEmail}
                onChange={setemail}
                value={email}
                />
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
                <TextInput
                placeholder="Re-Enter your password"
                style={styles.loginEmail}
                onChange={setpassword}
                value={password}
                />
                <TouchableOpacity style={styles.LoginButton} onPress={()=>{navigation.navigate('WelcomeScreen')}}>
                    <Text style={styles.LoginButtonText}>Register Now</Text>
                </TouchableOpacity>
                
            </View>
            
        </View>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    mainBox:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginbox:{
        margin: 30,
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
        textAlign: 'center',
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