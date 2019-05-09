const pupeteer = require('puppeteer');

module.exports = async function(url, numberOfDays) {
	const browser = await pupeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	const dolarValuePerDay = await page.evaluate((numberOfDays) => {
		const data = document
			.querySelector('tickets-spa')
			.shadowRoot.querySelector('tickets-config-page')
			.shadowRoot.querySelector('tickets-num-days')
			.shadowRoot.querySelectorAll('dprd-price')
			[numberOfDays].shadowRoot.querySelector('span#price').textContent;

		return Number(data);
	}, numberOfDays);

	const totalPrice = dolarValuePerDay * numberOfDays;

	await browser.close();
	return totalPrice;
};
