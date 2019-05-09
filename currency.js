const pupeteer = require('puppeteer');

module.exports = async function(url) {
	const browser = await pupeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	const exchangeRate = await page.evaluate(() => {
		document.querySelectorAll('span.widget')[0].click();

		const data = document.querySelectorAll('div.modalContent')[1].dataset;

		const objectData = JSON.parse(data.plugins)[0][1];

		return objectData.currencyConversion.exchangeRate;
	});
	await browser.close();
	return exchangeRate;
};
