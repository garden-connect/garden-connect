// const cronSeconds = require('node-cron');
//
// cronSeconds.schedule('* * 11 15 mar tues', () => {
//     console.log('running cronSeconds every second');
// });

//Test
const cron = require('node-cron');

cron.schedule('* 12 15 mar tues', () => {
    console.log('running a task every minute');
});





//after 30 days, execute

// const Cron = require('node-cron');
//
// Cron.schedule('59 0 30 * *', () => {
//     console.log('running a task every minute');
// });