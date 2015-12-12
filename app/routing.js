
var routing = {};
routing.routesArray = [];
routing.register = function(path, callBack){
    var routeObject = {};
    routeObject.path = path;
    routeObject.callBack = callBack;
    routing.routesArray.push(routeObject);
};

routing.register('home',function(){
    pageRoute = {
        page:"./app/home/home.html",
        partial:"./app/home/home-home.html",
        script:"./app/home/home.js"
    };
    console.log('home')
});

console.log(routing.routesArray);


window.onhashchange = function () {
    var url = window.location.hash.split('#')[1]
    console.log(url)
    //services.routing.useArray(url)
};

//window.onload = getLocationHash;
if(window.location.hash=="")
    window.location.hash = '#home';
function getLocationHash(){

    var url = window.location.hash.split('#')[1]
    console.log(url)
    //services.routing.useArray(url)
}