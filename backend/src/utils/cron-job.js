
const cron = require('node-cron');

cron.schedule('1 1 0 * jan-dec 0-7', () => {
    console.log("hello")
    let startDate = new Date("2015-08-04");
    let endDate = new Date("2015-08-12");

    let resultProductData = product_data.filter(function (a) {
        let hitDates = a.ProductHits || {};
        // extract all date strings
        hitDates = Object.keys(hitDates);
        // improvement: use some. this is an improvement because .map()
        // and .filter() are walking through all elements.
        // .some() stops this process if one item is found that returns true in the callback function and returns true for the whole expression
        let hitDateMatchExists = hitDates.some(function(dateStr) {
            let date = new Date(dateStr);
            return date >= startDate && date <= endDate
        });
        return hitDateMatchExists;
    });
    console.log(resultProductData);
});




