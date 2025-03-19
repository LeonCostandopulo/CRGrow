<<<<<<< HEAD
/* eslint-disable react/prop-types */

const ITEMS_PACK = [
	{
		id: 1,
		size:  'Carpa 100x100x200 cm',
		cooler:'4 Coolers + 3 Timers + Toberas ',
		light: 'Panel led 640W',
	},
	{
		id: 2,
		size:  'Carpa 80x80x180 cm',
		cooler:'Cooler x2 + Timers + Toberas ',
		light: 'Lámpara galponera 360W',
	},
	{
		id: 3,
		size:  'Carpa 100x100x200cm',
		cooler:'4 Cooler + 3 Timers + Toberas ',
		light: 'Lámpara Quantum 400W',
	}
]

function List({number, children}) {
	const className = `kits-item item-${number}`
	return(
		<li className={className}>{children}</li>
	)
}

export function Pack({number,children}) {
	const articleClassName = `kits-kit kit-${number}`
	const h3ClassName = `kits-kit-title kits-kit-title-${number}`
	const ulClassName = `kits-item-list kits-item-list-${number}`
	const buttonClassName = `kits-buy-button kits-buy-button-${number}`

	return(
	<article className={articleClassName}>
		<h3 className={h3ClassName}>{children}</h3>
		<ul className={ulClassName}>
			<List >{ITEMS_PACK[number-1].size}</List>
			<List >{ITEMS_PACK[number-1].cooler}</List>
			<List >{ITEMS_PACK[number-1].light}</List>
		</ul>
		<button className={buttonClassName}>Elegir Kit</button>
	</article>
	)
=======
/* eslint-disable react/prop-types */

const ITEMS_PACK = [
	{
		id: 1,
		size:  'Carpa 100x100x200 cm',
		cooler:'4 Coolers + 3 Timers + Toberas ',
		light: 'Panel led 640W',
	},
	{
		id: 2,
		size:  'Carpa 80x80x180 cm',
		cooler:'Cooler x2 + Timers + Toberas ',
		light: 'Lámpara galponera 360W',
	},
	{
		id: 3,
		size:  'Carpa 100x100x200cm',
		cooler:'4 Cooler + 3 Timers + Toberas ',
		light: 'Lámpara Quantum 400W',
	}
]

function List({number, children}) {
	const className = `kits-item item-${number}`
	return(
		<li className={className}>{children}</li>
	)
}

export function Pack({number,children}) {
	const articleClassName = `kits-kit kit-${number}`
	const h3ClassName = `kits-kit-title kits-kit-title-${number}`
	const ulClassName = `kits-item-list kits-item-list-${number}`
	const buttonClassName = `kits-buy-button kits-buy-button-${number}`

	return(
	<article className={articleClassName}>
		<h3 className={h3ClassName}>{children}</h3>
		<ul className={ulClassName}>
			<List >{ITEMS_PACK[number-1].size}</List>
			<List >{ITEMS_PACK[number-1].cooler}</List>
			<List >{ITEMS_PACK[number-1].light}</List>
		</ul>
		<button className={buttonClassName}>Elegir Kit</button>
	</article>
	)
>>>>>>> master
}