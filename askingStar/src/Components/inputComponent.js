import { TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";

const Inputcomponent = ({ placeholder, func, value, mode, onBlur, secureTextEntry }) => {
  const styles = StyleSheet.create({
    stylebutton: {
      borderWidth: 1,
      backgroundColor: "none",
      borderColor: "white",
      borderRadius: 5,
      color: "white",
      padding: 2,

      marginHorizontal: 0.5,
      width: "100%",
    },
  });

  return (
    <TextInput
      style={styles.stylebutton}
      placeholder={placeholder}
      mode={mode}
      onChangeText={func}
      value={value}
      inputMode={mode}
      secureTextEntry={secureTextEntry}
      textColor="white"
      onBlur={onBlur}
    />
  );
};

export default Inputcomponent;
