let circle = {
  x: 0,
  y: 0,
  d: 0,
  r: 0,
  g: 0,
  b: 0,
  a: 0
};

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
}

function draw() {
  circle.x = random(0, width);
  circle.y = random(0, height);
  circle.d = random(20, 40);
  circle.r = random(0, 255);
  circle.b = random(0, 255);
  circle.a = random(20, 100);
  
  fill(circle.r, circle.g, circle.b, circle.a);
  ellipse(circle.x, circle.y, circle.d, circle.d);
}
