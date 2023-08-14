const { firefox, devices, chromium, webkit, expect } = require('playwright-extra');
const playwright = require('playwright-extra');
const parser = require('./csp_parsing')
const uaParser = require('ua-parser-js');
const fs = require('fs')
const path = require('path');
var json_arr = new Array();
const readline = require("readline");
const { Console } = require('console');
//const path = require('path');
const { version } = require('os');
const { setUncaughtExceptionCaptureCallback } = require('process');


// user-agents for chrom, firfox and webkit-safari
let dev = JSON.stringify(playwright.devices)
dev = dev.substring(1, dev.length-1)
dev = dev.split(/"},/)
let json_chromium = {}
let json_webkit = {}
let json_firefox = {}
let allDeveices = new Array();
let devNamesChrome = new Array();
let devNamesFirfox = new Array();
let devNamesWebkit = new Array();
let devNames = new Array();
let subpagesWithMark = new Array();


getUA(devNames);



/*var array = [
  ["50.1108539", "8.63226654", "w", "en-US", "1"],
  ["39.9950204", "127.61141", "w", "en-US", "1"],
  ["44.4862873", "-88.029133", "w", "en-US", "1"],
  ["-15.844159", "-47.914547", "w", "en-US", "1"],
  ["40.4081906", "78.5004047", "w", "en-US", "1"],
  ["30.0309385", "31.2364469", "w", "en-US", "1"],
  ["40.4081906", "-3.6894398", "w", "en-US", "1"],
  ["40.4081906", "-3.6894398", "w", "de-DE", "1"],
  ["40.4081906", "-3.6894398", "w", "ar-SA", "1"],
  ["40.4081906", "-3.6894398", "w", "ar-IQ", "1"],
  ["40.4081906", "-3.6894398", "w", "hi-IN", "1"],
  ["40.4081906", "-3.6894398", "w", "AR;q=10", "1"],
  ["40.4081906", "-3.6894398", "w", "ab-YZ", "1"],

  ["50.1108539", "8.63226654", "f", "en-US", "1"],
  ["39.9950204", "127.61141", "f", "en-US", "1"],
  ["44.4862873", "-88.029133", "f", "en-US", "1"],
  ["-15.844159", "-47.914547", "f", "en-US", "1"],
  ["40.4081906", "78.5004047", "f", "en-US", "1"],
  ["30.0309385", "31.2364469", "f", "en-US", "1"],
  ["40.4081906", "-3.6894398", "f", "en-US", "1"],
  ["40.4081906", "-3.6894398", "f", "de-DE", "1"],
  ["40.4081906", "-3.6894398", "f", "ar-SA", "1"],
  ["40.4081906", "-3.6894398", "f", "ar-IQ", "1"],
  ["40.4081906", "-3.6894398", "f", "hi-IN", "1"],
  ["40.4081906", "-3.6894398", "f", "AR;q=10", "1"],
  ["40.4081906", "-3.6894398", "f", "ab-YZ", "1"],

  ["50.1108539", "8.63226654", "c", "en-US", "1"],
  ["39.9950204", "127.61141", "c", "en-US", "1"],
  ["44.4862873", "-88.029133", "c", "en-US", "1"],
  ["-15.844159", "-47.914547", "c", "en-US", "1"],
  ["40.4081906", "78.5004047", "c", "en-US", "1"],
  ["30.0309385", "31.2364469", "c", "en-US", "1"],
  ["40.4081906", "-3.6894398", "c", "en-US", "1"],
  ["40.4081906", "-3.6894398", "c", "de-DE", "1"],
  ["40.4081906", "-3.6894398", "c", "ar-SA", "1"],
  ["40.4081906", "-3.6894398", "c", "ar-IQ", "1"],
  ["40.4081906", "-3.6894398", "c", "hi-IN", "1"],
  ["40.4081906", "-3.6894398", "c", "AR;q=10", "1"],
  ["40.4081906", "-3.6894398", "c", "ab-YZ", "1"],

  ["50.1108539", "8.63226654", "c", "en-US", "3"],
  ["39.9950204", "127.61141", "c", "en-US", "3"],
  ["44.4862873", "-88.029133", "c", "en-US", "3"],
  ["-15.844159", "-47.914547", "c", "en-US", "3"],
  ["40.4081906", "78.5004047", "c", "en-US", "3"],
  ["30.0309385", "31.2364469", "c", "en-US", "3"],
  ["40.4081906", "-3.6894398", "c", "en-US", "3"],
  ["40.4081906", "-3.6894398", "c", "de-DE", "3"],
  ["40.4081906", "-3.6894398", "c", "ar-SA", "3"],
  ["40.4081906", "-3.6894398", "c", "ar-IQ", "3"],
  ["40.4081906", "-3.6894398", "c", "hi-IN", "3"],
  ["40.4081906", "-3.6894398", "c", "AR;q=10", "3"],
  ["40.4081906", "-3.6894398", "c", "ab-YZ", "3"],

  ["50.1108539", "8.63226654", "c", "en-US", "2"],
  ["39.9950204", "127.61141", "c", "en-US", "2"],
  ["44.4862873", "-88.029133", "c", "en-US", "2"],
  ["-15.844159", "-47.914547", "c", "en-US", "2"],
  ["40.4081906", "78.5004047", "c", "en-US", "2"],
  ["30.0309385", "31.2364469", "c", "en-US", "2"],
  ["40.4081906", "-3.6894398", "c", "en-US", "2"],
  ["40.4081906", "-3.6894398", "c", "de-DE", "2"],
  ["40.4081906", "-3.6894398", "c", "ar-SA", "2"],
  ["40.4081906", "-3.6894398", "c", "ar-IQ", "2"],
  ["40.4081906", "-3.6894398", "c", "hi-IN", "2"],
  ["40.4081906", "-3.6894398", "c", "AR;q=10", "2"],
  ["40.4081906", "-3.6894398", "c", "ab-YZ", "2"],
 
]

var array = [
  ["-15.844159", "-47.914547", "w", "en-US", "1"],
  ["40.4081906", "78.5004047", "w", "en-US", "1"],
  ["40.4081906", "-3.6894398", "w", "en-US", "1"],
  ["40.4081906", "-3.6894398", "w", "de-DE", "1"],
  ["40.4081906", "-3.6894398", "w", "ar-SA", "1"],
  ["40.4081906", "-3.6894398", "w", "AR;q=10", "1"],
  ["40.4081906", "-3.6894398", "w", "ab-YZ", "1"],
  ["-15.844159", "-47.914547", "f", "en-US", "1"],
  ["40.4081906", "78.5004047", "f", "en-US", "1"],
  ["40.4081906", "-3.6894398", "f", "en-US", "1"],
  ["40.4081906", "-3.6894398", "f", "de-DE", "1"],
  ["40.4081906", "-3.6894398", "f", "ar-SA", "1"],
  ["40.4081906", "-3.6894398", "f", "AR;q=10", "1"],
  ["40.4081906", "-3.6894398", "f", "ab-YZ", "1"],
  ["-15.844159", "-47.914547", "c", "en-US", "1"],
  ["40.4081906", "78.5004047", "c", "en-US", "1"],
  ["40.4081906", "-3.6894398", "c", "en-US", "1"],
  ["40.4081906", "-3.6894398", "c", "de-DE", "1"],
  ["40.4081906", "-3.6894398", "c", "ar-SA", "1"],
  ["40.4081906", "-3.6894398", "c", "AR;q=10", "1"],
  ["40.4081906", "-3.6894398", "c", "ab-YZ", "1"],
  ["-15.844159", "-47.914547", "c", "en-US", "3"],
  ["40.4081906", "78.5004047", "c", "en-US", "3"],
  ["40.4081906", "-3.6894398", "c", "en-US", "3"],
  ["40.4081906", "-3.6894398", "c", "de-DE", "3"],
  ["40.4081906", "-3.6894398", "c", "ar-SA", "3"],
  ["40.4081906", "-3.6894398", "c", "AR;q=10", "3"],
  ["40.4081906", "-3.6894398", "c", "ab-YZ", "3"],
  ["-15.844159", "-47.914547", "c", "en-US", "2"],
  ["40.4081906", "78.5004047", "c", "en-US", "2"],
  ["40.4081906", "-3.6894398", "c", "en-US", "2"],
  ["40.4081906", "-3.6894398", "c", "de-DE", "2"],
  ["40.4081906", "-3.6894398", "c", "ar-SA", "2"],
  ["40.4081906", "-3.6894398", "c", "AR;q=10", "2"],
  ["40.4081906", "-3.6894398", "c", "ab-YZ", "2"]
 
]


*/
var config = fs.readFileSync("./tests/config.txt", 'utf-8').split(/\r?\n/);
var array = [];
var devicesarray = [];
for(var c of config){
  var splitPoint = c.replace("]","")
  splitPoint = splitPoint.split(" [")
  console.log(splitPoint)

  var devUA = splitPoint[1].split(",")
  var conf = splitPoint[0].split(" ")
  devicesarray.push(devUA)
  array.push(conf)
}


const website = process.argv.splice(2);
let choosedBrowsers = new Array();
let usedBrowserToTest = new Array();
var subPages = new Array();
var lat = 0;
var lon = 0;
var choice = 0;
let browserChoice = "";
var op = ["Android", "iOS", "Windows", "Mac OS"]
var acceptLanguage = "";
let pageName = website[0];
const url = website[1];
let headmode = true;
if(website[2] === "hf"){
  headmode = false;
}
console.log(website)
const waitingTimeOp = website[3];


(async() => {
  let counter = 0;
  var WebKit = await playwright.webkit.launch({headless: headmode});  
  var Chrome = await playwright.chromium.launch({ headless: headmode});
  var Firefox = await playwright.firefox.launch({ headless: headmode});  
  let context;
  let browser;
  for(var e of array){
    choosedBrowsers = new Array()
    devNames = new Array();
    usedBrowserToTest = new Array();
    subPages = new Array();
    lat = parseFloat(e[0])
    lon = parseFloat(e[1])
    choice = parseInt(e[4])
    acceptLanguage = e[3]
    browserChoice = e[2];
    if (browserChoice === "c" && choice === 1){
      usedBrowserToTest = ["Chrome", "Edge"]
    }else if (browserChoice === "w" && choice === 1){
      usedBrowserToTest = ["WebKit", "Mobile Safari", "Safari"]
    }else if (browserChoice === "f" && choice === 1){
      usedBrowserToTest = ["Firefox"]
    }else{
      if(choice != 1){
        usedBrowserToTest = ["Chrome", "Edge", "Firefox", "WebKit"]
      }
    }



    var dir = new String();
    if(choice === 1){
      dir = "("+ lat + " " + lon + ")-("+(usedBrowserToTest[0])+")-(" + choice+")";
    }else{
      if(choice === 2){
        dir = "("+ lat + " " + lon + ")-(Non-Existing)-(" + choice+")";
      }else{
        if(choice === 3){
          dir = "("+ lat + " " + lon + ")-(Malformed)-(" + choice+")";
        }else{
          dir = "("+ lat + " " + lon + ")-(Empty)-(" + choice+")";
        }

      }
    }

    console.log(dir)

    var homePageDB = new Array();
    let uaNon = new Array()


    if(choice === 1){
      searchSubPages = true;
      devNames = devicesarray[counter];
      if(usedBrowserToTest.includes("WebKit")){
        choosedBrowsers.push(1)

      }
      
      if(usedBrowserToTest.includes("Chrome")){
        choosedBrowsers.push(2)
      }
      
      if(usedBrowserToTest.includes("Firefox")){
        choosedBrowsers.push(3)
      }

    }

    if(choice === 2){
      choosedBrowsers.push(1)
      choosedBrowsers.push(2)
      choosedBrowsers.push(3)

      if(op.includes("Android")){
        for(let i = 0; i < 1;){
          let ua = getNoneExistedMobileDesktopUserAgent(["Android"])
          if(!uaNon.includes(ua)){
            uaNon.push(ua)
            devNames.push(`${ua.split(/\s/g)[0].split("/")[0]}MBA`)
            i++;
          }
        }
      }
      if(op.includes("iOS")){
        for(let i = 0; i < 1;){
          let ua = getNoneExistedMobileDesktopUserAgent(["iOS"])
          if(!uaNon.includes(ua)){
            uaNon.push(ua)
            devNames.push(`${ua.split(/\s/g)[0].split("/")[0]}MBI`)
            i++;
          }
        }
      }
      if(op.includes("Windows")){
        for(let i = 0; i < 1;){
          let ua = getNoneExistedMobileDesktopUserAgent(["Windows"])
          if(!uaNon.includes(ua)){
            uaNon.push(ua)
            devNames.push(`${ua.split(/\s/g)[0].split("/")[0]}DBW`)
            i++;
          }
        }
      }
      if(op.includes("Mac OS")){
        for(let i = 0; i < 1;){
          let ua = getNoneExistedMobileDesktopUserAgent(["macOS"])
          if(!uaNon.includes(ua)){
            uaNon.push(ua)
            devNames.push(`${ua.split(/\s/g)[0].split("/")[0]}DBM`)
            i++;
          }
        }
      }
      let uagents = new String()
      let devNamesFile = new String()
      for(let i = 0; i < uaNon.length; i++){
        if(i != uaNon.length-1){
          uagents+= uaNon[i]+"\n"
        }else{
          uagents+= uaNon[i]
        }
      }
      for(let i = 0; i < devNames.length; i++){
        if(i != devNames.length-1){
          devNamesFile+= devNames[i]+"\n"
        }else{
          devNamesFile+= devNames[i]

        }
      }
      fs.writeFileSync(`./tests/uagentsNoneExis.txt`, uagents)
      fs.writeFileSync(`./tests/uagentsNoneExisDevNames.txt`, devNamesFile)
    }
    let uamalFormed = new Array()
    if(choice === 3){
      choosedBrowsers.push(1)
      choosedBrowsers.push(2)
      choosedBrowsers.push(3)

      uamalFormed.push("Mobile/1.0 (Android; 12.8)")
      uamalFormed.push("Chrome/91.0 (Windows; 14.1)")
      devNames.push(`MobileMalFormedMBA`)
      devNames.push(`DesktopMAlFormedDBW`)

      let uagents = new String()
      let devNamesFile = new String()
      uagents = "Mobile/1.0 (Android; 12.8)" + "\n" + "Chrome/91.0 (Windows; 14.1)"
      devNamesFile = "Mobile-mal-formed" + "\n" + "Desktop-mal-formed"
      fs.writeFileSync(`./tests/uagents-mal-formed.txt`, uagents)
      fs.writeFileSync(`./tests/uagents-mal-formed-DevNames.txt`, devNamesFile)
    }

    if(choice === 4){
      choosedBrowsers.push(1)
      choosedBrowsers.push(2)
      choosedBrowsers.push(3)
      devNames = ['Galaxy S9+']
    }

    if(!fs.existsSync(`./cspHeaders-${acceptLanguage}-${dir}`)){
      fs.mkdirSync(path.join("./", `cspHeaders-${acceptLanguage}-${dir}`));
    }

    if(!fs.existsSync(`./UserAgents-${acceptLanguage}-${dir}`)){
      fs.mkdirSync(path.join("./", `UserAgents-${acceptLanguage}-${dir}`));
    }

    for(let q = 0; q < devNames.length; q++) {
      console.log(devNames[q])
      let dev = devNames[q]
      let found1 = false;
      
      for(let i = 0; i < choosedBrowsers.length; i++){
        dev = devNames[q]
        let found2 = false;
        let chBro = choosedBrowsers[i]

        if((choice === 2 && ((uaNon[q].includes("Android") && (chBro === 2 || chBro === 3)) || (uaNon[q].includes("Windows;") && (chBro === 2|| chBro === 3) ) || (uaNon[q].includes("Mobile; iOS") && (chBro === 1)) || (uaNon[q].includes("macOS;") && (chBro === 1) ) )) || choice === 1 || choice === 3 || choice === 4){
          homePageDB.push(url);
          let broserName;
          let version;
          if(chBro === 1){
            browser = WebKit;
            broserName = "WebKit"
          }
          if(chBro === 2){
            browser = Chrome;
            broserName = "Chrome"  
          }
          if(chBro === 3){
            browser = Firefox;  
            broserName = "Firefox"  
          }
    
          let model_name = dev;
          if(choice === 1){

            if(dev === "Desktop Chrome HiDPI (Linux)"){//DONE
              dev = devices["Desktop Chrome HiDPI"];
              dev.userAgent  = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.29 Safari/537.36"
            }else if (dev === "Desktop Chrome (Linux)"){//DONE
              dev = devices["Desktop Chrome"];
              dev.userAgent  = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.29 Safari/537.36"
            }else if (dev === "Desktop Edge HiDPI (Linux)"){//DONE
              dev = devices["Desktop Edge HiDPI"];
              dev.userAgent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.29 Safari/537.36 Edg/112.0.5615.29"
            }else if (dev === "Desktop Edge (Linux)"){//DONE
              dev = devices["Desktop Edge"];
              dev.userAgent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.29 Safari/537.36 Edg/112.0.5615.29"
            }else if (dev === "Desktop Chrome HiDPI (Mac)"){//DONE
              dev = devices["Desktop Chrome HiDPI"];
              dev.userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.29 Safari/537.36"
            }else if (dev === "Desktop Chrome (Mac)"){//DONE
              dev = devices["Desktop Chrome"];
              dev.userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.29 Safari/537.36"
            }else if (dev === "Desktop Edge HiDPI (Mac)"){
              dev = devices["Desktop Edge HiDPI"];
              dev.userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.29 Safari/537.36 Edg/112.0.5615.29"
            }else if (dev === "Desktop Edge (Mac)"){
              dev = devices["Desktop Edge"];
              dev.userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.29 Safari/537.36 Edg/112.0.5615.29"
            }else if (dev === "Desktop Safari (Linux)"){
              dev = devices["Desktop Safari"];
              dev.userAgent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15"
            }else if (dev === "Desktop Safari (Windows)"){
              dev = devices["Desktop Safari"];
              dev.userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15"
            }else if (dev === "Desktop Firefox HiDPI (Linux)"){
              dev = devices["Desktop Firefox HiDPI"];
              dev.userAgent = "Mozilla/5.0 (X11; Linux x86_64; rv:111.0) Gecko/20100101 Firefox/111.0"
            }else if (dev === "Desktop Firefox (Linux)"){
              dev = devices["Desktop Firefox"];
              dev.userAgent = "Mozilla/5.0 (X11; Linux x86_64; rv:111.0) Gecko/20100101 Firefox/111.0"
            }else if (dev === "Desktop Firefox HiDPI (Mac)"){
              dev = devices["Desktop Firefox HiDPI"];
              dev.userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7; rv:111.0) Gecko/20100101 Firefox/111.0"
            }else if (dev === "Desktop Firefox (Mac)"){
              dev = devices["Desktop Firefox"];
              dev.userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7; rv:111.0) Gecko/20100101 Firefox/111.0"
            }else{
              dev = devices[dev]
            }
          }
          if(choice === 2){
            if(dev.includes("MBA")){

              dev = {
                name: model_name,
                userAgent: uaNon[q],
                viewport: {
                  width: 360,
                  height: 640,
                  deviceScaleFactor: 1,
                  isMobile: true,
                  hasTouch: true,
                  isLandscape: false,
                },
                browserName: 'chromium', 
                browserVersion: browser.version(),
              };
              devices[model_name] = dev
              
            
            }else if(dev.includes("MBI")){

              dev = {
                name: model_name,
                userAgent: uaNon[q],
                viewport: {
                  width: 360,
                  height: 640,
                  deviceScaleFactor: 1,
                  isMobile: true,
                  hasTouch: true,
                  isLandscape: false,
                },
                browserName: 'Mobile Safari', 
                browserVersion: browser.version(),
              };
              devices[model_name] = dev
              
            
            }else if(dev.includes("DBW")){

              dev = {
                name: model_name,
                userAgent: uaNon[q],
                viewport: {
                  width: 1280,
                  height: 720,
                  deviceScaleFactor: 1,
                  isMobile: false,
                  hasTouch: false,
                  isLandscape: false,
                },
                browserName: 'chromium', 
                browserVersion: browser.version(),
              };
              devices[model_name] = dev
          
            
            }else if(dev.includes("DBM")){

              dev = {
                name: model_name,
                userAgent: uaNon[q],
                viewport: {
                  width: 1280,
                  height: 720,
                  deviceScaleFactor: 1,
                  isMobile: false,
                  hasTouch: false,
                  isLandscape: false,
                },
                browserName: 'Safari', 
                browserVersion: browser.version(),
              };
              devices[model_name] = dev
            
            
            }
          }
          if(choice === 3){
            dev = {
              name: model_name,
              userAgent: uamalFormed[q],
              viewport: {
                width: 1280,
                height: 720,
                deviceScaleFactor: 1,
                isMobile: false,
                hasTouch: false,
                isLandscape: false,
              },
              browserName: 'chromium', 
              browserVersion: browser.version(),
            };
            devices[model_name] = dev
          }
          if(choice === 4){
            dev = devices[dev]
            dev.userAgent = "";
          }
          if(choice === 1 || choice === 4){
            if(chBro === 3){
              let devStr = JSON.stringify(dev);
              devStr = devStr.replace("\"isMobile\":true,", "")
              devStr = devStr.replace("\"isMobile\":false,", "")
              dev = JSON.parse(devStr);
            }
            context = await browser.newContext({
              ...dev,
              premissions: ['geolocation'],
              geolocation: {latitude: lat, longitude: lon},
              locale: `${acceptLanguage}`,
              ignoreHTTPSErrors: true
            });
          }else{
            context = await browser.newContext({
              ...devices[model_name],
              premissions: ['geolocation'],
              geolocation: {latitude: lat, longitude: lon},
              locale: `${acceptLanguage}`,
              ignoreHTTPSErrors: true
            });
          }
      
          let page = await context.newPage();
          let csp = new Array();
          let headers = new Array();
          let allCSP = new Array();
          let finalheaders = new Array();
          const userAgentInfo= uaParser(dev.userAgent);
          let browserversion = browser.version();
          let requestHeadersArray = new Array();
          let failed = "false";
        
          
          try{
            if(!fs.existsSync(`./cspHeaders-${acceptLanguage}-${dir}/${pageName}`)){
              fs.mkdirSync(path.join(`./cspHeaders-${acceptLanguage}-${dir}/`, `${pageName}`));
            }
            if(!fs.existsSync(`./UserAgents-${acceptLanguage}-${dir}/${pageName}`)){
              fs.mkdirSync(path.join(`./UserAgents-${acceptLanguage}-${dir}/`, `${pageName}`));
            }
          }catch(err){
            console.log(err)
          }
          console.log(url)
          await page.on("response", async (response) => {

            try {
              let os = userAgentInfo.os.name
              op.push(os)
              let os_version = userAgentInfo.os.version;
              if(choice === 2){
                if((uaNon[q].includes("Mobile; iOS") && (chBro === 1))){
                  os = "iOS"
                  os_version = "14.1"
                }
              }
              if(choice === 3){
                if(os === "Android"){
                  os_version = "12.8"
                }else{
                  os = "Windows"
                  os_version = "14.1"
                }
              }
              let pass = false;
              if (choice === 1 && usedBrowserToTest.includes("Firefox")){
                  pass = true;
              }
              if(op.includes(os) && (usedBrowserToTest.includes(userAgentInfo.browser.name) || pass === true || (userAgentInfo.browser.name === "Android Browser" && usedBrowserToTest.includes(userAgentInfo.engine.name))) || choice === 2 || choice === 3 || choice === 4) {

                if(response.request().resourceType() == 'document'){
                  let requestAllHeaders = response.request().headers();
                  requestHeadersArray = parser.requestHeaders(JSON.stringify(requestAllHeaders), requestHeadersArray);

                  let allHeaders = await response.headers();
                  let href = await response.url();
                  if(href === url || href === `${url}/`){
                    let headers_arr = parser.cspParser(allHeaders);
                    let headers = parser.cspParser_GetAllHeaders(headers_arr)
                    allCSP.push(headers_arr)
                    csp = parser.getCSP_Policy(csp, headers, headers_arr);
                  }
                  
    
                  if(model_name.endsWith("landscape")) {
                    model_name = model_name.substring(0,model_name.indexOf(" landscape"))
                  }

                  let fileName = `csp_${model_name}_${broserName}_${browserversion}_${os}_${dev.viewport.height}_${dev.viewport.width}_${os_version}_${pageName}.json`
                  fn = fileName;
                  let json = {};
                  let counterCSP = 1;
                  for(let i = 0; i < csp.length; i++) {
                    let key = csp[i][0]
                    let value = csp[i][1][0];
                    if(key === "content-security-policy"){
                      key = key + `-${counterCSP}`;
                      counterCSP++;
                    }
                    json[key] = value;
                  } 
                  json['url'] = url
                  fs.writeFileSync(`./cspHeaders-${acceptLanguage}-${dir}/${pageName}/${fileName}`, JSON.stringify(json))

                  let json_2 = {};
                  for(let i = 0; i < requestHeadersArray.length; i++){
                    json_2[requestHeadersArray[i][0]] = requestHeadersArray[i][1]
                  }
                  let fileName_UA = `UserAgent ${fileName}`;
                  fs.writeFileSync(`./UserAgents-${acceptLanguage}-${dir}/${pageName}/${fileName_UA}`, JSON.stringify(json_2))

                }               
              }
            } catch (error) {
              console.error(error);
            }
            // if only one csp is safe then the page deploy a safe csp //page level
            // limited analyze if the home pages and all subpages depoly a safe csp the the domain deploy a safe csp // domain level
            // domain level with my dataset :D 
          }); 
          
          try{
            await page.goto(url, { waitUntil: "load"});
            let time = parseInt(waitingTimeOp)
            if(time > 0){
              await waitingTime(time)
            }
            reachable = true;
          }catch (e) {
            const os = userAgentInfo.os.name
            const os_version = userAgentInfo.os.version;
            let fileName = `csp_${model_name}_${broserName}_${browserversion}_${os}_${dev.viewport.height}_${dev.viewport.width}_${os_version}_${pageName}.json`
            let json = {}
            json["Not Reachable webpage"] = pageName
            json["visited links"] = url
            reachable = false
          }

        }
      } 
      if(found1){
        break;
      }   
    }
    counter++;
  }
  await context.close();
  await browser.close(); 
  await WebKit.close();
  await Firefox.close();
  await Chrome.close();
})(); 



