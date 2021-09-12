const discord = require('discord.js')

class RockPaperScissors {

    startGame = async(message) => {

        var challenger = message.author;
        var opponent = message.mentions.users.first()
        if(!opponent) return message.channel.send(`**Kiminle Taş Kağıt Makas oynamak istersin?**`)
        
        message.channel.send(`**${challenger.username} and ${opponent.username} RPS oyununu başlatmak/bitirmek için DM'lerinize bakın!**`)

        const startEmbed1 = new discord.MessageEmbed()
        .setTitle(`${challenger.username} sırası onda! Bekleniyor...`)
        var waitingEmoji = await opponent.send(startEmbed1)

        const startEmbed = new discord.MessageEmbed()
        .setTitle(`${challenger.username}, senin sıran!`)
        .setDescription(`Hangisini Seçeceksin?
        
        🪨 = Taş
        🧻 = Kağıt
        ✂️ = Makas`)
        var startEmoji = await challenger.send(startEmbed)

        await startEmoji.react('🪨')
        await startEmoji.react('🧻')
        await startEmoji.react('✂️')

        const filter1 = (reaction, user) => ["🪨", "🧻", "✂️"].includes(reaction.emoji.name) && user.id === challenger.id;
        const response1 = await startEmoji.awaitReactions(filter1, { max: 1 });

        const reaction1 = response1.first();

        var cResult = "";
        var oResult = "";

        if(reaction1.emoji.name === "🪨") {

            cResult = "taş"

            const stoneEmbed = new discord.MessageEmbed()
            .setTitle(`Sıra ${opponent.username}'de! Bekleniyor...`)
            var waitingEmoji1 = await startEmoji.edit(stoneEmbed)

            const oppenentEmbed = new discord.MessageEmbed()
            .setTitle(`${opponent.username}, sıra sizde!`)
            .setDescription(`Hangisini Seçeceksin?
        
            🪨 = Taş
            🧻 = Kağıt
            ✂️ = Makas`)
            var endEmoji = await waitingEmoji.edit(oppenentEmbed)

            await endEmoji.react('🪨')
            await endEmoji.react('🧻')
            await endEmoji.react('✂️')

            const filter2 = (reaction, user) => ["🪨", "🧻", "✂️"].includes(reaction.emoji.name) && user.id === opponent.id;
            const response2 = await endEmoji.awaitReactions(filter2, { max: 1 });

            const reaction2 = response2.first();

            if(reaction2.emoji.name === "🪨") {

                oResult = "taş"

                if(cResult === "taş") {
                    if(oResult === "taş") {
                        const drawEmbed = new discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setTitle(`Bir Beraberlik!`)
                        .setDescription(`Oynadın: 🪨
                        ${opponent.username} oynadı: 🪨`)
                        waitingEmoji1.edit(drawEmbed)

                        const drawEmbed1 = new discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setTitle(`Bir Beraberlik!`)
                        .setDescription(`Oynadın: 🪨
                        ${challenger.username} oynadı: 🪨`)
                        return endEmoji.edit(drawEmbed1)
                    } else if(oResult === "kağıt") {
                        const loseEmbed = new discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setTitle(`${opponent.username} kazandı!`)
                        .setDescription(`Oynadın: 🪨
                        ${opponent.username} oynadı: 🧻`)
                        waitingEmoji1.edit(loseEmbed)

                        const winEmbed = new discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setTitle(`Kazandın!`)
                        .setDescription(`Oynadın: 🧻
                        ${challenger.username} oynadı: 🪨`)
                        return endEmoji.edit(winEmbed)
                    }
                }

            } else if(reaction2.emoji.name === "🧻") {

                oResult = "kağıt"

            } else if(reaction2.emoji.name === "✂️") {

                oResult = "makas"

                

            }

        } else if(reaction1.emoji.name === "🧻") {

            cResult = "kağıt"

            const paperEmbed = new discord.MessageEmbed()
            .setTitle(`Sıra ${opponent.username}'de! Bekleniyor...`)
            var waitingEmoji1 = await startEmoji.edit(paperEmbed)

            const oppenentEmbed = new discord.MessageEmbed()
            .setTitle(`${opponent.username}, sıra sizde!`)
            .setDescription(`What do you choose?
        
            🪨 = Taş
            🧻 = Kağıt
            ✂️ = Makas`)
            var endEmoji = await waitingEmoji.edit(oppenentEmbed)

            await endEmoji.react('🪨')
            await endEmoji.react('🧻')
            await endEmoji.react('✂️')

            const filter2 = (reaction, user) => ["🪨", "🧻", "✂️"].includes(reaction.emoji.name) && user.id === opponent.id;
            const response2 = await endEmoji.awaitReactions(filter2, { max: 1 });

            const reaction2 = response2.first();

            if(reaction2.emoji.name === "🪨") {

                oResult = "taş"

            } else if(reaction2.emoji.name === "🧻") {

                oResult = "kağıt"

            } else if(reaction2.emoji.name === "✂️") {

                oResult = "makas"

                

            }

        } else if(reaction1.emoji.name === "✂️") {

            cResult = "makas"

            const scissorsEmbed = new discord.MessageEmbed()
            .setTitle(`Sıra ${opponent.username}'de! Bekleniyor...`)
            var waitingEmoji1 = await startEmoji.edit(scissorsEmbed)

            const oppenentEmbed = new discord.MessageEmbed()
            .setTitle(`${opponent.username}, sıra sizde!`)
            .setDescription(`what do you choose?
        
            🪨 = Taş
            🧻 = Kağıt
            ✂️ = Makas`)
            var endEmoji = await waitingEmoji.edit(oppenentEmbed)

            await endEmoji.react('🪨')
            await endEmoji.react('🧻')
            await endEmoji.react('✂️')

            const filter2 = (reaction, user) => ["🪨", "🧻", "✂️"].includes(reaction.emoji.name) && user.id === opponent.id;
            const response2 = await endEmoji.awaitReactions(filter2, { max: 1 });

            const reaction2 = response2.first();

            if(reaction2.emoji.name === "🪨") {

                oResult = "taş"

            } else if(reaction2.emoji.name === "🧻") {

                oResult = "kağıt"

            } else if(reaction2.emoji.name === "✂️") {

                oResult = "makas"

            }
        }

            if(cResult === "taş") {
                if(oResult === "taş") {
                    const drawEmbed = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`Bir Beraberlik!`)
                    .setDescription(`Oynadın: 🪨
                    ${opponent.username} oynadı: 🪨`)
                    waitingEmoji1.edit(drawEmbed)

                    const drawEmbed1 = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`Bir Beraberlik!`)
                    .setDescription(`Oynadın: 🪨
                    ${challenger.username} oynadı: 🪨`)
                    return endEmoji.edit(drawEmbed1)
                } else if(oResult === "kağıt") {
                    const loseEmbed = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`${opponent.username} kazandı!`)
                    .setDescription(`Oynadın: 🪨
                    ${opponent.username} oynadı: 🧻`)
                    waitingEmoji1.edit(loseEmbed)

