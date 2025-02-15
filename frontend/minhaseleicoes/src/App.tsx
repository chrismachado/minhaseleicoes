import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '@screens/WelcomeScreen';
import ResultsScreen from '@screens/ResultsScreen';

const Stack = createStackNavigator();

export default function App() {

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Results">
          <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ title: 'Boas-vindas' }}
          />
          <Stack.Screen 
            name="Results"
            component={ResultsScreen}
            options={{ title: 'Resultados' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};