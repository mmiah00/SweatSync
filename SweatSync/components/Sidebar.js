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
      name: "Fitness & Fuel",
      address: "390 Western Ave, Brighton, MA",
      activities: ["Strength Training", "Women's Personal Trainig", "Group Exercises"]
    },
    {
      name: "Amplify Fitness", 
      address: "1230 Soldiers Field Road, Boston, MA",
      activities: ["Kickboxing", "Personal Training", "Youth Classes", "Outdoor Classes"]
    },
    {
      name: "Red City Fitness", 
      address: "1 Braintree St, Allston, MA",
      activities: ["Group Class", "Boxing", "Personal Training", ]
    },
    {
      name: "NB Fitness Club, LLC", 
      address: "40 Life St, Brighton, MA",
      activities: ["Cycling", "Kickboxing", "Resistance Training"]
    },
    {
      name: "GymIt", 
      address: "920 Commonwealth Ave, Boston, MA",
      activities: ["Personal Training", "Resistance Training", "Strength Training"]
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