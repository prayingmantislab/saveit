import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Pressable,
  Image,
} from 'react-native';
const bgImage = {
  uri:
    'https://res.cloudinary.com/dgaobrwxs/image/upload/v1658246237/SaveIt/Screen_Shot_2022-07-19_at_18.55.50_pouvut.png',
};
const InterestsScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={bgImage}>
        <View
          style={
            // @ts-ignore
            styles.logoContainer
          }>
          <Image
            style={styles.logo}
            source={{
              uri:
                'https://res.cloudinary.com/dgaobrwxs/image/upload/v1658254567/SaveIt/Screen_Shot_2022-07-19_at_21.15.07_loj9md.png',
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text
            style={
              // @ts-ignore
              styles.skipText
            }>
            נבחר 3 תחומי עניין של שמחה רבה
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.row}>
            <View style={styles.button}>
              <Pressable>
                <Text style={styles.text}>בישול</Text>
              </Pressable>
            </View>
            <View style={styles.button}>
              <Pressable>
                <Text style={styles.text}>אפיה</Text>
              </Pressable>
            </View>
            <View style={styles.button}>
              <Pressable>
                <Text style={styles.text}>טיולים</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.button}>
              <Pressable>
                <Text style={styles.text}>מוזיקה</Text>
              </Pressable>
            </View>
            <View style={styles.button}>
              <Pressable>
                <Text style={styles.text}>DIY</Text>
              </Pressable>
            </View>
            <View style={styles.button}>
              <Pressable>
                <Text style={styles.text}>אומנות</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.button}>
              <Pressable>
                <Text style={styles.text}>בישול</Text>
              </Pressable>
            </View>
            <View style={styles.button}>
              <Pressable>
                <Text style={styles.text}>אפיה</Text>
              </Pressable>
            </View>
            <View style={styles.button}>
              <Pressable>
                <Text style={styles.text}>טיולים</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.button}>
              <Pressable>
                <Text style={styles.text}>בישול</Text>
              </Pressable>
            </View>
            <View style={styles.button}>
              <Pressable>
                <Text style={styles.text}>אפיה</Text>
              </Pressable>
            </View>
            <View style={styles.button}>
              <Pressable>
                <Text style={styles.text}>טיולים</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.button}>
              <Pressable>
                <Text style={styles.text}>בישול</Text>
              </Pressable>
            </View>
            <View style={styles.button}>
              <Pressable>
                <Text style={styles.text}>אפיה</Text>
              </Pressable>
            </View>
            <View style={styles.button}>
              <Pressable>
                <Text style={styles.text}>טיולים</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.skipContainer}>
          <Pressable>
            <Text style={styles.skipText}>אפשר לדלג</Text>
          </Pressable>
        </View>
        <View style={styles.navButtonsContainer}>
          <View style={styles.navButton}>
            <Pressable>
              <Text style={styles.navText}>הקודם</Text>
            </Pressable>
          </View>
          <View style={styles.navButton}>
            <Pressable>
              <Text style={styles.navText}>הבא</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  logoConrainer: {
    flex: 1,
  },
  logo: {
    width: '100%',
    height: '35%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '20%',
    borderRadius: 10,
  },
  buttonsContainer: {
    flex: 4,
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  button: {
    backgroundColor: '#faf8f5',
    borderRadius: 10,
    width: '25%',
    height: '100%',
    writingDirection: 'rtl',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  text: {
    fontSize: 18,
  },
  skipContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
  },
  skipText: {
    fontSize: 18,
    color: '#fff',
    flex: 1,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonsContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '10%',
  },
  navButton: {
    backgroundColor: '#faf8f5',
    borderRadius: 10,
    width: '35%',
    height: '80%',
    writingDirection: 'rtl',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginBottom: '10%',
  },
  navText: {
    fontSize: 20,
  },
});
export default InterestsScreen;
