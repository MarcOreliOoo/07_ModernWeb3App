import { Dispatch, FunctionComponent, MouseEvent, PropsWithChildren, RefObject, useRef, useState } from "react"

/*
	Creation of a simple counter with props and children and hooks state and ref
*/

type Props = PropsWithChildren<{
	start?: number
}>

export const CounterWithHooksNoRef: FunctionComponent<Props> = ({start = 0, children}) => {
	
	//Type générique ou pas
	// ==> Oui :
	// const [n, setN] = useState<number | undefined>(); ou const [n, setN] = useState<number>(start);
	// ==> Non : 
	const [n, setN] = useState(start);
	const incr = () => setN(n=> n+1);
	
	return <div>
		<h2>Compteur</h2>
		{children}
		<p>Numéro : {n}</p>
		<button type="button" onClick={incr} className="flex flex-row justify-center items-center my-2 bg-[#2952e3] rounded-full p-1 cursor-pointer hover:bg-[#2546bd]">
			<p className="text-white text-base font-semibold">
				Incrémenter
			</p>
		</button>
	</div>
}

export const CounterWithHooksRef: FunctionComponent<Props> = ({start = 0, children}) => {
	const [n, setN] = useState(start);
	const ref = useRef<HTMLButtonElement>(null);
	const incr = () => setN(n=> n+1);

	return <div>
		<h2>Compteur</h2>
		{children}
		<p>Numéro : {n}</p>
		<button ref={ref} type="button" onClick={incr} className="flex flex-row justify-center items-center my-2 bg-[#2952e3] rounded-full p-1 cursor-pointer hover:bg-[#2546bd]">
		{//<button ref={ref} type="button" onClick={onClick} className="flex flex-row justify-center items-center my-2 bg-[#2952e3] rounded-full p-1 cursor-pointer hover:bg-[#2546bd]">
		}
			<p className="text-white text-base font-semibold">
				Incrémenter
			</p>
		</button>
	</div>
}

/* // MouseEvent de react cf ligne button commentée
function onClick (e: MouseEvent){
	e.preventDefault();
	}
*/