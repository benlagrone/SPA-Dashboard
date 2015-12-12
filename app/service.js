var services = {};

services.getPage = function(url,id,callback,page){
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
    services.getPage(pageRoute.page,'content',services.routing.writeHTML,page);
    services.getPage(pageRoute.script,'head',services.routing.writeScript,page);
};

services.routing.writeHTML = function(xhr,id,page){
    var theHTML = xhr.responseText;
    document.getElementById(id).innerHTML = xhr.responseText;
};
services.routing.writeScript = function(xhr,id,page){
    var newScript = document.createElement('script');
    newScript.text = 'var id= "'+page+'";';
    newScript.text += xhr.responseText;
    document.getElementsByTagName(id).item(0).appendChild(newScript);
};

