new Vue({
	el: '#app',
	data: {
		title: 'Start Typing!!'
	},
	methods: {
		changeTitle: function(event) {
			this.title = event.target.value;
		}
	}
});
