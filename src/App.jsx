import './App.css';
import { BgBlob } from './components/bgBlur';
import {Cards} from './components/cards';
import { EventsHead } from './components/sectionHead';

function App() {

  return (
    <div className="Sections">
        <EventsHead/>
        <Cards/>
        <BgBlob/>
    </div>
  );
}

export default App;
