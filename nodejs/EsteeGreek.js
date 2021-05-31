console.log('Hello node');
console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');

var bs = require("black-scholes");

var black = bs.blackScholes(30, 34, .25, .2, .08, "call"); // 0.23834902311961947
console.log('IV:' + black);
var greeks = require("greeks");

// Delta

var delta = greeks.getDelta(100, 100, .086, .1, .0015, "call"); // 0.5076040742445566
console.log('Delta1: ' + delta);
greeks.getDelta(100, 100, .086, .1, .0015, "put"); // -0.49239592575544344
//greeks.getTheta(56,56,5,vol, rate);
//greeks.getRho(34,34,4, vol, rate);

var iv = require("implied-volatility");
var impliedVol = iv.getImpliedVolatility(2, 101, 100, .1, .0015, "call", ); // 0.11406250000000001 (11.4%)
console.log('IV: ' + impliedVol);

