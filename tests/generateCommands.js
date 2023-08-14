// Autor: Ahmad Hajy Omar
const fs = require('fs');

const urls = fs.readFileSync("./tests/websites.txt", 'utf-8').split(/\r?\n/);
const options = process.argv.splice(2);
var waitingTime = 0;
var headmode = "hl";
if (options.length === 2){
    if(options[0] === "hf"){
        headmode = "hf";
    }
    waitingTime = parseInt(options[1]);
}
let websitesURLS_Names = new Array();
for(var u of urls){
    let url = u;
    let pageNameEnding = u.split("https://www.")[1].split(".")[1];
    let pageName = u.split("https://www.")[1].split(".com")[0]+"-"+pageNameEnding;
    websitesURLS_Names.push([pageName, url])
}
console.log(websitesURLS_Names)
let commandsHomePage = new String();
for(var g of websitesURLS_Names){
    commandsHomePage += `node ./tests/example.spec.js ${g[0]} ${g[1].replaceAll("&","")} ${headmode} ${waitingTime}\n`
}
commandsHomePage = commandsHomePage.replace(/\n+$/, '');

fs.writeFileSync(`./tests/HomepagseCommands.txt`, commandsHomePage)