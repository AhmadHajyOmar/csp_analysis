const prompt = require('prompt-sync')();
const fs = require('fs')


let config = new String ()
let input = "y"
do{
    var latitude = prompt("write a latitude? ");
    var longitude = prompt("write a longitude? ");
    var browser = "";
    var accLanguage = "";
    var uaOption = "";
    while(1){
        console.log("Choose one of the following browsers:")
        console.log("type c for chrom")
        console.log("type w for safari webkit")
        console.log("type f for firfox")
        browser = prompt("What is your browser? ");
        if(browser === 'c' || browser === 'w' || browser === 'f'){
            break;
        }
    }


    while(1){
        console.log("Choose one of the following accept languages:")
        console.log("fr-CH, en-US, de-DE, ru-RU, en-GB, fr-FR, ar-EG, ar-IQ, ar-SA, nl-BE, hi-IN, ab-YZ(not supported accept language), AR;q=10  (mal-formed accept language)")
        accLanguage = prompt("What is your language? ")
        if(accLanguage === 'hi-IN' || accLanguage === 'nl-BE' || accLanguage === 'ar-SA' || accLanguage === 'ar-IQ' || accLanguage === 'ar-EG' || accLanguage === 'fr-CH' || accLanguage === 'en-US' || accLanguage === 'de-DE' || accLanguage === 'ru-RU' || accLanguage === 'en-GB' || accLanguage === 'fr-FR' || accLanguage === 'ab-YZ'
        || accLanguage === 'AR;q=10' ){
            break;
        }
    }
    while(1){
        console.log("Choose one of the following option:")
        console.log("1: existed ua")
        console.log("2: not existed ua")
        console.log("3: mal-formed ua")
        console.log("4: empty ua")
    
        uaOption = prompt("What is your choice? ")
        if(uaOption === '1' || uaOption === '2' || uaOption === '3' || uaOption === '4'){
            break;
        }
    }

    let uaArray = new Array();
    switch(browser){
        case 'c':{
            if(uaOption === '1'){
               uaArray = getUAforChrome(uaArray)
            }
        }
        break;
        case 'w':{
            if(uaOption === '1'){
               uaArray = getUAforWebkit(uaArray)
            }
        }
        break;
        case 'f':{
            if(uaOption === '1'){
               uaArray = getUAforFirefox(uaArray)
            }
        }
        break;
    }

    config += latitude + " " + longitude + " " + browser + " " + accLanguage + " " + uaOption + " [" + uaArray + "]\n"
    console.log("your actual configurations are :")
    console.log(config)
    input = prompt("Another config? Type (y|Y for yes)");

}while(input === 'y' || input ==="Y")
config = config.replace(/\n+$/, '');

fs.writeFileSync(`./tests/config.txt`, config)


