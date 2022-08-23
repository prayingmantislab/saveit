import React from 'react';
import {View, StyleSheet, Text, ImageBackground, Image} from 'react-native';

const image = {
  uri:
    'https://res.cloudinary.com/dgaobrwxs/image/upload/v1658246237/SaveIt/Screen_Shot_2022-07-19_at_18.55.50_pouvut.png',
};
const reminderScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={image}>
        <Image
          style={styles.logo}
          source={{
            uri:
              'https://res.cloudinary.com/dgaobrwxs/image/upload/v1658254567/SaveIt/Screen_Shot_2022-07-19_at_21.15.07_loj9md.png',
          }}
        />
        <Text style={styles.text}>נהדר!</Text>
        <Text style={styles.text}>כעת נוכל לשמח את שמחה רבה</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 23,
    color: 'white',
  },
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 159,
    height: 157,
    borderRadius: 30,
  },
});
export default reminderScreen;
