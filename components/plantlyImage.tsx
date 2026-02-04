import { Image, useWindowDimensions } from "react-native";

export function PlantlyImage() {
  //useWindowDimensions to get the width of the screen
  //for adaptive image sizing
  const { width } = useWindowDimensions();
  const imageSize = Math.min(width / 1.5, 400);

  //require() is  important beacause it allows React Native to bundle the image correctly
  return (
    <Image
      source={require("@/assets/plantly.png")}
      style={{ width: imageSize, height: imageSize }}
    />
  );
}
