import * as PIXI from "pixi.js";

import { Room, loadRoomTexture, FloorFurniture, Avatar } from "shroom";
import { DummyRoom } from "./DummyRoom";

const view = document.querySelector("#root") as HTMLCanvasElement | undefined;
const container = document.querySelector("#container") as
  | HTMLDivElement
  | undefined;
if (view == null || container == null) throw new Error("Invalid view");

const application = new PIXI.Application({
  view,
  antialias: false,
  resolution: window.devicePixelRatio,
  autoDensity: true,
  width: 1600,
  height: 900,
  backgroundColor: 0x000000,
});

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const room = Room.create({
  application,
  tilemap: `
    0000
    0000
    0000
   `,
  resourcePath: "./resources",
});

const furni = new FloorFurniture({
  roomX: 0,
  roomY: 0,
  roomZ: 0,
  direction: 4,
  type: "club_sofa",
});

const avatar = new Avatar({
  look: "hd-180-1.hr-100-61.ch-210-66.lg-280-110.sh-305-62",
  direction: 4,
  roomX: 0,
  roomY: 0,
  roomZ: 0,
});

avatar.action = "sit";

room.addRoomObject(furni);
room.addRoomObject(avatar);

room.x = 100;
room.y = 200;

application.stage.addChild(room);
