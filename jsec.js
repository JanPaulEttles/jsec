const async = require('async');
const request = require('request');

function httpGet(url, callback) {
  const options = {
    url :  url,
    json : true
  };
  request(options,
    function(err, res, body) {
      callback(err, body);
    }
  );
}

const urls= [
  "https://api.ssllabs.com/api/v2/analyze?host=www.nature.com",
  "https://api.ssllabs.com/api/v2/analyze?host=www.springer.com"
];

async.map(urls, httpGet, function (err, res){
  if (err) return console.log(err);
  console.log(JSON.stringify(res));
});