import { ComponentType, Dispatch, forwardRef, FunctionComponent, MouseEvent, PropsWithChildren, ReactNode, RefObject, useRef, useState } from "react"
import { useCounter } from "./CounterProvider"

type Props = PropsWithChildren<{
	start?: number,
	title?: ReactNode,
	titleTag?: keyof JSX.IntrinsicElements | ComponentType<PropsWithChildren>
}>

//WELCOME
export const CounterUsingContext = forwardRef<HTMLButtonElement, Props>(({start = 0, children, title = 'Compteur', titleTag: Title = 'h1'}, ref) => {
	
	const {n,incr} = useCounter();

	return <div>
		<Title>{title}</Title>
		{children}
		<p>Numéro : {n}</p>
		<button ref={ref} type="button" onClick={incr} className="flex flex-row justify-center items-center my-2 bg-[#2952e3] rounded-full p-1 cursor-pointer hover:bg-[#2546bd]">
			<p className="text-white text-base font-semibold">
				Incrémenter
			</p>
		</button>
	</div>
})

CounterUsingContext.displayName='Counter';

export function Title ({children} : PropsWithChildren) {
	return <h1>{children}</h1>
}