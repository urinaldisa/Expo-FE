import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import Gap from "../../components/atom/Gap";
import Text from "../../components/atom/Text";
import TextInput from "../../components/atom/TextInput";
import CustomButton from "../../components/molecules/Button";
import { API_HOST } from "../../config";
import useForm from "../../utils/useForm";
import { Picker } from "@react-native-picker/picker";
import { storeData } from "../../utils/storage/storage";

const Register = ({ navigation }: any) => {
  const [gender, setGender] = useState("male");
  const [form, setForm] = useForm({
    name: "",
    email: "",
    status: "active",
  });
  const handleSubmit = () => {
    axios
      .post(
        `${API_HOST.main}`,
        { ...form, gender: gender },
        {
          headers: {
            Authorization: `Bearer ${API_HOST.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.status);
        storeData("profile", res.data.data);
        navigation.reset({ index: 0, routes: [{ name: "Main" }] });
      });
  };
  return (
    <View>
      <Gap height={5} />
      <Text size={30} align="center" type="regular">
        Register
      </Text>
      <View style={styles.content}>
        <TextInput
          type="default"
          label="Name"
          labeltype="semibold"
          value={form.name}
          onChangeText={(value) => setForm("name", value)}
        />
        <TextInput
          type="default"
          label="Email"
          labeltype="semibold"
          value={form.email}
          onChangeText={(value) => setForm("email", value)}
        />
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
        <Gap height={5} />
        <CustomButton
          type="success"
          rounded
          title="Login"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  content: {
    marginHorizontal: widthPercentageToDP(5),
  },
});
