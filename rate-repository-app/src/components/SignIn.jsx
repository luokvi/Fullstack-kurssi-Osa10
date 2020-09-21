import React from 'react';

import { Text } from './Text';
import { Formik } from 'formik';
import { View, TouchableWithoutFeedback } from 'react-native';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

const initialValues = {
  username: '',
  password: ''
};

const SignInForm = ({ onSubmit }) => {

  return(
    <View>
      <FormikTextInput name='username' placeholder='Username' style={theme.formInput}/>
      <FormikTextInput name='password' placeholder='Password' secureTextEntry style={theme.formInput}/>
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
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({handleSubmit}) => <SignInForm onSubmit={handleSubmit}/> }
    </Formik>
    </View>
  );
};

export default SignIn;