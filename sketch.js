let textSwitch = true;
let side = 20;

const palette1 = ["#DC602E", "#05A8AA", "#B8D5B8", "#D7B49E", "#36C747"];
const palette2 = ["#E9E3FA", "#4E8494", "#1D4275", "#2B4A6E", "#638EBF"];
const palette3 = ["#83B692", "#F9ADA0", "#F9627D", "#C65B7C", "#5B3758"];
const palette4 = ["#C77706", "#B84106", "#F28585", "#E36A0E", "#B05656"];

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  textAlign(CENTER);
}

function draw() {
  let bgWhite = map(mouseX, 0, width, 0, 255);
  let bgBlack = map(mouseY, 0, height, 0, 255);
  background(bgWhite);
  background(bgBlack);

  for (let x = side; x < windowWidth - 10; x += 25) {
    for (let y = side; y < windowHeight - 10; y += 25) {
      noStroke();
      fill(color(random(palette4)));

      if (key == "1") {
        fill(color(random(palette1)));
      } else if (key == "2") {
        fill(color(random(palette2)));
      } else if (key == "3") {
        fill(color(random(palette3)));
      } else if (key == "4") {
        fill(color(random(palette4)));
      }
      circle(x, y, random(-20, 20), random(-20, 20));
    }
  }

  if (textSwitch == true) {
    push();
    fill(0, 200);
    rectMode(CENTER);
    rect(width / 2, height / 2, 310, 145, 16);
    textSize(20);
    textAlign(CENTER);
    textFont("sans-serif");
    fill(255);
    text(
      "Use 1-2-3-4 to change palette",
      windowWidth / 2,
      windowHeight / 2 - 40
    );
    text(
      "Slide down to change background",
      windowWidth / 2,
      windowHeight / 2 - 10
    );
    text("Press S to save a picture", windowWidth / 2, windowHeight / 2 + 20);
    text("Press T to toggle the text", windowWidth / 2, windowHeight / 2 + 50);
    pop();
  }

  if (textSwitch == false) {
    push();
    background(0, 20);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//save and toggle
function keyTyped() {
  if (key == "s" || key == "S") {
    save("Palette.png");
  }

  if (key == "t" || key == "T") {
    if (textSwitch == true) {
      textSwitch = false;
    } else if (textSwitch == false) {
      textSwitch = true;
    }
  }
}
