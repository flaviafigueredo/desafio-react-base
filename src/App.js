import StyledText from './components/StyledText';
import AlertButton from './components/AlertButton';
import './App.css';

function App() {
  return (
    <div className="container">
      <StyledText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium temporibus ipsam ea sequi, ab mollitia repellat ratione pariatur facilis distinctio cupiditate aspernatur quaerat. Debitis quas sunt aliquid ratione autem quod!" color="#7B68EE" textTransform="uppercase" />

      <AlertButton label="Clique aqui" />
    </div>
  );
}

export default App;
