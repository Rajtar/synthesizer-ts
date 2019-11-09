import {NoteTable} from "../audio/NoteTable";

export class KeyboardManager {

    static createKeyboard(): HTMLElement {
        const keyboardDiv = document.getElementById("keyboard");
        for (const noteFrequency of NoteTable.frequencies) {
            keyboardDiv.appendChild(this.createKey(noteFrequency));
        }
        return keyboardDiv;
    }

    static createKey(noteFrequency: number): HTMLElement {
        const keyElement = document.createElement("div");
        keyElement.className = "key";
        keyElement.dataset["noteFrequency"] = String(noteFrequency);
        return keyElement;
    }


}