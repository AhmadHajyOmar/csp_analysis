const { exec } = require('node:child_process')
const { spawn } = require('node:child_process')
const prompt = require('prompt-sync')();
const options = process.argv.splice(2);

console.log(options)
var pathToWebsitesFile = options[0]
var numbreOfWebsites = options[1]
var headmode = options[2]
var waitingTime = options[3]



exec(`node ./getWebpages.js ${pathToWebsitesFile} ${numbreOfWebsites}`,{maxBuffer: undefined}, (error, stdout, stderr) => {
    if (error) {
        console.error(error)
        return;
    }
    console.log(stdout)
    exec(`node ./tests/generateCommands.js ${headmode} ${waitingTime}`,{maxBuffer: undefined}, (error, stdout, stderr) => {
        if (error) {
            console.error(error)
            return;
        }
        console.log(stdout)
    });
});








/*
exec('node ./tests/example.spec.js h', (error, output) => {
    if (error) {
        console.error(error)
    }else{
        exec('node ./tests/example.spec.js s', (error, output) => {
            if (error) {
                console.error(error)
            }else{
                exec('node ./tests/comp.js alluris', (error, output) => {
                    if (error) {
                        console.error(error)
                    }else{
                        exec('node ./tests/checkNonce.js', (error, output) => {
                            if (error) {
                                console.error(error)
                            }else{
                                
                            }
                            console.log(output)
                        })
                    }
                    console.log(output)
                })
            }
            console.log(output)
        })
    }
    console.log(output)
})*/