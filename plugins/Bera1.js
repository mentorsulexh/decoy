import moment from 'moment-timezone';
import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../../config.cjs';

const allMenu = async (m, sock) => {
  const prefix = config.PREFIX;
  const mode = config.MODE;
  const pushName = m.pushName || 'User';

  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';
    
        // Calculate uptime
    const uptimeSeconds = process.uptime();
    const days = Math.floor(uptimeSeconds / (24 * 3600));
    const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);
    //realtime function
        const realTime = moment().tz("Kenya/kitale").format("HH:mm:ss");
// pushwish function
    let pushwish = "";
    
        if (realTime < "05:00:00") {
  pushwish = `𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶 🌄`;
} else if (realTime < "11:00:00") {
  pushwish = `𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶 🌄`;
} else if (realTime < "15:00:00") {
  pushwish = `𝙶𝙾𝙾𝙳 𝙰𝙵𝚃𝙴𝚁𝙽𝙾𝙾𝙽 🌅`;
} else if (realTime < "18:00:00") {
  pushwish = `𝙶𝙾𝙾𝙳 𝙴𝚅𝙴𝙽𝙸𝙽𝙶 🌃`;
} else if (realTime < "19:00:00") {
  pushwish = `𝙶𝙾𝙾𝙳 𝙴𝚅𝙴𝙽𝙸𝙽𝙶 🌃`;
} else {
  pushwish = `𝙶𝙾𝙾𝙳 𝙽𝙸𝙶𝙷𝚃 🌌`;
}

  const sendCommandMessage = async (messageContent) => {
    await sock.sendMessage(
      m.from,
      {
        text: messageContent,
        contextInfo: {
          isForwarded: true,
          forwardingScore: 999,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363315115438245@newsletter', // Preserved newsletter JID
            newsletterName: "ʀᴇɢᴀʀᴅs ʙʀᴜᴄᴇ ʙᴇʀᴀ",
            serverMessageId: -1,
          },
          externalAdReply: {
            title: "😇ʀᴇɢᴀʀᴅs ʙʀᴜᴄᴇ ʙᴇʀᴀ😇",
            body: pushName,
            thumbnailUrl: 'https://files.catbox.moe/zeu1ya.jpg', // Thumbnail URL
            sourceUrl: 'https://files.catbox.moe/tdhhl5.mp3', // Source URL
            mediaType: 1,
            renderLargerThumbnail: true,
          },
        },
      },
      { quoted: m }
    );
  };

  // Command: allmenu
  if (cmd === "menu") {
    await m.React('⏳'); // React with a loading icon
    const aliveMessage = `
╭───❍「 *😇𝗕𝗘𝗥𝗔 𝗧𝗘𝗖𝗛 𝗕𝗢𝗧😇* 」
│ 🧑‍💻 *ᴜsᴇʀ:* ${pushName} ${pushwish}
│ 🌐 *ᴍᴏᴅᴇ:* ${mode}
│ ⏰ *ᴛɪᴍᴇ:* ${realTime}
│ 🚀 *ᴜᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───────────❍
╭───❍「 *👻𝗕𝗘𝗥𝗔 𝗧𝗘𝗖𝗛  𝗠𝗘𝗡𝗨👻* 」
*│* 💙 *${prefix}ᴍᴀɪɴᴍᴇɴᴜ*
*│* 📥 *${prefix}𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐦𝐞𝐧𝐮*
*│* 🤖 *${prefix}𝐀𝐢𝐦𝐞𝐧𝐮*
*│* 💭 *${prefix}𝐒𝐞𝐚𝐫𝐜𝐡𝐦𝐞𝐧𝐮*
*│* ⚙️ *${prefix}𝐓𝐨𝐨𝐥𝐬𝐦𝐞𝐧𝐮*
*│* ©️ *${prefix}𝐋𝐨𝐠𝐨𝐦𝐞𝐧𝐮*
*│* 🫂 *${prefix}𝐆𝐫𝐨𝐮𝐩𝐦𝐞𝐧𝐮*
*|* 🤖 *${prefix}𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐦𝐞𝐧𝐮*
╰───────────❍ 
╭───────────❍
│😇𝗥𝗘𝗚𝗔𝗥𝗗𝗦 𝗕𝗥𝗨𝗖𝗘 𝗕𝗘𝗥𝗔😇
╰───────────❍
`;

    await m.React('✅'); // React with success icon
    await sendCommandMessage(aliveMessage);
  }
