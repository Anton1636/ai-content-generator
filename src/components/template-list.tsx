'use client'
import { contentTemplates } from '@/lib/content-templates'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const TemplateList = ({ searchInput }: { searchInput: string }) => {
	const [templateList, setTemplateList] = useState(contentTemplates)

	const searchParams = useSearchParams()
	const searchCategory = searchParams.get('category')

	useEffect(() => {
		if (searchCategory === 'ALL') {
			setTemplateList(contentTemplates)
		} else if (searchCategory) {
			const filterTemplates = contentTemplates.filter(
				item => item.category === searchCategory
			)
			setTemplateList(filterTemplates)
		} else {
			setTemplateList(contentTemplates)
		}
	}, [searchCategory])

	useEffect(() => {
		if (searchInput && searchInput.length > 2) {
			const filterTemplates = contentTemplates.filter(item =>
				item.name.toLowerCase().includes(searchInput.toLowerCase())
			)
		}
	}, [searchInput])

	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 mt-5'>
			{templateList.map(template => (
				<div key={template.slug}>
					<Link
						href={`/dashboard/${template.slug}`}
						className='bg-white w-full rounded-lg h-[200px] py-4 px-4 text-center justify-center flex flex-col'
					>
						<template.icon className='h-12 w-12 mx-auto'></template.icon>
						<h2 className='font-semibold mt-5'>{template.name}</h2>
					</Link>
				</div>
			))}
		</div>
	)
}

export default TemplateList
