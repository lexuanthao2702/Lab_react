import React from 'react';
import {
  StatusBar,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {PlayfairDisplay, fonsPoppins} from '../assets/fonts';
import COLORS from '../assets/Colors';

const Bai2_FlexBox = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={{
          uri: 'https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/1/2/1200x1800.jpg',
        }}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.container}>
          <Text style={styles.text}>Bó Già</Text>
          <Text style={styles.title}>
            Phim 'Bố già' tung poster chính thức đậm sắc retro: Kiểu tóc của dàn
            nhân vật chính đều được 'nâng cấp'
          </Text>
          <TouchableOpacity style={styles.styleButton}>
            <Text style={styles.styleTextButton}>Xem Phim</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  text: {
    fontSize: 40,
    color: COLORS.RED,
    fontFamily: PlayfairDisplay.italic,
    marginBottom: 15,
  },
  title: {
    fontSize: 15,
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
  styleButton: {
    width: 130,
    padding: 10,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    marginTop: 10,
  },
  styleTextButton: {
    color: COLORS.HEX_BLACK,
    fontFamily: fonsPoppins.medium,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Bai2_FlexBox;
