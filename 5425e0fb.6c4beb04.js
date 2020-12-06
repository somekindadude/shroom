(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{66:function(o,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return m}));var e=t(2),r=t(6),a=(t(0),t(91)),i={id:"adding-objects",title:"Adding objects"},s={unversionedId:"adding-objects",id:"adding-objects",isDocsHomePage:!1,title:"Adding objects",description:"The room is so empty right now. Let's add a character and a sofa for him to sit on.",source:"@site/docs/adding-objects.md",slug:"/adding-objects",permalink:"/shroom/docs/adding-objects",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/adding-objects.md",version:"current",sidebar:"someSidebar",previous:{title:"Applying room textures",permalink:"/shroom/docs/applying-room-textures"}},c=[],d={rightToc:c};function m(o){var n=o.components,t=Object(r.a)(o,["components"]);return Object(a.b)("wrapper",Object(e.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The room is so empty right now. Let's add a character and a sofa for him to sit on."),Object(a.b)("pre",null,Object(a.b)("code",Object(e.a)({parentName:"pre"},{className:"language-ts"}),'import * as PIXI from "pixi.js";\n\nimport { Room, FloorFurniture, Avatar, Shroom } from "@jankuss/shroom";\n\nconst view = document.querySelector("#root") as HTMLCanvasElement;\nconst application = new PIXI.Application({ view });\n\nconst shroom = Shroom.create({ application, resourcePath: "./resources" });\nconst room = Room.create(shroom, {\n  tilemap: `\n    0000\n    0000\n    0000\n   `,\n});\n\nconst furni = new FloorFurniture({\n  roomX: 0,\n  roomY: 0,\n  roomZ: 0,\n  direction: 4,\n  type: "club_sofa",\n});\n\nconst avatar = new Avatar({\n  look: "hd-180-1.hr-100-61.ch-210-66.lg-280-110.sh-305-62",\n  direction: 4,\n  roomX: 0,\n  roomY: 0,\n  roomZ: 0,\n});\n\navatar.action = "sit";\n\nroom.addRoomObject(furni);\nroom.addRoomObject(avatar);\n\nroom.x = 100;\nroom.y = 200;\n\napplication.stage.addChild(room);\n')))}m.isMDXComponent=!0}}]);