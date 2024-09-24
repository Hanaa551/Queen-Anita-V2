//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "2348065097421";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUMxblRZRnNNRy93Zm9uVEVvVkViNnJUajhqYjBtYmpHWURPbWV3RytGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzlwL24vaURiZjVRdXFnamZpRG43c2ZYSXJsS1FsQUZoM28wMXE4bTNuQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQjhKYVQ2ckpoYURCZCs0WEYzTTVJWnJReDhmbUI5OTRxUmUrTWdJQjFRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvd2dqU1pLcnJDVHJ1RFQ0RmhyTlQyZ2Z5US9qZElNSWhzVlFsZlVRVjBvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVFN1BvWUs2ci9Ma3laK3gvWUxtckFNOEVQbDIxczE5NFlNOGpjY3hTbDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ1RmVyY1ZpdGVVZWVoVVNCeVBpUG0xQS9hcTh1eXVtQ2g3UFNPTlJrVVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUx2bXh2ZmFRVXVYY29vZU9VVlFqWEtZNm1ONWJpOUJ5M28zYVo2Ulhubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0tKT29zTHdFbGhIcGJITXlKYTcxZVFnYllBcnJHQ3EwK1doczRWWXZUQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJjbzc4QlhBcUYzY0pRUUJ5UXA0YktuMnVKT2NYUUFGRjd3TVovTnNGVC9yOFdTZm9Yc21tcTBJZWRzL2toYVk0dWc5S0g2bzVWWTNwUkx2YnBaVEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjgsImFkdlNlY3JldEtleSI6ImFlNkZSZkpoeXZuNlV2ZUFhZlZrSVFBNHBxcFhZWXMzb0xPZmwzSitTR289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjZSX0xNQ0MxUjd5cGRpWlhpTmp3dWciLCJwaG9uZUlkIjoiYWQ5OWVjOGMtMmQyZi00MGRhLWFiYTItNTIzZDgyMTE1OWVkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRsTGVud0FnOFdldUZjNG9KM0ptUmdDK0FCTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5SUNGOTZzdUxLVDV3a2hmOWwzUGs1c1crVHc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSFo2RFNMMVkiLCJtZSI6eyJpZCI6IjIzNDgwNjUwOTc0MjE6OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJIYW5hIENvbGxlY3Rpb25zIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOZjR5WW9DRVBhYnpMY0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5QVJxRmMzOEcyRkFjMHFyb3M3SHR5c3JkcW11RUlRTTgxM1NLYzRmRnkwPSIsImFjY291bnRTaWduYXR1cmUiOiJhamVxRkU0TDJPemM2OHJGOWo4QVBHdUhGVkUwVVlmRDhtaGtvb25TV0NpV1dqMlVSMWRtajhRQ3hma1dhR2pua09XUFdiUnJ6WGZENW5pSTE1NmFBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZkYzNllKY0RNd2x0Ly9UR1ZyU1p4TmZBZE45YnFsSmN2L0hxSVJvbkFtWWJaNXIzcGlVZFBLL2lMbGdKb1Q2VnZyNU9VOTNFTDlJZWxHQkVrTlc4Q0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDY1MDk3NDIxOjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2dFYWhYTi9CdGhRSE5LcTZMT3g3Y3JLM2FwcmhDRURQTmQwaW5PSHhjdCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzIwNDg2NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPVnYifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
