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
  },
  
   list: function(req, res) {
    res.sse('some_event', {field: [Math.random(), Math.random()]});
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

## SSE method | res.sse( data ) | res.sse( event, data )

@data:  &lt;object | string&gt; value to be emitted by server on the connected client.

@return: the @data as an event-stream
