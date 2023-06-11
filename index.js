// start app0

const cards = document.querySelectorAll('body #container .cards .card');
cards.forEach(function(elem,key,arr){
    elem.addEventListener('mousemove',function(e){
        // console.log(e.layerX,e.layerY);
        const x = e.layerX;
        const y = e.layerY;
        let X,Y;
        if(x>125 && y>175){
            X = y/17.5;
            Y = x/12.5;
            elem.setAttribute('style',`transform: rotateX(${-X}deg) rotateY(${Y}deg);`);
        }
        else if(x>125 && y<=175){
            X = y/17.5;
            Y = x/12.5;
            elem.setAttribute('style',`transform: rotateX(${(-X + 20)}deg) rotateY(${Y}deg);`);
        }
        else if(x<=125 && y<=175){
            X = y/17.5;
            Y = x/12.5;
            elem.setAttribute('style',`transform: rotateX(${(-X + 20)}deg) rotateY(${(Y-20)}deg);`);
        }
        else if(x<=125 && y>175){
            X = y/17.5;
            Y = x/12.5;
            elem.setAttribute('style',`transform: rotateX(${(-X * 1)}deg) rotateY(${(Y-20)}deg);`);
        }
    });
    elem.addEventListener('mouseout',function(e){
        elem.setAttribute('style',`transform: rotateX(0deg)) rotateY(0deg));`);
    });
})
