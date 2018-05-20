import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import LoginView from './components/LoginView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator, createBottomTabNavigator } from 'react-navigation';

const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Home</Text>
  </View>
)

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Profile</Text>
  </View>
)

const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Profile: {
      screen: ProfileScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`
        } else if (routeName === 'Profile') {
          iconName = `ios-contact${focused ? '' : '-outline'}`
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',

    },
    animationEnabled: true,
    swipeEnabled: true
  }
)

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   {/* <Text style={styles.txt}>Snake is Awesome</Text>
      //   <Text>When I get sad, I stop being sad and be awesome instead.</Text> */}
      //   {/* <Text>Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text> */}
      // </View>
      // <LoginView />
      <RootStack />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   txt: {
//     fontSize: 30
//   }
// });
