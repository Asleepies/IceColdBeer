const holesCoords = [[462,556],
[492,506],
[507,476],
[507,437],
[460,472],
[409,483],
[369,468],
[362,508],
[305,484],
[254,500],
[206,500],
[149,514],
[121,478],
[107,438],
[199,444],
[309,435],
[415,427],
[464,381],
[385,384],
[350,380],
[326,362],
[291,397],
[267,419],
[237,398],
[213,376],
[172,405],
[142,362],
[179,349],
[125,333],
[106,305],
[217,334],
[248,309],
[287,290],
[316,314],
[344,290],
[378,297],
[406,322],
[435,347],
[482,325],
[490,297],
[507,269],
[463,271],
[437,247],
[378,265],
[381,224],
[344,239],
[314,213],
[287,240],
[258,264],
[232,230],
[220,258],
[186,270],
[154,260],
[112,243],
[141,228],
[156,201],
[190,192],
[164,164],
[242,130],
[219,154],
[242,175],
[264,197],
[289,173],
[290,130],
[315,153],
[335,180],
[357,160],
[382,140],
[407,161],
[405,200],
[432,183],
[489,172]]
const goalsCoords = [[304,519],
[446,505],
[167,467],
[374,428],
[248,363],
[435,296],
[313,263],
[188,228],
[382,181],
[265,153]]
let config = {
  type: Phaser.AUTO,
  width: 611,
  height: 750,
  physics: {
    default: 'matter',
    matter: {
      debug: true,
      gravity: { y: 200 }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  parent: 'game'
};

let game = new Phaser.Game(config);
//   width: 611,
//   height: 750,
let pointer;
let coords = [0,0];
let coordLabel;
let bar;
let barline;
let ball;
let holes = [];
let goals = [];
let temp = [];
let cursors;

function preload() {
  this.load.image('bg', '../img/icbsm.png')
  this.load.image('bar', '../img/bar.png')
}

function create() {
  cursors = this.input.keyboard.createCursorKeys();
  pointer = this.input.activePointer;
  const bg = this.add.image(0, 0, 'bg').setOrigin(0)
  
  holes = this.add.group()
  holesCoords.map(([x, y],i) => {
    holes.add(this.add.circle(x,y,10,0xfff))
    this.add.text(x,y,`${i+1}`).setOrigin(.5,.5)
  })

  goals = this.add.group()
  goalsCoords.map(([x, y],i) => {
    goals.add(this.add.circle(x,y,10,0xFF5733))
    this.add.text(x,y,`${i+1}`).setOrigin(.5,.5)
  })
 
  ball = this.add.circle(505,560, 11, 0xfff)
  // this.physics.add.existing(ball)
  // ball.body.setCircle(11)
  // .setCollideWorldBounds()
  // .setBounce(.5)
  // // bar = this.physics.add.image(300,575, 'bar')  // BAR AS IMAGE
  bar = this.add.rectangle(300, 575, 470, 8, 0x4287f5)  // BAR AS RECTANGLE
  // // barline = new Phaser.Geom.Line(80,628, 556,628) // BAR AS GEOM 
  // // Phaser.Actions.PlaceOnLine(bar, barline)
  // // this.physics.add.existing(bar, true)  // BAR AS STATIC 
  // this.physics.add.existing(bar)  
  // bar.body.setAllowGravity(false)
  // .setImmovable(true)
  // .setCollideWorldBounds()
  // this.physics.add.collider(bar, ball)

  

  coordLabel = this.add.text(5,650,`${coords}`)
  // POINT MARKER
  // this.input.on('pointerup',() => {
  //   temp.push(coords)
  //   this.add.circle(pointer.x,pointer.y,5,0xfff)
  //   console.log(temp)
  // }, this)
}

function update () {
  coords = [pointer.x, pointer.y]
  coordLabel.setText(coords)
  // bar.body.setVelocity(0)
  
  if (cursors.up.isDown) {
    console.log('up')
    // bar.body.setVelocity(0,-250)
  
  } else if (cursors.down.isDown) {
    console.log('down')
    // bar.body.setVelocity(0,200);
  }
  
}


