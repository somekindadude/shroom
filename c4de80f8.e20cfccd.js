(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{78:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return n})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return i})),o.d(t,"default",(function(){return d}));var a=o(2),s=o(6),r=(o(0),o(91)),n={id:"install",title:"Installation",slug:"/"},l={unversionedId:"install",id:"install",isDocsHomePage:!1,title:"Installation",description:"1. Install the shroom package",source:"@site/docs/install.md",slug:"/",permalink:"/shroom/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/install.md",version:"current",sidebar:"someSidebar",next:{title:"Create a room",permalink:"/shroom/docs/create-room"}},i=[{value:"1. Install the shroom package",id:"1-install-the-shroom-package",children:[]},{value:"2. Install <code>swftools</code> (http://www.swftools.org/download.html)",id:"2-install-swftools-httpwwwswftoolsorgdownloadhtml",children:[]},{value:"3. Dump assets from external variables into your project",id:"3-dump-assets-from-external-variables-into-your-project",children:[]},{value:"4. Create the Shroom instance",id:"4-create-the-shroom-instance",children:[]}],c={rightToc:i};function d(e){var t=e.components,o=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"1-install-the-shroom-package"},"1. Install the shroom package"),Object(r.b)("p",null,"To install shroom in your project, use the following command."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install @jankuss/shroom pixi.js\n")),Object(r.b)("h3",{id:"2-install-swftools-httpwwwswftoolsorgdownloadhtml"},"2. Install ",Object(r.b)("inlineCode",{parentName:"h3"},"swftools")," (",Object(r.b)("a",Object(a.a)({parentName:"h3"},{href:"http://www.swftools.org/download.html"}),"http://www.swftools.org/download.html"),")"),Object(r.b)("p",null,"Download and install ",Object(r.b)("inlineCode",{parentName:"p"},"swftools"),". Add the installation directory of ",Object(r.b)("inlineCode",{parentName:"p"},"swftools")," to your system ",Object(r.b)("inlineCode",{parentName:"p"},"PATH")," variable.\n",Object(r.b)("strong",{parentName:"p"},"This step is important, or the asset dumper won't work.")),Object(r.b)("h3",{id:"3-dump-assets-from-external-variables-into-your-project"},"3. Dump assets from external variables into your project"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install -g @jankuss/shroom\nshroom dump --url https://www.habbo.com/gamedata/external_variables/326b0a1abf9e2571d541ac05e6eb3173b83bddea --location ./public/resources\n")),Object(r.b)("p",null,"You will need to serve the created ",Object(r.b)("inlineCode",{parentName:"p"},"resources")," folder with a http server, so shroom can access the required assets."),Object(r.b)("h3",{id:"4-create-the-shroom-instance"},"4. Create the Shroom instance"),Object(r.b)("p",null,"Lastly, in your code, import and initialize the Shroom instance."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import { Shroom } from "@jankuss/shroom";\n\n// Assuming the resources are available under http://localhost:8080/resources\nconst shroom = Shroom.create({ application, resourcePath: "./resources" });\n')),Object(r.b)("p",null,"Now, you are fully ready to use shroom.\nCheck out the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/shroom/docs/create-room"}),"Guides")," section to learn how to use shroom properly."))}d.isMDXComponent=!0}}]);