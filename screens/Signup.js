import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidngWrapper';
// Get the status bar height dynamically
const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: '#ffffff',
  secondary: '#E5E7EB',
  tertiary: '#1F2937',
  darkLight: '#9CA3AF',
  brand: '#6D28D9',
  green: '#10B981',
  red: '#EF4444',
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export default function Signup({ google, navigation }) {
  const [hidePassword, setHidePassword] = useState(true);
  const buttonStyle = google ? [styles.StyleButton, styles.GoogleButton] : styles.StyleButton; // Conditionally applying Google style
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));

  const [dob, setDob] = useState();
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <>
      <KeyboardAvoidingWrapper>
        <View style={styles.StyledContainer}>
          <StatusBar style="dark" />
          <View style={styles.InnerContainer}>
            <Image style={styles.PageLogo} source={require('./../assets/img/img2.png')} />
            <Text style={styles.PageTitle}>Flower Crib</Text>
            <Text style={styles.SubTitle}>Account Signup</Text>
            {show && (
              <DateTimePicker testID="dateTimePicker" value={date} mode="date" is24Hour={true} onChange={onChange} />
            )}
            <Formik
              initialValues={{ fullName: '', email: '', dateOfBirth: '', password: '', confirmPassword: '' }}
              onSubmit={(values) => {
                navigation.navigate('Welcome');
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.StyleFormArea}>
                  <MyTextInput
                    label="Full Name"
                    icon="person"
                    placeholder="Joseph Mario Santiago"
                    placeholderTextColor={darkLight}
                    onchangeText={handleChange('fullName')}
                    onblur={handleBlur('fullName')}
                    value={values.fullName}
                  />
                  <MyTextInput
                    label="Email Address"
                    icon="mail"
                    placeholder="joseph@gmail.com"
                    placeholderTextColor={darkLight}
                    onchangeText={handleChange('email')}
                    onblur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                  />
                  <MyTextInput
                    label="Date of birth"
                    icon="calendar"
                    placeholder="YYYY - MM - DD"
                    placeholderTextColor={darkLight}
                    onchangeText={handleChange('dateOfBirth')}
                    onblur={handleBlur('dateOfBirth')}
                    value={dob ? dob.toDateString() : ''}
                    isDate={true}
                    editable={false}
                    showDatePicker={showDatePicker}
                  />
                  <View style={styles.PasswordInputWrapper}>
                    <MyTextInput
                      label="Password"
                      icon="lock"
                      placeholder="* * * * * *"
                      placeholderTextColor={darkLight}
                      onchangeText={handleChange('password')}
                      onblur={handleBlur('password')}
                      value={values.password}
                      secureTextEntry={hidePassword}
                      isPassword={true}
                    />
                    <TouchableOpacity style={styles.TogglePasswordIcon} onPress={() => setHidePassword(!hidePassword)}>
                      <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={darkLight} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.PasswordInputWrapper}>
                    <MyTextInput
                      label="Confirm Password"
                      icon="lock"
                      placeholder="* * * * * *"
                      placeholderTextColor={darkLight}
                      onchangeText={handleChange('confirmPassword')}
                      onblur={handleBlur('confirmPassword')}
                      value={values.confirmPassword}
                      secureTextEntry={hidePassword}
                      isPassword={true}
                    />
                    <TouchableOpacity style={styles.TogglePasswordIcon} onPress={() => setHidePassword(!hidePassword)}>
                      <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={darkLight} />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.MsgBox}>...</Text>
                  <TouchableOpacity style={buttonStyle} onPress={handleSubmit}>
                    <Text style={styles.ButtonText}>Signup</Text>
                  </TouchableOpacity>
                  <View style={styles.Line}></View>

                  <TouchableOpacity style={[styles.StyleButton, styles.GoogleButton]} onPress={handleSubmit}>
                    <Fontisto name="google" color={primary} size={25} />
                    <Text style={[styles.ButtonText, styles.GoogleButtonText]}>Sign in with Google</Text>
                  </TouchableOpacity>
                  <View style={styles.ExtraView}>
                    <Text style={styles.ExtraText}>Already have an account?</Text>
                    <TouchableOpacity
                      style={styles.TextLink}
                      onPress={() => {
                        navigation.navigate('Login');
                      }}
                    >
                      <Text style={styles.TextLinkContent}>Login</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </KeyboardAvoidingWrapper>
    </>
  );
}

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  isDate,
  showDatePicker,
  onchangeText,
  onblur,
  value,
  ...props
}) => {
  return (
    <View style={styles.InputWrapper}>
      <View style={styles.LeftIcon}>
        <Octicons name={icon} size={30} color={brand} />
      </View>
      {!isDate && (
        <TextInput {...props} style={styles.StyleTextInput} onChangeText={onchangeText} onBlur={onblur} value={value} />
      )}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <TextInput
            {...props}
            style={styles.StyleTextInput}
            onChangeText={onchangeText}
            onBlur={onblur}
            value={value}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.StyledInputLabel}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  StyledContainer: {
    flex: 1,
    padding: 25,
    paddingTop: StatusBarHeight + 10, // Directly use the number
    backgroundColor: primary,
  },
  InnerContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  PageLogo: {
    width: 250,
    height: 200,
  },
  PageTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: brand,
    padding: 10,
  },
  SubTitle: {
    fontSize: 16,
    marginTop: 20,
    letterSpacing: 1,
    fontWeight: 'bold',
    color: tertiary,
  },
  StyleFormArea: {
    width: '90%',
  },
  InputWrapper: {
    marginVertical: 10,
  },
  PasswordInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  StyleTextInput: {
    backgroundColor: secondary,
    padding: 15,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 5,
    fontSize: 16,
    height: 60,
    marginBottom: 10,
    color: tertiary,
    flex: 1,
  },
  StyledInputLabel: {
    color: tertiary,
    fontSize: 13,
    textAlign: 'left',
    marginTop: 5,
  },
  LeftIcon: {
    position: 'absolute',
    left: 15,
    top: 18,
    zIndex: 1,
  },
  TogglePasswordIcon: {
    position: 'absolute',
    right: 15,
    top: 18,
    zIndex: 2,
  },
  StyleButton: {
    padding: 15,
    backgroundColor: brand,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 5,
    height: 60,
    flexDirection: 'row', // Added for consistent layout
  },
  ButtonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  MsgBox: {
    textAlign: 'center',
    fontSize: 13,
  },
  Line: {
    height: 1,
    width: '100%',
    backgroundColor: darkLight,
    marginVertical: 10,
  },
  GoogleButton: {
    backgroundColor: green,
    flexDirection: 'row', // Aligning the icon and text horizontally
    alignItems: 'center',
  },
  GoogleButtonText: {
    marginLeft: 10, // Add space between the icon and the text
    color: '#ffffff',
    fontSize: 16,
  },
  ExtraView: {
    //view
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  ExtraText: {
    //text
    justifyContent: 'center',
    alignContent: 'center',
    color: tertiary,
    fontSize: 15,
  },
  TextLink: {
    // touchable opacity
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextLinkContent: {
    //text
    color: brand,
    fontSize: 15,
  },
});
