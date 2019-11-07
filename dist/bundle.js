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

/***/ "./src/scripts/NoteTable.ts":
/*!**********************************!*\
  !*** ./src/scripts/NoteTable.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class NoteTable {
}
exports.NoteTable = NoteTable;
NoteTable.frequencies = [523.251, 587.330, 659.255, 698.456, 783.991, 880.000, 987.767];


/***/ }),

/***/ "./src/scripts/index.ts":
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const NoteTable_1 = __webpack_require__(/*! ./NoteTable */ "./src/scripts/NoteTable.ts");
const audioContext = new AudioContext();
let source;
function sineWaveAt(sampleNumber, tone) {
    const sampleFrequency = audioContext.sampleRate / tone;
    return Math.sin(sampleNumber / (sampleFrequency / (Math.PI * 2)));
}
function play(event) {
    const volume = 0.5;
    const seconds = 3;
    const tone = event.target.dataset["noteFrequency"];
    const samples = new Float32Array(audioContext.sampleRate * seconds);
    for (let i = 0; i < samples.length; i++) {
        samples[i] = sineWaveAt(i, +tone) * volume;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvTm90ZVRhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxNQUFhLFNBQVM7O0FBQXRCLDhCQWlCQztBQWhCVSxxQkFBVyxHQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0Q5Rix5RkFBc0M7QUFFdEMsTUFBTSxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUN4QyxJQUFJLE1BQTZCLENBQUM7QUFFbEMsU0FBUyxVQUFVLENBQUMsWUFBb0IsRUFBRSxJQUFZO0lBQ2xELE1BQU0sZUFBZSxHQUFHLFlBQVksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3ZELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkUsQ0FBQztBQUVELFNBQVMsSUFBSSxDQUFDLEtBQWlCO0lBQzNCLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUNuQixNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDbEIsTUFBTSxJQUFJLEdBQXNCLEtBQUssQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZFLE1BQU0sT0FBTyxHQUFHLElBQUksWUFBWSxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFFcEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNO0tBQzdDO0lBRUQsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUYsV0FBVyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFdEMsTUFBTSxHQUFHLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO0lBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNuQixDQUFDO0FBRUQsU0FBUyxXQUFXO0lBQ2hCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNsQixDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsYUFBcUI7SUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxhQUFhLENBQUMsQ0FBQztJQUNoRCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELFVBQVUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQzdCLFVBQVUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzVELFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RELFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNELHlEQUF5RDtJQUN6RCxVQUFVLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5RCxPQUFPLFVBQVUsQ0FBQztBQUN0QixDQUFDO0FBRUQsU0FBUyxjQUFjO0lBQ25CLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEQsS0FBSyxNQUFNLGFBQWEsSUFBSSxxQkFBUyxDQUFDLFdBQVcsRUFBRTtRQUMvQyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0tBQ3JEO0FBQ0wsQ0FBQztBQUVELFNBQVMsVUFBVTtJQUNmLGNBQWMsRUFBRSxDQUFDO0FBQ3JCLENBQUM7QUFFRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy9pbmRleC50c1wiKTtcbiIsImV4cG9ydCBjbGFzcyBOb3RlVGFibGUge1xyXG4gICAgc3RhdGljIGZyZXF1ZW5jaWVzOiBhbnkgPSBbNTIzLjI1MSwgNTg3LjMzMCwgNjU5LjI1NSwgNjk4LjQ1NiwgNzgzLjk5MSwgODgwLjAwMCwgOTg3Ljc2N107XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBzdGF0aWMgX2luaXRpYWxpemUgPSAoKCkgPT4ge1xyXG4gICAgLy8gICAgIE5vdGVUYWJsZS5mcmVxdWVuY2llc1sxXVtcIkNcIl0gPSAzMi43MDMxOTU2NjI1NzQ4Mjk7XHJcbiAgICAvLyAgICAgTm90ZVRhYmxlLmZyZXF1ZW5jaWVzWzFdW1wiQyNcIl0gPSAzNC42NDc4Mjg4NzIxMDkwMTI7XHJcbiAgICAvLyAgICAgTm90ZVRhYmxlLmZyZXF1ZW5jaWVzWzFdW1wiRFwiXSA9IDM2LjcwODA5NTk4OTY3NTk0NTtcclxuICAgIC8vICAgICBOb3RlVGFibGUuZnJlcXVlbmNpZXNbMV1bXCJEI1wiXSA9IDM4Ljg5MDg3Mjk2NTI2MDExMztcclxuICAgIC8vICAgICBOb3RlVGFibGUuZnJlcXVlbmNpZXNbMV1bXCJFXCJdID0gNDEuMjAzNDQ0NjE0MTA4NzQxO1xyXG4gICAgLy8gICAgIE5vdGVUYWJsZS5mcmVxdWVuY2llc1sxXVtcIkZcIl0gPSA0My42NTM1Mjg5MjkxMjU0ODU7XHJcbiAgICAvLyAgICAgTm90ZVRhYmxlLmZyZXF1ZW5jaWVzWzFdW1wiRiNcIl0gPSA0Ni4yNDkzMDI4Mzg5NTQyOTk7XHJcbiAgICAvLyAgICAgTm90ZVRhYmxlLmZyZXF1ZW5jaWVzWzFdW1wiR1wiXSA9IDQ4Ljk5OTQyOTQ5NzcxODY2MTtcclxuICAgIC8vICAgICBOb3RlVGFibGUuZnJlcXVlbmNpZXNbMV1bXCJHI1wiXSA9IDUxLjkxMzA4NzE5NzQ5MzE0MjtcclxuICAgIC8vICAgICBOb3RlVGFibGUuZnJlcXVlbmNpZXNbMV1bXCJBXCJdID0gNTUuMDAwMDAwMDAwMDAwMDAwO1xyXG4gICAgLy8gICAgIE5vdGVUYWJsZS5mcmVxdWVuY2llc1sxXVtcIkEjXCJdID0gNTguMjcwNDcwMTg5NzYxMjM5O1xyXG4gICAgLy8gICAgIE5vdGVUYWJsZS5mcmVxdWVuY2llc1sxXVtcIkJcIl0gPSA2MS43MzU0MTI2NTcwMTU1MTM7XHJcbiAgICAvLyB9KSgpO1xyXG59IiwiaW1wb3J0IHtOb3RlVGFibGV9IGZyb20gXCIuL05vdGVUYWJsZVwiO1xyXG5cclxuY29uc3QgYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xyXG5sZXQgc291cmNlOiBBdWRpb0J1ZmZlclNvdXJjZU5vZGU7XHJcblxyXG5mdW5jdGlvbiBzaW5lV2F2ZUF0KHNhbXBsZU51bWJlcjogbnVtYmVyLCB0b25lOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3Qgc2FtcGxlRnJlcXVlbmN5ID0gYXVkaW9Db250ZXh0LnNhbXBsZVJhdGUgLyB0b25lO1xyXG4gICAgcmV0dXJuIE1hdGguc2luKHNhbXBsZU51bWJlciAvIChzYW1wbGVGcmVxdWVuY3kgLyAoTWF0aC5QSSoyKSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXkoZXZlbnQ6IElucHV0RXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZvbHVtZSA9IDAuNTtcclxuICAgIGNvbnN0IHNlY29uZHMgPSAzO1xyXG4gICAgY29uc3QgdG9uZSA9ICg8SFRNTElucHV0RWxlbWVudD5ldmVudC50YXJnZXQpLmRhdGFzZXRbXCJub3RlRnJlcXVlbmN5XCJdO1xyXG4gICAgY29uc3Qgc2FtcGxlcyA9IG5ldyBGbG9hdDMyQXJyYXkoYXVkaW9Db250ZXh0LnNhbXBsZVJhdGUgKiBzZWNvbmRzKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhbXBsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzYW1wbGVzW2ldID0gc2luZVdhdmVBdChpLCArdG9uZSkgKiB2b2x1bWVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhdWRpb0J1ZmZlciA9IGF1ZGlvQ29udGV4dC5jcmVhdGVCdWZmZXIoMSwgc2FtcGxlcy5sZW5ndGgsIGF1ZGlvQ29udGV4dC5zYW1wbGVSYXRlKTtcclxuICAgIGF1ZGlvQnVmZmVyLmNvcHlUb0NoYW5uZWwoc2FtcGxlcywgMCk7XHJcblxyXG4gICAgc291cmNlID0gYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xyXG4gICAgc291cmNlLmJ1ZmZlciA9IGF1ZGlvQnVmZmVyO1xyXG4gICAgc291cmNlLmNvbm5lY3QoYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcclxuICAgIHNvdXJjZS5zdGFydCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9wUGxheWluZygpOiB2b2lkIHtcclxuICAgIHNvdXJjZS5zdG9wKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUtleShub3RlRnJlcXVlbmN5OiBudW1iZXIpOiBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNyZWF0ZSBrZXkgZm9yOiBcIiArIG5vdGVGcmVxdWVuY3kpO1xyXG4gICAgY29uc3Qga2V5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBrZXlFbGVtZW50LmNsYXNzTmFtZSA9IFwia2V5XCI7XHJcbiAgICBrZXlFbGVtZW50LmRhdGFzZXRbXCJub3RlRnJlcXVlbmN5XCJdID0gU3RyaW5nKG5vdGVGcmVxdWVuY3kpO1xyXG4gICAga2V5RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHBsYXksIGZhbHNlKTtcclxuICAgIGtleUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBsYXlpbmcsIGZhbHNlKTtcclxuICAgIC8vIGtleUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBwbGF5LCBmYWxzZSk7XHJcbiAgICBrZXlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHN0b3BQbGF5aW5nLCBmYWxzZSk7XHJcbiAgICByZXR1cm4ga2V5RWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlS2V5Ym9hcmQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBrZXlib2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia2V5Ym9hcmRcIik7XHJcbiAgICBmb3IgKGNvbnN0IG5vdGVGcmVxdWVuY3kgb2YgTm90ZVRhYmxlLmZyZXF1ZW5jaWVzKSB7XHJcbiAgICAgICAga2V5Ym9hcmREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlS2V5KG5vdGVGcmVxdWVuY3kpKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgIGNyZWF0ZUtleWJvYXJkKCk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXRpYWxpemUpO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==