module.exports = {
	mode: "jit",
	content: ["./*.{html,js}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-image": "url('https://picsum.photos/200')",
			},
		},
	},
	plugins: [],
};
