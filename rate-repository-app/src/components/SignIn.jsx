import React from 'react';

import { Text } from './Text';
import { Formik } from 'formik';
import * as yup from 'yup';
import { View, TouchableWithoutFeedback } from 'react-native';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  
    password: yup
      .string()
      .required('Password is required')
});

const SignInForm = ({ onSubmit }) => {

  return(
    <View>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      <TouchableWithoutFeedback onPress={onSubmit} >
        <Text style={theme.SubmitButton} >
          Sign In
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <View style={theme.FormContainer} >
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({handleSubmit}) => <SignInForm onSubmit={handleSubmit}/> }
    </Formik>
    </View>
  );
};

export default SignIn;