function menuTab() {
	const menu = {
		render() {
			const tabs = document.querySelectorAll('.menu__nav__tab');
			const content = document.querySelectorAll('.menu__container');

			for (let i = 0; i < tabs.length; i++) {
				tabs[i].addEventListener('click', (e) => {
					e.preventDefault();
					const tabAttr = e.target.getAttribute('data-tab');

					for (let el = 0; el < tabs.length; el++) {
						const contentAttr = content[el].getAttribute('data-tab-content');

						if (contentAttr === tabAttr) {
							tabs[el].classList.add('menu__nav__tab-active');
							content[el].classList.add('menu__container-active');
						} else {
							tabs[el].classList.remove('menu__nav__tab-active');
							content[el].classList.remove('menu__container-active');
						}
					}
				});
			}
		},
	};

	menu.render();

	return menu;
}

const menu = menuTab();
