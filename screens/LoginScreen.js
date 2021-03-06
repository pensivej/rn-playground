import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableHighlight } from 'react-native';
import { SocialIcon } from 'react-native-elements';


export default class Login extends React.Component{
    static navigationOptions={
        header: null,
    };

    constructor(props){
        super(props);
        this.state = {
            facebook: true,
            instagram: true,
            google: true,
        }
        this.onFacebookPress = this.onFacebookPress.bind(this);
    }

    onFacebookPress(){
        this.props.navigation.navigate('LoginEmail');
    }

    onSignInPress(){
        this.props.navigation.navigate('SignIn');
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.logoContainer}>
                    {/* <Image source={require('../assets/images/logo.png')} /> */}
                    <Text style={{fontFamily: 'montserrat-bold', fontWeight: '300', fontSize: 70, color: '#283655'}}>ZIPBOB</Text>
                </View>
                <View style={styles.socialText}>
                    <Text style={{fontFamily: 'montserrat-bold', fontWeight: '300', fontSize: 18, color: '#283655'}}>Sign Up With</Text>
                </View>
                <View style={styles.socialButtonContainer}>
                     <SocialIcon
                        style={[styles.socialButton, {backgroundColor: '#fe8a71'}]}
                        button
                        raised={this.state.google}
                        type='envelope'
                        />
                    <SocialIcon
                        style={styles.socialButton}
                        button
                        raised={this.state.google}
                        type='github'
                        />
                    <SocialIcon
                        style={styles.socialButton}
                        button
                        raised={this.state.google}
                        type='linkedin'
                        />
                    <SocialIcon
                        style={styles.socialButton}
                        button
                        raised={this.state.facebook}
                        type='facebook'
                        onPress={()=>this.onFacebookPress()}
                        />
                    <SocialIcon
                        style={styles.socialButton}
                        button
                        raised={this.state.instagram}
                        light
                        type='instagram'
                        />
                    
                </View>
                <TouchableHighlight style={styles.bottomText}
                    onPress={()=>this.onSignInPress()}>
                    <Text style={{fontFamily: 'montserrat-bold', fontWeight: '300', fontSize: 14, color: '#283655'}}>Already have an account?</Text>
                </TouchableHighlight>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    socialButton: {
        margin: 8,
        width: 52
    },
    logoContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialText: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    socialButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomText: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
})