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
    getState(printState);
    //{'terms':terms, 'limit':limit, 'offset':offset, 'sort':sort, 'fields':fields},
    queryPlaces({'terms':'[me:true]', 'limit':20}, printState);
});

function printState(state){
    console.log(state);
}

