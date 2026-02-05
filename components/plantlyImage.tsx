import { Image, useWindowDimensions } from "react-native";

export function PlantlyImage({ size }: { size?: number }) {
  //useWindowDimensions to get the width of the screen
  //for adaptive image sizing
  const { width } = useWindowDimensions();
  const imageSize = size ?? Math.min(width / 1.5, 400);
  //require() is  important beacause it allows React Native to bundle the image correctly
  return (
    <Image
      source={require("@/assets/plantly.png")}
      style={{ width: imageSize, height: imageSize }}
    />
  );
}
