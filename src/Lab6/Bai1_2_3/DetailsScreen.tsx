import React from 'react';
import { View, Text, Button } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import COLORS from '../../assets/Colors';

type RootStackParamList = {
  Home: undefined;
  Details: { name: string, id: number };
};

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

type Props = {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
};

const DetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { name, id } = route.params;

  const goBack = () => {
    navigation.goBack();
  };

  const resetStack = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  const popScreen = () => {
    navigation.pop();
  };

  const popToTop = () => {
    navigation.popToTop();
  };

  return (
    <View style = {{flex: 1, marginHorizontal: 15, justifyContent: 'center'}}>
      <Text style = {{fontSize: 18, color: "#FFAC30", fontWeight: '500'}}>Xin Chào: {name}</Text>
      <Text style = {{fontSize: 18, color: "#FFAC30", fontWeight: '500', marginBottom: 40}}>Id của bạn là: {id}</Text>
      <Button title="Go Back" onPress={goBack}  color={"#FFAC30"}/>
      <Button title="Reset Stack" onPress={resetStack} color={"#FFAC30"}/>
      <Button title="Pop Screen" onPress={popScreen} color={"#FFAC30"}/>
      <Button title="Pop To Top" onPress={popToTop} color={"#FFAC30"}/>
    </View>
  );
};

export default DetailScreen;