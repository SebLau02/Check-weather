const particleGenerator = (state, options, width) => {
	let left = 0;
	let delay = 0;
	let duration = 0;
	let totalCasualParticle = [];

	for (let i = 0; i < 60; i++) {
		left = Math.random() * 90;
		delay = Math.floor(Math.random() * 5);
		duration =
			Math.random() * (options.maxDuration - options.minDuration) +
			options.minDuration;

		totalCasualParticle.push({ left, delay, duration, width });
	}

	state(totalCasualParticle);
};

export default particleGenerator;
