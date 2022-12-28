import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Bitcoin data={this.props.data.bitcoin} />
      </View>
    );
  }
}

function Bitcoin(props) {
  let title = props.data.id.toUpperCase() || " ";
  let symbol = props.data.symbol || " ";
  let currencySymbol = props.data.currencySymbol || " ";
  let price = parseFloat(props.data.rateUsd) || 0;
  price = formatter.format(price);

  return (
    <View>
      <Text>Currency: {title}</Text>
      <Text>Symbol: {symbol}</Text>
      <Text>currencySymbol: {currencySymbol}</Text>
      <Text>Price: {price}</Text>
    </View>
  );
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// <FlatList
//     horizontal={true}
//     data={DATA}
//     renderItem={renderItem}
//     keyExtractor={(item) => item.id}
//     extraData={selectedId}
//   />
