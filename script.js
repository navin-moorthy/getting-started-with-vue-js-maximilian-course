new Vue({
	el: '#app',
	data: {
		title: 'Tasks!!'
	},
	methods: {
		changeTitle: function(event) {
			this.title = event.target.value;
		}
	}
});
