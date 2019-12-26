new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		isGameRunning: false
	},
	methods: {
		startGame: function() {
			this.isGameRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
		},
		attack: function() {
			let max = 10;
			let min = 3;

			let damage = Math.floor(Math.random() * (max - min + 1) + min);
			this.monsterHealth -= damage;

			if (this.monsterHealth <= 0) {
				alert('You Won');
				this.isGameRunning = false;
				return;
			}

			max = 12;
			min = 5;

			damage = Math.floor(Math.random() * (max - min + 1) + min);
			this.playerHealth -= damage;

			if (this.playerHealth <= 0) {
				alert('You Lost');
				this.isGameRunning = false;
				return;
			}
		},
		specialAttack: function() {},
		heal: function() {},
		giveUp: function() {}
	}
});
