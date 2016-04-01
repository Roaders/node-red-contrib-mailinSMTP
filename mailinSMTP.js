

module.exports = function(RED) {
    "use strict";
    // require any external libraries we may need....
    var mailin = require('mailin');

    // The main node definition - most things happen in here
    function MailinSMTP(config) {
        // Create a RED node
        RED.nodes.createNode(this,config);

		var node = this;

		mailin.start({
		  port: config.port,
		  disableWebhook: true // Disable the webhook posting.
		});

		mailin.on('message', function (connection, data, content) {

		  var msg = {};
		  msg.payload = data;

		  node.send(msg);
		});

        this.on("close", function() {
			mailin.stop();
        });
    }

    // Register the node by name. This must be called before overriding any of the
    // Node functions.
    RED.nodes.registerType("Mailin SMTP",MailinSMTP);

}
