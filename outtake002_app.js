let speed = 0;
let position = 0;
window.addEventListener('wheel',<e>=>{
                        
                        speed += e.deltaY*0.0002;
                        
                        
                        })

function raf(){
  console.log(speed);
  position += speed;
  speed *=0.8;
  block.style.transform = 'translate(0,${position*100}px)'
  window.requestAnimationFrame(raf);
}

raf();