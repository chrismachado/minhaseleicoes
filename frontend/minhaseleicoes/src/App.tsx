import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '@screens/WelcomeScreen';
import ResultsScreen from '@screens/ResultsScreen';
import ChartScreen from '@screens/ChartScreen';
import MainMenuScreen from '@screens/MainMenuScreen';


const Stack = createStackNavigator();

export default function App() {

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ title: 'Boas-vindas' }}
          />
          <Stack.Screen 
            name="MainMenu" 
            component={MainMenuScreen} 
            options={{ title: 'Menu principal' }}
          />
          <Stack.Screen 
            name="Results"
            component={ResultsScreen}
            options={{ title: 'Resultados' }}
          />
          <Stack.Screen 
            name="Chart"
            component={ChartScreen}
            options={{title: 'Gráficos'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};