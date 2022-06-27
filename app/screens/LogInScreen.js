import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Formik } from 'formik';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppText from '../components/AppText';

const validationShema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function LogInScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image
        resizeMode='contain'
        style={styles.logo}
        source={require('../assets/besLogo.png')}
      />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationShema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='email'
              keyboardType='email-address'
              onChangeText={handleChange('email')}
              placeholder='email'
              //Allows IOS to auto fill from keychain
              textContentType='email'
            />
            <AppText style={{ color: 'red' }}>{errors.email}</AppText>
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              onChangeText={handleChange('password')}
              placeholder='Password'
              secureTextEntry={true}
              textContentType='password'
            />
            <AppText style={{ color: 'red' }}>{errors.password}</AppText>
            <AppButton color='error' title='Log In' onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LogInScreen;
