
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
        page:"home.html",
        route:"app/home/",
        script:"home.js"
    };
    console.log('home')
});

console.log(routing.routesArray);