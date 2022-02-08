function handler(m) {
      this.send2ButtonLoc(m.chat, global.menuthu, 'Hello there!', 'Adiibot', 'All Features', '.m', 'Developer', '.owner')

}

handler.command = ['menu']
handler.help = ['menu']
handler.tags = ['']

module.exports = handler
