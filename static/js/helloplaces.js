/* Generic log function for debugging. */
var log = function(msg) { if (console && console.log) console.debug(msg); }
//window.onload = loadFunct;

function getPlaces(offset, limit, mysort, myterms) {
    $.getJSON(
        '/query/getPlace',
        {'offset':offset, 'limit':limit, 'sort': mysort, 'terms':myterms},
        gotPlaces
    );
}

//http://localhost:8042/query/getPlace?terms=[me:true,%20network:'glatitude']&limit=10&offset=0&sort='{%22at:1%22}'


function loadFunct() {
    console.log("LoadFunct!");
    //getPlaces(0, 10, '\'{\"at:1\"}\'', '[network:\'glatitude\',me:true]');
    
}

function gotPlaces(places) {
    for (var i in places) {
        place = places[i];
        place.at = new Date(place.at);
    }
    log(places);
}

//function loadScript() {
//    var script = document.createElement('script');
//    script.type = 'text/javascript';
//    script.src = 'https://maps.googleapis.com/maps/api/js?sensor=false&callback=getLatestPlace';
//    document.body.appendChild(script);
//}


$(function() {
    console.log("DOM DONE!");
    getState(printState);
    //{'terms':terms, 'limit':limit, 'offset':offset, 'sort':sort, 'fields':fields},
    queryPlaces({'terms':'[me:true]', 'limit':20}, printState);
});

function printState(state){
    console.log(state);
}

function queryPlaces(ops, callback) {
    //{'terms':terms, 'limit':limit, 'offset':offset, 'sort':sort, 'fields':fields},
    $.getJSON('/query/getPlace', ops, callback);
}

function getState(callback) {
    $.getJSON('/Me/places/state', callback);
}

function getPlaces(limit, offset, callback) {
    $.getJSON('/Me/places/',{'limit':limit, 'offset':offset}, callback);
}
