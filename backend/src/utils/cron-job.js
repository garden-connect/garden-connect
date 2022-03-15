const cron = require('node-cron');

cron.schedule('* * 14 15 March Tuesday', () => {
    console.log('running a task every minute');
});