function getUAforChrome(uaArray){
    let more = "y"
    do{
        console.log("1- Galaxy S9+ (Android)")
        console.log("2- Galaxy S9+ landscape (Android)")
        console.log("3- Galaxy Tab S4 (Android)")
        console.log("4- Galaxy Tab S4 landscape (Android)")
        console.log("5- Desktop Chrome HiDPI (Windows)")
        console.log("6- Desktop Chrome (Windows)")
        console.log("7- Desktop Edge HiDPI (Windows)")
        console.log("8- Desktop Edge (Windows)")

        console.log("9- Desktop Chrome HiDPI (Linux)")
        console.log("10- Desktop Chrome (Linux)")
        console.log("11- Desktop Edge HiDPI (Linux)")
        console.log("12- Desktop Edge (Linux)")

        console.log("13- Desktop Chrome HiDPI (Mac)")
        console.log("14- Desktop Chrome (Mac)")
        console.log("15- Desktop Edge HiDPI (Mac)")
        console.log("16- Desktop Edge (Mac)")

        let choice = prompt("choose one of the previous UA: ")
        if(parseInt(choice) > 16 || parseInt(choice) < 1){
            console.log("undefined !!")
        }else{
            switch(parseInt(choice)){
                case 1 : {
                    if(!uaArray.includes('Galaxy S9+')){
                        uaArray.push('Galaxy S9+')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 2 : {
                    if(!uaArray.includes('Galaxy S9+ landscape')){
                        uaArray.push('Galaxy S9+ landscape')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 3 : {
                    if(!uaArray.includes('Galaxy Tab S4')){
                        uaArray.push('Galaxy Tab S4')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 4 : {
                    if(!uaArray.includes('Galaxy Tab S4 landscape')){
                        uaArray.push('Galaxy Tab S4 landscape')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 5 : {
                    if(!uaArray.includes('Desktop Chrome HiDPI')){
                        uaArray.push('Desktop Chrome HiDPI')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 6 : {
                    if(!uaArray.includes('Desktop Chrome')){
                        uaArray.push('Desktop Chrome')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 7 : {
                    if(!uaArray.includes('Desktop Edge HiDPI')){
                        uaArray.push('Desktop Edge HiDPI')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 8 : {
                    if(!uaArray.includes('Desktop Edge')){
                        uaArray.push('Desktop Edge')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;


                case 9 : {
                    if(!uaArray.includes('Desktop Chrome HiDPI (Linux)')){
                        uaArray.push('Desktop Chrome HiDPI (Linux)')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 10 : {
                    if(!uaArray.includes('Desktop Chrome (Linux)')){
                        uaArray.push('Desktop Chrome (Linux)')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 11 : {
                    if(!uaArray.includes('Desktop Edge HiDPI (Linux)')){
                        uaArray.push('Desktop Edge HiDPI (Linux)')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 12 : {
                    if(!uaArray.includes('Desktop Edge (Linux)')){
                        uaArray.push('Desktop Edge (Linux)')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;



                case 13 : {
                    if(!uaArray.includes('Desktop Chrome HiDPI (Mac)')){
                        uaArray.push('Desktop Chrome HiDPI (Mac)')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 14 : {
                    if(!uaArray.includes('Desktop Chrome (Mac)')){
                        uaArray.push('Desktop Chrome (Mac)')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 15 : {
                    if(!uaArray.includes('Desktop Edge HiDPI (Mac)')){
                        uaArray.push('Desktop Edge HiDPI (Mac)')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 16 : {
                    if(!uaArray.includes('Desktop Edge (Mac)')){
                        uaArray.push('Desktop Edge (Mac)')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;


            }
        }
        more = prompt("Do you want to add more UAs? (Type y|Y for yes)")
    }while(more === 'y' || more === 'Y')
    return uaArray;

}


function getUAforWebkit(uaArray){
    let more = "y"
    do{
        console.log("1- iPhone 13 (iOS)")
        console.log("2- iPhone 13 landscape (iOS)")
        console.log("3- Galaxy Note 3 (Android)")
        console.log("4- Galaxy Note 3 landscape (Android)")
        console.log("5- Desktop Safari (Mac)")
        console.log("6- Desktop Safari (Linux)")
        console.log("7- Desktop Safari (Windows)")


        let choice = prompt("choose one of the previous UA:")
        if(parseInt(choice) > 7 || parseInt(choice) < 1){
            console.log("undefined !!")
        }else{
            switch(parseInt(choice)){
                case 1 : {
                    if(!uaArray.includes('iPhone 13')){
                        uaArray.push('iPhone 13')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 2 : {
                    if(!uaArray.includes('iPhone 13 landscape')){
                        uaArray.push('iPhone 13 landscape')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 3 : {
                    if(!uaArray.includes('Galaxy Note 3')){
                        uaArray.push('Galaxy Note 3')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 4 : {
                    if(!uaArray.includes('Galaxy Note 3 landscape')){
                        uaArray.push('Galaxy Note 3 landscape')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 5 : {
                    if(!uaArray.includes('Desktop Safari')){
                        uaArray.push('Desktop Safari')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 6 : {
                    if(!uaArray.includes('Desktop Safari (Linux)')){
                        uaArray.push('Desktop Safari (Linux)')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 7 : {
                    if(!uaArray.includes('Desktop Safari (Windows)')){
                        uaArray.push('Desktop Safari (Windows)')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
      
            }
        }
        more = prompt("Do you want to add more UAs? (Type y|Y for yes)")
    }while(more === 'y' || more === 'Y')
    return uaArray;

}



function getUAforFirefox(uaArray){
    let more = "y"
    do{
        console.log("1- iPhone 13 (iOS)")
        console.log("2- iPhone 13 landscape (iOS)")
        console.log("3- Galaxy S9+ (Android)")
        console.log("4- Galaxy S9+ landscape (Android)")
        console.log("5- Desktop Firefox HiDPI (Windows)")
        console.log("6- Desktop Firefox (Windows)")
        console.log("7- Desktop Firefox HiDPI (Linux)")
        console.log("8- Desktop Firefox (Linux)")
        console.log("9- Desktop Firefox HiDPI (Mac)")
        console.log("10- Desktop Firefox (Mac)")



        let choice = prompt("choose one of the previous UA:")
        if(parseInt(choice) > 10 || parseInt(choice) < 1){
            console.log("undefined !!")
        }else{
            switch(parseInt(choice)){
                case 1 : {
                    if(!uaArray.includes('iPhone 13')){
                        uaArray.push('iPhone 13')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 2 : {
                    if(!uaArray.includes('iPhone 13 landscape')){
                        uaArray.push('iPhone 13 landscape')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 3 : {
                    if(!uaArray.includes('Galaxy S9+')){
                        uaArray.push('Galaxy S9+')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 4 : {
                    if(!uaArray.includes('Galaxy S9+ landscape')){
                        uaArray.push('Galaxy S9+ landscape')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 5 : {
                    if(!uaArray.includes('Desktop Firefox HiDPI')){
                        uaArray.push('Desktop Firefox HiDPI')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 6 : {
                    if(!uaArray.includes('Desktop Firefox')){
                        uaArray.push('Desktop Firefox')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;


                case 7 : {
                    if(!uaArray.includes('Desktop Firefox HiDPI (Linux)')){
                        uaArray.push('Desktop Firefox HiDPI (Linux)')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 8 : {
                    if(!uaArray.includes('Desktop Firefox (Linux)')){
                        uaArray.push('Desktop Firefox (Linux)')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;

                case 9 : {
                    if(!uaArray.includes('Desktop Firefox HiDPI (Mac)')){
                        uaArray.push('Desktop Firefox HiDPI (Mac)')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
                case 10 : {
                    if(!uaArray.includes('Desktop Firefox (Mac)')){
                        uaArray.push('Desktop Firefox (Mac)')
                    }
                    console.log("UA array : " + uaArray)
                }
                break;
            }
        }
        more = prompt("Do you want to add more UAs? (Type y|Y for yes)")
    }while(more === 'y' || more === 'Y')
    return uaArray;

}
