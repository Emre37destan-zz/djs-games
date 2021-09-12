# Hakkında
Kimdir bu Pokemon, ConnectFour, Snake, rock paper scissors, guessTheNumber, tictactoe , içeren bir discord.js Oyun Paketi!
Yardım için [Destek Sunucusu](https://discord.gg/hM6TP3W7wB)'ye katılın
DJS-V13 Güncellemesi Çıktı! Bu paketi djs-games@dev kurarak djs-13 ile kullanabilirsiniz.

# Kurulum

```npm i djs-games```

# Örnek kullanım

```
KOMUT İŞLEYİCİNİZE GÖRE KULLANIN
```

**Pokemon**
=== 
![](https://cdn.discordapp.com/attachments/856573008302309376/856574463453691934/npmpokemon.gif)
```js
 const { Pokemon } = require('djs-games')
    const game = new Pokemon({
    message: message,
    token: "dagpi-token-here", // Api Simgenizi Alın https://dagpi.xyz/dashboard
    })
    game.start()
```

**Logoyu Tahmin Et**
=== 

```js
 const { GTL } = require('djs-games')
    const game = new GTL({
    message: message,
    token: "dagpi-token-here", // *Gerekli!! Api Simgenizi Alın https://dagpi.xyz/dashboard 
    stopCommand: "stop", // *Gerekli!!
    winFooter: "Sen kazandın!", // Kazanma mesajının Altbilgisini Ayarla
    winColor: "GREEN", // Kazanma mesajının gömülü rengi
    loseFooter: "Kaybettin!", // Kaybedilen mesajın Altbilgisini Ayarla
    loseColor: "RED", // Kaybedilen mesajın gömülü rengi
    questionFooter: "Logoyu Tahmin Et!", // Soru mesajının Alt Bilgisini Ayarla
    questionColor: "BLUE", // Soru mesajının yerleştirme rengi
    })
    game.start()
```

**Bayrağı Tahmin Et**
=== 

```js
 const { GTF } = require('djs-games')
    const game = new GTF({
    message: message,
    token: "dagpi-token-here", // *Gerekli!! Api Simgenizi Alın https://dagpi.xyz/dashboard 
    stopCommand: "stop", // *Gerekli!!
    winFooter: "Sen kazandın!", // Kazanma mesajının Altbilgisini Ayarla
    winColor: "GREEN", // Kazanma mesajının gömülü rengi
    loseFooter: "Kaybettin!", // Kaybedilen mesajın Altbilgisini Ayarla
    loseColor: "RED", // Kaybedilen mesajın gömülü rengi
    questionFooter: "Bayrağı Tahmin Et!", // Soru mesajının Alt Bilgisini Ayarla
    questionColor: "BLUE", // Soru mesajının yerleştirme rengi
    })
    game.start()
```

**Tic Tac Toe**
=== 

```js
const djsGames = require('djs-games')
const TicTacToe = new djsGames.TicTacToe()
 TicTacToe.startGame(message)
```

**ConnectFour**
===

```js
const djsGames = require('djs-games')
const ConnectFour = new djsGames.ConnectFour()
ConnectFour.startGame(message)
```

**YILAN**
===

```js
const djsGames = require('djs-games')
const SnakeGame = new djsGames.SnakeGame()
SnakeGame.startGame(message)
```

**Taş kağıt makas**
===

```js
const djsGames = require('djs-games')
const RockPaperScissors = new djsGames.RockPaperScissors()
 RockPaperScissors.startGame(message)
```

**Tahmin EtSayı**
===

```js
const djsGames = require('djs-games')
const guessTheNumber = new djsGames.GuessTheNumber()
 guessTheNumber.startGame(message)
```

**Hızlı Tip**
===

```js
const djsGames = require('djs-games')
const FastTyper = new djsGames.FastTyper()
FastTyper.startGame(message)

```

# Kredi
Kod Tabanı için Kral'a teşekkürler!

# Not:
Lütfen lisansa saygı gösterin ve her şeyi kendi paketiniz gibi yapıştırın!

# Güncellemeler

DJS-V13 Güncellemesi Çıktı! Bu paketi djs-games@dev kurarak djs-13 ile kullanabilirsiniz.

# Yardım

Yardım için [Destek Sunucusu](https://discord.gg/hM6TP3W7wB)'ye katılın
