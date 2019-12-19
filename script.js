new Vue({
	el: '#app',
	data: {
		title: 'Tasks and Terminal Open!!'
	},
	methods: {
		changeTitle: function(event) {
			this.title = event.target.value;
		}
	}
});
