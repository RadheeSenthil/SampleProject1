Installing React Navigation Support

npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context

For iOS
npx pod-install ios

For Android
react-native-screens package requires one additional configuration step to properly work on Android devices. Edit MainActivity.java file which is located in android/app/src/main/java/<your package name>/MainActivity.java.
Add the following code to the body of MainActivity class:
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
import android.os.Bundle;

For Stack Navigation
npm install @react-navigation/native-stack

For Tab Navigation
npm install @react-navigation/bottom-tabs

Added Tab Navigation

const HomeTab = () => {
  return (

    <NavTab.Navigator>

      <NavTab.Screen name='HomePage' component={HomePage} />
      <NavTab.Screen name='WishListPage' component={WishListPage} />
      <NavTab.Screen name='SettingsPage' component={SettingsPage} />

    </NavTab.Navigator>
  );

}

Added Stack Navigation in App Component

  <NavigationContainer>
      <NavStack.Navigator>

        <NavStack.Screen name='HomeTab' component={HomeTab}  options={{ headerShown: false }} />
        <NavStack.Screen name='PLP' component={PLP} />
        <NavStack.Screen name='PDP' component={PDP} />

      </NavStack.Navigator>
    </NavigationContainer>
