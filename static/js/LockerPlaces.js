//Locker places collection API Class

var log = function(msg) { if (console && console.log) console.debug(msg); }

function queryPlaces(ops, callback) {
    //{'terms':terms, 'limit':limit, 'offset':offset, 'sort':sort, 'fields':fields},
    jQuery.getJSON('/query/getPlace', ops, callback);
}

function getState(callback) {
    jQuery.getJSON('/Me/places/state', callback);
}

function getPlaces(limit, offset, callback) {
    jQuery.getJSON('/Me/places/',{'limit':limit, 'offset':offset}, callback);
}
