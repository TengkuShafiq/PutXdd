let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.groupUpdateSubject(m.chat, `${args.join(" ")}`);
  m.reply('Sukses set welcome group')
if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('Welcome berhasil diatur\n@user (Mention)\n@subject (Judul Grup)\n@desc (Deskripsi Grup)')
  } else throw 'Teksnya mana?
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = /^setwelcome$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = false
handler.admin = true
handler.botAdmin = true
export default handler
