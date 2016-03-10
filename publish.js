var fetch = require('isomorphic-fetch');
var FormData = require('form-data');
var fs = require('fs');

console.log('FoyerLive Theme Publisher - v0.0.1');

//var file = './dist/attract-1.0.0-07a824cd19fdea74d865.js';
try {
  var file =  getNewestFile( './dist/', new RegExp('.*\.js$') );
} catch ( err ) {
  console.error( 'ERROR: ', err );
  console.log( 'Have you built the package?' );
  process.exit();
}

var packageContents = fs.readFileSync('./package.json', 'utf8');
var packageObject = JSON.parse( packageContents );

var fileContents = fs.readFileSync(file, 'utf8');


var form = new FormData();
form.append('theme', packageObject.name );
form.append('file', fileContents);
form.append('filename', file.substring( 7 ));

var headers = {
  'Accept': 'application/json',
  'Content-Type': form.getHeaders()['content-type'],
  'Authorization': '169303697562e4d22648017.89273466'
};

fetch('http://internal.foyerlive.com:9030/api/app/publishTheme', {
  method: 'POST',
  headers: headers,
  body: form
}).then((response) => {
  return response.json();
}).then((data) => {
  console.log('Successfully published to: %s', data.data.location);
}).catch((err) => {
  console.error('An error has occurred', err);
});



function getNewestFile(dir, regexp) {
  var newest = null;
  try {
  files = fs.readdirSync(dir);
  } catch (err) {
    throw 'Unable to open: ' + dir;
  }
  var one_matched = 0;

  for (i = 0; i < files.length; i++) {

    if (regexp.test(files[i]) == false)
      continue
    else if (one_matched == 0) {
      newest = files[i]
      one_matched = 1
      continue
    }

    f1_time = fs.statSync(files[i]).mtime.getTime()
    f2_time = fs.statSync(newest).mtime.getTime()
    if (f1_time > f2_time)
      newest[i] = files[i]
  }

  if (newest != null)
    return (dir + newest)
  return null
}