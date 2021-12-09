'use strict';
const fs = require("fs");

global.restAPIs = "https://api-xcoders.xyz";
global.apikeys = "4PoXFi225U";
global.packname = "SayuOfc";
global.author = "By Rafa";
global.watermark = "Rafasurya";
global.ownerNumber = ["6285861870154@s.whatsapp.net"];
global.thumbnails = fs.readFileSync("./image/thumbnail.png");
global.banChats = false;
global.offline = false;
global.multiprefix = true;
global.nonprefix = false;
global.prefix = "#";
global.browserDescription = {
  set_name: "Rafa",
  set_browser: "Safari"
};
global.response = {
  "wait": "[ ⏳ ] Wait processed...",
  "sukses": "[ ✓ ] Success...\n\nDon't Forget to Follow My Instagram\nhttps://www.instagram.com/only_fxc7",
  "error": {
    "bug": "[ !!! ] Your Request Error '_'",
		"url": "[ !! ] Invalid Links!!"
	}
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(`Update config`);
	delete require.cache[file];
	require(file);
});
