import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command, conn }) => {
  try {
    // Expanded intro card text with additional fields
    const introText = `
 ◈ •╭═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ •│       「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」
 ◈ •│ Name    : Afzaal Khan
 ◈ •│
 ◈ •│ Place     : Kashmir
 ◈ •│
 ◈ •│ Gender  : 𝙼𝙰𝙻𝙴
 ◈ •│
 ◈ •│ Age        : 19
 ◈ •│
 ◈ •│ Status   : Programmer
 ◈ •│
 ◈ •│ Skills     : Coding,Hacking
 ◈ •│
 ◈ •│ Lang     : Urdu,Eng
 ◈ •│
 ◈ •│ Project  : AK-47
 ◈ •│
 ◈ •│ Hobbie  : Coding,Bots
 ◈ •╰═══ ━ ━ • ━ ━ ━ ═══♡᭄
    `;

    let pp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

    // Try fetching the profile picture of the sender
    try {
      pp = await conn.profilePictureUrl(m.sender);
    } catch (e) {
      console.log("Error fetching profile picture:", e);
    }

    const sourceUrl = 'https://'; // Example source URL for the card

    const contextInfo = {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: 'AK-47', // Title of the card
        body: '𝑇𝛩𝑈𝐶𝛨 𝛨𝛯𝑅𝛯',
        thumbnailUrl: 'https://github.com/GlobalTechInfo.png', // Fixed URL syntax with quotes
        mediaUrl: 'https://github.com/GlobalTechInfo.png', // Fixed URL syntax with quotes
        sourceUrl: sourceUrl, // Source URL for the card
      },
    };

    // Send the message with the extended intro text and external ad reply
    await conn.sendMessage(m.chat, { text: introText, contextInfo }, { quoted: m });

  } catch (e) {
    console.error(e);
    await conn.sendMessage(m.chat, { text: `❌ Something went wrong: ${e.message}` }, { quoted: m });
  }
};

handler.help = ['intro'];
handler.tags = ['fun'];
handler.command = /^owner|intro|duction$/i;

export default handler;
