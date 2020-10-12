function setup() {
    createCanvas(800, 800);
  }
  
  function draw() {
    background(250,50,250);

    for (let i = 0; i < 100; i++){
      ellipse(10 * i,20 * i,100,100);
    }
  }