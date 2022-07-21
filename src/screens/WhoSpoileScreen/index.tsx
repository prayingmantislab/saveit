import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../../components/Button';
const bgImage = {
  uri:
    'https://res.cloudinary.com/dgaobrwxs/image/upload/v1658246237/SaveIt/Screen_Shot_2022-07-19_at_18.55.50_pouvut.png',
};

const WhoSpoileScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'אחר', value: 'אחר'},
    {label: 'קולגה', value: 'קולגה'},
    {label: 'בן זוג', value: 'בן זוג'},
    {label: 'קרוב משפחה', value: 'קרוב משפחה'},
  ]);
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const toggleDatePicker = () => {
    setShow(!show);
  };

  const onChange = (
    // @ts-ignore
    event,
    // @ts-ignore
    selectedDate,
  ) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };
  const showMode = () =>
    // @ts-ignore
    {
      setShow(true);
    };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  return (
    <>
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} source={bgImage}>
          <Image
            style={styles.logo}
            source={{
              uri:
                'https://res.cloudinary.com/dgaobrwxs/image/upload/v1658254567/SaveIt/Screen_Shot_2022-07-19_at_21.15.07_loj9md.png',
            }}
          />
          <TextInput style={styles.input}>?את מי מפנקים</TextInput>
          {/* 
          <DropDownPicker>
            <DropDownPicker.Item label="אחר" value="אחר" />
            <DropDownPicker.Item label="קולגה" value="קולגה" />
            <DropDownPicker.Item label="בן זוג" value="בן זוג" />
            <DropDownPicker.Item label="קרוב משפחה" value="קרוב משפחה" />
          </DropDownPicker> */}

          <View>
            <Text
              style={styles.input}
              onPress={toggleDatePicker}
              // @ts-ignore
              title="Show date picker!">
              תאריך לידה
            </Text>

            {show && (
              <DateTimePicker
                display="inline"
                testID="dateTimePicker"
                value={date}
                // @ts-ignore
                // @ts-ignore
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </View>
          <TextInput style={styles.input}>כתובת למשלוח פינוק</TextInput>
          <Button text="הבא" onPress={() => Alert.alert('next')}>
            הבא
          </Button>
        </ImageBackground>
      </View>
    </>
  );
};
//הקלד את שם מקבל המתנה במקום את מי מפנקים
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chooser: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 159,
    height: 157,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  buttonChooser: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    alignContent: 'center',
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    alignContent: 'center',
  },
  select: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    alignContent: 'center',
  },
  datePicker: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    alignContent: 'center',
  },
});
export default WhoSpoileScreen;
