import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import AppErrorMessage from '../components/AppErrorMessage';

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
        {({ handleChange, handleSubmit, errors, setTouched, touched }) => (
          <>
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='email'
              keyboardType='email-address'
              onBlur={() => setTouched('email')}
              onChangeText={handleChange('email')}
              placeholder='email'
              //Allows IOS to auto fill from keychain
              textContentType='emailAddress'
            />
            <AppErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              onBlur={() => setTouched('password')}
              onChangeText={handleChange('password')}
              placeholder='Password'
              secureTextEntry={true}
              textContentType='password'
            />
            <AppErrorMessage
              error={errors.password}
              visible={touched.password}
            />
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
