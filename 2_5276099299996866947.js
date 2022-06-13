class Unit{ //unit creation and actions
	constructor(name, xp, dam, armor, attackSpeed){
		this.name = name;
		this.xp = xp;
		this.dam = dam;
		this.armor = armor;
		this.attackSpeed = attackSpeed;
	}
	//health, damage, armor, speedAttack
}

class Display{ //visual
	constructor(){
		this.startBtn = document.getElementsByClassName('start')[0];
		this.fightBtn = document.getElementsByClassName('fight')[0];
	}

	hides(btn) {
		btn.style.display = 'none';
	}
	show(btn){
		btn.style.display = 'block';
	}
	load(){
		window.onload = this.hides(this.fightBtn);
	}
	showCharacter(){
		
	}
}

class Game extends Display{ //user's actions
	start(){
		display.startBtn.onclick = function() {
			alert('Choose your fighter');
			display.startBtn.style.display = 'none';
		}
	}
}

const display = new Display();
const game = new Game();
const unit = new Unit(2,3,4,5);
display.load();
game.start();
//display.show(display.fightBtn);


/*window.onload = function() {
  document.getElementsByClassName('hidden')[0].style.display = 'none';
};*/

/*display.startBtn.onclick = function() {
	alert('Choose your fighter');
	display.startBtn.style.display = 'none';
}*/