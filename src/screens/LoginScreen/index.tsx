import React from 'react';

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

const bgImage = {
  uri:
    'https://res.cloudinary.com/dgaobrwxs/image/upload/v1658246237/SaveIt/Screen_Shot_2022-07-19_at_18.55.50_pouvut.png',
};

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.backgroundImage} />
      <Text>ברוכים הבאים!</Text>
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
    // the background image takes third of the height of the screen
    height: '40%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default LoginScreen;
