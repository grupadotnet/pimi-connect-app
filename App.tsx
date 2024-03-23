import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import i18next from 'i18next';
import detector from 'i18next-browser-languagedetector';
import commonEN from 'public/locales/en/common.json';
import commonPL from 'public/locales/pl/common.json';
import { initReactI18next } from 'react-i18next';

import { ThemeProvider } from '@/hooks';
import { Components, Home } from '@/screens';
import { RootStackParamList } from '@/types/param';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  i18next
    .use(initReactI18next)
    .use(detector)
    .init({
      compatibilityJSON: 'v3',
      fallbackLng: 'pl',
      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
      resources: {
        pl: {
          common: commonPL,
        },
        en: {
          common: commonEN,
        },
      },
    });

  return (
    <NavigationContainer>
      <ThemeProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Components" component={Components} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
