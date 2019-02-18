# node-red-contrib-ccxt
A Node-RED node implemented by CCXT. 

##Description
Now this node package supports the API for all **(133 exchanges) crypto exchanges** APIs in the world.

For the latest updates see the CHANGELOG.md

## Installation
```
npm install node-red-contrib-ccxt --save

## Exchanges supported
*1BTCXE
*ACX
*Allcoin
*ANXPro
*Anybits
*BCEX
*Bibox
*BigONE
*Binance
*Bit2C
*bitbank
*BitBay
*Bitfinex
*Bitfinex v2
*bitFlyer
*Bitforex      
*Bithumb
*Bitibu
*bitkk
*Bitlish
*BitMarket
*BitMEX
*Bitsane
*Bitso
*Bitstamp
*Bitstamp v1
*Bittrex
*Bit-Z
*BL3P
*Bleutrade
*Braziliex
*BTC-Alpha
*BtcBox
*BTCChina
*BTCExchange
*BTC Markets
*BtcTrade.im
*BTC Trade UA
*BTCTurk
*Buda
*BX.in.th
*C-CEX
*CEX.IO
*CHBTC
*ChileBit
*COBINHOOD
*Coinbase
*Coinbase Prime
*Coinbase Pro
*coincheck
*CoinEgg
*CoinEx
*CoinExchange
*CoinFalcon
*coinfloor
*Coingi
*CoinMarketCap
*CoinMate
*coinnest
*CoinOne
*CoinSpot
*CoinTiger
*CoolCoin
*COSS
*CREX24
*Crypton
*Cryptopia
*Deribit
*DSX
*Ethfinex
*EXMO
*EXX
*FCoin
*flowBTC
*FoxBit
*FYB-SE
*FYB-SG
*Gatecoin
*Gate.io
*GDAX
*Gemini
*GetBTC
*HADAX
*HitBTC
*HitBTC v2
*Huobi Pro
*ice3x
*Independent Reserve
*INDODAX
*itBit
*jubi.com
*KKEX
*Kraken
*Kucoin
*KuCoin 2
*Kuna
*LakeBTC
*LBank
*Liqui
*Liquid
*LiveCoin
*luno
*Lykke
*Mercado Bitcoin
*MixCoins
*NegocieCoins
*Novaexchange
*OKCoin CNY
*OKCoin USD
*OKEX
*Paymium
*Poloniex
*QRYPTOS
*QuadrigaCX
*QUOINEX
*RightBTC
*SouthXchange
*SurBitcoin
*The Ocean
*TheRockTrading
*TideBit
*Tidex
*UEX
*Upbit
*UrduBit
*Vaultoro
*VBTC
*VirWoX
*xBTCe
*YoBit
*YUNBI
*Zaif
*ZB

## CCXT RED Configuration

* Exchange: Exchange selected
* API: All public APIs normally implemented by all exchanges. If we selected **Custom API** we could execute all APIs implemented: Public and Private implemented by the exchange
* API Type: only for Custom APIs. It represents the API type selected: Public or Private. For Private we must configure our exchange register credentials.
* API Name: only for Custom APIs. It represents the list of all public or private APIS of the exchange selected.
* API payload: only for Custom APIs. It dependes og the API selected. You must read the API Doc of each exchange to addapt the payload to the API

** Some examples

* List OHCLV values for Bitcoin asset grouped 1h 11/02/2019 from from Krake exchange

* List last ticker from Bitcoin/Litecoin from Bittrex Exchange