                    const winEmbed = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`Kazandın!`)
                    .setDescription(`Oynadın: 🧻
                    ${challenger.username} oynadı: 🪨`)
                    return endEmoji.edit(winEmbed)
                } else if(oResult === "makas") {

                    const loseEmbed1 = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`Kazandın!`)
                    .setDescription(`Oynadın: 🪨
                    ${opponent.username} oynadı: ✂️`)
                    waitingEmoji1.edit(loseEmbed1)

                    const winEmbed1 = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`${challenger.username} kazandı!`)
                    .setDescription(`Oynadın: ✂️
                    ${challenger.username} oynadı: 🪨`)
                    return endEmoji.edit(winEmbed1)
                }
            } else if(cResult === "kağıt") {
                if(oResult === "kağıt") {
                    const drawEmbed = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`Bir Beraberlik!`)
                    .setDescription(`Oynadın: 🧻
                    ${opponent.username} oynadı: 🧻`)
                    waitingEmoji1.edit(drawEmbed)

                    const drawEmbed1 = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`Bir Beraberlik!`)
                    .setDescription(`Oynadın: 🧻
                    ${challenger.username} oynadı: 🧻`)
                    return endEmoji.edit(drawEmbed1)
                } else if(oResult === "taş") {
                    const loseEmbed = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`Kazandın!`)
                    .setDescription(`Oynadın: 🧻
                    ${opponent.username} oynadı: 🪨`)
                    waitingEmoji1.edit(loseEmbed)

                    const winEmbed = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`${challenger.username} kazandı!`)
                    .setDescription(`Oynadın: 🪨
                    ${challenger.username} oynadı: 🧻`)
                    return endEmoji.edit(winEmbed)
                } else if(oResult === "makas") {

                    const loseEmbed1 = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`${opponent.username} kazandı!`)
                    .setDescription(`Oynadın: 🧻
                    ${opponent.username} oynadı: ✂️`)
                    waitingEmoji1.edit(loseEmbed1)

                    const winEmbed1 = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`Kazandın!`)
                    .setDescription(`Oynadın: ✂️
                    ${challenger.username} oynadı: 🧻`)
                    endEmoji.edit(winEmbed1)
                }
            } else if(cResult === "makas") {
                if(oResult === "makas") {
                    const drawEmbed = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`Bir Beraberlik!`)
                    .setDescription(`Oynadın: ✂️
                    ${opponent.username} oynadı: ✂️`)
                    waitingEmoji1.edit(drawEmbed)

                    const drawEmbed1 = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`Bir Beraberlik!`)
                    .setDescription(`Oynadın: ✂️
                    ${challenger.username} oynadı: ✂️`)
                    return endEmoji.edit(drawEmbed1)
                } else if(oResult === "kağıt") {
                    const loseEmbed = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`Kazandın!`)
                    .setDescription(`Oynadın: ✂️
                    ${opponent.username} oynadı: 🧻`)
                    waitingEmoji1.edit(loseEmbed)

                    const winEmbed = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`${challenger.username} kazandı!`)
                    .setDescription(`Oynadın: 🧻 
                    ${challenger.username} oynadı: ✂️`)
                    return endEmoji.edit(winEmbed)
                } else if(oResult === "taş") {
                    const winEmbed1 = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`${challenger.username} kazandı!`)
                    .setDescription(`Oynadın: ✂️
                    ${challenger.username} oynadı: 🪨`)
                    endEmoji.edit(winEmbed1)

                    const loseEmbed1 = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`Kazandın!`)
                    .setDescription(`Oynadın: 🪨
                    ${opponent.username} oynadı: ✂️`)
                    return waitingEmoji1.edit(loseEmbed1)
                }
            }

        
        }
}

module.exports = RockPaperScissors