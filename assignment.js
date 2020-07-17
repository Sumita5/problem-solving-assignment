// Problem 01
function feetToMile(feet){
    if(feet <= -1){
        return "Negative value is not acceptable";        
    }
    else{
    var mile = feet/5280;
    return "Converted value from feet to mile is: " + mile.toFixed(3);
    }
}
var convertor = feetToMile(20000);
console.log(convertor);



// Problem 02: wood required for chair, table & bed are 1, 3, 5 cft.
function woodCalculator(chairPcs, tablePcs, bedPcs){
    if(chairPcs >= 0 && tablePcs >=0 && bedPcs >=0){
        var woodQuantity = chairPcs*1 + tablePcs*3 + bedPcs*5;
    return "Total wood required: " + woodQuantity + " " + "cft";
    }
    else{
        return "Negative value is not accepted"
    }
}
var chairPcs = parseInt(10);
var tablePcs = parseInt(23);
var bedPcs = parseInt(10);
var resultWood = woodCalculator(chairPcs, tablePcs, bedPcs);
console.log(resultWood);

// Problem 03 : 1st 10 floor 15ft height, next 10 floor 12 ft height, above 20th floor 10 ft  height. brick required 1000pcs per feet.
function brickCalculator(storedBuilding){
    if(storedBuilding <= 10 && storedBuilding > 0){
        var brick = storedBuilding*15*1000;
        return "Total Brick required:" + " " + brick + " " + "Pcs";
    }
    else if(storedBuilding >= 11 && storedBuilding <= 20){
        var brick = 10*15*1000 + (storedBuilding-10)*12*1000;
        return "Total Brick required:" + " "  + brick + " " + "Pcs";
    }
    else if(storedBuilding >= 21){
        var brick = 10*15*1000 + 10*12*1000 + (storedBuilding-20)*10*1000;
        return "Total Brick required:" + " " + brick + " " + "Pcs";
    }
    else{
        return "undefined input value"
    }
}

var storedBuilding = 35;
var resultBrickQuantity = brickCalculator(storedBuilding);
console.log(resultBrickQuantity);

// Problem 04
function tinyFriend(friendsName){
    var name = friendsName[0];
    var smallerName = [];
    for (var i = 0; i < friendsName.length; i++){
        var currentName = friendsName[i];
        if(currentName.length < name.length){
            name = currentName;
        }
    }
    for(var i = 0; i < friendsName.length; i++){
        if(name.length == friendsName[i].length){
            name = friendsName[i];
            smallerName.push(name);
        }
    }     
    return smallerName;
}
var friendsName = ["shakti", "sajib", "supriya", "ma", "eshita", "sumita", "sumi", "na", "satyaki", "Jhankar", "niyati"];
var smallestName = tinyFriend(friendsName);
console.log("Smallest name among friends is: " + smallestName);


