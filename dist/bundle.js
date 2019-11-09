/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/audio/NoteTable.ts":
/*!****************************************!*\
  !*** ./src/scripts/audio/NoteTable.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class NoteTable {
}
exports.NoteTable = NoteTable;
NoteTable.frequencies = [523.251, 587.330, 659.255, 698.456, 783.991, 880.000, 987.767];


/***/ }),

/***/ "./src/scripts/audio/Oscillator.ts":
/*!*****************************************!*\
  !*** ./src/scripts/audio/Oscillator.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Oscillator {
    constructor(waveType, volume, samplingRate) {
        this.waveType = waveType;
        this.volume = volume;
        this.samplingRate = samplingRate;
    }
    generateAudioBuffer(tone, seconds) {
        const samples = new Float32Array(this.samplingRate * seconds);
        for (let i = 0; i < samples.length; i++) {
            samples[i] = this.sineWaveAt(i, +tone) * this.volume;
        }
        return samples;
    }
    sineWaveAt(sampleNumber, tone) {
        const sampleFrequency = this.samplingRate / tone;
        return Math.sin(sampleNumber / (sampleFrequency / (Math.PI * 2)));
    }
}
exports.Oscillator = Oscillator;


/***/ }),

/***/ "./src/scripts/audio/WaveType.ts":
/*!***************************************!*\
  !*** ./src/scripts/audio/WaveType.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WaveType;
(function (WaveType) {
    WaveType[WaveType["Sine"] = 0] = "Sine";
    WaveType[WaveType["Square"] = 1] = "Square";
    WaveType[WaveType["Triangle"] = 2] = "Triangle";
    WaveType[WaveType["Sawtooth"] = 3] = "Sawtooth";
})(WaveType = exports.WaveType || (exports.WaveType = {}));


/***/ }),

/***/ "./src/scripts/index.ts":
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Oscillator_1 = __webpack_require__(/*! ./audio/Oscillator */ "./src/scripts/audio/Oscillator.ts");
const WaveType_1 = __webpack_require__(/*! ./audio/WaveType */ "./src/scripts/audio/WaveType.ts");
const KeyboardManager_1 = __webpack_require__(/*! ./ui/KeyboardManager */ "./src/scripts/ui/KeyboardManager.ts");
const audioContext = new AudioContext();
const sineOscillator = new Oscillator_1.Oscillator(WaveType_1.WaveType.Sine, 0.5, audioContext.sampleRate);
let source;
function play(event) {
    const tone = event.target.dataset["noteFrequency"];
    const samples = sineOscillator.generateAudioBuffer(+tone, 3);
    const audioBuffer = audioContext.createBuffer(1, samples.length, audioContext.sampleRate);
    audioBuffer.copyToChannel(samples, 0);
    source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start();
}
function stopPlaying() {
    source.stop();
}
function initialize() {
    const keyboardDiv = KeyboardManager_1.KeyboardManager.createKeyboard();
    const keys = keyboardDiv.getElementsByTagName("*");
    for (const key of keys) {
        key.addEventListener("mousedown", play, false);
        key.addEventListener("mouseup", stopPlaying, false);
        key.addEventListener("mouseleave", stopPlaying, false);
    }
}
document.addEventListener("DOMContentLoaded", initialize);


/***/ }),

/***/ "./src/scripts/ui/KeyboardManager.ts":
/*!*******************************************!*\
  !*** ./src/scripts/ui/KeyboardManager.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const NoteTable_1 = __webpack_require__(/*! ../audio/NoteTable */ "./src/scripts/audio/NoteTable.ts");
