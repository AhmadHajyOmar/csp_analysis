//Author: Ahmad Hajy Omar
const fs = require('fs')
const options = process.argv.splice(2);
let fileName = "top-1m.csv";
if(options.length > 0){ 
    fileName = options[0];
}
var websites = fs.readFileSync(`./${fileName}`, 'utf-8').split(/\r?\n/);
var numbreOfWebsites = 1000000;
if(options.length > 0){
    numbreOfWebsites = parseInt(options[1]);
}
var websitesURLS = new String();
for(var w = 0; w < numbreOfWebsites; w++){
    websitesURLS += `https://www.${websites[w].split(",")[1]}`+"\n";
}

websitesURLS = websitesURLS.replace(/\n+$/, '');
fs.writeFileSync(`./tests/websites.txt`, websitesURLS)
