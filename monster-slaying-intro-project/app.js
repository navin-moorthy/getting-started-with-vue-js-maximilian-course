new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		isGameRunning: false,
		turns: []
	},
	methods: {
		startGame: function() {
			this.isGameRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		},
		attack: function() {
			let damage = this.calculateDamage(3, 10);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'Player attacks Monster for ' + damage
			});

			if (this.checkWin()) {
				return;
			}

			this.monsterDamage();
			console.log('turns:', this.turns);
		},
		specialAttack: function() {
			let damage = this.calculateDamage(10, 20);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'Player attacks Monster for ' + damage
			});

			if (this.checkWin()) {
				return;
			}

			this.monsterDamage();
		},
		heal: function() {
			if (this.playerHealth <= 90) {
				this.playerHealth += 10;
			} else {
				this.playerHealth = 100;
			}
			this.turns.unshift({
				isPlayer: true,
				text: 'Player heals for  10'
			});

			this.monsterDamage();
		},
		giveUp: function() {
			this.isGameRunning = false;
		},
		monsterDamage: function() {
			let damage = this.calculateDamage(5, 12);
			this.playerHealth -= damage;
			this.turns.unshift({
				isPlayer: false,
				text: 'Monster attacks Player for ' + damage
			});
			this.checkWin();
		},
		calculateDamage: function(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		},
		checkWin: function() {
			if (this.monsterHealth <= 0) {
				if (confirm('You Won! New Game?')) {
					this.startGame();
				} else {
					this.isGameRunning = false;
				}
				return true;
			}

			if (this.playerHealth <= 0) {
				if (confirm('You Lost! New Game?')) {
					this.startGame();
				} else {
					this.isGameRunning = false;
				}
				return true;
			}
			return false;
		}
	}
});
