const pageLoad = () => {
	const content = document.getElementById('content')

	// header
	const header = document.createElement('header')
	const headerContent = document.createElement('h1')
	headerContent.textContent = 'Awesome Restaurant'

	header.append(headerContent)
	content.append(header)

	// nav
	const nav = document.createElement('nav')
	nav.id = 'main'

	const menu = document.createElement('ul')

	const menuListItem1 = document.createElement('li')
	menuListItem1.className = 'logo'
	menuListItem1.innerHTML = `<a href="#">AWESOME.</a>`

	const menuListItem2 = document.createElement('li')
	menuListItem2.innerHTML = `<a href="#">Home</a>`

	const menuListItem3 = document.createElement('li')
	menuListItem3.innerHTML = `<a href="#">Menu</a>`

	const menuListItem4 = document.createElement('li')
	menuListItem4.innerHTML = `<a href="#">Contact</a>`

	menu.append(menuListItem1)
	menu.append(menuListItem2)
	menu.append(menuListItem3)
	menu.append(menuListItem4)

	nav.append(menu)

	let topOfNav = nav.offsetTop

	function fixNav() {
		if (window.scrollY >= topOfNav) {
			document.body.style.paddingTop = nav.offsetHeight + 'px'
			document.body.classList.add('fixed-nav')
		} else {
			document.body.classList.remove('fixed-nav')
			document.body.style.paddingTop = 0
		}
	}

	window.addEventListener('scroll', fixNav)
	content.append(nav)

	// site wrap
	const siteWrapDiv = document.createElement('div')
	siteWrapDiv.className = 'site-wrap'
	siteWrapDiv.innerHTML = `<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
					tempora rerum, est autem cupiditate, corporis a qui libero ipsum
					delectus quidem dolor at nulla, adipisci veniam in reiciendis aut
					asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in
					aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut,
					dignissimos.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
					tempora rerum, est autem cupiditate, corporis a qui libero ipsum
					delectus quidem dolor at nulla, adipisci veniam in reiciendis aut
					asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in
					aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut,
					dignissimos.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
					tempora rerum, est autem cupiditate, corporis a qui libero ipsum
					delectus quidem dolor at nulla, adipisci veniam in reiciendis aut
					asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in
					aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut,
					dignissimos.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
					tempora rerum, est autem cupiditate, corporis a qui libero ipsum
					delectus quidem dolor at nulla, adipisci veniam in reiciendis aut
					asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in
					aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut,
					dignissimos.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
					tempora rerum, est autem cupiditate, corporis a qui libero ipsum
					delectus quidem dolor at nulla, adipisci veniam in reiciendis aut
					asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in
					aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut,
					dignissimos.
				</p>`

	content.append(siteWrapDiv)
}

export default pageLoad
