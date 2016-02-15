/**
 * sails-hook-sse
 *
 */

module.exports = sseHook;
var path = require("path");
var SSE = require(path.join(__dirname, "lib", "sse"));

function sseHook(sails) {
  return {
    routes: {
      before: {
        "all /*": SSE
      }
    }
  };
}