import * as PIXI from "pixi.js";
import { parseTileMapString } from "./util/parseTileMapString";
import { Room } from "./Room";
import { Furniture } from "./Furniture";
import { FurnitureLoader } from "./FurnitureLoader";
import { AnimationTicker } from "./AnimationTicker";

const view = document.querySelector("#root") as HTMLCanvasElement | undefined;
const container = document.querySelector("#container") as
  | HTMLDivElement
  | undefined;
if (view == null || container == null) throw new Error("Invalid view");

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
const application = new PIXI.Application({
  view,
  antialias: true,
  resolution: window.devicePixelRatio,
  autoDensity: true,
  width: 800,
  height: 600,
});

const animationTicker = new AnimationTicker(application);
const furniLoader = new FurnitureLoader();

const room = new Room(
  parseTileMapString(`
00000000
00000000
00000000
00000000
00000000
00000000
00000000
00000000
00000000
00000000
`)
);

const furnis: Furniture[] = [];
/*
for (let y = 0; y < 8; y++) {
  for (let x = 0; x < 8; x++) {
    const dragon = new Furniture(
      animationTicker,
      furniLoader,
      "olympics_r16_cheerleader",
      6,
      "0",
      {
        roomX: x,
        roomY: y,
      }
    );

    furnis.push(dragon);

    //room.addFurniture(dragon);
  }
}*/

const directions = [0, 2, 4, 6];
let index = 0;

room.x = application.screen.width / 2 - room.roomWidth / 2;
room.y = application.screen.height / 2 - room.roomHeight / 2;

console.log(
  application.renderer.width,
  application.renderer.height,
  room.roomWidth,
  room.roomHeight
);

application.stage.addChild(room);