class KeyboardManager {
    static createKeyboard() {
        const keyboardDiv = document.getElementById("keyboard");
        for (const noteFrequency of NoteTable_1.NoteTable.frequencies) {
            keyboardDiv.appendChild(this.createKey(noteFrequency));
        }
        return keyboardDiv;
    }
    static createKey(noteFrequency) {
        const keyElement = document.createElement("div");
        keyElement.className = "key";
        keyElement.dataset["noteFrequency"] = String(noteFrequency);
        // keyElement.addEventListener("mousedown", this.play, false);
        // keyElement.addEventListener("mouseup", this.stopPlaying, false);
        // keyElement.addEventListener("mouseleave", this.stopPlaying, false);
        return keyElement;
    }
}
exports.KeyboardManager = KeyboardManager;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYXVkaW8vTm90ZVRhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2F1ZGlvL09zY2lsbGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYXVkaW8vV2F2ZVR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdWkvS2V5Ym9hcmRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxNQUFhLFNBQVM7O0FBQXRCLDhCQWlCQztBQWhCVSxxQkFBVyxHQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFP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QyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BELEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzFEO0FBQ0wsQ0FBQztBQUVELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDakMxRCxzR0FBNkM7QUFFN0MsTUFBYSxlQUFlO0lBRXhCLE1BQU0sQ0FBQyxjQUFjO1FBQ2pCLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEQsS0FBSyxNQUFNLGFBQWEsSUFBSSxxQkFBUyxDQUFDLFdBQVcsRUFBRTtZQUMvQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztTQUMxRDtRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQXFCO1FBQ2xDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsVUFBVSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDN0IsVUFBVSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUQsOERBQThEO1FBQzlELG1FQUFtRTtRQUNuRSxzRUFBc0U7UUFDdEUsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztDQUdKO0FBckJELDBDQXFCQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zY3JpcHRzL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGNsYXNzIE5vdGVUYWJsZSB7XHJcbiAgICBzdGF0aWMgZnJlcXVlbmNpZXM6IGFueSA9IFs1MjMuMjUxLCA1ODcuMzMwLCA2NTkuMjU1LCA2OTguNDU2LCA3ODMuOTkxLCA4ODAuMDAwLCA5ODcuNzY3XTtcclxuXHJcbiAgICAvLyBwcml2YXRlIHN0YXRpYyBfaW5pdGlhbGl6ZSA9ICgoKSA9PiB7XHJcbiAgICAvLyAgICAgTm90ZVRhYmxlLmZyZXF1ZW5jaWVzWzFdW1wiQ1wiXSA9IDMyLjcwMzE5NTY2MjU3NDgyOTtcclxuICAgIC8vICAgICBOb3RlVGFibGUuZnJlcXVlbmNpZXNbMV1bXCJDI1wiXSA9IDM0LjY0NzgyODg3MjEwOTAxMjtcclxuICAgIC8vICAgICBOb3RlVGFibGUuZnJlcXVlbmNpZXNbMV1bXCJEXCJdID0gMzYuNzA4MDk1OTg5Njc1OTQ1O1xyXG4gICAgLy8gICAgIE5vdGVUYWJsZS5mcmVxdWVuY2llc1sxXVtcIkQjXCJdID0gMzguODkwODcyOTY1MjYwMTEzO1xyXG4gICAgLy8gICAgIE5vdGVUYWJsZS5mcmVxdWVuY2llc1sxXVtcIkVcIl0gPSA0MS4yMDM0NDQ2MTQxMDg3NDE7XHJcbiAgICAvLyAgICAgTm90ZVRhYmxlLmZyZXF1ZW5jaWVzWzFdW1wiRlwiXSA9IDQzLjY1MzUyODkyOTEyNTQ4NTtcclxuICAgIC8vICAgICBOb3RlVGFibGUuZnJlcXVlbmNpZXNbMV1bXCJGI1wiXSA9IDQ2LjI0OTMwMjgzODk1NDI5OTtcclxuICAgIC8vICAgICBOb3RlVGFibGUuZnJlcXVlbmNpZXNbMV1bXCJHXCJdID0gNDguOTk5NDI5NDk3NzE4NjYxO1xyXG4gICAgLy8gICAgIE5vdGVUYWJsZS5mcmVxdWVuY2llc1sxXVtcIkcjXCJdID0gNTEuOTEzMDg3MTk3NDkzMTQyO1xyXG4gICAgLy8gICAgIE5vdGVUYWJsZS5mcmVxdWVuY2llc1sxXVtcIkFcIl0gPSA1NS4wMDAwMDAwMDAwMDAwMDA7XHJcbiAgICAvLyAgICAgTm90ZVRhYmxlLmZyZXF1ZW5jaWVzWzFdW1wiQSNcIl0gPSA1OC4yNzA0NzAxODk3NjEyMzk7XHJcbiAgICAvLyAgICAgTm90ZVRhYmxlLmZyZXF1ZW5jaWVzWzFdW1wiQlwiXSA9IDYxLjczNTQxMjY1NzAxNTUxMztcclxuICAgIC8vIH0pKCk7XHJcbn0iLCJpbXBvcnQge1dhdmVUeXBlfSBmcm9tIFwiLi9XYXZlVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9zY2lsbGF0b3Ige1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB3YXZlVHlwZTogV2F2ZVR5cGU7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZvbHVtZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzYW1wbGluZ1JhdGU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3YXZlVHlwZTogV2F2ZVR5cGUsIHZvbHVtZTogbnVtYmVyLCBzYW1wbGluZ1JhdGU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMud2F2ZVR5cGUgPSB3YXZlVHlwZTtcclxuICAgICAgICB0aGlzLnZvbHVtZSA9IHZvbHVtZTtcclxuICAgICAgICB0aGlzLnNhbXBsaW5nUmF0ZSA9IHNhbXBsaW5nUmF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUF1ZGlvQnVmZmVyKHRvbmU6IG51bWJlciwgc2Vjb25kczogbnVtYmVyKTogRmxvYXQzMkFycmF5IHtcclxuICAgICAgICBjb25zdCBzYW1wbGVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnNhbXBsaW5nUmF0ZSAqIHNlY29uZHMpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2FtcGxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzYW1wbGVzW2ldID0gdGhpcy5zaW5lV2F2ZUF0KGksICt0b25lKSAqIHRoaXMudm9sdW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2FtcGxlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNpbmVXYXZlQXQoc2FtcGxlTnVtYmVyOiBudW1iZXIsIHRvbmU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3Qgc2FtcGxlRnJlcXVlbmN5ID0gdGhpcy5zYW1wbGluZ1JhdGUgLyB0b25lO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNpbihzYW1wbGVOdW1iZXIgLyAoc2FtcGxlRnJlcXVlbmN5IC8gKE1hdGguUEkqMikpKVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGVudW0gV2F2ZVR5cGUge1xyXG4gICAgU2luZSxcclxuICAgIFNxdWFyZSxcclxuICAgIFRyaWFuZ2xlLFxyXG4gICAgU2F3dG9vdGhcclxufSIsImltcG9ydCB7T3NjaWxsYXRvcn0gZnJvbSBcIi4vYXVkaW8vT3NjaWxsYXRvclwiO1xyXG5pbXBvcnQge1dhdmVUeXBlfSBmcm9tIFwiLi9hdWRpby9XYXZlVHlwZVwiO1xyXG5pbXBvcnQge0tleWJvYXJkTWFuYWdlcn0gZnJvbSBcIi4vdWkvS2V5Ym9hcmRNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCBhdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XHJcbmNvbnN0IHNpbmVPc2NpbGxhdG9yID0gbmV3IE9zY2lsbGF0b3IoV2F2ZVR5cGUuU2luZSwgMC41LCBhdWRpb0NvbnRleHQuc2FtcGxlUmF0ZSk7XHJcbmxldCBzb3VyY2U6IEF1ZGlvQnVmZmVyU291cmNlTm9kZTtcclxuXHJcbmZ1bmN0aW9uIHBsYXkoZXZlbnQ6IElucHV0RXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRvbmUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5kYXRhc2V0W1wibm90ZUZyZXF1ZW5jeVwiXTtcclxuICAgIGNvbnN0IHNhbXBsZXMgPSBzaW5lT3NjaWxsYXRvci5nZW5lcmF0ZUF1ZGlvQnVmZmVyKCt0b25lLCAzKTtcclxuICAgIGNvbnN0IGF1ZGlvQnVmZmVyID0gYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlcigxLCBzYW1wbGVzLmxlbmd0aCwgYXVkaW9Db250ZXh0LnNhbXBsZVJhdGUpO1xyXG4gICAgYXVkaW9CdWZmZXIuY29weVRvQ2hhbm5lbChzYW1wbGVzLCAwKTtcclxuICAgIHNvdXJjZSA9IGF1ZGlvQ29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcclxuICAgIHNvdXJjZS5idWZmZXIgPSBhdWRpb0J1ZmZlcjtcclxuICAgIHNvdXJjZS5jb25uZWN0KGF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XHJcbiAgICBzb3VyY2Uuc3RhcnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RvcFBsYXlpbmcoKTogdm9pZCB7XHJcbiAgICBzb3VyY2Uuc3RvcCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplKCk6IHZvaWQge1xyXG4gICAgY29uc3Qga2V5Ym9hcmREaXYgPSBLZXlib2FyZE1hbmFnZXIuY3JlYXRlS2V5Ym9hcmQoKTtcclxuICAgIGNvbnN0IGtleXMgPSBrZXlib2FyZERpdi5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIik7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAga2V5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgcGxheSwgZmFsc2UpO1xyXG4gICAgICAgIGtleS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGxheWluZywgZmFsc2UpO1xyXG4gICAgICAgIGtleS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBzdG9wUGxheWluZywgZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0aWFsaXplKTtcclxuXHJcbiIsImltcG9ydCB7Tm90ZVRhYmxlfSBmcm9tIFwiLi4vYXVkaW8vTm90ZVRhYmxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmRNYW5hZ2VyIHtcclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlS2V5Ym9hcmQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGtleWJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrZXlib2FyZFwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IG5vdGVGcmVxdWVuY3kgb2YgTm90ZVRhYmxlLmZyZXF1ZW5jaWVzKSB7XHJcbiAgICAgICAgICAgIGtleWJvYXJkRGl2LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlS2V5KG5vdGVGcmVxdWVuY3kpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGtleWJvYXJkRGl2O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVLZXkobm90ZUZyZXF1ZW5jeTogbnVtYmVyKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGtleUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGtleUVsZW1lbnQuY2xhc3NOYW1lID0gXCJrZXlcIjtcclxuICAgICAgICBrZXlFbGVtZW50LmRhdGFzZXRbXCJub3RlRnJlcXVlbmN5XCJdID0gU3RyaW5nKG5vdGVGcmVxdWVuY3kpO1xyXG4gICAgICAgIC8vIGtleUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLnBsYXksIGZhbHNlKTtcclxuICAgICAgICAvLyBrZXlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuc3RvcFBsYXlpbmcsIGZhbHNlKTtcclxuICAgICAgICAvLyBrZXlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMuc3RvcFBsYXlpbmcsIGZhbHNlKTtcclxuICAgICAgICByZXR1cm4ga2V5RWxlbWVudDtcclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==