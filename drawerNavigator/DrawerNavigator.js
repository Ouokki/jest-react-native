import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const { Screen, Navigator } = createDrawerNavigator();

export default function Navigation() {

    function HomeScreen({ navigation }) {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome!</Text>
            <Button
              onPress={() => navigation.navigate('Notifications')}
              title="Go to notifications"
            />
          </View>
        );
      }
      
    function NotificationsScreen({ navigation }) {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is the notifications screen</Text>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
          </View>
        );
      }
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Notifications" component={NotificationsScreen} />
    </Navigator>
  );
}

