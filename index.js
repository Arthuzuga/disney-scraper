const getExchangeRate = require('./currency');
const getTicketPrice = require('./prices');

const url =
	'https://disneyworld.disney.go.com/pt-br/admission/tickets/theme-parks/';

const numberOfDays = 1;

(async () => {
	const exchangeRate = await getExchangeRate(url);

	const pricePerPersonPerDay = await getTicketPrice(url, numberOfDays - 1);

	const brl = Math.ceil(exchangeRate * pricePerPersonPerDay) * numberOfDays;

	console.log({ exchangeRate, pricePerPersonPerDay, brl });
	process.exit();
})();
