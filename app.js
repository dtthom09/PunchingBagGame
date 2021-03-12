new Vue({
	el:'#vue-app',
	data: {
		health: 100,
		gameOver : false,
		hands : false,
		selectedCursor: `url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='32px' height='32px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E %3Cpath d='M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z'/%3E %3C/svg%3E"), pointer`
	},
	methods: {
		punch() {	
			let punch = new Audio()
			punch.src = './sound/Punch.mp3'
			punch.play()
			this.health-=20	
			if(this.health<=0)
				this.gameOver=true
		},
		restart() {
			this.health = 100,
			this.gameOver = false
		},
		sound() {
			let punch = new Audio()
			punch.src = './sound/Punch.mp3'
			punch.play()
			console.log("sound")
		},
	},
	computed: {
		//if(hands=true)
		//	document.body.style.cursor = "wait"
	}
})//@mouseleave="hands = false" :class="{hand: hands}"  , hand: hands  @mouseover="!hands" 