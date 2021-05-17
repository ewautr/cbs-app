import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider, useSelector } from "react-redux";
import ReduxThunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFonts, OpenSans_400Regular, OpenSans_700Bold, Teko_400Regular, Teko_700Bold } from "@expo-google-fonts/dev";

import Colors from "./constants/Colors";

import HomeScreen from "./screens/HomeScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import ChatScreen from "./screens/ChatScreen";
import ChatConversationScreen from "./screens/ChatConversationScreen";
import MenuScreen from "./screens/MenuScreen";
import PostsOverviewScreen from "./screens/PostsOverviewScreen";
import PostDetailScreen from "./screens/PostDetailScreen";
import AuthScreen from "./screens/AuthScreen";
import postsReducer from "./store/reducers/posts";
import authReducer from "./store/reducers/Auth";
import AppLoading from "expo-app-loading";

//default bg color
DefaultTheme.colors.background = Colors.backgroundHighlight;

const Tabs = createBottomTabNavigator();
function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "ios-home";
          } else if (route.name === "Posts") {
            iconName = "ios-search";
          } else if (route.name === "Discover") {
            iconName = "ios-search";
          } else if (route.name === "Chat") {
            iconName = "ios-chatbox";
          } else if (route.name === "Menu") {
            iconName = "ios-menu";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.highlight,
        inactiveTintColor: Colors.grayText,
        upperCaseLabel: false,
        labelStyle: {
          fontSize: 12,
          textTransform: "uppercase",
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen name="Home" component={homeStackNavigator} />
      <Tabs.Screen name="Posts" component={postStackNavigator} />
      <Tabs.Screen name="Discover" component={discoverStackNavigator} />
      <Tabs.Screen name="Chat" component={chatStackNavigator} />
      <Tabs.Screen name="Menu" component={menuStackNavigator} />
    </Tabs.Navigator>
  );
}
const HomeStack = createStackNavigator();
function homeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          headerTintColor: Colors.highlight,
          headerTitleStyle: {
            fontWeight: "bold",
            textTransform: "uppercase",
          },
        }}
      />
    </HomeStack.Navigator>
  );
}
const PostStack = createStackNavigator();
function postStackNavigator() {
  return (
    <PostStack.Navigator>
      <PostStack.Screen
        name="PostsOverviewScreen"
        component={PostsOverviewScreen}
        options={{
          title: "Posts",
          headerTintColor: Colors.highlight,
          headerTitleStyle: {
            fontWeight: "bold",
            textTransform: "uppercase",
          },
        }}
      />
      <PostStack.Screen
        name="PostDetailScreen"
        component={PostDetailScreen}
        options={({ route }) => ({
          title: route.params.postTitle,
          headerTintColor: Colors.highlight,
          headerTitleStyle: {
            fontWeight: "bold",
            textTransform: "uppercase",
          },
        })}
      />
    </PostStack.Navigator>
  );
}
const DiscoverStack = createStackNavigator();
function discoverStackNavigator() {
  return (
    <DiscoverStack.Navigator>
      <DiscoverStack.Screen
        name="DiscoverScreen"
        component={DiscoverScreen}
        options={{
          title: "Discover",
          headerTintColor: Colors.highlight,
          headerTitleStyle: {
            fontWeight: "bold",
            textTransform: "uppercase",
          },
        }}
      />
    </DiscoverStack.Navigator>
  );
}
const ChatStack = createStackNavigator();
function chatStackNavigator() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          title: "Chat",
          headerTintColor: Colors.highlight,
          headerTitleStyle: {
            fontWeight: "bold",
            textTransform: "uppercase",
          },
        }}
      />
      <ChatStack.Screen name="ChatConversationScreen" component={ChatConversationScreen} options={{ title: "Messages" }} />
    </ChatStack.Navigator>
  );
}
const MenuStack = createStackNavigator();
function menuStackNavigator() {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          title: "Menu",
          headerTintColor: Colors.highlight,
          headerTitleStyle: {
            fontWeight: "bold",
            textTransform: "uppercase",
          },
        }}
      />
    </MenuStack.Navigator>
  );
}
const AuthStack = createStackNavigator();
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        component={AuthScreen}
        name="AuthScreen"
        options={{
          title: "Log In",
        }}
      />
    </AuthStack.Navigator>
  );
};

// checking if user is logged in and displayng relevant view
const UserAccess = () => {
  const userToken = useSelector((state) => state.auth.token);

  return <NavigationContainer>{userToken == null ? <AuthStackNavigator /> : <TabsNavigator />}</NavigationContainer>;
};

const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
    Teko_400Regular,
    Teko_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <UserAccess />
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center"
  },
});
