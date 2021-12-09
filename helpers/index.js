'use strict';
const fs = require("fs");

const m = '```';
const b = '*';
const Features = (prefix, pushname2, Ucapan) => {
  let number = 0;
  return `Hai ${pushname}, ${Ucapan}




${b}Information${b}
${number += 1} > ${prefix}trendtweet${m}
${number += 1} > ${prefix}trendyt${m}
${number += 1} > ${prefix}trendytgaming${m}
${number += 1} > ${prefix}infogempa${m}
${number += 1} > ${prefix}rsrujukan${m}
${number += 1} > ${prefix}covidindo${m}
${number += 1} > ${prefix}covidworld${m}
${number += 1} > ${prefix}kbbi${m}
${number += 1} > ${prefix}infocuaca${m}

${b}Downloader${b}
${number += 1} > ${prefix}ytshort${m}
${number += 1} > ${prefix}ytmp3${m}
${number += 1} > ${prefix}ytmp4${m}
${number += 1} > ${prefix}fbdl${m}
${number += 1} > ${prefix}joox${m}
${number += 1} > ${prefix}igdl${m}
${number += 1} > ${prefix}igtv${m}
${number += 1} > ${prefix}tiktok${m}
${number += 1} > ${prefix}soundcloud${m}
${number += 1} > ${prefix}ifunny${m}
${number += 1} > ${prefix}imdb${m}
${number += 1} > ${prefix}twitter${m}
${number += 1} > ${prefix}cocofun${m}
${number += 1} > ${prefix}stickerline${m}
${number += 1} > ${prefix}pinterest${m}
${number += 1} > ${prefix}xvideosdl${m}
${number += 1} > ${prefix}xnxxdl${m}

${b}Islami${b}
${number += 1} > ${prefix}jadwalsholat${m}
${number += 1} > ${prefix}asmaulhusna${m}
${number += 1} > ${prefix}kisahnabi${m}
${number += 1} > ${prefix}hadist${m}
${number += 1} > ${prefix}quran${m}
${number += 1} > ${prefix}surahnumber${m}

${b}Stalker${b}
${number += 1} > ${prefix}ttstalk${m}
${number += 1} > ${prefix}igstalk${m}
${number += 1} > ${prefix}githubstalk${m}

${b}Maker / Convert${b}
${number += 1} > ${prefix}sticker${m}
${number += 1} > ${prefix}nulis${m}
${number += 1} > ${prefix}ssweb${m}
${number += 1} > ${prefix}wasted${m}
${number += 1} > ${prefix}wanted${m}
${number += 1} > ${prefix}jail${m}
${number += 1} > ${prefix}circle${m}
${number += 1} > ${prefix}delete${m}
${number += 1} > ${prefix}invert${m}
${number += 1} > ${prefix}sepia${m}
${number += 1} > ${prefix}joke${m}
${number += 1} > ${prefix}blur${m}
${number += 1} > ${prefix}gay${m}
${number += 1} > ${prefix}facepalm${m}
${number += 1} > ${prefix}beautiful${m}
${number += 1} > ${prefix}trash${m}
${number += 1} > ${prefix}instagram${m}
${number += 1} > ${prefix}scary${m}
${number += 1} > ${prefix}glitch${m}
${number += 1} > ${prefix}ps4${m}
${number += 1} > ${prefix}rejected${m}
${number += 1} > ${prefix}brazzers${m}
${number += 1} > ${prefix}tahta${m}
${number += 1} > ${prefix}costumtahta${m}
${number += 1} > ${prefix}badut${m}
${number += 1} > ${prefix}badut2${m}
${number += 1} > ${prefix}badut3${m}

${b}Wibu Kya<3${b}
${number += 1} > ${prefix}kusonime${m}
${number += 1} > ${prefix}manga${m}
${number += 1} > ${prefix}loli${m}
${number += 1} > ${prefix}waifu${m}
${number += 1} > ${prefix}neko${m}
${number += 1} > ${prefix}husbu${m}

${b}Random${b}
${number += 1} > ${prefix}ppcouple${m}
${number += 1} > ${prefix}cerpen${m}
${number += 1} > ${prefix}meme${m}
${number += 1} > ${prefix}darkjoke${m}
${number += 1} > ${prefix}randomgore${m}
${number += 1} > ${prefix}cersex${m}
${number += 1} > ${prefix}randombokep${m}

${b}Searching${b}
${number += 1} > ${prefix}ttsearch${m}
${number += 1} > ${prefix}ytsearch${m}
${number += 1} > ${prefix}bokepsearch${m}

${b}Tools${b}
${number += 1} > ${prefix}tourl${m}
${number += 1} > ${prefix}tinyurl${m}

${b}Groups${b}
${number += 1} > ${prefix}group${m}
${number += 1} > ${prefix}add${m}
${number += 1} > ${prefix}kick${m}
${number += 1} > ${prefix}promote${m}
${number += 1} > ${prefix}demote${m}
${number += 1} > ${prefix}adminlist${m}
${number += 1} > ${prefix}del${m}

*Owner*
${number += 1} > >${m}
${number += 1} > $${m}
${number += 1} > ${prefix}peson${m}
${number += 1} > ${prefix}pesoff${m}
${number += 1} > ${prefix}mute${m}
${number += 1} > ${prefix}unmute${m}
${number += 1} > ${prefix}status${m}
${number += 1} > ${prefix}setprefix${m}
${number += 1} > ${prefix}public${m}
${number += 1} > ${prefix}self${m}
${number += 1} > ${prefix}setfake${m}
${number += 1} > ${prefix}inspect${m}
${number += 1} > ${prefix}turnoff${m}
${number += 1} > ${prefix}runtime${m}
${number += 1} > ${prefix}restart${m}
${number += 1} > ${prefix}grouplist${m}
${number += 1} > ${prefix}chatall${m}
${number += 1} > ${prefix}deletechat${m}
`};

