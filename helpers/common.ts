import { Dimensions } from "react-native";

export const { width: deviceWidth, height: deviceHeight } =
  Dimensions.get("window");

export const hp = (percentage: number) => (percentage * deviceHeight) / 100;
export const wp = (percentage: number) => (percentage * deviceWidth) / 100;
