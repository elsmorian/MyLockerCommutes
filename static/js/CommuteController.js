/* Generic log function for debugging. */
var log = function(msg) { if (console && console.log) console.debug(msg); }

function gotPlaces(places) {
    for (var i in places) {
        place = places[i];
        place.at = new Date(place.at);
    }
    log(places);
}


$(function() {
    console.log("DOM DONE!");
    $("#startDatePicker").datepicker();
    $("#endDatePicker").datepicker();
    $("#latButton").button();
    $("#4sqButton").button();
    $("#goButton").button();
    //getState(printState);
    //{'terms':terms, 'limit':limit, 'offset':offset, 'sort':sort, 'fields':fields},
    //queryPlaces({'terms':'[me:true]', 'limit':20}, printState);
});

function printState(state){
    console.log(state);
}

function printDataToScreen(data){
    $("#myData").html(data);
}

function getData(){
    var req = {}
    var limitNum = $("#limitNum").val();
    var offsetNum = $("#offsetNum").val();
    if (limitNum !== ''){
        req.limit = limitNum;
    }
    if (offsetNum !== ''){
        req.offset = offsetNum;
    }
    var sDate = $("#startDatePicker").datepicker("getDate");
    var eDate = $("#endDatePicker").datepicker("getDate");
    req.terms = "[me:true,at:1302440989000-]"
    console.log(req);
    queryPlaces(req, printDataToScreen);
}