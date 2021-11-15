import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Gap from "../../components/atom/Gap";
import Text from "../../components/atom/Text";
import { API_HOST } from "../../config";

const List = () => {
  const [data, setData] = useState("");
  const getDataList = () => {
    axios.get(`${API_HOST.main}`).then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  };
  const renderItem = ({ item }: any) => (
    <View style={styles.content}>
      <Text align="center" type="semibold">
        {item.name}
      </Text>
      <Text align="center" type="regular">
        {item.email}
      </Text>
      <Text align="center" type="regular">
        {item.gender}
      </Text>
    </View>
  );

  useEffect(() => {
    getDataList();
  }, []);
  return (
    <View>
      <Gap height={heightPercentageToDP(1)} />
      <Text type="regular" align="center" size={30}>
        List Data Account
      </Text>
      <Gap height={heightPercentageToDP(1)} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, idx: number) => idx.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  content: {
    height: heightPercentageToDP(10),
    backgroundColor: "white",
    marginHorizontal: widthPercentageToDP(5),
    borderRadius: 10,
    marginBottom: heightPercentageToDP(3),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
