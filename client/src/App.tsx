import { PropsWithChildren } from "react";
import { Navbar, Footer, Services, Transactions, Welcome } from "./components";
import { CounterProvider } from "./learning/CounterProvider";
import { CounterUsingContext } from "./learning/CounterUsingContext";
import { CounterWithForwardRef, Title } from "./learning/CounterWithForwardRef";
import { CounterWithHooksNoRef, CounterWithHooksRef } from "./learning/CounterWithHooks";
import { SimpleComponentWithNoCounter } from "./learning/SimpleComponentWithNoCounter";

let App = () => {
	return(
		<div className="min-h-screen">
			<div className="gradient-bg-welcome">
				<Navbar />
				<Welcome />
			</div>
			<Services />
			<Transactions />
			<Footer />

			<div className="bg-black">_</div>
			<SimpleComponentWithNoCounter>
				Simple component like a counter with no function
			</SimpleComponentWithNoCounter>

			<div className="bg-black">_</div>
			<CounterWithHooksNoRef>
				Counter with hooks without any ref
			</CounterWithHooksNoRef>

			<div className="bg-black">_</div>
			<CounterWithHooksRef>
				Counter with hooks with ref
			</CounterWithHooksRef>

			<div className="bg-black">_</div>
			<CounterWithForwardRef title={<em>Bonjour</em>} titleTag={Title}>
				Counter with hooks with forwardRef and other params like title
			</CounterWithForwardRef>

			<div className="bg-black">_</div>
			<CounterProvider start={3}>
				<CounterUsingContext title={<em>Bonjour</em>} titleTag={Title}>
					Counter with context provider
				</CounterUsingContext>
			</CounterProvider>
    	</div>
	)
}
export default App;

