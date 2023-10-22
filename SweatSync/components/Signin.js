import React, { useState } from 'react';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';


GoogleSignin.configure({
  webClientId: '708515035791-pinpdso572m43l1s0c51uphd84s42pq5.apps.googleusercontent.com',
  offlineAccess: true
});


const SignInPage = () => {


    const [user, setUser] = useState(null);


    const signIn = async () => {
        try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        setUser(userInfo);
        } catch (error) {
        console.error(error);
        }
    };


    return (
        <View>
        <GoogleSigninButton
            onPress={signIn}
        />
        </View>
    );
}


export default SignInPage;