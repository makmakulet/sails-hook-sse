# sails-hook-sse

Sails Hook for server sent events, this extension adds a new method to Response Object (res) of SailsJs

## How to install
add the following line to your package.json:
```json
    "sails-hook-sse": "https://github.com/makmakulet/sails-hook-sse.git"
```
run npm install

```sh
    $ npm install
```

## How to Use

Controller:

```javascript
//-- api/controllers/TestController.js
module.exports = {
  index: function(req, res) {
  res.sse({field: [Math.random(), Math.random()]});
  }
};

```

Client Side: 

```javascript
var sseSource = new EventSource("/test");

sseSource.onmessage = function(e) {
  console.log(e.data);
}

```
