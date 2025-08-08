export const easing = [0.22, 1, 0.36, 1];

export const animationContainer = {
	visible: {
		transition: {
			staggerChildren: 0.2,
			easing,
		},
	},
};

export const slideUp = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			delay: 0.2 * i,
			ease: easing,
		},
	}),
};

export const slideUpParagraf = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			easing,
		},
	},
};

export const slideRight = {
	hidden: {
		opacity: 0,
		x: -50,
	},
	visible: (i: number) => ({
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
			delay: 0.2 * i,
			ease: easing,
		},
	}),
};
