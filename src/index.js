import Phaser from 'phaser';

var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
			debug: false,
		},
	},
	scene: {
		preload: preload,
		create: create,
		update: update,
	},
};

var game = new Phaser.Game(config);

function preload() {
	this.load.image('sky9', 'src/assets/backgroundLayers/Layer_0000_9.png');
	this.load.image(
		'grass_ground',
		'src/assets/backgroundLayers/Layer_0001_8.png'
	);
	this.load.image('sky7', 'src/assets/backgroundLayers/Layer_0002_7.png');
	this.load.image('sky6', 'src/assets/backgroundLayers/Layer_0003_6.png');
	this.load.image(
		'sky4_lights',
		'src/assets/backgroundLayers/Layer_0004_Lights.png'
	);
	this.load.image('sky5', 'src/assets/backgroundLayers/Layer_0005_5.png');
	this.load.image('sky4', 'src/assets/backgroundLayers/Layer_0006_4.png');
	this.load.image(
		'sky7_lights',
		'src/assets/backgroundLayers/Layer_0007_Lights.png'
	);
	this.load.image('sky3', 'src/assets/backgroundLayers/Layer_0008_3.png');
	this.load.image('sky2', 'src/assets/backgroundLayers/Layer_0009_2.png');
	this.load.image('sky1', 'src/assets/backgroundLayers/Layer_0010_1.png');
	this.load.image('sky0', 'src/assets/backgroundLayers/Layer_0011_0.png');
	this.load.spritesheet('dude', 'src/assets/sprites/move with FX.png', {
		frameWidth: 32,
		frameHeight: 48,
	});
}
let platforms;
let player;
function create() {
	this.add.image(400, 200, 'sky0');
	this.add.image(400, 200, 'sky1');
	this.add.image(400, 200, 'sky2');
	this.add.image(400, 200, 'sky3');
	this.add.image(400, 200, 'sky4');
	this.add.image(400, 200, 'sky4_lights');
	this.add.image(400, 200, 'sky5');
	this.add.image(400, 200, 'sky6');
	this.add.image(400, 200, 'sky7');
	this.add.image(400, 200, 'sky7_lights');
	this.add.image(400, 200, 'grass_ground');
	this.add.image(400, 200, 'sky9');

	platforms = this.physics.add.staticGroup();

	platforms.create(400, 200, 'grass_ground').setScale(2).refreshBody();

	platforms.create(600, 400, 'grass_ground');
	platforms.create(30, 50, 'grass_ground');
	platforms.create(750, -150, 'grass_ground');

	player = this.physics.add.sprite(100, 450, 'dude');

	player.setBounce(0.2);
	player.setCollideWorldBounds(true);

	this.anims.create({
		key: 'right',
		frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
		frameRate: 10,
		repeat: -1,
	});
}

function update() {}
