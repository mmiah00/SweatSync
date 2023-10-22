import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Map from "./Map";
import GymInfo from "./Gyminfo"
import React from "react";


function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <React.Fragment>
        <Map />
        {renderGymCards(gyms)}
      </React.Fragment>
    </View>
  );
}

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile </Text>
    </View>
  )
}

function ConnectWearable() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Connect Wearable </Text>
    </View>
  )
}

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings </Text>
    </View>
  )
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sign Out"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Connect Wearable" component={ConnectWearable} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
const gyms = [
    {
      name: "Gym A",
      address: "123 Main St",
      activities: ["Yoga", "Pilates"]
    },
    {
      name: "Gym B", 
      address: "456 Park Ave",
      activities: ["Basketball", "Boxing"]
    }
  ];

function renderGymCards(gyms) {
  return gyms.map(gym => (
    <GymInfo 
        key={gym.name}
        name={gym.name} 
        address={gym.address}
        activities={gym.activities}
    />
  ));
}

export default function side() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}