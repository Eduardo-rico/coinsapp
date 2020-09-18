import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SectionList,
  FlatList,
} from 'react-native';
import Http from '../../lib/http';
import Colors from '../../res/colors';
import CoinMarketItem from '../coinDetail/CoinMarketItem';

const CoinsDetailScreen = (props) => {
  const [moneda, guardarMoneda] = useState({});
  const [mercado, guardarMercado] = useState([]);

  const getMarket = async (coinId) => {
    const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`;
    const markets = await Http.instance.get(url);
    guardarMercado(markets);
  };

  const getSymbolIcon = (nameStr) => {
    if (nameStr) {
      const symbol = nameStr.toLowerCase().replace(' ', '-');
      return `https://c1.coinlore.com/img/25x25/${symbol}.png`;
    }
  };

  const getSections = (coin) => {
    const seccion = [
      {
        title: 'Total Volume',
        data: [coin.market_cap_usd],
      },
      {
        title: 'Volume 24h',
        data: [coin.volume24],
      },
      {
        title: 'Change 24',
        data: [coin.percent_change_24h],
      },
    ];
    return seccion;
  };

  useEffect(() => {
    const {coin} = props.route.params;
    props.navigation.setOptions({title: coin.symbol});
    guardarMoneda(coin);
    getMarket(coin.id);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Image
          style={styles.iconImg}
          source={{uri: getSymbolIcon(moneda.name)}}
        />
        <Text style={styles.titleText}>{moneda.name}</Text>
      </View>

      <SectionList
        style={styles.sectionList}
        sections={getSections(moneda)}
        keyExtractor={(item) => item}
        renderItem={({item}) => (
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>{section.title}</Text>
          </View>
        )}
      />
      <Text style={styles.marketTitle}>Markets</Text>
      <FlatList
        style={styles.list}
        data={mercado}
        keyExtractor={(item) => item}
        horizontal={true}
        renderItem={({item}) => <CoinMarketItem item={item} />}
      />
    </View>
  );
};

export default CoinsDetailScreen;

const styles = StyleSheet.create({
  marketTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 16,
    marginLeft: 16,
    fontWeight: 'bold',
  },
  list: {
    maxHeight: 80,
    paddingLeft: 16,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  subHeader: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 16,
    flexDirection: 'row',
  },
  iconImg: {
    width: 25,
    height: 25,
  },
  titleText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: 'white',
    fontSize: 14,
  },
  sectionText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionList: {
    maxHeight: 220,
  },
});
