import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

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

export default function Welcome({ google, welcome, title }) {
  const buttonStyle = google ? [styles.StyleButton, styles.GoogleButton] : styles.StyleButton; // Conditionally applying Google style

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.InnerContainer}>
        <Image resizeMode="cover" style={styles.WelcomeImage} source={require('./../assets/img/img2.png')} />
        <View style={styles.ProfilePictureContainer}>
          <Image source={require('./../assets/img/profilepic.jpg')} style={styles.ProfilePicture} />
        </View>
        <Text style={styles.PageTitle} welcome={true}>
          Welcome
        </Text>
        <Text style={styles.SubTitle} welcome={true}>
          Joseph Mario Santiago
        </Text>
        <Text style={styles.SubTitle} welcome={true}>
          2023josephmariosantiago@gmail.com
        </Text>
        <View style={styles.StyleFormArea}>
          <View style={styles.WelcomeContainer}>
            <View style={styles.Line}></View>
            <TouchableOpacity style={buttonStyle} onPress={() => {}}>
              <Text style={styles.ButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
  StyleButton: {
    padding: 15,
    backgroundColor: brand,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 5,
    height: 60,
    flexDirection: 'row',
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  GoogleButtonText: {
    marginLeft: 10,
    color: '#ffffff',
    fontSize: 16,
  },
  ExtraView: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  ExtraText: {
    color: tertiary,
    fontSize: 15,
  },
  TextLink: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextLinkContent: {
    color: brand,
    fontSize: 15,
  },
  WelcomeContainer: {
    padding: 25,
    paddingTop: 10,
    justifyContent: 'center',
  },
  WelcomeImage: {
    height: '50%',
    minWidth: '100%',
  },
  ProfilePictureContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  ProfilePicture: {
    width: 100,
    height: 100,
    margin: 'auto',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: secondary,
    marginBottom: 10,
    marginTop: 10,
  },
  StyleFormArea: {
    width: '90%',
  },
});
