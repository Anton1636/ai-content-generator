import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { MuseoModerno } from 'next/font/google'
import { cn } from '@/lib/utils'

const museo = MuseoModerno({
	weight: '700',
	subsets: ['latin'],
})

const Logo = () => {
	return (
		<Link href='/' className='flex flex-col items-start'>
			<Image src='/logo.svg' width={64} height={64} alt='logo' />
			<h2 className={cn(museo.className, 'text-xl')}>Magic Social</h2>
		</Link>
	)
}

export default Logo
