'use client'
import Editor from '@/components/editor'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contentTemplates } from '@/lib/content-templates'
import { chatSession } from '@/lib/gemini-ai'
import axios from 'axios'
import { Loader } from 'lucide-react'
import React, { useState } from 'react'

interface templateSlugProps {
	templateSlug: string
}

const TemplatePage = ({ params }: { params: templateSlugProps }) => {
	const [isLoading, setIsLoading] = useState(false)
	const [aiOutput, setAIOutput] = useState<string>('')
	const selectedTemplate = contentTemplates.find(
		item => item.slug === params.templateSlug
	)

	const generateAIContent = async (formData: FormData) => {
		setIsLoading(true)
		try {
			let dataSet = {
				title: formData.get('title'),
				description: formData.get('description'),
			}

			const selectedPrompt = selectedTemplate?.aiPrompt
			const finalAIPrompt = JSON.stringify(dataSet) + ', ' + selectedPrompt
			const result = await chatSession.sendMessage(finalAIPrompt)

			setAIOutput(result.response.text())
			const response = await axios.post('/api/', {
				title: dataSet.title,
				description: result.response.text(),
				templateUsed: selectedTemplate?.name,
			})
			setIsLoading(false)
		} catch (e) {
			console.log(e)
		}
	}

	const onSubmit = async (formData: FormData) => {
		generateAIContent(formData)
	}

	return (
		<div className='mx- py-2'>
			<div className='mt-5 py-6 px-4 bg-white rounded'>
				<h2 className='font-medium'>{selectedTemplate?.name}</h2>
			</div>

			<form action={onSubmit}>
				<div className='flex flex-col gap-4 p-5 mt-5 bg-white'>
					{selectedTemplate?.form?.map(form => (
						<div key={selectedTemplate.slug}>
							<label>{form.label}</label>
							{form.field === 'input' ? (
								<div className='mt-5'>
									<Input name='title'></Input>
								</div>
							) : (
								<div className='mt-5'>
									<Textarea name='description' />
								</div>
							)}
						</div>
					))}
				</div>
				<Button className='mt-5' type='submit'>
					{isLoading ? (
						<Loader className='animate-spin'></Loader>
					) : (
						'Generate Content'
					)}
				</Button>
			</form>
			<div className='my-10'>
				<Editor value={isLoading ? 'Generating ...' : aiOutput} />
			</div>
		</div>
	)
}

export default TemplatePage
