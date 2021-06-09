// Update with your config settings.
require('dotenv').config();

module.exports = {
	development: {
		client: process.env.client,
		connection: {
			database: process.env.database,
			user: process.env.user,
			password: process.env.password,			
		}
	},
	test: {
		client: process.env.client,
		connection: {
			database: process.env.database,
			user: process.env.user,
			password: process.env.password,			
		}	
	},
	  production: {
		client: process.env.client,
		connection: {
			database: process.env.database,
			user: process.env.user,
			password: process.env.password,			
		}	  
	}
};