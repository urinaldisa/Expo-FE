import axios from "axios";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Gap from "../../components/atom/Gap";
import Text from "../../components/atom/Text";
import TextInput from "../../components/atom/TextInput";
import CustomButton from "../../components/molecules/Button";
import { API_HOST } from "../../config";
import { storeData } from "../../utils/storage/storage";
import useForm from "../../utils/useForm";

const UpdateData = ({ route, navigation }: any) => {
  const params = route.params,
    [form, setForm] = useForm({
      name: params.name,
      email: params.email,
      status: params.status,
    });
  const handleSubmit = () => {
    console.log(form);
    axios
      .patch(`${API_HOST.main}/${params.id}`, form, {
        headers: {
          Authorization: `Bearer ${API_HOST.token}`,
        },
      })
      .then((res) => {
        console.log("hasil :", res);
        storeData("profile", res.data.data);
        navigation.replace("Main");
      });
  };
  return (
    <View>
      <Gap height={heightPercentageToDP(1)} />
      <Text type="regular" align="center" size={30}>
        Update Data Profile
      </Text>
      <View style={styles.content}>
        <TextInput
          type="default"
          label="Name"
          labeltype="semibold"
          defaultValue={params.name}
          textColor="black"
          onChangeText={(value) => setForm("name", value)}
        />
        <TextInput
          type="default"
          label="Email"
          labeltype="semibold"
          defaultValue={params.email}
          textColor="black"
          onChangeText={(value) => setForm("email", value)}
        />
        <Gap height={heightPercentageToDP(1)} />
        <CustomButton
          title="Save Profile"
          rounded
          type="success"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default UpdateData;

const styles = StyleSheet.create({
  content: {
    marginHorizontal: widthPercentageToDP(5),
  },
});
