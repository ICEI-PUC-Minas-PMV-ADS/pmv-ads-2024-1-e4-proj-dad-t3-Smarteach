import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

function HomeTabs({route}) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "keyboard-o";
          } else if (route.name === "Calendar") {
            iconName = "calendar";
          } else if (route.name === "Profile") {
            iconName = "user";
          } else if (route.name === "Settings") {
            iconName = "cog";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#004AAD",
        inactiveTintColor: "gray",
        style: {
          backgroundColor: "#004AAD",
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={TelaTeste1}
        options={{ headerShown: false }}
      />
      {/* <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

const HomeScreen = () => {
  return <HomeTabs />;
};

export default HomeScreen;
