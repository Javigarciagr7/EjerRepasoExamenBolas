import {Ball, random, randomRGB, balls} from './ball_class.js';
import {ctx, width, height} from './canvas_setup.js';

while (balls.length < 25){
    const size = random (10, 20);

    const ball = new Ball(
        //generar la posicion en x de forma aleatoria para esta bola en el lienzo
        random(0 + size, width - size),
        //generar la posicion en Y de forma aleatoria para esta bola en el lienzo
        random(0 + size, height - size),
        //La velocidad en la direccion de X se establece de forma aleatoria entre -7 y 7
        random(-7,7),
        random(-7,7),
        randomRGB,
        size
    )

    balls.push(ball);
}

const loop = () => {
    //Establece un color de fondo semitransparente (0.25)
    ctx.fillStyle = `rgba(0, 0, 0, 0.25)`;
    ctx.fillRect(0, 0, width, height);

    for(const ball of balls){
        ball.draw() // Dibujamos la pelota
        ball.update() // Actualiza la posicion de la pelota
        ball.colisionDetect() // Detectamos la colision de la pelota
    }

    requestAnimationFrame(loop); // Solicita al navegador que llame a la funcion de loop
}

loop() // Inicia bucle principal


