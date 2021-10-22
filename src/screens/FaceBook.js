import React from "react";
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import { Button } from "react-native-paper";



export default function FaceBook({navigation}) {


const loginWithFacebook = () => {
  LoginManager.logInWithPermissions(["public_profile", "email"]).then(
    function(result) {
      if (result.isCancelled) {
        console.log("==> Login cancelled");
      } else {
        console.log(
          "==> Login success with permissions: " +
            result.grantedPermissions.toString()
        );
      }
     },
     function(error) {
      console.log("==> Login fail with error: " + error);
     }
   );
}










    return(
       <SafeAreaView>
           <Text>FACEBOOK LOGIN</Text>

           <TouchableOpacity onPress={() => loginWithFacebook()}>
                  <Text> Login With Facebook </Text>          
           </TouchableOpacity>

           {/* <LoginButton
              
           
           
            onLoginFinished={(error, result)=> {
                if(error) {
                    console.log('login has error: ' + result.error);
                } else if (result.isCancelled) {
                    console.log('login is cancelled.');
                } else {
                    AccessToken.getCurrentAccessToken().then((date)=> {
                        console.log(data.AccessToken.toString());
                    });
                }
            }}
            onLoginFinished={()=> console.log('logout')}
        
           /> */}

          <TouchableOpacity style={{top:150, right:-160}} onPress={()=>navigation.navigate('login')}>
              <Text>BACK</Text>
        </TouchableOpacity> 



          
       </SafeAreaView>
    );
};

