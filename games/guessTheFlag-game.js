class GTF {
   
    constructor(options) {
        if(!options.token) throw new TypeError('Eksik argüman: token')
        if(typeof options.token !== 'string') throw new TypeError('token bir dizede olmalıdır')
        if(!options.stopCommand) throw new TypeError('Eksik argüman: stopCommand')
        if(typeof options.stopCommand !== 'string') throw new TypeError('stopCommand Bir dize olmalıdır')
        if(!options.message) throw new TypeError('Eksik argüman: mesaj')
/*
        if (typeof options.winFooter !== 'string') throw new TypeError('embedFooter bir dize olmalıdır')
        if (typeof options.winColor !== 'string') throw new TypeError('embedColor bir dize olmalıdır')

        if (typeof options.lostFooter !== 'string') throw new TypeError('embedFooter bir dize olmalıdır')
        if (typeof options.lostColor !== 'string') throw new TypeError('embedColor bir dize olmalıdır')

        if (typeof options.questionFooter !== 'string') throw new TypeError('embedFooter bir dize olmalıdır')
        if (typeof options.questionColor !== 'string') throw new TypeError('embedColor bir dize olmalıdır')
        */
        this.message = options.message;
        this.token = options.token;
        this.winFooter = options.winFooter;
        this.winColor = options.winColor
        this.lostColor = options.lostColor;
        this.lostFooter = options.lostFooter;
        this.questionColor = options.questionColor;
        this.questionFooter = options.questionFooter;
        this.stopCommand = options.stopCommand
      
    }
    async start() {
        const fetch = require("node-fetch")
        const Discord = require('discord.js');
        fetch(`https://api.dagpi.xyz/data/flag`, {
            headers: {
                "Authorization": this.token
            }
        })
        .then(res => res.json())
        .then(data => {
          
    const que = new Discord.MessageEmbed()
    .setTitle(`Bayrağı Tahmin Et!`)
    .addField(`Başkent:`, `${data.Data.capital}`)
    .setColor(this.questionColor || "RANDOM")
    .setImage(data.flag)
    .setFooter(this.questionFooter || "Emre37destan tarafından yapılmıştır")
    

    const right = new Discord.MessageEmbed()
    .setTitle(`Doğru Tahmin Ettiniz!`)
    .setAuthor(this.message.author.tag)
    .setColor(this.winColor || "RANDOM")
    .setDescription(`${data.Data.name.common} idi`)
    .setImage(data.flag)
    .setFooter(this.winFooter || "Emre37destan tarafından yapılmıştır")
   

    const wrong = new Discord.MessageEmbed()
    .setTitle(`Kaybettin`)
    .setColor(this.lostColor || "RANDOM")
    .setAuthor(this.message.author.tag)
    .setDescription(`${data.Data.name.common} idi`)
    .setImage(data.flag)
    .setFooter(this.lostFooter || "Emre37destan tarafından yapılmıştır")
    

    this.message.channel.send(que)
    const gameFilter = m => m.author.id
    const gameCollector = this.message.channel.createMessageCollector(gameFilter);

    gameCollector.on('collect', async msg => {
      if(msg.author.bot) return
          const selection = msg.content;
if (selection === data.Data.name.common.toLowerCase()) {
this.message.reply(right)
gameCollector.stop()
          }else if (selection === this.stopCommand) {
            this.message.channel.send(wrong)
            gameCollector.stop();
          } else if (selection !== data.Data.name.common) {
            this.message.channel.send(`Yanlış Tahmin Tekrar Deneyin! - Oyunu iptal etmek için ${this.stopCommand} yazın`)
          }
    })
    
})
}
}

module.exports = GTF;
