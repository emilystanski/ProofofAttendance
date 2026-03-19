function setup() {
  let canvas = createCanvas(400, 40);
  canvas.parent("squiggle-container"); 
}

function draw() {
  clear();

  stroke(0);
  strokeWeight(2);
  noFill();

  beginShape();

  for (let x = 0; x < width; x += 5) {
    let y = height / 2 + sin(x * 0.04 + frameCount * 0.02) * 10;
    vertex(x, y);
  }

  endShape();
}