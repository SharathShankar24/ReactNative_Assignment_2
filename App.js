import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function UserScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "aquamarine", justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome Sharath</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "gray", justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Click to login"
        onPress={() => navigation.navigate('User')}
      />
    </View>
  );
}

function MenusScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "deepskyblue", justifyContent: 'center', alignItems: 'center' }}>
      <Text>Install apps to use them</Text>
    </View>
  );
}

function MenuScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "pink", justifyContent: 'center', alignItems: 'center' }}>
      <Text>Menu screen</Text>
      <Button
        title="Click to browse"
        onPress={() => navigation.navigate('Apps')}
      />
    </View>
  );
} 

function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Logged Out</Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "orange", justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Click to logout"
        onPress={() => navigation.navigate('Account')}
      />
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="User" component={UserScreen} />
    </HomeStack.Navigator>
  );
}

const MenuStack = createStackNavigator();

function MenuStackScreen() {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen name="Menu" component={MenuScreen} />
      <MenuStack.Screen name="Apps" component={MenusScreen} />
    </MenuStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Account" component={AboutScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Menu" component={MenuStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}