import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Button from '../../components/Button';
const bgImage = {
  uri:
    'https://res.cloudinary.com/dgaobrwxs/image/upload/v1658246237/SaveIt/Screen_Shot_2022-07-19_at_18.55.50_pouvut.png',
};
const WhoSpoileScreen = () => {
  return (
    <>
      <ImageBackground style={styles.backgroundImage} source={bgImage}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={{
              uri:
                'https://res.cloudinary.com/dgaobrwxs/image/upload/v1658254567/SaveIt/Screen_Shot_2022-07-19_at_21.15.07_loj9md.png',
            }}
          />
          <TextInput style={styles.input}>?את מי מפנקים</TextInput>

          <TextInput style={styles.input}>בת זוג</TextInput>
          <Picker>
            <Picker.Item label="אחר" value="אחר" />
            <Picker.Item label="בעל" value="בעל" />
            <Picker.Item label="חבר/ה" value="חבר/ה" />
            <Picker.Item label="אמא" value="אבא" />
          </Picker>
          <TextInput style={styles.input}>כתובת למשלוח פינוק</TextInput>

          <Button text="הבא" onPress={() => Alert.alert('next')}>
            הבא
          </Button>
        </View>
      </ImageBackground>
    </>
  );
};
//הקלד את שם מקבל המתנה במקום את מי מפנקים
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 159,
    height: 157,
    borderRadius: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    alignContent: 'center',
  },
});
export default WhoSpoileScreen;
