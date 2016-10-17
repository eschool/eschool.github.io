//(function(){
var current_url = window.location.host;
var uri = window.location.pathname;
var params = window.location.search.substring(1);
console.log("URL: " + current_url);
console.log("URI: " + uri);
console.log("Params: " + params);
switch (current_url) {
    case 'sis2.focuslearn.org':
        window.location = window.location.protocol + "//sis2.dev" + uri +
    break;
    case 'sis2.dev':

    break;
}
//});
