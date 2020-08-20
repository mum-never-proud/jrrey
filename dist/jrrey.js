parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"B8pU":[function(require,module,exports) {
"use strict";function t(t){if("function"!=typeof t)throw TypeError("callback must be a function")}function e(t){if("string"!=typeof t)throw TypeError("event must be a string")}function r(t){if("string"!=typeof t&&!(t instanceof RegExp))throw TypeError("command must be either string or regex")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.assertFunction=t,exports.assertString=e,exports.assertStringOrRegExp=r;
},{}],"FTwz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseTranscripts=u,exports.parseCommands=s;var r=require("./assert");function t(r,t){return i(r)||o(r,t)||n(r,t)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(r,t){if(r){if("string"==typeof r)return a(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(r,t):void 0}}function a(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function o(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],n=!0,a=!1,o=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(s){a=!0,o=s}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return e}}function i(r){if(Array.isArray(r))return r}function u(r){return Array.from(r.results[r.resultIndex]).map(function(r){return r.transcript})}function s(e){var n=[];return Array.isArray(e)?(e.forEach(function(e){if(!Array.isArray(e))throw Error("commands should be a zipped array e.g [ [command, callback] ]");var a=t(e,2),o=a[0],i=a[1];(0,r.assertStringOrRegExp)(o),(0,r.assertFunction)(i),n.push({phrase:o,callback:i})}),n):n}
},{"./assert":"B8pU"}],"zq8S":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=s;var t=require("./parser");function e(t,e){return o(t)||r(t,e)||a(t,e)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}function o(t){if(Array.isArray(t))return t}function i(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=a(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return u=t.done,t},e:function(t){s=!0,i=t},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw i}}}}function a(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t){var e=this;if(this.keepAlive&&"end"===t.type&&this.listeningSince)Date.now()-Number(this.listeningSince)<1e3?window.setTimeout(function(){return e.start()},1e3):this.start();else switch(t.type){case"result":return void l.call(this,t);default:var n=this.events[t.type];"function"==typeof n&&n(t)}}function l(n){var r=this,o=(0,t.parseTranscripts)(n);"cmd"===this.mode?function(){for(var t=new Map,n=function(e){var n=o[e].trim();r.commands.forEach(function(e,r){var o=e.phrase instanceof RegExp?e.phrase.exec(n):e.phrase===n?n:null;o&&t.set(r,t.get(r)||[]).get(r).push(o)})},a=0;a<o.length;a++)n(a);if(t.size){var u,s=i(t.entries());try{for(s.s();!(u=s.n()).done;){var l=e(u.value,2),c=l[0],f=l[1];r.commands[c].callback(f)}}catch(y){s.e(y)}finally{s.f()}}else"function"==typeof r.events.fallback&&r.events.fallback()}():"function"==typeof this.events.dictate&&this.events.dictate(o)}
},{"./parser":"FTwz"}],"vID4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=Object.freeze({lang:"en-US",continuous:!0,interimResults:!1,maxAlternatives:3});exports.default=e;
},{}],"aI0n":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("../constants/speech-recognition-options"));function o(e){return e&&e.__esModule?e:{default:e}}var i=window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition||window.oSpeechRecognition;if(!i)throw Error("SpeechRecognition not supported in this browser");var n=new i;Object.assign(n,e.default);var t=n;exports.default=t;
},{"../constants/speech-recognition-options":"vID4"}],"zhXm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=["start","end","audiostart","audioend","speechstart","speechend","result","error","nomatch"];exports.default=e;
},{}],"UXGH":[function(require,module,exports) {
"use strict";var e=require("./utils/assert"),t=require("./utils/parser"),n=s(require("./utils/speech-event-handlers")),r=s(require("./utils/speech-recognition")),i=s(require("./constants/speech-events"));function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}var l=Symbol(),c=/* */function(){function s(){a(this,s)}return o(s,[{key:"init",value:function(){var e=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.listeningSince)throw Error("an instance of jrrey is already running");return this.events=s.events||{},this.commands=(0,t.parseCommands)(s.commands),this.mode=s.mode||"cmd",this.keepAlive=s.keepAlive||!0,this[l]=n.default.bind(this),i.default.forEach(function(t){return r.default.addEventListener(t,e[l])}),this}},{key:"start",value:function(){return this.listeningSince=Date.now(),r.default.abort(),r.default.start(),this}},{key:"stop",value:function(){return this.listeningSince=null,r.default.stop(),this}},{key:"onEvent",value:function(t,n){return(0,e.assertString)(t),(0,e.assertFunction)(n),this.events[t]=n,this}},{key:"offEvent",value:function(t){return t?((0,e.assertString)(t),delete this.events[t]):this.events={},this}},{key:"onCommand",value:function(t,n){return(0,e.assertStringOrRegExp)(t),(0,e.assertFunction)(n),this.commands.push({phrase:t,callback:n}),this}},{key:"offCommand",value:function(t){return t?((0,e.assertStringOrRegExp)(t),this.commands=this.commands.filter(function(e){return String(e.phrase)!==String(t)})):this.commands=[],this}}]),s}();module.exports=new c;
},{"./utils/assert":"B8pU","./utils/parser":"FTwz","./utils/speech-event-handlers":"zq8S","./utils/speech-recognition":"aI0n","./constants/speech-events":"zhXm"}]},{},["UXGH"], "$j")
//# sourceMappingURL=/jrrey.js.map