import {
    Block
} from './block.js';

import { 
    Ball
} from './ball.js';

class App {
    constructor() {
        

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        
        document.body.appendChild(this.canvas);
        this.resize();

        this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);
        this.block = new Block(400, 50, 300, 450);
        
        window.addEventListener('resize', this.animate.bind(this), false);

        this.animate();
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;

        this.ctx.scale(2, 2)
    }

    animate(t) {
        
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        
        this.block.draw(this.ctx);

        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
    }
}

window.onload = () => {
    new App();
}