import { FunctionComponent } from "react";
import { CounterProvider } from "./CounterProvider";
import { CounterUsingContext } from "./CounterUsingContext";
import { CounterWithForwardRef, Title } from "./CounterWithForwardRef";
import { CounterWithHooksNoRef, CounterWithHooksRef } from "./CounterWithHooks";
import { SimpleComponentWithNoCounter } from "./SimpleComponentWithNoCounter";

const Learning:FunctionComponent = () => {
	return(
		<div>
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
	);
};

export default Learning;
			