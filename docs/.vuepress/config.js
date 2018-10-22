module.exports = {
	locales: {
		'/': {
			lang: 'en-US',
			title: 'VueGorgias',
			description: 'VueGorgias for Vue.js'
		}
	},
	themeConfig: {
		repo: 'chronotruck/vue-gorgias',
		docsDir: 'docs',
		locales: {
			'/': {
				label: 'English',
				selectText: 'Languages',
				editLinkText: 'Edit this page on GitHub',
				nav: [{
					text: 'Release Notes',
					link: 'https://github.com/chronotruck/vue-gorgias/releases'
				}],
				sidebar: [
					'/installation.md',
					'/started.md',
				]
			}
		}
	}
}

