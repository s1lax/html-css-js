import React, { useState } from 'react'
import { githubSVG, closeSVG } from '../../../../public/Portfolio/Svgs'
import {
	LineProjects,
	MoreAboutMe__PopUp,
} from '../../../../public/Portfolio/Containers'

export default function MoreAboutMe(props) {
	const [isShowProjects, setIsShowProjects] = useState(false)
	const techsList = [
		{
			title: 'What can I provide',
			li: [
				{
					title: 'ReactJS 310h+',
					svg: (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='32'
							height='32'
							viewBox='0 0 32 32'
						>
							<circle cx='16' cy='15.974' r='2.5' fill='#00d8ff' />
							<path
								fill='#00d8ff'
								d='M16 21.706a28.385 28.385 0 0 1-8.88-1.2a11.3 11.3 0 0 1-3.657-1.958A3.543 3.543 0 0 1 2 15.974c0-1.653 1.816-3.273 4.858-4.333A28.755 28.755 0 0 1 16 10.293a28.674 28.674 0 0 1 9.022 1.324a11.376 11.376 0 0 1 3.538 1.866A3.391 3.391 0 0 1 30 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 0 1-8.7 1.191Zm0-10.217a27.948 27.948 0 0 0-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2c0 .928 1.349 2.387 4.311 3.4A27.21 27.21 0 0 0 16 20.51a27.6 27.6 0 0 0 8.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.327 2.327 0 0 0-1.01-1.573a10.194 10.194 0 0 0-3.161-1.654A27.462 27.462 0 0 0 16 11.489Z'
							/>
							<path
								fill='#00d8ff'
								d='M10.32 28.443a2.639 2.639 0 0 1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755 28.755 0 0 1 3.4-8.593a28.676 28.676 0 0 1 5.653-7.154a11.376 11.376 0 0 1 3.384-2.133a3.391 3.391 0 0 1 2.878 0c1.489.858 1.982 3.486 1.287 6.859a28.806 28.806 0 0 1-3.316 8.133a28.385 28.385 0 0 1-5.476 7.093a11.3 11.3 0 0 1-3.523 2.189a4.926 4.926 0 0 1-1.624.307Zm1.773-14.7a27.948 27.948 0 0 0-3.26 8.219c-.553 2.915-.022 4.668.75 5.114c.8.463 2.742.024 5.1-2.036a27.209 27.209 0 0 0 5.227-6.79a27.6 27.6 0 0 0 3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327 2.327 0 0 0-1.868.089A10.194 10.194 0 0 0 17.5 6.9a27.464 27.464 0 0 0-5.4 6.849Z'
							/>
							<path
								fill='#00d8ff'
								d='M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.756 28.756 0 0 1-5.747-7.237a28.676 28.676 0 0 1-3.374-8.471a11.376 11.376 0 0 1-.158-4A3.391 3.391 0 0 1 8.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 0 1 5.39 6.934a28.384 28.384 0 0 1 3.41 8.287a11.3 11.3 0 0 1 .137 4.146a3.543 3.543 0 0 1-1.494 2.555a2.59 2.59 0 0 1-1.315.324Zm-9.58-10.2a27.949 27.949 0 0 0 5.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9c.8-.465 1.39-2.363.782-5.434A27.212 27.212 0 0 0 19.9 13.74a27.6 27.6 0 0 0-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.327 2.327 0 0 0-.855 1.662a10.194 10.194 0 0 0 .153 3.565a27.465 27.465 0 0 0 3.236 8.1Z'
							/>
						</svg>
					),
				},
			],
		},
	]
	const reactProjectsList = [
		{
			title: 'This Portfolio',
			isGH: true,
			ref: props.blockRefs[0],
			url: 'https://github.com/kennuuss/UI-UX-learning/tree/main/Projects/Portfolio',
		},
		{
			title: 'Brooklyn`s Restaurant',
			isGH: true,
			ref: props.blockRefs[2],
			url: 'https://github.com/kennuuss/UI-UX-learning/tree/main/Projects/Portfolio',
		},
	]

	const [techsState, setTechsState] = useState(techsList[0].li.map(() => false))
	const handleTechHover = (index) => {
		setTechsState((prev) => {
			const newState = [...prev]
			newState[index] = !newState[index]
			return newState
		})
	}
	return (
		<>
			{techsList.map((item, i) => (
				<div key={i} className='mb-[3rem] pc:mb-[3.2vh]'>
					<h3
						className='mb-[1.5rem] text-center text-[2rem] 
					pc:mb-[2.5vh] pc:text-[2.9vw]'
					>
						{item.title}
					</h3>
					<ul className='flex flex-col gap-[1.5rem] pc:gap-[2.5vh]'>
						{item.title === 'What can I provide'
							? item.li.map((li, index) => (
									<li
										key={index}
										className='relative flex h-max 
										flex-col items-center gap-[0.4rem] text-center text-black-2 dark:text-white-2 pc:gap-[0.65vh]'
									>
										{li.svg}
										<LineProjects
											index={index}
											techsState={techsState}
											reactProjectsList={reactProjectsList}
											setIsShowProjects={setIsShowProjects}
											isShowProjects={isShowProjects}
											handleTechHover={handleTechHover}
										/>
										<MoreAboutMe__PopUp
											isShowProjects={isShowProjects}
											setIsShowProjects={setIsShowProjects}
											reactProjectsList={reactProjectsList}
										/>
									</li>
							  ))
							: item.li.map((li) => <li className='text-center'>{li}</li>)}
					</ul>
				</div>
			))}
		</>
	)
}
