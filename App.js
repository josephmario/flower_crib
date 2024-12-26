import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import Singup from './screens/Signup';
import Welcome from './screens/Welcome';

export default function App() {
  return (
    <>
      {/* <Login></Login> */}
      {/* <Singup/> */}
      <Welcome />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
