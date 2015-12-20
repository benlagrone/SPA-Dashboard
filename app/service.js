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
services.routing.register = function(path, callBack){
    var routeObject = {};
    routeObject.path = path;
    routeObject.callBack = callBack;
    routing.routesArray.push(routeObject);
};
services.routing.getLocationHash = function(){
    if(!window.location.hash)
        window.location.hash = '#home';
    services.routing.useArray(window.location.hash.split('#')[1])
};
services.routing.useArray = function(hash){
    for(i=0;i<routing.routesArray.length;i++){
        if(routing.routesArray[i].path===hash)
            routing.routesArray[i].callBack.call();
    }
    services.getPage(pageRoute.page,'content',services.routing.writeHTML);
};
services.routing.writeScript = function(xhttp,id){

};
services.routing.writeHTML = function(xhttp,id){
    if(document.getElementById(id)!=null)
    document.getElementById(id).innerHTML = xhttp.responseText;
    newScript.text = 'var id= "'+hash+'";';
    newScript.text += xhttp.responseText;
    document.getElementsByTagName(id).item(0).appendChild(newScript);
};
