import ColoredAndUppercaseComponent from './components/colored-and-uppercase-component/colored-and-uppercase-component';
import Button from './components/button/button';
import './App.css';

function App() {
  return (
    <div className="container">
      <ColoredAndUppercaseComponent text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium temporibus ipsam ea sequi, ab mollitia repellat ratione pariatur facilis distinctio cupiditate aspernatur quaerat. Debitis quas sunt aliquid ratione autem quod!" color="#7B68EE" textTransform="uppercase" />

      <Button label="Clique aqui" />
    </div>
  );
}

export default App;
