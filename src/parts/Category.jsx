import React from 'react'
// import {Fade} from 'react-reveal'

export default function Category(props) {
	const categories = props.dataCategories;

  return (
		<div className="">
			{
				categories.map(category =>
					<div key={category._id} className="">
						<h1>{category.name}</h1>
						<ul>
							{
								category.items.map( item =>
									<li key={item._id}>{item.name}</li>
								)
							}
						</ul>
					</div>	
				)
			}
		</div>
  )
}
