import { FunctionComponent, PropsWithChildren } from "react"

/*
	Creation of a simple component with props and children
*/

type Props = PropsWithChildren<{
	start?: number
}>

export const SimpleComponentWithNoCounter: FunctionComponent<Props> = ({start = 0, children}) => {
	return <div>
		<h2>Compteur</h2>
		{children}
		<p>Numéro : {start}</p>
		<button>Incrémenter</button>
	</div>
}