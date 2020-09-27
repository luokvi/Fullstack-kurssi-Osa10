import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { View, TouchableWithoutFeedback } from 'react-native';
import { useHistory } from 'react-router-native';

import { Text } from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';

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
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log('data from sign in:', data);
      history.push('/');

    } catch (e) {
      console.log(e);
    }
    
    values.username = '';
    values.password = '';
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