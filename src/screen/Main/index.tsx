import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Gap from "../../components/atom/Gap";
import Text from "../../components/atom/Text";
import CustomButton from "../../components/molecules/Button";
import { API_HOST } from "../../config";
import { colors } from "../../themes/colors";
import { getData } from "../../utils/storage/storage";

const Main = ({ navigation }: any) => {
  const [alert, setAlert] = useState(false);
  const [get, setGetData] = useState("");

  useEffect(() => {
    getData("profile").then((res) => {
      setGetData(res);
    });
  }, []);
  console.log("profile", get);
  const handleDelete = () => {
    axios
      .delete(`https://gorest.co.in/public/v1/users/${get.id}`, {
        headers: {
          Authorization: `Bearer ${API_HOST.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setAlert(true);
        setTimeout(() => {
          navigation.reset({ index: 0, routes: [{ name: "Register" }] });
        }, 2000);
      });
  };
  return (
    <View>
      <Gap height={heightPercentageToDP(1)} />
      <Text type="regular" align="center" size={30}>
        Profile
      </Text>
      <Gap height={heightPercentageToDP(0.8)} />
      <View style={styles.content}>
        <Gap height={heightPercentageToDP(0.8)} />
        <Text type="regular" size={20}>
          Name : {get?.name}
        </Text>
        <Text type="regular" size={20}>
          Email : {get?.email}
        </Text>
        <Text type="regular" size={20}>
          Gender : {get?.gender}
        </Text>
        <Gap height={heightPercentageToDP(1)} />
        <CustomButton
          type="warning"
          rounded
          title="Update Profile"
          onPress={() => navigation.navigate("UpdateData", get)}
        />
        <Gap height={heightPercentageToDP(0.3)} />
        <CustomButton
          type="danger"
          rounded
          title="Delete Account"
          onPress={handleDelete}
        />
        <Gap height={heightPercentageToDP(0.3)} />
        <CustomButton
          type="success"
          rounded
          title="Get List Account"
          onPress={() => navigation.navigate("List")}
        />
      </View>
      <AwesomeAlert
        show={alert}
        title="Deleted"
        message="Akun berhasil dihapus"
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  content: {
    marginHorizontal: widthPercentageToDP(5),
    borderTopWidth: 0.4,
    borderColor: "grey",
  },
});
