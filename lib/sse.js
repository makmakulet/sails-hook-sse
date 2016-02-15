/**
 * @name SSE hook
 * @desc sails hook to add .sse(); method on res object 
 * @author makmakulet 
 */

module.exports = SSE;



function SSE(req, res, next) {

  res.sse = function (data) {
    var payload = null;
    if (_.isString(data)) {
      payload = data;
    } 
    if (_.isObject(data)) {
      payload = JSON.stringify(data);
    }
    res.type("text/event-stream");
    res.send('data: '+ payload + '\n\n');
  };

  return next();
}

//==============================================================================
