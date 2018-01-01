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
                let kraken = new ccxt.kraken();

                let markers = await kraken.loadMarkets();

                msg.payload = markers;

                node.send(msg);
            }

            asyncInput.apply(this, [config]);
        });
    }

    RED.nodes.registerType('ccxt-api', CcxtApi);
}
