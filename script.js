new Vue({
	el: '#app',
	data: {
		title: 'Tasks are now running in background!!'
	},
	methods: {
		changeTitle: function(event) {
			this.title = event.target.value;
		}
	}
});
