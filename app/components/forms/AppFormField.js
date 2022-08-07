import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import AppErrorMessage from './AppErrorMessage';

function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, handleChange, touched, errors } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
