import logo from './logo.svg';
import './App.css';

import Legend from './components/legend';
import Posts from './components/posts';
import ImageForm from './components/form';
function App() {
  return (
    <div className="App">
    <main>
      <ImageForm/>
     <Legend/>
      <Posts/>
     
    </main>
    </div>
  );
}

export default App;
