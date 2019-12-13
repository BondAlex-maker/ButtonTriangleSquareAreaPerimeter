'use strict';

class Button {
    /**
     *
     * @param {number} height
     * @param {number} width
     * @param {string} text
     */
    constructor(width, height, text) {
        this._height = height;
        this._width = width;
        this._text = text;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }


    get text() {
        return this._text;
    }

    showBtn() {
        const button = document.createElement("button");
        button.style.width = `${this.width}px`;
        button.style.height = `${this.height}px`;
        button.innerText = this.text;
        return button;
    };
}


class BootstrapButton extends Button {
    constructor(width, height, text, color) {
        super(width, height, text);
        this._color = color;
    }
    get color(){
        return this._color;
    }

    showBtn() {
        const button = super.showBtn();
        button.style.backgroundColor = this.color;
        return button;
    }

}





const button = new Button(120, 40, "My Button");

document.body.appendChild(button.showBtn());


const bootstrapButton = new BootstrapButton(200, 90, "Bootstrap", "green");

document.body.appendChild( bootstrapButton.showBtn() );