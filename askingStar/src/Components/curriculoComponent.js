import { View, Text } from "react-native";
import Inputcomponent from "./inputComponent";

const ComponentCurrirulo = ({ setCurriculo, visibilitycurriculo }) => {
  if (visibilitycurriculo) {
    return (
      <View style={{ width: "60%", backfaceVisibility: "hidden" }}>
        <Text style={{ color: "white" }}>Curriculo</Text>

        <Inputcomponent
          func={(text) => setCurriculo(text.target.value)}
          placeholder={"Link Curriculo"}
        />
      </View>
    );
  } else {
    return;
  }
};

export default ComponentCurrirulo;
