let handler = async (m, { conn, usedPrefix, isOwner }) => {
  let vcard = `BEGIN:VCARD
VERSION:3.0
N:;Afzaal Khan;;;
ORG:HackerTechInfo
TITLE:Owner
item1.TEL;waid=923556159234:923556159234
item1.X-ABLabel:Owner
X-WA-BIZ-DESCRIPTION:Developer of the Bot
X-WA-BIZ-NAME:Afzaal Khan
END:VCARD`;

  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: 'Afzaal Khan',
      contacts: [{ vcard }]
    }
  }, { quoted: m });
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['creator', 'creador', 'dueño'];

export default handler;
