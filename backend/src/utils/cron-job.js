
const cron = require('node-cron');

cron.schedule('1 1 0 * jan-dec 0-7', () => {
    console.log("hello")
});




