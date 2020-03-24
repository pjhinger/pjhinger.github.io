function Circle(x, y, d, r, g, b, a, vx, vy) {
  this.x = x; // x-coordinate for circle's center
  this.y = y; // y-coordinate for circle's center
  this.d = d; // circle's diameter
  this.r = r; // circle's red value
  this.g = g; // circle's green value
  this.b = b; // circle's blue value
  this.a = a; // circle's alpha value
  this.vx = vx; // circle's velocity along the x-axis
  this.vy = vy; // circle's velocity along the y-axis
}

var circles = new Array();
var n = 300;

function setup() {
  createCanvas(displayWidth, displayHeight);
  for (var i = 0; i < n; i++) {
    var r = random(20, 50);
    var v = random(1, 5);
    var dir1 = 0;
    while (dir1 == 0) {
      dir1 = random(-1,1);
    }
    var dir2 = 0;
    while (dir2 == 0) {
      dir2 = random(-1,1);
    }
    circles.push(new Circle(random(r, width - r), random(r, height - r), 2 * r, random(0, 255), random(0, 255), random(0, 255), random(50, 100), v * dir1, v * dir2));
  }
}

function draw() {
  background(0);
  for (var i = 0; i < n; i++) {
    var r = 0.5 * circles[i].d;
    if (circles[i].x >= width - r || circles[i].x <= r) {
      circles[i].vx *= -1;
    }
    if (circles[i].y >= height - r || circles[i].y <= r) {
      circles[i].vy *= -1;
    }
    circles[i].x += circles[i].vx;
    circles[i].y += circles[i].vy;
    
    fill(circles[i].r, circles[i].g, circles[i].b, circles[i].a);
    ellipse(circles[i].x, circles[i].y, circles[i].d, circles[i].d);
  }
}
