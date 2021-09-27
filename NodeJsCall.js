const https = require('https');

const callExternalApiUsingHttp = (callback) => {
    _EXTERNAL_URL = 'https://ifsc.razorpay.com/';
    _EXTERNAL_URL = _EXTERNAL_URL + ifsc;

    https
        .get(_EXTERNAL_URL, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                return callback(data);
            });
        })
        .on('error', (err) => {
            console.log('error: ' + err.message);
        });
};

module.exports.callApi = callExternalApiUsingHttp;
