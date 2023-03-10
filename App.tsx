/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomePage from './app/Home/components/HomePage';
import WishListPage from './app/WishList/components/WishListPage';
import SettingsPage from './app/Settings/components/SettingsPage';
import PDP from './app/PDP/components/PDP';
import PLP from './app/PLP/components/PLP';
import Counter from './app/counter/components/Counter';
import BasicMMYYPage from './app/basicMonthYear/components/BasicMMYYPage';
import AdvMMYYPage from './app/advMonthYear/components/AdvMMYYPage';


import { NavRoutes } from './app/common/constants';


const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};



const NavStack = createNativeStackNavigator();
const NavTab = createBottomTabNavigator();


const HomeTab = () => {
  return (

    <NavTab.Navigator>

      <NavTab.Screen name={NavRoutes.HOME_NAME} component={HomePage} />
      <NavTab.Screen name={NavRoutes.WISHLIST_NAME} component={WishListPage} />
      <NavTab.Screen name={NavRoutes.SETTINGS_NAME} component={SettingsPage} />

    </NavTab.Navigator>
  );

}



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return(
    <NavigationContainer>
      <NavStack.Navigator>

        <NavStack.Screen name={NavRoutes.HOMETAB_NAME} component={HomeTab}  options={{ headerShown: false }} />
        <NavStack.Screen name={NavRoutes.PLP_NAME} component={PLP} />
        <NavStack.Screen name={NavRoutes.PDP_NAME} component={PDP} />
        <NavStack.Screen name={NavRoutes.COUNTER_NAME} component={Counter} />
        <NavStack.Screen name={NavRoutes.BASICMMYY_NAME} component={BasicMMYYPage} />
        <NavStack.Screen name={NavRoutes.ADVMMYY_NAME} component={AdvMMYYPage} />

      </NavStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
