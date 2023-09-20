import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Hero from './components/HeroSection/Hero';
import TasksSection from './components/TasksSection/TasksSection';

function App() {
  return (
    <div className="App">
      {/* <Hero></Hero> */}
      <TasksSection></TasksSection>
    </div>
  );
}

export default App;
