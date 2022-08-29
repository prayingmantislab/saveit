import React, {useEffect, useState} from 'react';
import {Amplify, Auth, Hub} from 'aws-amplify';
import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth';
import awsconfig from '../../aws-exports';

import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

Amplify.configure(awsconfig);

const bgImage = {
  uri:
    'https://res.cloudinary.com/dgaobrwxs/image/upload/v1658246237/SaveIt/Screen_Shot_2022-07-19_at_18.55.50_pouvut.png',
};

const LoginScreen = () => {
  const [user, setUser] = useState(null);
  const [customeState, setCustomeState] = useState(null);

  useEffect(() => {
    const unsubscribe = Hub.listen('auth', ({payload: {event, data}}) => {
      switch (event) {
        case 'signIn':
          setUser(data);
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'customOAState':
          setCustomeState(data);
      }
    });

    Auth.currentAuthenticatedUser()
      .then(currentUser => setUser(currentUser))
      .catch(e => console.log(e));
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.backgroundImage} />
      <Text>ברוכים הנמצאים!</Text>
      <TouchableOpacity
        onPress={() => {
          try {
            Auth.federatedSignIn({
              provider: CognitoHostedUIIdentityProvider.Google,
            });
          } catch (e) {
            console.log(e);
          }
        }}>
        <Text style={styles.button}>Open Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    // the background image takes 30 precent of the height of the top screen and creates a diagonal line
    height: '60%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transform: [{skewY: '-45deg'}],
  },

  button: {
    backgroundColor: 'grey',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
});
export default LoginScreen;
