import React from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'

const Auth = () => {
	return (
		<div>
			<SignedOut>
				<SignInButton>
					<Button>Sign In</Button>
				</SignInButton>
				<SignedIn>
					<UserButton></UserButton>
				</SignedIn>
			</SignedOut>
		</div>
	)
}

export default Auth