// islamic menu 
  if (cmd === "islamicmenu") {
    await m.React('⏳'); // React with a loading icon

    const islamicmenuMessage = `
╭───❍「 *😇𝗕𝗘𝗥𝗔 𝗧𝗘𝗖𝗛 𝗕𝗢𝗧😇* 」
│ 🧑‍💻 *ᴜsᴇʀ:* ${pushName} ${pushwish}
│ 🌐 *ᴍᴏᴅᴇ:* ${mode}
│ ⏰ *ᴛɪᴍᴇ:* ${realTime}
│ 🚀 *ᴜᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───────────❍
╭───❍「 *👻ɪsʟᴀᴍɪᴄ ᴍᴇɴᴜ👻* 」
*│* 💙 *${prefix}𝚂𝚞𝚛𝚊𝚑𝚊𝚞𝚍𝚒𝚘*
*│* 💙 *${prefix}𝚂𝚞𝚛𝚊𝚑𝚞𝚛𝚍𝚞*
*│* 💙 *${prefix}𝙰𝚜𝚖𝚊𝚞𝚕𝚑𝚞𝚜𝚗𝚊*
*│* 💙 *${prefix}𝙿𝚛𝚘𝚙𝚑𝚎𝚝𝚗𝚊𝚖𝚎*
╰───────────❍  
╭───────────❍
│😇𝗥𝗘𝗚𝗔𝗥𝗗𝗦 𝗕𝗥𝗨𝗖𝗘 𝗕𝗘𝗥𝗔😇
╰───────────❍
`;
await m.React('✅'); // React with success icon
    await sendCommandMessage(islamicmenuMessage);
  }
  // Command: downloadmenu
  if (cmd === "downloadmenu") {
    await m.React('⏳'); // React with a loading icon

    const downloadmenuMessage = `
╭───❍「 *😇𝗕𝗘𝗥𝗔 𝗧𝗘𝗖𝗛 𝗕𝗢𝗧😇* 」
│ 🧑‍💻 *𝚄𝚜𝚎𝚛:* ${pushName} ${pushwish}
│ 🌐 *𝙼𝚘𝚍𝚎:* ${mode}
│ ⏰ *𝚃𝚒𝚖𝚎:* ${realTime}
│ 🚀 *𝚄𝚙𝚃𝚒𝚖𝚎:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───────────❍
╭───❍「 *👻ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ👻* 」
*┋*⏬️ *${prefix}𝙵𝚋*
*┋*⏬️ *${prefix}𝙵𝚋2*
*┋*⏬️ *${prefix}𝙵𝚋3*
*┋*⏬️ *${prefix}𝙸𝚗𝚜𝚝𝚊*
*┋*⏬️ *${prefix}𝙸𝚗𝚜𝚝𝚊2*
*┋*⏬️ *${prefix}𝙿𝚕𝚊𝚢*
*┋*⏬️ *${prefix}𝚂𝚘𝚗𝚐*   
*┋*⏬️ *${prefix}𝚅𝚒𝚍𝚎𝚘*
*┋*⏬️ *${prefix}𝚈𝚝𝚟*
*┋*⏬️ *${prefix}𝚃𝚠𝚒𝚝𝚝𝚎𝚛*
*┋*⏬️ *${prefix}𝚃𝚠𝚒𝚝𝚝𝚎𝚛2*
*┋*⏬️ *${prefix}𝚃𝚠𝚒𝚝𝙰𝚞𝚍𝚒𝚘*
*┋*⏬️ *${prefix}𝚃𝚒𝚔𝚝𝚘𝚔*
*┋*⏬️ *${prefix}𝚃𝚒𝚔𝚝𝚘𝚔2*
*┋*⏬️ *${prefix}𝚈𝚝𝚖𝚙3*
*┋*⏬️ *${prefix}𝚈𝚝𝚖𝚙4*
*┋*⏬️ *${prefix}𝙼𝚎𝚍𝚒𝚊𝙵𝚒𝚛𝚎*
*┋*⏬️ *${prefix}𝙼𝚎𝚍𝚒𝚊𝙵𝚒𝚛𝚎2*
*┋*⏬️ *${prefix}𝚂𝚙𝚘𝚝𝚒𝚏𝚢2*
*┋*⏬️ *${prefix}𝙶𝚍𝚛𝚒𝚟𝚎*
*┋*⏬️ *${prefix}𝙰𝚙𝚔*
╰───────────❍   
╭───────────❍
│😇𝗥𝗘𝗚𝗔𝗥𝗗𝗦 𝗕𝗥𝗨𝗖𝗘 𝗕𝗘𝗥𝗔😇
╰───────────❍
`;
await m.React('✅'); // React with success icon
    await sendCommandMessage(downloadmenuMessage);
  }
  // Command: aimenu
  if (cmd === "aimenu") {
    await m.React('⏳'); // React with a loading icon

    const aimenuMessage = `
╭───❍「 *😇𝗕𝗘𝗥𝗔 𝗧𝗘𝗖𝗛 𝗕𝗢𝗧😇* 」
│ 🧑‍💻 *ᴜsᴇʀ:* ${pushName} ${pushwish}
│ 🌐 *ᴍᴏᴅᴇ:* ${mode}
│ ⏰ *ᴛɪᴍᴇ:* ${realTime}
│ 🚀 *ᴜᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}  m ${seconds}s
╰───────────❍
╭───❍「 *👻ᴀɪ ᴍᴇɴᴜ👻* 」
*┋*🧠 *${prefix}𝙶𝚙𝚝*
*┋*🧠 *${prefix}𝙼𝚎𝚝𝚊*
*┋*🧠 *${prefix}𝙱𝚕𝚊𝚌𝚔𝙱𝚘𝚡*
*┋*🧠 *${prefix}𝙻𝚕𝚊𝚖𝚊*
*┋*🧠 *${prefix}𝙲𝚕𝚊𝚞𝚍𝚎*
*┋*🧠 *${prefix}𝙼𝚒𝚡𝚝𝚛𝚊𝚕*
╰───────────❍
╭───────────❍
│😇𝗥𝗘𝗚𝗔𝗥𝗗𝗦 𝗕𝗥𝗨𝗖𝗘 𝗕𝗘𝗥𝗔😇
╰───────────❍
`;
await m.React('✅'); // React with success icon
    await sendCommandMessage(aimenuMessage);
  }
  // Command: groupmenu
  if (cmd === "logomenu") {
    await m.React('⏳'); // React with a loading icon

    const logomenuMessage = `
╭───❍「 *😇𝗕𝗘𝗥𝗔 𝗧𝗘𝗖𝗛 𝗕𝗢𝗧😇* 」
│ 🧑‍💻 *ᴜsᴇʀ:* ${pushName} ${pushwish}
│ 🌐 *ᴍᴏᴅᴇ:* ${mode}
│ ⏰ *ᴛɪᴍᴇ:* ${realTime}
│ 🚀 *ᴜᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───────────❍
╭───❍「 *👻ʟᴏɢᴏ ᴍᴇɴᴜ👻* 
*┋* ©️ ${prefix}𝗅𝗈𝗀𝗈
*┋* ©️ ${prefix}𝖻𝗅𝖺𝖼𝗄𝗉𝗂𝗇𝗄
*┋* ©️ ${prefix}𝗀𝗈𝗌𝗌𝗒𝗌𝗂𝗅𝗏𝖾𝗋
*┋* ©️ ${prefix}𝗇𝖺𝗋𝗎to
*┋* ©️ ${prefix}𝖽𝗂𝗀𝗂𝗍𝖺𝗅𝗀𝗅𝗂𝗍𝖼𝗁
*┋* ©️ ${prefix}𝗉𝗂𝗑𝖾𝗅𝗀𝗅𝗂𝗍𝖼𝗁
*┋* ©️ ${prefix}𝗌𝗍𝖺𝗋
*┋* ©️ ${prefix}𝗌𝗆𝗈𝗄𝖾
*┋* ©️ ${prefix}𝖻𝖾𝖺𝗋*
*┋* ©️ ${prefix}𝗇𝖾𝗈𝗇𝖽𝖾𝗏𝗂𝗅
*┋* ©️ ${prefix}𝗌𝖼𝗋𝖾𝖾𝗇
*┋* ©️ ${prefix}𝗇𝖺𝗍𝗎𝗋𝖾*
*┋* ©️ ${prefix}𝖽𝗋𝖺𝗀𝗈𝗇𝖻𝖺𝗅𝗅
*┋* ©️ ${prefix}𝖿𝗈𝗀𝗀𝗒𝗀𝗅𝖺𝗌𝗌
*┋* ©️ ${prefix}𝗇𝖾𝗈𝗇𝗅𝗂𝗀𝗁𝗍
*┋* ©️ ${prefix}𝖼𝖺𝗌𝗍𝗅𝖾𝗉𝗈𝗉
*┋* ©️ ${prefix}𝖿𝗋𝗈𝗓𝖾𝗇𝖼𝗁𝗋𝗂𝗌𝗍𝗆𝖺𝗌
*┋* ©️ ${prefix}𝖿𝗈𝗂𝗅𝖻𝖺𝗅𝗅𝗈𝗈𝗇
*┋* ©️ ${prefix}𝖼𝗈𝗅𝗈𝗋𝖿𝗎𝗅𝗉𝖺𝗂𝗇𝗍
*┋* ©️ ${prefix}𝖺𝗆𝖾𝗋𝗂𝖼𝖺𝗇𝖿𝗅𝖺𝗀
*┋* ©️ ${prefix}𝗇𝖾𝗈𝗇𝖽𝖾𝗏𝗂𝗅
╭───────────❍
│😇𝗥𝗘𝗚𝗔𝗥𝗗𝗦 𝗕𝗥𝗨𝗖𝗘 𝗕𝗘𝗥𝗔😇
╰───────────❍
`;

await m.React('✅'); // React with success icon
    await sendCommandMessage(logomenuMessage);
  }
  // Command: 𝚐𝚛𝚘𝚞𝚙
  if (cmd === "groupmenu") {
    await m.React('⏳'); // React with a loading icon

    const stalkerMessage = `
╭───❍「 *😇𝗕𝗘𝗥𝗔 𝗧𝗘𝗖𝗛 𝗕𝗢𝗧😇* 」
│ 🧑‍💻 *ᴜsᴇʀ:* ${pushName} ${pushwish}
│ 🌐 *ᴍᴏᴅᴇ:* ${mode}
│ ⏰ *ᴛɪᴍᴇ:* ${realTime}
│ 🚀 *ᴜᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───────────❍
╭───❍「 *👻ɢʀᴏᴜᴘ ᴍᴇɴᴜ👻* 
*┋* 🫂 *${prefix}𝙾𝚙𝚎𝚗*
*┋* 🫂 *${prefix}𝙲𝚕𝚘𝚜𝚎*
*┋* 🫂 *${prefix}𝚃𝚊𝚐𝚊𝚕𝚕*
*┋* 🫂 *${prefix}𝙺𝚒𝚌𝚔*
*┋* 🫂 *${prefix}𝙰𝚍𝚍*
*┋* 🫂 *${prefix}𝙳𝚒𝚜 24𝚑*
*┋* 🫂 *${prefix}𝙸𝚗𝚟𝚒𝚝𝚎*
╭───────────❍
│😇𝗥𝗘𝗚𝗔𝗥𝗗𝗦 𝗕𝗥𝗨𝗖𝗘 𝗕𝗘𝗥𝗔😇
╰───────────❍
`;
await m.React('✅'); // React with success icon
    await sendCommandMessage(stalkerMessage);
  }
 
  // Command: allmenu
  if (cmd === "searchmenu") {
    await m.React('⏳'); // React with a loading icon

    const stickerMessage = `
╭───❍「 *😇𝗕𝗘𝗥𝗔 𝗧𝗘𝗖𝗛 𝗕𝗢𝗧😇* 」
│ 🧑‍💻 *ᴜsᴇʀ:* ${pushName} ${pushwish}
│ 🌐 *ᴍᴏᴅᴇ:* ${mode}
│ ⏰ *ᴛɪᴍᴇ:* ${realTime}
│ 🚀 *ᴜᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───────────❍
 ╭───❍「 *👻sᴇᴀʀᴄʜ ᴍᴇɴᴜ👻* 」
*┋*📡 *${prefix}𝚈𝚝𝚜*
*┋*📡 *${prefix}𝙶𝚒𝚝𝚜*
*┋*📡 *${prefix}𝚃𝚒𝚔𝚜*
*┋*📡 *${prefix}𝚆𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛*
*┋*📡 *${prefix}𝚂𝚙𝚘𝚝𝚒𝚏𝚢*
╰───────────❍
╭───────────❍
│😇𝗥𝗘𝗚𝗔𝗥𝗗𝗦 𝗕𝗥𝗨𝗖𝗘 𝗕𝗘𝗥𝗔😇
╰───────────❍
`;
await m.React('✅'); // React with success icon
    await sendCommandMessage(stickerMessage);
  }
  // Command: ownermenu
  if (cmd === "ownermenu") {
    await m.React('⏳'); // React with a loading icon

    const ownerMessage = `
    ╭───❍「 *😇𝗕𝗘𝗥𝗔 𝗧𝗘𝗖𝗛 𝗕𝗢𝗧😇* 」
│ 🧑‍💻 *ᴜsᴇʀ:* ${pushName} ${pushwish}
│ 🌐 *ᴍᴏᴅᴇ:* ${mode}
│ ⏰ *ᴛɪᴍᴇ:* ${realTime}
│ 🚀 *ᴜᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───────────❍
 ╭───❍「 *😇ᴏᴡɴᴇʀ ᴍᴇɴᴜ😇* 」
*┋*💫 *${prefix}𝚁𝚎𝚜𝚝𝚊𝚛𝚝*
*┋*💫 *${prefix}𝙾𝚠𝚗𝚎𝚛𝚁𝚎𝚊𝚌𝚝*
*┋*💫 *${prefix}𝙷𝚎𝚊𝚛𝚝𝚁𝚎𝚊𝚌𝚝*
*┋*💫 *${prefix}𝙹𝚘𝚒𝚗*
*┋*💫 *${prefix}𝙻𝚎𝚏𝚝*
*┋*💫 *${prefix}𝙱𝚛𝚘𝚊𝚍𝚌𝚊𝚜𝚝*
*┋*💫 *${prefix}𝚅𝚟*
*┋*💫 *${prefix}𝚅𝚟2*
*┋*💫 *${prefix}𝙳𝚎𝚕𝚎𝚝𝚎*
*┋*💫 *         𝚂𝚊𝚟𝚎*
╭───────────❍
│😇𝗥𝗘𝗚𝗔𝗥𝗗𝗦 𝗕𝗥𝗨𝗖𝗘 𝗕𝗘𝗥𝗔😇
╰───────────❍
`;

    await m.React('✅'); // React with success icon
    await sendCommandMessage(ownerMessage);
  }
