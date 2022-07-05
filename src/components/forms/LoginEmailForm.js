import { withFormik } from 'formik';
import * as yup from 'yup';
import { View } from 'react-native';
import { TextInputGroup } from '../elements';
import { Button, Text } from '../atoms';

const LoginEmailForm = (props) => {
  const {
    values,
    handleSubmit,
    isSubmitting,
    handleChange,
    handleBlur,
    errors,
  } = props;
  return (
    <View className="flex-1 justify-center">
      <Text semiBold>Enter email address to proceed</Text>
      <TextInputGroup
        placeholder="Email"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        textContentType="emailAddress"
        keyboardType="email-address"
        returnKeyType="next"
        name="email"
        error={errors.email}
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus={false}
      />
      <Button isLoading={isSubmitting} onPress={handleSubmit}>
        Submit
      </Button>
    </View>
  );
};

const enhancer = withFormik({
  mapPropsToValues: () => ({
    email: '',
  }),
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email('Must be valid email')
      .required('Email address is required.'),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleSubmit(values);
    setSubmitting(false);
  },
  displayName: 'LoginEmailForm', // helps with React DevTools
});

export default enhancer(LoginEmailForm);
