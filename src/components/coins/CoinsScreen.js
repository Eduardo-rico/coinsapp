import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import Http from '../../lib/http';
import CoinItem from './CoinItem';
import Colors from '../../res/colors';

const CoinsScreen = (props) => {
  const [arraycoins, guardarArrayCoins] = useState([]);
  const [loading, guardarLoading] = useState(true);

  useEffect(() => {
    const consultar = async () => {
      try {
        const coins = await Http.instance.get(
          'http://api.coinlore.net/api/tickers/',
        );
        guardarArrayCoins(coins.data);
        if (coins) {
          guardarLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    consultar();
    // console.log(arraycoins);
    // return () => {
    //   cleanup;
    // };
  }, [loading]);

  const handlePress = () => {
    console.log('go to detail', props);
    props.navigation.navigate('CoinDetail');
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator color="blue" size="large" style={styles.loader} />
      ) : null}

      <FlatList
        data={arraycoins}
        renderItem={({item}) => <CoinItem item={item} />}
      />
    </View>
  );
};

export default CoinsScreen;

const styles = StyleSheet.create({
  loader: {
    marginTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  titleText: {
    color: 'white',
    textAlign: 'center',
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
});
