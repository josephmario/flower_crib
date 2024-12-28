import React from 'react';
import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';

const KeyboardAvoidingWrapper = ({ children }) => {
  if (Platform.OS === 'web') {
    return <>{children}</>; // Directly render children on the web
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust for mobile
    >
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
