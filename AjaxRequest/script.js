//https://api.randomuser.me/?nat=US&results=5
function log(txt){
	document.getElementById('example').innerHTML = txt;
}
function query(){
	var req = new XMLHttpRequest();var api = 'http://api.randomuser.me/?nat=US&results=5'
	req.open('GET',api);
	req.onload=function(request){
		(request.status == 200)?log(req.response):log('req failed');
	}
	req.onerror = function(err) {log('request failed')}	
	req.send();
}
