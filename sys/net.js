
(function(){
const net = {}; 
  
net.get = (A) => {
if(!A) return typeof navigator !== "undefined" && navigator.onLine === true;
  
const req = new XMLHttpRequest()
req.open("GET", A, false);
req.send(null);
return req.status === 200 ? req.responseText : "Failed to fetch"
}
net.post = (url, data) => {
const req = new XMLHttpRequest();
req.open('POST', url, false); 
req.setRequestHeader('Content-Type', 'application/json');
req.send(JSON.stringify(data));
return req.status === 200 ? req.responseText : 'Failed to post';
};

net ? (window.net = net) : '';

})();
