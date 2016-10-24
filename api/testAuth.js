const lib       = require('../lib/functions');
const WebClient = require('@slack/client').WebClient;

module.exports = (req, res) => {
    let {
    	token,
    } = req.body.args;

    if(!token) defer.reject('Required fields: token');

    let slack = new WebClient(token);

	return slack.auth.test();
}