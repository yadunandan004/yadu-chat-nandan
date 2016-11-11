'use strict';

if(process.env.NODE_ENV === 'production'){
	//process.eenv.REDIS_URL :: consists of host,password and port in the same url we need to parse it
	let redisURI = require('url').parse(process.env.REDIS_URL);
	let redisPassword = redisURI.auth.split(':')[1];
	module.exports={
		host: process.env.host || "",
		dbURI: process.env.dbURI,
		sessionSecret:"chapinH1121",
		fb:{
			clientID:process.env.fbClientID,
			clientSecret:process.env.fbClientSecret,
			callbackURL:process.env.host + "/auth/facebook/callback",
			profileFields:['id','displayName','photos']
		},
		twitter:{
			consumerKey:process.env.twConsumerKey,
			consumerSecret:process.env.twConsumerSecret,
			callbackURL:process.env.host + "/auth/twitter/callback",
			profileFields:['id','displayName','photos']
		},
		redis:{
			host:redisURI.hostname,
			port:redisURI.port,
			password:redisPassword
		}
	}
}else{
	module.exports = require('./development.json');
}