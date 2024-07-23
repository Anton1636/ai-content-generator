'use client'
import Search from '@/components/Search'
import TemplateList from '@/components/template-list'
import React, { useState } from 'react'

const Dashboard = () => {
	const [searchInput, setSearchInput] = useState<string>()
	return (
		<div>
			<Search onSearchInput={setSearchInput} />
			<TemplateList searchInput={searchInput as string} />
		</div>
	)
}

export default Dashboard
