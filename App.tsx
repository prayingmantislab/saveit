/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar, useColorScheme} from 'react-native';
import {StripeProvider} from '@stripe/stripe-react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';

import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native';

import config from './src/aws-exports';
Amplify.configure(config);
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <StripeProvider publishableKey="pk_test_51IqIfWA2WcfjP4nohlwR7PdK6SEeIt5eenVLWcrduRWk5IlG9WSid3GFZiItmJS4de56nrynA3hblwhrW7FVGED500vznukyss">
        <Router />
      </StripeProvider>
    </View>
  );
};
//change the direction of label to rtl
const signUpConfig = {
  header: 'SaveIt',
  hideAllDefaults: true,
  defaultCountryCode: '972',

  signUpFields: [
    {
      label: 'Username',
      key: 'phone_number',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'שם',
      key: 'name',
      required: true,
      displayOrder: 2,
      type: 'string',
    },
    {
      label: 'שם משפחה',
      key: 'family_name',
      required: true,
      displayOrder: 3,
      type: 'string',
    },
    {
      label: 'תאריך לידה',
      key: 'birthdate',
      required: true,
      displayOrder: 4,
      type: 'date',
    },
    {
      label: 'מין',
      key: 'gender',
      required: true,
      displayOrder: 5,
      type: 'string',
    },
    {
      label: 'עיר',
      key: 'address',
      required: true,
      displayOrder: 6,
      type: 'string',
    },
    {
      label: 'סיסמא',
      key: 'password',
      required: true,
      displayOrder: 7,
      type: 'password',
    },
    {
      label: 'מייל',
      key: 'email',
      required: true,
      displayOrder: 8,
      type: 'string',
    },
  ],
};

export default App;
