import {ctx, width, height} from './canvas_setup.js';
export { Ball, random, randomRGB, balls};

const balls = [];

class Ball {
    constructor(x, y, velX, velY, color, size){
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }
   
    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    // Metodo que actualiza al instante donde esta la bola
    update(){
        //Verifica la osicion x de la bola + su tamaño cuando llegas al limite del lienzo
        if((this.x + this.size) >= width){
            //Si hay colision con el borde derecho
            this.velX = -(Math.abs(this.velX));
        }
        //Verifica si la posicion x de la bola - su tamaño es menor o igual a 0
        if((this.x - this.size) <= 0){
            // Si hay colision con el borde izquierdo se invierte la direccion horizontal
            this.velX = +(Math.abs(this.velX));
        }

        if((this.y + this.size) >= height){
            this.velY = -(Math.abs(this.velY));
        }

        if((this.y + this.size) <= 0){
            this.velY = +(Math.abs(this.velY));
        }

        //Se actualiza las coordenadas de la bola según las velocidades actuales
        this.x += this.velX;
        this.y += this.velY;
    }

    colisionDetect(){
        for(const ball of balls){
            //Verificamos si la pelota actual no es la misma que la pelota de la iteracion
            if(!(this === ball)){
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
        
                //Calcular la distancia entre el centro de la pelota actual y la pelota de la iteracion
                const distance = Math.sqrt(dx * dx + dy * dy); // Puede que haya que cambiarlo en el examen 

                if (distance < this.size + ball.size){
                 ball.color = this.color = randomRGB();
                }
            }
        }

        /*
        for(let i = 0; i < balls.length; index++){
            const ball = balls[i];
        }

        array.forEach(ball => {

        });
        */
    }
}

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
const randomRGB = () => {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}