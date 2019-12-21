new Vue({
	el: '#app',
	data: {
		title: 'Start Typing!!',
		link: 'https://www.google.com/',
		friendlyLink: '<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Google</a>',
		name: 'Navin',
		age: '25',
		assignmentLink:
			'https://images.unsplash.com/photo-1576792254006-4f8b51ed204b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
		counter: 0,
		x: 0,
		y: 0,
		value: 0,
		effect: 'highlight',
		highlight: {},
		color: '',
		activeColor: '',
		active: 'false',
		styleObject: {
			width: '100px',
			height: '100px',
			backgroundColor: 'purple'
		},
		progressBar: {
			width: '0px',
			backgroundColor: 'magenta'
		},
		isVisible: true
	},
	watch: {
		result: function(value) {
			const vm = this;
			setTimeout(function() {
				vm.value = 0;
			}, 5000);
		}
	},
	computed: {
		result: function() {
			return this.value !== 37 ? 'Not there yet' : 'Done';
		}
	},
	methods: {
		changeTitle: function(event) {
			this.title = event.target.value;
		},
		mathRandom: function() {
			return Math.random();
		},
		increase: function(step, event) {
			this.counter++;
			console.log('Event:', event);
		},
		updateCoordinate: function(event) {
			this.x = event.clientX;
			this.y = event.clientY;
		},
		alertMe: function() {
			alert('Exact Keys pressed!');
		},
		startEffect: function() {
			setInterval(() => {
				this.effect = this.effect == 'highlight' ? 'shrink' : 'highlight';
			}, 1000);
		},
		startProgress: function() {
			let width = 0;
			setInterval(() => {
				width += 20;
				this.progressBar.width = width + 'px';
			}, 500);
		}
	}
});
