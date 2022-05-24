a = prompt("enter your troops name: ")
if (a === Gtroops) {
  console.log(`i am ${a} and i am a ground troops`)
} else {
  console.log(`i am ${a} and i am a air troops`)
}



const groundTroops = function(name, health, damage) {
  this.name = name;
  this.health = health;
  this.damage = damage;
  this.canWalk = true;
}


const airTroops = function(name, health, damage) {
  this.name = name;
  this.health = health;
  this.damage = damage;
  this.canWalk = false;
}



// verifying wether the troops can fly or walk

groundTroops.prototype.verify = function () {
  if (this.canWalk) {
    console.log(`hello i am ${this.name} a ground troop`)
  } else {
    console.log(`hello i am ${this.name} a air troop`)
  }
}



const Gtroops = function(name, health, damage) {
  groundTroops.call(this, name, health, damage)
  this.health = health
  this.damage = damage
}

const Atroops = function(name, health, damage) {
  airTroops.call(this, name, health, damage)
  this.health = health
  this.damage = damage
}


Gtroops.prototype = Object.create(groundTroops.prototype)
Gtroops.prototype.constructor = Gtroops


Atroops.prototype = Object.create(airTroops.prototype)
Atroops.prototype.constructor = Atroops



const barberian = new Gtroops('barberian', 65, 14)
const wizard = new Gtroops('wizard', 90, 70)
const giant = new Gtroops('giant', 360, 14)
const ballons = new Atroops('loons', 180, 32)
const dragon = new Atroops('dragons', 1900, 140)
const minion = new Atroops('minion', 58, 38)



