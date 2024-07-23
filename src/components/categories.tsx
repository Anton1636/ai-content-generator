import React from 'react'
import { CategoryItem } from './categoryItem'

export interface CategoryProps {
	name: string
	value: string
}

const Categories = ({ items }: { items: CategoryProps[] }) => {
	return (
		<div className='flex gap-2 flex-wrap'>
			{items.map(category => (
				<CategoryItem
					key={category.name}
					name={category.name}
					value={category.value}
				></CategoryItem>
			))}
		</div>
	)
}

export default Categories
