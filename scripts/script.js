function removeHighlight(e) {
	if (e.propertyName !== 'transform') return
	e.target.classList.remove('playing')
}

function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	const key = document.querySelector(`button[data-key="${e.keyCode}"]`)
	if (!audio) return

	key.classList.add('playing')
	audio.currentTime = 0
	audio.play()
	bars.animate()
}

function kitKeyClick(code) {
	playSound({
		keyCode: code
	})
}

const keys = Array.from(document.querySelectorAll('.key'))
keys.forEach(key => key.addEventListener('transitionend', removeHighlight))

window.addEventListener('keydown', playSound)

const bars = [".a", ".b", ".c", ".d", ".e", ".f", ".g", ".h", ".i", ".j"]

bars.animate = function () {
	const random = Math.floor(Math.random() * 6) + 2;
	const peak = bars[random];
	const minusOne = bars[random - 1];
	const minusTwo = bars[random - 2];
	const plusOne = bars[random + 1];
	const plusTwo = bars[random + 2];

	anime({
		targets: ".visualizerBar",
		height: ["0%", Math.random() * 5 + 2 + "%"],
		easing: "easeOutCirc",
		direction: 'alternate',
		duration: 165,
	})

	anime({
		targets: peak,
		height: ["0%", Math.random() * 20 + 65 + "%"],
		easing: "easeOutCirc",
		direction: 'alternate',
		duration: 150,
		background: ['#b1e3aa', '#aab1e3'],
	})

	anime({
		targets: [minusOne],
		height: ["0%", Math.random() * 20 + 40 + "%"],
		easing: "easeOutCirc",
		direction: 'alternate',
		duration: 155,
		background: ['#b1e3aa', '#d0d4f0'],
	})

	anime({
		targets: [plusOne],
		height: ["0%", Math.random() * 20 + 40 + "%"],
		easing: "easeOutCirc",
		direction: 'alternate',
		duration: 155,
		background: ['#b1e3aa', '#d0d4f0'],
	})

	anime({
		targets: [minusTwo],
		height: ["0%", Math.random() * 20 + 15 + "%"],
		easing: "easeOutCirc",
		direction: 'alternate',
		duration: 160,
		background: ['#b1e3aa', '#d0d4f0'],
	})

	anime({
		targets: [plusTwo],
		height: ["0%", Math.random() * 20 + 15 + "%"],
		easing: "easeOutCirc",
		direction: 'alternate',
		duration: 160,
		background: ['#b1e3aa', '#d0d4f0'],
	})
}