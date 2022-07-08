import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Images } from '@/constants';
import { TypesNavigation } from '@/types';
import { Background, Logo } from './styled';

function Splash() {
  const navigation =
    useNavigation<TypesNavigation.SplashScreenNavigationProp>();
  useEffect(() => {
    setTimeout(() => navigation.push('Home'), 1000);
  }, [navigation]);
  return (
    <Background source={Images.splashBackground}>
      <Logo source={Images.dayClouds} />
    </Background>
  );
}

export default Splash;
