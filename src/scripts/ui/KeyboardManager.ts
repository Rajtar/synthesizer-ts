import {NoteTable} from "../audio/NoteTable";

export class KeyboardManager {

    static createKeyboard(): HTMLElement {
        const keyboardDiv = document.getElementById("keyboard");
        for (const key of NoteTable.notes.keys()) {
            keyboardDiv.appendChild(this.createKey(key));
        }
        return keyboardDiv;
    }

    static createKey(noteKey: string): HTMLElement {
        const keyElement = document.createElement("div");
        keyElement.className = noteKey.includes("#") ? "half-key" : "key";
        keyElement.dataset["noteKey"] = String(noteKey);
        return keyElement;
    }


}