function waitingTime(ms) {
  return new Promise((resolve, reject) => {
      setTimeout(resolve, ms)
  })
}



function getUA(devNames) {

  for(let i = 0; i <dev.length; i++) {
    let d = dev[i];
    let dev_name= d.substring(0, d.indexOf(':'))
    let dev_ua = d.substring(d.indexOf('{'),d.length-1)
    let dev_ua_json = dev_ua+"}";
    if(d != dev[dev.length-1]) {
      if(dev_ua.endsWith("u")) {
        dev_ua += "m"
      } else if(dev_ua.endsWith("i")) {
        dev_ua += "t"
      } else {
        dev_ua += "x"
      }
      dev_ua = dev_ua.substring(1,dev_ua.length)
      dev_ua = dev_ua + "\""
    } else {
      dev_ua = dev_ua.substring(1, dev_ua.length-1)
    }
    let dev_ua_option = dev_ua.split(",\"viewport\":")
    if(d.includes("screen")) {
      dev_ua_option = [dev_ua_option[0], `"viewport":${dev_ua_option[1].split(",\"screen\":")[0]}`,  `${dev_ua_option[1].split(",\"screen\":")[1]}`, `${dev_ua_option[1].split(",\"screen\":")[1].split(/},/)[1]}`]
      dev_ua_option[2] = `"screen":${dev_ua_option[2].split(",\"screen\":")[0].split(/},/)[0]+"}"}`
  
    } else {
      dev_ua_option = [dev_ua_option[0], `"viewport":${dev_ua_option[1].split(/},/)[0]}`+"}", `${dev_ua_option[1].split(/},/)[1]}`]
  
    }
    let dev_arr = dev_ua_option[dev_ua_option.length-1].split(",")
    dev_ua_option.pop()
    for(let j = 0; j<dev_arr.length; j++) {
      dev_ua_option.push(dev_arr[j])
    }
    allDeveices.push([dev_name, dev_ua_option])
    
    if(dev_ua_option[dev_ua_option.length-1].includes("chromium")) {
      json_chromium[dev_name]=dev_ua_json
      dev_name = dev_name.substring(1, dev_name.length-1)
      devNamesChrome = [
      'Galaxy S9+',
      'Galaxy S9+ landscape',
      'Galaxy Tab S4',
      'Galaxy Tab S4 landscape',
      'Desktop Chrome'];
      //console.log(devNamesChrome)
    } else if(dev_ua_option[dev_ua_option.length-1].includes("webkit")) {
      json_webkit[dev_name]=dev_ua_json
      dev_name = dev_name.substring(1, dev_name.length-1)
      devNamesWebkit = [
        'iPhone 13',
        'iPhone 13 landscape',
        'Desktop Safari',
        'Galaxy Note 3',
        'Galaxy Note 3 landscape'];

    } else {
      json_firefox[dev_name]=dev_ua_json
      dev_name = dev_name.substring(1, dev_name.length-1)
      devNamesFirfox.push(dev_name)
      devNamesFirfox = ['Desktop Firefox',
      'Galaxy S9+',
      'Galaxy S9+ landscape',
      'iPhone 13',
      'iPhone 13 landscape' ]
      //console.log(devNamesFirfox)
    }
  
  }

  fs.writeFileSync(`./tests/chromium_dev.json`, JSON.stringify(json_chromium))
  fs.writeFileSync(`./tests/webkit_dev.json`, JSON.stringify(json_webkit))
  fs.writeFileSync(`./tests/firefox_dev.json`, JSON.stringify(json_firefox))
    
}



function getNoneExistedMobileDesktopUserAgent(operatingSystem) {
  const useragents = [
    "Mobile/6.0 (Mobile; Android 27.6; FakeUA/6)",
    "Mobile/6.0 (Mobile; iOS 14.1; FakeUA/2)",
    "Desktop/114.0 (Windows NT 13.9; Windows; x32; FakeUA/6)",
    "Desktop/114.0 (Windows NT 13.9; macOS; x32; FakeUA/2)",
  ]
  
  let ua = new String();
  while(1){
    ua = useragents[Math.floor(Math.random() * useragents.length)]
    if(operatingSystem.includes("Windows") || operatingSystem.includes("macOS")){
      if(ua.includes(`${operatingSystem[0]};`)){
        break;
      }
    }else{
      if(ua.includes(`${operatingSystem[0]}`)){
        break;
      }
    }
   
  }
  return ua;
}

