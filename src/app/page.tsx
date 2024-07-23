import Auth from '@/components/auth'
import Logo from '@/components/logo'
import Image from 'next/image'
import Link from 'next/link'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default function Home() {
	const { userId } = auth()

	if (userId) {
		redirect('/dashboard')
	}
	return (
		<>
			<div className='flex flex-col min-h-[100dvh]'>
				<header className='px-4 mt-2 lg:px-6 h-14 flex items-center'>
					<Logo />
					<nav className='ml-auto flex gap-4 sm:gap-6'>
						<Auth />
					</nav>
				</header>
				<main className='flex-1'>
					<section className='w-full pt-12 md:pt-24 lg:pt-32'>
						<div className='container space-y-10 xl:space-y-16'>
							<div className='grid gap-4 px-4 md:grid-cols-2 md:gap-16'>
								<div>
									<h1 className='lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
										Content Generator using AI
									</h1>
								</div>
								<div className='flex flex-col items-start space-y-4'>
									<p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
										Our platform offers quick and easy tools to help you
										generate social media content, with the power of AI.
									</p>
									<Link
										href='#'
										className='inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
										prefetch={false}
									>
										Apply for a Loan
									</Link>
								</div>
							</div>
						</div>
					</section>
					<section className='w-full py-12 md:py-24 lg:py-32'>
						<div className='container px-4 md:px-6'>
							<div className='grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]'>
								<div className='flex flex-col justify-center space-y-4'>
									<div className='space-y-2'>
										<div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>
											Key Benefits
										</div>
										<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
											Why Choose Our Lending Service?
										</h2>
										<p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
											Our lending platform offers a range of benefits to help
											you get the funds you need quickly and easily.
										</p>
									</div>
									<ul className='grid gap-2 py-4'>
										<li>Fast and easy application process</li>
										<li>Competitive interest rates</li>
										<li>Flexible repayment options</li>
										<li>Personalized support from our team</li>
									</ul>
								</div>
							</div>
						</div>
					</section>
					<section className='w-full py-12 md:py-24 lg:py-32'>
						<div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
									Ready to Get Started?
								</h2>
								<p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Apply for a loan today and get the funds you need to achieve
									your goals.
								</p>
							</div>
							<div className='flex flex-col gap-2 min-[400px]:flex-row lg:justify-end'>
								<Link
									href='#'
									className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
									prefetch={false}
								>
									Apply for a Loan
								</Link>
							</div>
						</div>
					</section>
				</main>
				<footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
					<p className='text-xs text-muted-foreground'>
						&copy; 2024 Acme Lending. All rights reserved.
					</p>
					<nav className='sm:ml-auto flex gap-4 sm:gap-6'>
						<Link
							href='#'
							className='text-xs hover:underline underline-offset-4'
							prefetch={false}
						>
							Terms of Service
						</Link>
						<Link
							href='#'
							className='text-xs hover:underline underline-offset-4'
							prefetch={false}
						>
							Privacy
						</Link>
					</nav>
				</footer>
			</div>
		</>
	)
}