if (cmd === "mainmenu") {
    await m.React('⏳'); // React with a loading icon
    const aliveMessage = `
╭───❍「 *😇𝗕𝗘𝗥𝗔 𝗧𝗘𝗖𝗛 𝗕𝗢𝗧😇* 」
│ *🧑‍💻* *ᴜsᴇʀ:* ${pushName} ${pushwish}
│ *🌐* *ᴍᴏᴅᴇ:* ${mode}
│ *⏰* *ᴛɪᴍᴇ:* ${realTime}
│ *🚀* *ᴜᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───────────❍
╭───━═━═━⊷ 
*🤖* 𝗕𝗢𝗧 𝗡𝗔𝗠𝗘: *_ʙᴇʀᴀ ᴛᴇᴄʜ ʙᴏᴛ_*
*📟* 𝗩𝗘𝗥𝗦𝗜𝗢𝗡: *_1.0.0_*
*👤* 𝗗𝗘𝗩: *_sɪʀ ʙʀᴜᴄᴇ ʙᴇʀᴀ_*
*📈* *uptime*: *${uptime}*
*🧑‍💻* *ᴜsᴇʀ:* ${pushName} ${pushwish}
*🌐* *ᴍᴏᴅᴇ:* ${mode}
*⏰* *ᴛɪᴍᴇ:* ${realTime}
*🚀* *ᴜᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───━═━═━⊷

━━━━━🌟━━━━━

✨ ʙᴇʀᴀ ᴛᴇᴄʜ ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ ✨

ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴍʏ ᴀᴡᴇsᴏᴍᴇ ᴍᴇɴᴜ

╭━━━━◈ SYSTEM ◈━━━╮
*➤* ${prefix}𝗣𝗶𝗻𝗴
*➤* ${prefix}𝗔𝗹𝗶𝘃𝗲
*➤* ${prefix}𝗢𝘄𝗻𝗲𝗿
*➤* ${prefix}𝗠𝗲𝗻𝘂 
╰━━━━━━━◈━━━━━━━╯

╭━━━━◈ OWNER ◈━━━━╮
*➤* ${prefix}𝗝𝗼𝗶𝗻
*➤* ${prefix}𝗟𝗲𝗮𝘃𝗲
*➤* ${prefix}𝗕𝗹𝗼𝗰𝗸
*➤* ${prefix}𝗨𝗻𝗯𝗹𝗼𝗰𝗸
*➤* ${prefix}𝗦𝗲𝘁𝗽𝗽𝗯𝗼𝘁
*➤* ${prefix}𝗔𝗻𝘁𝗶𝗰𝗮𝗹𝗹
*➤* ${prefix}𝗦𝗲𝘁𝘀𝘁𝗮𝘁𝘂𝘀
*➤* ${prefix}𝗦𝗲𝘁𝗻𝗮𝗺𝗲𝗯𝗼𝘁
*➤* ${prefix}𝗔𝘂𝘁𝗼𝗧𝘆𝗽𝗶𝗻𝗴
*➤* ${prefix}𝗔𝗹𝘄𝗮𝘆𝘀𝗢𝗻𝗹𝗶𝗻𝗲
*➤* ${prefix}𝗔𝘂𝘁𝗼𝗥𝗲𝗮𝗱
*➤* ${prefix}𝗮𝘂𝘁𝗼𝘀𝘃𝗶𝗲𝘄
 ╰━━━━━━◈━━━━━━╯

╭━━━◈ 𝗚𝗣𝗧 ◈━━━━╮
*➤* ${prefix}ʙᴇʀᴀ
*➤* ${prefix}𝗕𝘂𝗴
*➤* ${prefix}𝗥𝗲𝗽𝗼𝗋𝘁
*➤* ${prefix}𝗿𝗮𝘀𝗵𝗶𝗱
*➤* ${prefix}𝗗𝗮𝗹𝗹𝗲
*➤* ${prefix}𝗥𝗲𝗺𝗶𝗻𝗶
*➤* ${prefix}𝗚𝗲𝗺𝗶𝗻𝗶 
╰━━━━━━◈━━━━━━╯

╭━━━━ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥 ━━━╮
*➤* ${prefix}𝗔𝗧𝗧𝗣
*➤* ${prefix}𝗔𝗧𝗧𝗣𝟮
*➤* ${prefix}𝗔𝗧𝗧𝗣𝟯
*➤* ${prefix}𝗘𝗕𝗜𝗡𝗔𝗥𝗬
*➤* ${prefix}𝗗𝗕𝗜𝗡𝗔𝗥𝗬
*➤* ${prefix}𝗘𝗠𝗢𝗝𝗜𝗠𝗜𝗫
*➤* ${prefix}𝗠𝗣𝟯 
*➤* ${prefix}URL
╰━━━━━━━◈━━━━━━━╯

╭━━━━◈ 𝗚𝗥𝗢𝗨𝗣 ◈━━━╮
*➤* ${prefix}𝗟𝗶𝗻𝗸𝗚𝗿𝗼𝘂𝗽
*➤* ${prefix}𝗦𝗲𝘁𝗽𝗽𝗴𝗰
*➤* ${prefix}𝗦𝗲𝘁𝗻𝗮𝗺𝗲
*➤* ${prefix}𝗦𝗲𝘁𝗱𝗲𝘀𝗰
*➤* ${prefix}𝗚𝗿𝗼𝘂𝗽
*➤* ${prefix}𝗚𝗰𝘀𝗲𝘁𝘁𝗶𝗻𝗴
*➤* ${prefix}𝗪𝗲𝗹𝗰𝗼𝗺𝗲
*➤* ${prefix}𝗔𝗱𝗱
*➤* ${prefix}𝗞𝗶𝗰𝗸
*➤* ${prefix}𝗛𝗶𝗱𝗲𝗧𝗮𝗴
*➤* ${prefix}𝗧𝗮𝗴𝗮𝗹𝗹
*➤* ${prefix}𝗔𝗻𝘁𝗶𝗟𝗶𝗻𝗸
*➤* ${prefix}𝗔𝗻𝘁𝗶𝗧𝗼𝘅𝗶𝗰
*➤* ${prefix}𝗣𝗿𝗼𝗺𝗼𝘁𝗲
*➤* ${prefix}𝗗𝗲𝗺𝗼𝘁𝗲
*➤* ${prefix}𝗚𝗲𝘁𝗯𝗶𝗼 
╰━━━━━━━◈━━━━━━╯

╭━━◈ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 ◈━━━╮
*➤* ${prefix}𝗔𝗽𝗸
*➤* ${prefix}𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸
*➤* ${prefix}𝗠𝗲𝗱𝗶𝗮𝗳𝗶𝗿𝗲
*➤* ${prefix}𝗣𝗶𝗻𝘁𝗲𝗿𝗲𝘀𝘁𝗱𝗹
*➤* ${prefix}𝗚𝗶𝘁𝗰𝗹𝗼𝗻𝗲
*➤* ${prefix}𝗚𝗱𝗿𝗶𝘃𝗲
*➤* ${prefix}𝗜𝗻𝘀𝘁𝗮
*➤* ${prefix}𝘆𝘁𝗺𝗽𝟯
*➤* ${prefix}𝘆𝘁𝗺𝗽𝟰
*➤* ${prefix}𝗣𝗹𝗮𝘆
*➤* ${prefix}𝗦𝗼𝗻𝗴
*➤* ${prefix}𝗩𝗶𝗱𝗲𝗼
*➤* ${prefix}𝘆𝘁𝗺𝗽𝟯𝗱𝗼𝗰
*➤* ${prefix}𝘆𝘁𝗺𝗽𝟰𝗱𝗼𝗰
"➤* ${prefix}𝗧𝗶𝗸𝘁𝗼𝗸 
╰━━━━━━━◈━━━━━━━╯
╭━━━━◈ 𝖲𝖤𝖳𝖳𝖨𝖭𝖦𝖲 ◈━━━╮
*➤* ${prefix}𝙼𝙾𝙳𝙴 <𝙿𝚄𝙱𝙻𝙸𝙲/𝙿𝚁𝙸𝚅𝙰𝚃𝙴>*
*➤* ${prefix}𝙿𝚁𝙴𝙵𝙸𝚇 <𝚂𝚈𝙼𝙱𝙾𝙻>*
*➤* ${prefix}𝙰𝚄𝚃𝙾𝚂𝚅𝙸𝙴𝚆 <𝙾𝙽/𝙾𝙵𝙵>*
*➤* ${prefix}𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙲𝚃 <𝙾𝙽/𝙾𝙵𝙵>*
*➤* ${prefix}𝙰𝙻𝚆𝙰𝚈𝚂𝙾𝙽𝙻𝙸𝙽𝙴 <𝙾𝙽/𝙾𝙵𝙵>*
*➤* ${prefix}𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳 <𝙾𝙽/𝙾𝙵𝙵>*
*➤* ${prefix}𝙰𝚄𝚃𝙾𝙱𝙻𝙾𝙲𝙺 <𝙾𝙽/𝙾𝙵𝙵>*
*➤* ${prefix}𝙰𝙽𝚃𝙸𝙲𝙰𝙻𝙻 <𝙾𝙽/𝙾𝙵𝙵>*
*➤* ${prefix}𝙰𝚄𝚃𝙾𝚁𝙴𝙲𝙾𝚁𝙳𝙸𝙽𝙶 <𝙾𝙽/𝙾𝙵𝙵>*
*➤* ${prefix}𝙰𝚄𝚃𝙾𝚃𝚈𝙿𝙸𝙽𝙶 <𝙾𝙽/𝙾𝙵𝙵>*
╰━━━━━━━◈━━━━━━╯

╭━━◈  𝖫𝖮𝖦𝖮 𝖬𝖤𝖭𝖴◈━━━╮
*©️* ${prefix}𝗅𝗈𝗀𝗈
*©️* ${prefix}𝖻𝗅𝖺𝖼𝗄𝗉𝗂𝗇𝗄
*©️* ${prefix}𝗀𝗈𝗌𝗌𝗒𝗌𝗂𝗅𝗏𝖾𝗋
*©️* ${prefix}𝗇𝖺𝗋𝗎to
*©️* ${prefix}𝖽𝗂𝗀𝗂𝗍𝖺𝗅𝗀𝗅𝗂𝗍𝖼𝗁
*©️* ${prefix}𝗉𝗂𝗑𝖾𝗅𝗀𝗅𝗂𝗍𝖼𝗁
*©️* ${prefix}𝗌𝗍𝖺𝗋
*©️* ${prefix}𝗌𝗆𝗈𝗄𝖾
*©️* ${prefix}𝖻𝖾𝖺𝗋*
*©️* ${prefix}𝗇𝖾𝗈𝗇𝖽𝖾𝗏𝗂𝗅
*©️* ${prefix}𝗌𝖼𝗋𝖾𝖾𝗇
*©️* ${prefix}𝗇𝖺𝗍𝗎𝗋𝖾*
*©️* ${prefix}𝖽𝗋𝖺𝗀𝗈𝗇𝖻𝖺𝗅𝗅
*©️* ${prefix}𝖿𝗈𝗀𝗀𝗒𝗀𝗅𝖺𝗌𝗌
*©️* ${prefix}𝗇𝖾𝗈𝗇𝗅𝗂𝗀𝗁𝗍
*©️* ${prefix}𝖼𝖺𝗌𝗍𝗅𝖾𝗉𝗈𝗉
*©️* ${prefix}𝖿𝗋𝗈𝗓𝖾𝗇𝖼𝗁𝗋𝗂𝗌𝗍𝗆𝖺𝗌
*©️* ${prefix}𝖿𝗈𝗂𝗅𝖻𝖺𝗅𝗅𝗈𝗈𝗇
*©️* ${prefix}𝖼𝗈𝗅𝗈𝗋𝖿𝗎𝗅𝗉𝖺𝗂𝗇𝗍
*©️* ${prefix}𝖺𝗆𝖾𝗋𝗂𝖼𝖺𝗇𝖿𝗅𝖺𝗀
*©️* ${prefix}𝗇𝖾𝗈𝗇𝖽𝖾𝗏𝗂𝗅
╰━━━━━━━◈━━━━━━━╯
╭───❍「 *𝖮𝖶𝖭𝖤𝖱 𝖢𝖮𝖬𝖬𝖠𝖭𝖣」
*💫* ${prefix}𝚁𝚎𝚜𝚝𝚊𝚛𝚝
*💫* ${prefix}𝙾𝚠𝚗𝚎𝚛𝚁𝚎𝚊𝚌𝚝
*💫* ${prefix}𝙷𝚎𝚊𝚛𝚝𝚁𝚎𝚊𝚌𝚝
*💫* ${prefix}𝙹𝚘𝚒𝚗
*💫* ${prefix}𝙻𝚎𝚏𝚝
*💫* ${prefix}𝙱𝚛𝚘𝚊𝚍𝚌𝚊𝚜𝚝
*💫* ${prefix}𝚅𝚟
*💫* ${prefix}𝚅𝚟2
*💫* ${prefix}𝙳𝚎𝗅
*💫* ${prefix}𝚂𝚊𝚟𝚎
╭───────────❍
│HELLO ${pushName} ${pushwish}
╰───────────❍
╭━━━◈ 𝗦𝗘𝗔𝗥𝗖𝗛 ◈━━━╮
*➤* ${prefix}𝗣𝗹𝗮𝘆
*➤* ${prefix}𝘆𝘁𝘀
*➤* ${prefix}𝗜𝗺𝗱𝗯
*➤* ${prefix}𝗚𝗼𝗼𝗴𝗹𝗲
*➤* ${prefix}𝗚𝗶𝗺𝗮𝗴𝗲
*➤* ${prefix}𝗟𝘆𝗿𝗶𝗰𝘀 
╰━━━━━━━◈━━━━━━━╯

*🌐 𝗠𝗢𝗥𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗖𝗢𝗠𝗜𝗡𝗚 𝗦𝗢𝗢𝗡! 🌐

╭───────────❍
│😇𝗥𝗘𝗚𝗔𝗥𝗗𝗦 𝗕𝗥𝗨𝗖𝗘 𝗕𝗘𝗥𝗔😇
╰───────────❍
`;
await m.React('✅'); // React with success icon
    await sendCommandMessage(aliveMessage);
  }
  //Command: othermenu
  if (cmd === "othermenu") {
    await m.React('⏳'); // React with a loading icon

    const otherMessage = `
╭───❍「 *😇𝗕𝗘𝗥𝗔 𝗧𝗘𝗖𝗛 𝗕𝗢𝗧😇* 」
│ 🧑‍💻 *ᴜsᴇʀ:* ${pushName} ${pushwish}
│ 🌐 *ᴍᴏᴅᴇ:* ${mode}
│ ⏰ *ᴛɪᴍᴇ:* ${realTime}
│ 🚀 *ᴜᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───────────❍
╭───❍「 *😇ᴏᴛʜᴇʀ ᴍᴇɴᴜ😇* 」
*│ *🗿 *${prefix}𝙿𝚒𝚗𝚐*
*│ *🗿 *${prefix}𝙰𝚋𝚘𝚞𝚝*
*│ *🗿 *${prefix}𝚛𝚎𝚙𝚘*
*│ *🗿 *${prefix}𝙰𝚕𝚒𝚟𝚎*
*│ *🗿 *${prefix}𝚄𝚛𝚕*
*│ *🗿 *${prefix}𝚂𝚎𝚗𝚍𝚖𝚎*
╰───────────❍   
╭───────────❍
│😇𝗥𝗘𝗚𝗔𝗥𝗗𝗦 𝗕𝗥𝗨𝗖𝗘 𝗕𝗘𝗥𝗔😇
╰───────────❍
`;
await m.React('✅'); // React with success icon
    await sendCommandMessage(otherMessage);
  }
    if (cmd === "toolsmenu") {
    await m.React('⏳'); // React with a loading icon
    const toolsMessage = `
╭───❍「 *😇𝗕𝗘𝗥𝗔 𝗧𝗘𝗖𝗛 𝗕𝗢𝗧😇* 」
│ 🧑‍💻 *ᴜsᴇʀ:* ${pushName} ${pushwish}
│ 🌐 *ᴍᴏᴅᴇ:* ${mode}
│ ⏰ *ᴛɪᴍᴇ:* ${realTime}
│ 🚀 *ᴜᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───────────❍
╭───❍「 *😇ᴛᴏᴏʟs ᴍᴇɴᴜ😇* 」
*┋*🛡  *${prefix}𝚂𝚜*
*┋*🛡  *${prefix}𝚆𝚎𝚋𝚜𝚜*
*┋*🛡  *${prefix}𝙵𝚞𝚕𝚕𝚜𝚜*
*┋*🛡  *${prefix}𝚃𝚛𝚝*
*┋*🛡  *${prefix}𝙵𝚎𝚝𝚌𝚑*
*┋*🛡  *${prefix}𝚃𝚎𝚡𝚝2𝚒𝚖𝚐*
╰───────────❍  
╭───────────❍
│😇𝗥𝗘𝗚𝗔𝗥𝗗𝗦 𝗕𝗥𝗨𝗖𝗘 𝗕𝗘𝗥𝗔😇
╰───────────❍
`;
await m.React('✅'); // React with success icon
    await sendCommandMessage(toolsMessage);
  }
};

export default allMenu;
