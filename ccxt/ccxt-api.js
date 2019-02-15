module.exports = function(RED) {
    "use strict";

    // load package dependencies
    const ccxt = require('ccxt');
    const moment = require('moment');

    // load RED settings
    var settings = RED.settings;

    // ccxt: API
    function CcxtApi(config) {
        RED.nodes.createNode(this, config);

        var node = this;

        // execute Bittrex API
        node.on('input', function (msg) {
            const asyncInput = async function async(config) {
                try {
                    // connect to exchange selected
                    let exchange = undefined;
                    
                    if (this.credentials.apikey)
                        exchange = new ccxt[config.exchange] (
                            {
                                apiKey: this.credentials.apikey,
                                secret: this.credentials.secret,
                            }
                        );
                    else
                        exchange = new ccxt[config.exchange] ();                    

                    // execute api
                    let result = undefined;

                    let api = undefined;
                    let loadmarketsreload = undefined;
                    let fetchtickersymbol = undefined;
                    let orderbooksymbol = undefined;
                    let fetchohlcvsymbol = undefined;
                    let fetchohlcvtimeframe = undefined;
                    let fetchohlcvsince = undefined;
                    let fetchohlcvlimit = undefined;
                    let fetchtradessymbol = undefined;
                    let privatemethod = undefined;

                    if (msg.payload.exchange !== undefined) {
                        api = msg.payload.api;

                        loadmarketsreload = msg.payload.loadmarketsreload;
                        fetchtickersymbol = msg.payload.fetchtickersymbol;
                        orderbooksymbol = msg.payload.orderbooksymbol;
                        fetchohlcvsymbol = msg.payload.fetchohlcvsymbol;
                        fetchohlcvtimeframe = msg.payload.fetchohlcvtimeframe;
                        fetchohlcvsince = msg.payload.fetchohlcvsince;
                        fetchohlcvlimit = msg.payload.fetchohlcvlimit;
                        fetchtradessymbol = msg.payload.fetchtradessymbol;
                        privatemethod = msg.payload.privatemethod;
                    }
                    else {
                        api = config.api;

                        loadmarketsreload = config.loadmarketsreload;
                        fetchtickersymbol = config.fetchtickersymbol;
                        orderbooksymbol = config.orderbooksymbol;
                        fetchohlcvsymbol = config.fetchohlcvsymbol;
                        fetchohlcvtimeframe = config.fetchohlcvtimeframe;
                        fetchohlcvsince = config.fetchohlcvsince;
                        fetchohlcvlimit = config.fetchohlcvlimit;
                        fetchtradessymbol = config.fetchtradessymbol;
                        privatemethod = config.privatemethod;
                    }

                    if (api === "loadMarkets") {
                        result = await exchange.loadMarkets(loadmarketsreload);
                    } else if (api === "fetchMarkets") {
                        result = await exchange.fetchMarkets();
                    } else if (api === "fetchTicker") {
                        result = await exchange.fetchTicker(fetchtickersymbol);
                    } else if (api === "fetchTickers") {
                        result = await exchange.fetchTickers();
                    } else if (api === "fetchOrderBook") {
                        result = await exchange.fetchOrderBook(orderbooksymbol);
                    } else if (api === "fetchOHLCV") {
                        if (fetchohlcvsince !== undefined)
                            fetchohlcvsince = moment(fetchohlcvsince).valueOf();

                        result = await exchange.fetchOHLCV(fetchohlcvsymbol, fetchohlcvtimeframe, fetchohlcvsince, fetchohlcvlimit);
                    } else if (api === "fetchTrades") {
                        result = await exchange.fetchTrades(fetchtradessymbol);
                    } else if (api === "privateMethod") {
                        // test Kraken API
                        console.log (new ccxt.kraken ());
                        result = await exchange.privatePostBalance();                        
                    } else {
                        node.status({fill:"yellow", shape: "ring", text: "Bittrex API not exist"});
                        node.warning("Bittrex API not exist");
                    }

                    // clear any node error
                    node.status({});

                    // send api result
                    msg.payload = result;

                    node.send(msg);
                } catch(err) {
                    node.status({fill:"red", shape: "ring", text: "ccxt error"});
                    node.error("ccxt error", err);

                    return;
                }
            };

            asyncInput.apply(this, [config]);
        });
    }

    RED.nodes.registerType('ccxt-api', CcxtApi, {
        credentials: {
            apikey: {type: "text"},
            secret: {type: "text"}
        } 
    });
}
