import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppFormField from '../components/forms/AppFormField';
import Screen from '../components/Screen';
// import AppErrorMessage from '../components/forms/AppErrorMessage';

const validationShema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      {/* <Image
        resizeMode='contain'
        style={styles.logo}
        source={require('../assets/besLogo.png')}
      /> */}
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationShema}
      >
        {({ handleChange, handleSubmit, errors, setTouched, touched }) => (
          <>
            <AppFormField
              autoCapitalize='none'
              autoCorrect={false}
              icon='account'
              // keyboardType='email-address'
              name='name'
              placeholder='name'
              //Allows IOS to auto fill from keychain
              textContentType='name'
            />
            <AppFormField
              autoCapitalize='none'
              autoCorrect={false}
              icon='email'
              keyboardType='email-address'
              name='email'
              placeholder='email'
              //Allows IOS to auto fill from keychain
              textContentType='emailAddress'
            />

            <AppFormField
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              name='password'
              placeholder='Password'
              secureTextEntry={true}
              textContentType='newPassword'
            />
            <AppButton color='error' title='Register' onPress={handleSubmit} />
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
export default RegisterScreen;
