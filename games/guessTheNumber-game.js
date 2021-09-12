const discord = require('discord.js')

class GuessTheNumber {

    constructor() {

    }

    startGame(message) {

        var options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        var result = options[Math.floor(Math.random() * options.length)];
    
        message.channel.send(`**Aklımda bir sayı var, BUNU TAHMİN!**`).then(async msg => {
    
            message.channel.awaitMessages(m => m.author.id == message.author.id,
                {max: 1}).then(collected => {
                    var guess = collected.first().content
                    if(isNaN(guess)) {
    
                        message.channel.send(`**🤦‍♂️ Seni çılgın... Tahminen SAYI!** *Tekrar oynamak için komutu tekrar kullan*`)
    
                    } else if(guess != result) {
    
                        message.channel.send(`**😥 Hayır, numara bu değil. sadece 2 şansın kaldı**`)
    
                        message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 1}).then(collected => {
                                var guess = collected.first().content
                                if(isNaN(guess)) {
                                    message.channel.send(`**🤦‍♂️ Seni çılgın... Tahminen SAYI!** *Tekrar oynamak için komutu tekrar kullan*`)
    
                                } else if(guess === result) {
    
                                    message.channel.send(`**🎉 İkinci denemende sayıyı tahmin ettin!** *Sayı ${result} idi*`)
                            
                            
                                } else if(guess != result) {
    
                                    message.channel.send(`**😥 Hayır, numara bu değil. sadece 1 şansın kaldı**`)
                
                                    message.channel.awaitMessages(m => m.author.id == message.author.id,
                                        {max: 1}).then(collected => {
                                            var guess = collected.first().content
                                            if(isNaN(guess)) {
    
                                                message.channel.send(`**🤦‍♂️ Seni çılgın... Tahminen SAYI!** *Tekrar oynamak için komutu tekrar kullan*`)
                                            } else if(guess != result) {
    
                                                message.channel.send(`**😥 Hayır, numara bu değil. Sadece 0 şansınız kaldı.** *Sayı ${result} idi*`)
                            
                                                
                                            } else if(guess === result) {
    
                                                message.channel.send(`**🎉 Son denemende sayıyı tahmin ettin!** *Sayı ${result} idi*`)
                                            }
                                        })
                                } else if(guess === result) {
    
                                    message.channel.send(`**🎉 İkinci denemende sayıyı tahmin ettin!** *Sayı ${result} idi*`)
                                }
                            })
                    } else if(guess === result) {
    
                        message.channel.send(`**🎉 İlk denemenizde sayıyı tahmin ettiniz!** *Sayı ${result} idi*`)
                    }
                })
        })
    }

}

module.exports = GuessTheNumber;