var protocol = window.location.protocol;
var current_url = window.location.host;
var uri = window.location.pathname;
var params = window.location.search.substring(1);
//console.log("Protocol: " + protocol);// USED FOR TESTING
//console.log("URL: " + current_url);// USED FOR TESTING
//console.log("URI: " + uri);// USED FOR TESTING
//console.log("Params: " + params);// USED FOR TESTING
var new_url = "";
switch (current_url) {
    case 'sis2.focuslearn.org':
        new_url = "//sis2.dev";
    break;
    case 'sis2.dev':
        new_url = "//sis2.focuslearn.org";
    break;
}

window.location = protocol + new_url + uri + "?" + params;
