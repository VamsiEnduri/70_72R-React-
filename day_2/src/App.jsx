import Navbar from "./Navbar"
import About from "./About/About"
import Contact from "./Contact/Contact";
function App() {
  let name="vamsi"
  return (
    <div>
      <Navbar />
      <About data={name}/>
      <Contact />
    </div>
  );
}
{/* <input type="text"/> */}
export default App;
