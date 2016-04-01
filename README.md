# node-red-contrib-mailinSMTP

SMTP server for Node-Red to respond to received emails

This is a simple wrapper for [mailin.io](http://mailin.io/). You can configure a port but for this to work in the real world the port must be 25 (other ports could be used locally for testing).

A correct MX record should be setup on a domain and pointed at the server where node is running to receive emails.

Emails will be lost and not stored anywhere so I suggest that only copied of emails are forwarded to this server.