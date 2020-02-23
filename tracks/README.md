
React Navigation Fix
We will neet to install
npm install react-navigation

expo install react-native-gesture-handler@1.3.0 react-native-reanimated react-native-screens react-navigation-stack react-native-safe-area-context @react-native-community/masked-view react-navigation-tabs

And import them in the code
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

Install native elements
npm install react-native-elements

Install axios
npm install axios

Install ngrok
npm install -g ngrok OR sudo snap install ngrok (*)

to run
ngrok http 3000 (port of the npm run dev)

Install react-native-maps
npx expo-cli install react-native-maps

####