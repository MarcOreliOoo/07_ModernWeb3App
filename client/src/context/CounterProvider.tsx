import { createContext, FunctionComponent, PropsWithChildren, useCallback, useContext, useState } from "react";

type ContextProps = {
	n: number,
	incr: () => void
}

const CounterContext = createContext<null | ContextProps>(null);

type Props = PropsWithChildren<{
	start?:number
}>;

export const CounterProvider: FunctionComponent = ({start = 0, children}: Props) => {
	const [n, setN] = useState(start);
	const incr = useCallback(() => setN(n => n+1),[]);

	return <CounterContext.Provider value={{n,incr}}>
		{children}
	</CounterContext.Provider>
}

export const useCounter = () => {
	const value = useContext(CounterContext);
	if (value === null)
		throw new Error('Vous devez entourer ce composant d\'un <CounterProvider>');
	
	return value;
}