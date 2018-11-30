import React from 'react';
import {Button, Text,View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

class PostScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>A post</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
        <Button
          title="Click on post"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
class CalendarScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Calendar</Text>
      </View>
    );
  }
}
class NotificationScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications</Text>
        <Button
          title="Important post"
          onPress={() => this.props.navigation.navigate('Post')}
        />
      </View>
    );
  }
}
class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Your Profile</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings</Text>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: PostScreen,
});
const CalendarStack = createStackNavigator({
  Calendar:CalendarScreen,
})
const NotificationStack = createStackNavigator({
  Notification:NotificationScreen,
  Post:PostScreen,
})
const ProfileStack = createStackNavigator({
  Profile:ProfileScreen,
})

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

export default createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Calendar: {screen: CalendarStack},
    Notifications: {screen: NotificationStack},
    Profile: {screen: ProfileStack},
    Settings: { screen: SettingsStack },

  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'md-home';
        } else if (routeName === 'Settings') {
          iconName = 'ios-menu';
        }
        else if(routeName==='Calendar'){
          iconName='ios-calendar'
        }
        else if(routeName==='Profile'){
          iconName='md-person';
        }
        else if(routeName==='Notifications'){
          iconName='ios-notifications';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ef5b2e',
      inactiveTintColor: 'gray',
      showLabel:false,
    },
  }
);





