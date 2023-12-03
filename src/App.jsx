import "./App.css";
import myImage from "./assets/tshepi.jpg";
import myLogo from "./assets/logo.png";

function App() {
	return (
		<div className="app">
			<div className="title_box">
				<img src={myImage}></img>

				<h3 className="title"> Developer </h3>
			</div>
			<p>React frontend developer</p>

			<a href="https://github.com/tshepi-tech">
				<button className="link">Github</button>
			</a>

			{/*<button className="link">Projects</button>*/}
			<div className="title_box">
				<img src={myLogo}></img>
				<h3 className="title">Content Creator</h3>
			</div>
			<p>Empowering internationals to thrive</p>
			<a href="https://careersesh.beehiiv.com">
				<button className="link">CareerSesh weekly</button>
			</a>
			<a href="https://www.linkedin.com/groups/12693673/">
				<button className="link">CareerSesh Club on LI</button>
			</a>
		</div>
	);
}
export default App;
