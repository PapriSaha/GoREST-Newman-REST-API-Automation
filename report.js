const newman = require('newman');

newman.run({
    collection: require('./Collection/GoRest-REST-API-Automation.postman_collection.json'),
    environment: require('./Environment/GoRest-REST-API-Automation.postman_environment.json'),
    reporters: ['cli', 'html'],
    reporter: {
        html: {
            export: './Report/GoRest-REST-API-Automation-Newman-Report.html'
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('Collection run complete!');
});
