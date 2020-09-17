import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const CoinItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.symbolText}>{item.symbol}</Text>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.priceText}>{`$${item.price_usd}`}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.percentText}>{item.percent_change_1h}</Text>
      </View>
    </View>
  );
};

export default CoinItem;

const styles = StyleSheet.create({
  priceText: {
    color: 'white',
    fontSize: 14,
  },

  container: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
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
  },
});
