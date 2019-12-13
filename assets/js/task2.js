'use strict';

class Figure {
    /**
     *
     * @param {Array<number>} sides
     * @param name
     */
    constructor(sides, name) {
        this._name = name;
        this._sides = sides;

    }

    get name() {
        return this._name;
    }

    getInfo(){
        return `name: ${this.name}; sides count: ${this._sides.length}`;
    }
}


class Square extends Figure {

    constructor(sides) {
        super(sides, "Square");
    }

    getArea() {
        return this._sides[0] * this._sides[1];
    }

    getPerimeter() {
        return (this._sides[0] + this._sides[1]) * 2
    }

}

class Triangle extends Figure {
    constructor(sides) {
        super(sides, "Triangle");
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        return Math.sqrt(p * (p - this._sides[0]) * (p - this._sides[1]) * (p - this._sides[2]))
    }

    getPerimeter() {
        return this._sides[0] + this._sides[1] + this._sides[2]
    }

}