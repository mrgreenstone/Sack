"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sack = void 0;
class Sack {
    constructor(content) {
        this.content = [];
        this.content = [
            ...this.content,
            ...content.filter(() => Math.random() > 0.5)
        ];
    }
    empty() {
        let tmp = this.content.sort(() => Math.random() * 2 - 1);
        this.content = [];
        return tmp;
    }
    fill(content) {
        this.content = [
            ...this.content,
            ...content.filter(() => Math.random() > 0.5)
        ];
    }
    take() {
        this.content = this.content.filter(() => Math.random() > 0.5);
        return this.content.pop();
    }
    put(content) {
        if (Math.random() > 0.5)
            this.content.push(content);
    }
}
exports.Sack = Sack;
