import React from "react";
import { StyleSheet, View } from "react-native";

import { Layout } from "../constants/";

import {
  TextRN,
  VStack,
  HStack,
  Box,
  BR,
  Center,
  Divider,
} from "../componets/base/";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextRN>Home Screen</TextRN>
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
    <View style={{ width: Layout.window.width, backgroundColor: "yellow" }}>
      <HStack bg="red" justifyContent="space-between">
        <TextRN>Currency: {title}</TextRN>
        <TextRN>Symbol: {symbol}</TextRN>
      </HStack>
      <BR height={12} />
      <VStack alignItems="flex-end" bg="blue">
        <TextRN>CurrencySymbol: {currencySymbol}</TextRN>
        <TextRN h2 style={{ color: "red" }}>
          Price: {price}
        </TextRN>
        <Center>
          <TextRN style={{ color: "red" }}>world</TextRN>
        </Center>
        <Box
          w={50}
          h={50}
          bg="green"
          alignItems="flex-start"
          justifyContent="flex-end"
          round={15}
        ></Box>
      </VStack>
      <Center
        bg="red"
        direction="column"
        w={Layout.window.width / 3}
        h={Layout.window.width / 3}
      >
        <TextRN>Center</TextRN>
        <TextRN>Center</TextRN>
      </Center>

      <VStack alignItems="center">
        <Box
          w={Layout.window.width / 3}
          h={Layout.window.width / 3}
          bg="purple"
          alignItems="flex-start"
          justifyContent="flex-end"
          round={15}
        >
          <TextRN style={{ color: "red" }}>Hello</TextRN>
          <Center>
            <TextRN style={{ color: "red" }}>world</TextRN>
          </Center>
        </Box>
      </VStack>
      <Center>
        <TextRN size={16}>Hello</TextRN>
        <Divider w={22} h={2} bg="red" m={5}></Divider>
        <TextRN>world</TextRN>
      </Center>
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
