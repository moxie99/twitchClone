import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Body from "./Body";

function App() {
  return (
    <div className="App">
      <Header />
       <div className="app__main">
      <SideBar />
      <Body/>
      </div>
    </div>
  );
}

export default App;
