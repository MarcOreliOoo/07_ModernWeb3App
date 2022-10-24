import { ComponentType, Dispatch, forwardRef, FunctionComponent, MouseEvent, PropsWithChildren, ReactNode, RefObject, useRef, useState } from "react"

// ReactNode = noeud react = return d'une fnction
// JSX.InstrinsicElements = tous les éléments de base HTML
// ComponentType = éléments component défini par le user
type Props = PropsWithChildren<{
	start?: number,
	title?: ReactNode,
	titleTag?: keyof JSX.IntrinsicElements | ComponentType<PropsWithChildren>
}>

//Attention ordre inverse d'abord la ref est typée et ensuite les props vs les parametres ds la fonction
export const CounterWithForwardRef = forwardRef<HTMLButtonElement, Props>(({start = 0, children, title = 'Compteur', titleTag: Title = 'h1'}, ref) => {
	const [n, setN] = useState(start);
	const incr = () => setN(n=> n+1);

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

CounterWithForwardRef.displayName='Counter';

export function Title ({children} : PropsWithChildren) {
	return <h1>{children}</h1>
}