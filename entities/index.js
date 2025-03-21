import Box from "./Components/Box";
import BoundaryLeft from "./Components/BoundaryLeft";
import BoundaryTop from "./Components/BoundaryTop";
import BoundaryRight from "./Components/BoundaryRight";
import BoundaryBottom from "./Components/BoundaryBottom";
import Matter from "matter-js";
import Constants from "./Constants";
import { Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default (gameWorld) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;

  return {
    physics: { engine, world },
    Square: Box(world, "green", { x: 100, y: 120 }, { width: 40, height: 40 }),
    CenterSquare: Box(world, "red", { x: (screenWidth - 10) / 2, y: (screenHeight - 10) / 2 }, { width: 20, height: 20 }),

    BottomBoundary: BoundaryBottom(world, "yellow", { x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT }, { height: 90, width: Constants.WINDOW_WIDTH }),
    TopBoundary: BoundaryTop(world, "green", { x: Constants.WINDOW_WIDTH / 2, y: 0 }, { height: 90, width: Constants.WINDOW_WIDTH }),
    LeftBoundary: BoundaryLeft(world, "red", { x: 0, y: Constants.WINDOW_HEIGHT / 2 }, { height: Constants.WINDOW_HEIGHT, width: 90 }),
    RightBoundary: BoundaryRight(world, "red", { x: Constants.WINDOW_WIDTH, y: Constants.WINDOW_HEIGHT / 2 }, { height: Constants.WINDOW_HEIGHT, width: 90 }),
  };
};
