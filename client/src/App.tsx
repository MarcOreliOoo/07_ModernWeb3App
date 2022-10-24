import { Navbar, Footer, Services, Transactions, Welcome } from "./components";
import Learning from "./learning/Learning";


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

			<Learning />
    	</div>
	)
}
export default App;

