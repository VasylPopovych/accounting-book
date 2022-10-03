import Board from "./components/board/Board";
import Sidebar from "./components/sidebar/Sidebar";
import "./styles/App.scss";

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <Board />
    </div>
  );
}
export default App;
