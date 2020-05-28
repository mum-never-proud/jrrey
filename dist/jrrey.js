parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FTwz":[function(require,module,exports) {
"use strict";function r(r,n){return a(r)||o(r,n)||e(r,n)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(r,t){if(r){if("string"==typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}}function n(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function o(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],n=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return e}}function a(r){if(Array.isArray(r))return r}function i(r){return Array.from(r.results[r.resultIndex]).map(function(r){return r.transcript})}function u(t){var e=[];return Array.isArray(t)?(t.forEach(function(t){if(!Array.isArray(t))throw Error("commands should be a zipped array e.g [ [command, callback] ]");var n=r(t,2),o=n[0],a=n[1];e.push({phrase:o,callback:a})}),e):e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseTranscripts=i,exports.parseCommands=u;
},{}],"zq8S":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=s;var t=require("./parser");function e(t,e){return o(t)||n(t,e)||a(t,e)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(s){o=!0,i=s}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}function o(t){if(Array.isArray(t))return t}function i(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=a(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,i=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){u=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}function a(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t){var e=this;if(this.keepAlive&&"end"===t.type)Date.now()-Number(this.listeningSince)<1e3?window.setTimeout(function(){return e.start()},1e3):this.start();else switch(t.type){case"result":return void l.call(this,t);default:var r=this.events[t.type];"function"==typeof r&&r(t)}}function l(r){var n=this,o=(0,t.parseTranscripts)(r);"cmd"===this.mode?function(){for(var t=new Map,r=function(e){var r=o[e].trim();n.commands.forEach(function(e,n){var o=e.phrase instanceof RegExp?e.phrase.exec(r):e.phrase===r?r:null;o&&t.set(n,t.get(n)||[]).get(n).push(o)})},a=0;a<o.length;a++)r(a);if(t.size){var u,s=i(t.entries());try{for(s.s();!(u=s.n()).done;){var l=e(u.value,2),c=l[0],f=l[1];n.commands[c].callback(f)}}catch(y){s.e(y)}finally{s.f()}}else"function"==typeof n.events.fallback&&n.events.fallback()}():"function"==typeof this.events.dictate&&this.events.dictate(o)}
},{"./parser":"FTwz"}],"vID4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=Object.freeze({lang:"en-US",continuous:!0,interimResults:!1,maxAlternatives:3});exports.default=e;
},{}],"aI0n":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("../constants/speech-recognition-options"));function o(e){return e&&e.__esModule?e:{default:e}}var i=window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition||window.oSpeechRecognition;if(!i)throw Error("SpeechRecognition not supported in this browser");var n=new i;Object.assign(n,e.default);var t=n;exports.default=t;
},{"../constants/speech-recognition-options":"vID4"}],"zhXm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=["start","end","audiostart","audioend","speechstart","speechend","result","error","nomatch"];exports.default=e;
},{}],"UXGH":[function(require,module,exports) {
"use strict";var e=require("./utils/parser"),t=r(require("./utils/speech-event-handlers")),n=r(require("./utils/speech-recognition")),i=r(require("./constants/speech-events"));function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}var o=Symbol(),l=function(){function r(){s(this,r)}return a(r,[{key:"init",value:function(){var r=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.listeningSince)return this.events=s.events||{},this.commands=(0,e.parseCommands)(s.commands),this.mode=s.mode||"cmd",this.keepAlive=s.keepAlive||!0,this[o]=t.default.bind(this),i.default.forEach(function(e){return n.default.addEventListener(e,r[o])}),this}},{key:"start",value:function(){return this.listeningSince=Date.now(),n.default.abort(),n.default.start(),this}},{key:"stop",value:function(){return this.listeningSince=null,this.keepAlive=!1,n.default.stop(),this}},{key:"onEvent",value:function(e,t){return this.events[e]=t,this}},{key:"offEvent",value:function(e,t){return e?this.events[e]=t?this.events[e].filter(function(e){return e!==t}):[]:this.events={},this}},{key:"onCommand",value:function(e,t){return this.commands.push({phrase:e,callback:t}),this}},{key:"offCommand",value:function(e){return this.commands=e?this.commands.filter(function(t){return String(t.phrase)!==String(e)}):[],this}}]),r}();module.exports=new l;
},{"./utils/parser":"FTwz","./utils/speech-event-handlers":"zq8S","./utils/speech-recognition":"aI0n","./constants/speech-events":"zhXm"}]},{},["UXGH"], "$j")
//# sourceMappingURL=/jrrey.js.map