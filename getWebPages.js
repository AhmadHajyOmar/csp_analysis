//Author: Ahmad Hajy Omar
const fs = require('fs')
var websites = fs.readFileSync("./top-1m.csv", 'utf-8').split(/\r?\n/);
const options = process.argv.splice(2);
var numbreOfWebsites = 1000000;
if(options.length > 0){
    numbreOfWebsites = parseInt(options[0]);
}
var websitesURLS = new String();
for(var w = 0; w < numbreOfWebsites; w++){
    websitesURLS += `https://www.${websites[w].split(",")[1]}`+"\n";
}

websitesURLS = websitesURLS.replace(/\n+$/, '');
fs.writeFileSync(`./tests/websites.txt`, websitesURLS)
