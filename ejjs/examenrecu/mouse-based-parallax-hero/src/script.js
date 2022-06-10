const layers = document.querySelectorAll('.hero__image');

document.querySelector('.hero').addEventListener('mousemove',parallaxHero);
document.querySelector('.hero').addEventListener('touchmove',parallaxHero);

// apply initial scales
layers.forEach(function(layer, index){
  const scale = parseFloat(layer.dataset.scale);
  layer.style.transform = 'scale('+scale+')';
});

function parallaxHero(e){
  const mouseX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
  const mouseY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
  const heroH = this.offsetHeight;
  const heroW = this.offsetWidth;
  const heroMidX = this.offsetLeft + (heroW / 2);
  const heroMidY = this.offsetTop + (heroH / 2);
  const diffX = heroMidX - mouseX;
  const diffY = heroMidY - mouseY;
  
  layers.forEach(function(layer, index){
    const ratioX = parseFloat(layer.dataset.x);
    const ratioY = parseFloat(layer.dataset.y);
    const scale = parseFloat(layer.dataset.scale);
    const minScale = ((scale - 1) / 2);
    
    const minX = heroW * minScale;
    const minY = heroH * minScale;
    
    const maxX = - (heroW * minScale);
    const maxY = - (heroH * minScale);
    
    const moveX = Math.max(maxX,Math.min(minX,ratioX * diffX));
    const moveY = Math.max(maxY,Math.min(minY,ratioY * diffY));
    
    layer.style.left = moveX+'px';
    layer.style.top = moveY+'px';
    layer.style.transform = 'scale('+scale+')';
  });
}