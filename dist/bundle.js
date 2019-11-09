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
const NoteTable_1 = __webpack_require__(/*! ./audio/NoteTable */ "./src/scripts/audio/NoteTable.ts");
const Oscillator_1 = __webpack_require__(/*! ./audio/Oscillator */ "./src/scripts/audio/Oscillator.ts");
const WaveType_1 = __webpack_require__(/*! ./audio/WaveType */ "./src/scripts/audio/WaveType.ts");
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
function createKey(noteFrequency) {
    console.log("Create key for: " + noteFrequency);
    const keyElement = document.createElement("div");
    keyElement.className = "key";
    keyElement.dataset["noteFrequency"] = String(noteFrequency);
    keyElement.addEventListener("mousedown", play, false);
    keyElement.addEventListener("mouseup", stopPlaying, false);
    // keyElement.addEventListener("mouseover", play, false);
    keyElement.addEventListener("mouseleave", stopPlaying, false);
    return keyElement;
}
function createKeyboard() {
    const keyboardDiv = document.getElementById("keyboard");
    for (const noteFrequency of NoteTable_1.NoteTable.frequencies) {
        keyboardDiv.appendChild(createKey(noteFrequency));
    }
}
function initialize() {
    createKeyboard();
}
document.addEventListener("DOMContentLoaded", initialize);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYXVkaW8vTm90ZVRhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2F1ZGlvL09zY2lsbGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYXVkaW8vV2F2ZVR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLE1BQWEsU0FBUzs7QUFBdEIsOEJBaUJDO0FBaEJVLHFCQUFXLEdBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDQzlGLE1BQWEsVUFB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QUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzVELFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RELFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNELHlEQUF5RDtJQUN6RCxVQUFVLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5RCxPQUFPLFVBQVUsQ0FBQztBQUN0QixDQUFDO0FBRUQsU0FBUyxjQUFjO0lBQ25CLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEQsS0FBSyxNQUFNLGFBQWEsSUFBSSxxQkFBUyxDQUFDLFdBQVcsRUFBRTtRQUMvQyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0tBQ3JEO0FBQ0wsQ0FBQztBQUVELFNBQVMsVUFBVTtJQUNmLGNBQWMsRUFBRSxDQUFDO0FBQ3JCLENBQUM7QUFFRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy9pbmRleC50c1wiKTtcbiIsImV4cG9ydCBjbGFzcyBOb3RlVGFibGUge1xyXG4gICAgc3RhdGljIGZyZXF1ZW5jaWVzOiBhbnkgPSBbNTIzLjI1MSwgNTg3LjMzMCwgNjU5LjI1NSwgNjk4LjQ1NiwgNzgzLjk5MSwgODgwLjAwMCwgOTg3Ljc2N107XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBzdGF0aWMgX2luaXRpYWxpemUgPSAoKCkgPT4ge1xyXG4gICAgLy8gICAgIE5vdGVUYWJsZS5mcmVxdWVuY2llc1sxXVtcIkNcIl0gPSAzMi43MDMxOTU2NjI1NzQ4Mjk7XHJcbiAgICAvLyAgICAgTm90ZVRhYmxlLmZyZXF1ZW5jaWVzWzFdW1wiQyNcIl0gPSAzNC42NDc4Mjg4NzIxMDkwMTI7XHJcbiAgICAvLyAgICAgTm90ZVRhYmxlLmZyZXF1ZW5jaWVzWzFdW1wiRFwiXSA9IDM2LjcwODA5NTk4OTY3NTk0NTtcclxuICAgIC8vICAgICBOb3RlVGFibGUuZnJlcXVlbmNpZXNbMV1bXCJEI1wiXSA9IDM4Ljg5MDg3Mjk2NTI2MDExMztcclxuICAgIC8vICAgICBOb3RlVGFibGUuZnJlcXVlbmNpZXNbMV1bXCJFXCJdID0gNDEuMjAzNDQ0NjE0MTA4NzQxO1xyXG4gICAgLy8gICAgIE5vdGVUYWJsZS5mcmVxdWVuY2llc1sxXVtcIkZcIl0gPSA0My42NTM1Mjg5MjkxMjU0ODU7XHJcbiAgICAvLyAgICAgTm90ZVRhYmxlLmZyZXF1ZW5jaWVzWzFdW1wiRiNcIl0gPSA0Ni4yNDkzMDI4Mzg5NTQyOTk7XHJcbiAgICAvLyAgICAgTm90ZVRhYmxlLmZyZXF1ZW5jaWVzWzFdW1wiR1wiXSA9IDQ4Ljk5OTQyOTQ5NzcxODY2MTtcclxuICAgIC8vICAgICBOb3RlVGFibGUuZnJlcXVlbmNpZXNbMV1bXCJHI1wiXSA9IDUxLjkxMzA4NzE5NzQ5MzE0MjtcclxuICAgIC8vICAgICBOb3RlVGFibGUuZnJlcXVlbmNpZXNbMV1bXCJBXCJdID0gNTUuMDAwMDAwMDAwMDAwMDAwO1xyXG4gICAgLy8gICAgIE5vdGVUYWJsZS5mcmVxdWVuY2llc1sxXVtcIkEjXCJdID0gNTguMjcwNDcwMTg5NzYxMjM5O1xyXG4gICAgLy8gICAgIE5vdGVUYWJsZS5mcmVxdWVuY2llc1sxXVtcIkJcIl0gPSA2MS43MzU0MTI2NTcwMTU1MTM7XHJcbiAgICAvLyB9KSgpO1xyXG59IiwiaW1wb3J0IHtXYXZlVHlwZX0gZnJvbSBcIi4vV2F2ZVR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPc2NpbGxhdG9yIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgd2F2ZVR5cGU6IFdhdmVUeXBlO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB2b2x1bWU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2FtcGxpbmdSYXRlOiBudW1iZXI7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHdhdmVUeXBlOiBXYXZlVHlwZSwgdm9sdW1lOiBudW1iZXIsIHNhbXBsaW5nUmF0ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy53YXZlVHlwZSA9IHdhdmVUeXBlO1xyXG4gICAgICAgIHRoaXMudm9sdW1lID0gdm9sdW1lO1xyXG4gICAgICAgIHRoaXMuc2FtcGxpbmdSYXRlID0gc2FtcGxpbmdSYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlQXVkaW9CdWZmZXIodG9uZTogbnVtYmVyLCBzZWNvbmRzOiBudW1iZXIpOiBGbG9hdDMyQXJyYXkge1xyXG4gICAgICAgIGNvbnN0IHNhbXBsZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuc2FtcGxpbmdSYXRlICogc2Vjb25kcyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYW1wbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNhbXBsZXNbaV0gPSB0aGlzLnNpbmVXYXZlQXQoaSwgK3RvbmUpICogdGhpcy52b2x1bWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzYW1wbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2luZVdhdmVBdChzYW1wbGVOdW1iZXI6IG51bWJlciwgdG9uZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBzYW1wbGVGcmVxdWVuY3kgPSB0aGlzLnNhbXBsaW5nUmF0ZSAvIHRvbmU7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc2luKHNhbXBsZU51bWJlciAvIChzYW1wbGVGcmVxdWVuY3kgLyAoTWF0aC5QSSoyKSkpXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZW51bSBXYXZlVHlwZSB7XHJcbiAgICBTaW5lLFxyXG4gICAgU3F1YXJlLFxyXG4gICAgVHJpYW5nbGUsXHJcbiAgICBTYXd0b290aFxyXG59IiwiaW1wb3J0IHtOb3RlVGFibGV9IGZyb20gXCIuL2F1ZGlvL05vdGVUYWJsZVwiO1xyXG5pbXBvcnQge09zY2lsbGF0b3J9IGZyb20gXCIuL2F1ZGlvL09zY2lsbGF0b3JcIjtcclxuaW1wb3J0IHtXYXZlVHlwZX0gZnJvbSBcIi4vYXVkaW8vV2F2ZVR5cGVcIjtcclxuXHJcbmNvbnN0IGF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcclxuY29uc3Qgc2luZU9zY2lsbGF0b3IgPSBuZXcgT3NjaWxsYXRvcihXYXZlVHlwZS5TaW5lLCAwLjUsIGF1ZGlvQ29udGV4dC5zYW1wbGVSYXRlKTtcclxubGV0IHNvdXJjZTogQXVkaW9CdWZmZXJTb3VyY2VOb2RlO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHBsYXkoZXZlbnQ6IElucHV0RXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRvbmUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5kYXRhc2V0W1wibm90ZUZyZXF1ZW5jeVwiXTtcclxuICAgIGNvbnN0IHNhbXBsZXMgPSBzaW5lT3NjaWxsYXRvci5nZW5lcmF0ZUF1ZGlvQnVmZmVyKCt0b25lLCAzKTtcclxuICAgIGNvbnN0IGF1ZGlvQnVmZmVyID0gYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlcigxLCBzYW1wbGVzLmxlbmd0aCwgYXVkaW9Db250ZXh0LnNhbXBsZVJhdGUpO1xyXG4gICAgYXVkaW9CdWZmZXIuY29weVRvQ2hhbm5lbChzYW1wbGVzLCAwKTtcclxuICAgIHNvdXJjZSA9IGF1ZGlvQ29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcclxuICAgIHNvdXJjZS5idWZmZXIgPSBhdWRpb0J1ZmZlcjtcclxuICAgIHNvdXJjZS5jb25uZWN0KGF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XHJcbiAgICBzb3VyY2Uuc3RhcnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RvcFBsYXlpbmcoKTogdm9pZCB7XHJcbiAgICBzb3VyY2Uuc3RvcCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVLZXkobm90ZUZyZXF1ZW5jeTogbnVtYmVyKTogSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc29sZS5sb2coXCJDcmVhdGUga2V5IGZvcjogXCIgKyBub3RlRnJlcXVlbmN5KTtcclxuICAgIGNvbnN0IGtleUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAga2V5RWxlbWVudC5jbGFzc05hbWUgPSBcImtleVwiO1xyXG4gICAga2V5RWxlbWVudC5kYXRhc2V0W1wibm90ZUZyZXF1ZW5jeVwiXSA9IFN0cmluZyhub3RlRnJlcXVlbmN5KTtcclxuICAgIGtleUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBwbGF5LCBmYWxzZSk7XHJcbiAgICBrZXlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQbGF5aW5nLCBmYWxzZSk7XHJcbiAgICAvLyBrZXlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgcGxheSwgZmFsc2UpO1xyXG4gICAga2V5RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBzdG9wUGxheWluZywgZmFsc2UpO1xyXG4gICAgcmV0dXJuIGtleUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUtleWJvYXJkKCk6IHZvaWQge1xyXG4gICAgY29uc3Qga2V5Ym9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImtleWJvYXJkXCIpO1xyXG4gICAgZm9yIChjb25zdCBub3RlRnJlcXVlbmN5IG9mIE5vdGVUYWJsZS5mcmVxdWVuY2llcykge1xyXG4gICAgICAgIGtleWJvYXJkRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUtleShub3RlRnJlcXVlbmN5KSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoKTogdm9pZCB7XHJcbiAgICBjcmVhdGVLZXlib2FyZCgpO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0aWFsaXplKTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=