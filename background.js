class Layer {
  constructor(game, width, height, speedMod, image) {
    this.game = game;
    this.width = width;
    this.height = height;
    this.speedMod = speedMod;
    this.image = image;
    this.x = 0;
    this.y = 0;
  }
  update() {
    if (this.x < -this.width) {
      this.x = 0;
    } else {
      this.x -= this.game.speed * this.speedMod;
    }
  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    context.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  }
}

export class Background {
  constructor(game) {
    this.game = game;
    this.width = 1667;
    this.height = 500;
    this.Layer1image = layer1;
    this.Layer2image = layer2;
    this.Layer3image = layer3;
    this.Layer4image = layer4;
    this.Layer5image = layer5;
    this.layer1 = new Layer(
      this.game,
      this.width,
      this.height,
      0,
      this.Layer1image
    );
    this.layer2 = new Layer(
      this.game,
      this.width,
      this.height,
      0.2,
      this.Layer2image
    );
    this.layer3 = new Layer(
      this.game,
      this.width,
      this.height,
      0.4,
      this.Layer3image
    );
    this.layer4 = new Layer(
      this.game,
      this.width,
      this.height,
      0.8,
      this.Layer4image
    );
    this.layer5 = new Layer(
      this.game,
      this.width,
      this.height,
      1,
      this.Layer5image
    );
    this.BackgroundLayers = [
      this.layer1,
      this.layer2,
      this.layer3,
      this.layer4,
      this.layer5,
    ];
  }
  update() {
    this.BackgroundLayers.forEach((layer) => {
      layer.update();
    });
  }
  draw(context) {
    this.BackgroundLayers.forEach((layer) => {
      layer.draw(context);
    });
  }
}
