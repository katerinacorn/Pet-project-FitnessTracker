"use strict"

window.onload = function() {
    const parallax = document.querySelector('.picture__parallax');

    if (parallax) {
        /* const content = document.querySelector('.parallax__container'); */
        const phone = document.querySelector('.phone');
        const big = document.querySelector('.big');
        const medium = document.querySelector('.medium');
        const small = document.querySelector('.small');

        //Coeficient
        const forPhone = 40;
        const forBig = 20;
        const forMedium = 10;
        const forSmall = 5;

        //Animation speed
        const speed = 0.05;

        //Variables
        let positionX = 0, positionY = 0;
        let coordXpercent = 0, coordYpercent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXpercent - positionX;
            const distY = coordYpercent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            //Transfer styles
            phone.style.cssText = `transform: translate(${positionX / forPhone}%,${positionY / forPhone}%);`;
            big.style.cssText = `transform: translate(${positionX / forBig}%,${positionY / forBig}%);`;
            medium.style.cssText = `transform: translate(${positionX / forMedium}%,${positionY / forMedium}%);`;
            small.style.cssText = `transform: translate(${positionX / forSmall}%,${positionY / forSmall}%);`;

            requestAnimationFrame(setMouseParallaxStyle);
        }

        setMouseParallaxStyle();

        parallax.addEventListener("mousemove", function (e){
            //get width/hight block
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            //zero in the middle of page
            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            //get percent
            coordXpercent = coordX / parallaxWidth * 100;
            coordYpercent = coordY / parallaxHeight * 100;
        });

    }
}