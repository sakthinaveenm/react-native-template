import {View, Text} from 'react-native';
import React from 'react';
import AnimatedSplash from 'react-native-animated-splash-screen';

const SplashScreen = () => {
  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={this.state.isLoaded}
      logoImage={require('./assets/logo.png')}
      backgroundColor={'#262626'}
      logoHeight={150}
      logoWidth={150}>
      <Loading />
    </AnimatedSplash>
  );
};

export default SplashScreen;
