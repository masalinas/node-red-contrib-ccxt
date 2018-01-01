module.exports = function(RED) {
    "use strict";

    // load ccxt package
    const ccxt = require('ccxt');

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
                    let exchange = new ccxt[config.exchange] ();

                    let markers = await exchange.loadMarkets();

                    msg.payload = markers;

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

    RED.nodes.registerType('ccxt-api', CcxtApi);
}
