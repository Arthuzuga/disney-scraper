const getExchangeRate = require('./currency');

const url =
	'https://disneyworld.disney.go.com/pt-br/admission/tickets/theme-parks/';

(async () => {
	const exchangeRate = await getExchangeRate(url);

	console.log({ exchangeRate });
	process.exit();
})();
