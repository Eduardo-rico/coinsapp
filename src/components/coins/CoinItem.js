import React from 'react';
import {StyleSheet, Text, View, Image, Platform, Pressable} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const CoinItem = ({item, onPress}) => {
  const getImgArrow = () => {
    if (item.percent_change_1h > 0) {
      return require('../../assets/arrow_up.png');
    } else {
      return require('../../assets/arrow_down.png');
    }
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.symbolText}>{item.symbol}</Text>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.priceText}>{`$${item.price_usd}`}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.percentText}>{item.percent_change_1h}</Text>
        <Image style={styles.imageIcon} source={getImgArrow()} />
      </View>
    </Pressable>
  );
};

export default CoinItem;

const styles = StyleSheet.create({
  imageIcon: {
    width: 22,
    height: 22,
  },
  priceText: {
    color: 'white',
    fontSize: 14,
  },

  container: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
    marginLeft: Platform.OS == 'ios' ? 16 : 0,
    paddingLeft: Platform.OS == 'ios' ? 0 : 16,
  },
  row: {
    flexDirection: 'row',
  },
  symbolText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12,
  },
  nameText: {
    color: 'white',
    fontSize: 14,
    marginRight: 12,
  },
  percentText: {
    color: 'white',
    fontSize: 12,
    marginRight: 8,
  },
});
