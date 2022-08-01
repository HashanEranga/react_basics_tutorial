import Backdrop from "./Components/Backdrop";
import Modal from "./Components/Modal";
import Todo from "./Components/Todo";

function App() {
  return (
      <div>
        <h1>To Do Application</h1>
        <Todo title="Learn ReactJS"/>
        <Todo title="Learn NodeJs"/>
        <Todo title="Learn NextJS"/>
        <Modal/>
        <Backdrop/>
      </div>
  );
}

export default App;
