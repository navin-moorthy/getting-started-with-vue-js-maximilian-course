new Vue({
	el: '#app',
	data: {
		title: 'Start Typing!!',
		link: 'https://www.google.com/'
	},
	methods: {
		changeTitle: function(event) {
			this.title = event.target.value;
		}
	}
});
