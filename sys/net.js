
(function(){
const net = {}; 
net.get = (url) => {
const req = new XMLHttpRequest();
req.open('GET', url, false); 
req.send(null);
return req.status === 200 ? req.responseText : 'Failed to fetch';
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