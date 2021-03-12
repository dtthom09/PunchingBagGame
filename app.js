new Vue({
	el:'#vue-app',
	data: {
		health: 100,
		gameOver : false,
	},
	methods: {
		punch() {
			this.health-=20
			if(this.health<=0)
				this.gameOver=true
		},
		restart() {
			this.health = 100,
			this.gameOver = false

		},
	},
	computed: {
			//bagBurst() {
					//if(this.gameOver=true)
						
			//},
	}
})