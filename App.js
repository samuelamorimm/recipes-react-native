import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; 
import Home from './src/Pages/Home';
import Profile from './src/Pages/Profile';

export default function App() {
  const Tab = createBottomTabNavigator();

  const icons = {
    Home: {
      name: 'home',
    },
    Profile: {
      name: 'person'
    },
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            const { name } = icons[route.name];
            return <Icon name={name} size={size} color={'#ec9006'}/>
          },
          headerShown: false,
          tabBarActiveTintColor: '#3096e1',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'white',
          },
          tabBarLabelStyle: {
            color: '#ec9006'
          }
        })}>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Profile' component={Profile}/>
      </Tab.Navigator>
    </NavigationContainer>
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
