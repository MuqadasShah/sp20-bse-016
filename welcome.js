import React, { useState }  from "react";
import { StyleSheet,View,Text,TouchableOpacity,TextInput,Image }   from "react-native";
const WelcomeScreen = ({ navigation }) => {

    const[email, setemail] = useState('');
    const[password, setpassword] = useState('');

    return(
        <View style={styles.mainBox}>

            <View style={styles.loginbox}>        
                <Text style={styles.LoginHeading} >Welcome Muqaddas!</Text>

                <Text style={styles.LoginText} >Email: muqadas@gmail.com</Text>

                <Text style={styles.LoginText} >Name: Muqaddas Shah</Text>

                <Text style={styles.LoginText} >Course: MAD</Text>        
                
                <TouchableOpacity style={styles.LogoutButton} onPress={()=>{navigation.navigate('LoginScreen')}} >
                    <Text style={styles.LogoutButtonText}>Logout</Text>
                </TouchableOpacity>
                
            </View>
            
        </View>
    )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    mainBox:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginbox:{
        margin: 10,
        borderRadius: 10,
        height: 300,
        flexDirection: 'column',
    },

    LoginText:{
        margin: 10,
        fontSize: 21,
        fontWeight: '400',
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
    LogoutButton:{
        width: 300,
        margin: 10,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#FF0000',
    },
    LogoutButtonText:{
        textAlign: 'center',
        color: '#fff',
        justifyContent: 'center',
    },

});