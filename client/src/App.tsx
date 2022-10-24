import { Navbar, Footer, Services, Transactions, Welcome } from "./components";
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
				Simple counter with hooks
			</CounterWithHooksNoRef>

			<div className="bg-black">_</div>
			<CounterWithHooksRef>
				Simple counter with hooks
			</CounterWithHooksRef>
    	</div>
	)
}
export default App;
