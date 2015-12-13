var services = {};
services.getPage = function(url,id,callback){
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            callback(xhttp,id)
        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
};

services.routing = {};
services.routing.writeHTML = function(xhttp,id){
    document.getElementById(id).innerHTML = xhttp.responseText;
};


var url = './app/home/home.html';
var id = "content";
services.getPage(url, id, services.routing.writeHTML);