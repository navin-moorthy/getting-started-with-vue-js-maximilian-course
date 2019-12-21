new Vue({
	el: '#app',
	data: {
		title: 'Start Typing!!',
		link: 'https://www.google.com/',
		friendlyLink: '<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Google</a>'
	},
	methods: {
		changeTitle: function(event) {
			this.title = event.target.value;
		}
	}
});
