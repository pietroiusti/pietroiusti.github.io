function getLocation() {
    var req = new XMLHttpRequest();
    req.addEventListener("load", function() {
	console.log(JSON.parse(req.responseText));
    });
    req.open("GET", "http://ip-api.com/json", true);
    req.send(null); 
}

getLocation();
