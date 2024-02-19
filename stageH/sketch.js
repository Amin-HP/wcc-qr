let objModel;
let mtlData;
let sound;

function preload(){
  objModel = loadModel('assets/qrnew.obj', true);

  // Load MTL data
  // loadStrings('assets/qrnew.mtl', function(data) {
  //   mtlData = data.join('\n');
  // });

  sound = loadSound('assets/fof.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 500);
  // Enable mouse interaction for rotation
  orbitControl();
  normalMaterial();
  sound.play();

}

function draw() {
  
  background(200);
  fill(120);
  // Set up lights
  ambientLight(200); // Ambient light

  // Draw the loaded 3D model
  scale(10); // Scale the model
  // rotateX(frameCount * 0.01); // Rotate the model
  // rotateY(frameCount * 0.01); // Rotate the model
  // model && model.draw(); // Draw the model if it's loaded
  // noStroke();
  if (objModel && mtlData) {
    // parseMTL(mtlData);
    model(objModel);
  }
}

function parseMTL(data) {
  // Extract the texture path from MTL data
  let texturePath;
  for (let i = 0; i < data.length; i++) {
    let line = data[i].trim();
    if (line.startsWith('map_Kd')) {
      texturePath = line.split(' ')[1];
      break;
    }
  }
  if (texturePath) {
    // Load texture
    texture = loadImage(texturePath);
    textureMode(NORMAL);
    textureWrap(REPEAT);
  }
}