const botstat = (latensi, oldSpeed, newSpeed, kyun, sizeFormat, used, cpus, cpu, os, xcoders, totalChat, groupChat, personalChat, device_manufacturer, device_model, mcc, mnc, os_version, os_build_number, wa_version) => {
  return `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldSpeed - newSpeed} _miliseconds_\n\nRuntime : ${kyun(process.uptime())}

  📞 Info WhatsApp
⊳ Group Chats:[ ${groupChat} Groups ]
⊳ Personal Chats:[ ${personalChat} Message ]
⊳ Total Chats:[ ${totalChat} Chats ]
⊳ Wa version:[ ${wa_version} ]

  💻 Info Server
⊳ Device:[ ${device_manufacturer} ]
⊳ Brand Device:[ ${device_model} ]
⊳ Server:[ ${xcoders.browserDescription[0]} ]
⊳ Server version:[ ${xcoders.browserDescription[2]} ]
⊳ RAM: [ ${sizeFormat(os.totalmem() - os.freemem())} / ${sizeFormat(os.totalmem())} ]
⊳ MCC:[ ${mcc} ]
⊳ MNC:[ ${mnc} ]
⊳ OS build:[ ${os_build_number} ]
⊳ OS version:[ ${os_version} ]
⊳ OS tʏpe:[ ${os.type()} ]
⊳ OS release:[ ${os.release()} ]
⊳ TMP dir:[ ${os.tmpdir()} ]
⊳ ARCH:[ ${os.arch()} ]
⊳ Platform:[ ${os.platform()} ]
⊳ Hostname:[ ${os.hostname()} ]

  🔰 NodeJS Memory Usage
${Object.keys(used).map((key, _, arr) => `⊳ ${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${sizeFormat(used[key])}`).join('\n')}
${cpus[0] ? `\n\t🌐 Total CPU Usage 
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `⊳ ${(type).padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

  ♨️ CPU Core(s) Usage (${cpus.length} Core CPU)
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `⊳ ${(type).padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
};

module.exports = { Features, botstat };

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update Features.js`);
  delete require.cache[file];
  require(file);
});
