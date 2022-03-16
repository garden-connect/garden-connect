const cron = require('node-cron');

cron.schedule('1 1 0 1 jan-dec mon', () => {
    console.log('running a task every minute');
});




