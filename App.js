
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./navigation/Tabs";
import AuthStack from "./navigation/AuthStack";

const App = () => {
  const [user, setUser] = useState( Tabs);

  return (
    <NavigationContainer>
    {user ? <AuthStack /> : <Tabs />}
    </NavigationContainer>
  )
}

export default App;
