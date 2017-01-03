/**
 * @name SSE hook
 * @desc sails hook to add .sse(); method on res object 
 * @author makmakulet 
 */

module.exports = SSE;



function SSE(req, res, next) {

  // YOU CAN SEND AN EVENT AND SOME DATA OR JUST SOME DATA
  res.sse = function (event, data) {
    var payload = null;
    if (event && !data) {
      data = event;
      event = null;
    }

    if (_.isString(data)) {
      payload = data;
    }
    if (_.isObject(data)) {
      payload = JSON.stringify(data);
    }
    res.type("text/event-stream");
    if(event && data){
    res.write('event: '+ event + '\n');
    }
    res.write('data: '+ payload + '\n\n');
    res.end();
  };

  return next();
}

//==============================================================================
