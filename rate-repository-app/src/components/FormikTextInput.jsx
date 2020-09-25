import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import { Text } from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 1,
    color: 'red',
    alignSelf: 'center'
  },

  formInputBase: {
    color: '#24292e',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#24292e',

    height: 50,
    width: '75%',
    flexGrow: 0,
    alignSelf: 'center',
    marginBottom: 10,
    paddingLeft: 10,
  },

  formError: {
    color: 'red',
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,

    height: 50,
    width: '75%',
    flexGrow: 0,
    alignSelf: 'center',
    marginBottom: 10,
    paddingLeft: 10
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
        style={showError ? styles.formError : styles.formInputBase}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;