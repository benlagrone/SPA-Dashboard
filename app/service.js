var services = {};

services.getPage = function(url,id,callback,page){
    //Do something
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            callBack(xhttp,id,page);
        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
};

services.routing = {};

services.routing.changeHash = function(page){
    var newPageUrl = 'app/'+ page + '/' + page+'.html';
    var newScriptUrl = 'app/'+ page + '/' + page+'.js';
    services.getPage(newPageUrl,'content',services.routing.writeHTML,page);
    services.getPage(newScriptUrl,'head',services.routing.writeScript,page);
};

