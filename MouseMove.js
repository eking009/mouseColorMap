document.addEventListener('mousemove', function(e){
    const r = Math.round(e.pageX * 255 / window.innerWidth);
    const b = Math.round(e.pageY * 255 / window.innerHeight);
    const color = `rgb(${r}, ${b}, 0)`;
    document.body.style.backgroundColor = color;
    conmsole.log(color);
});