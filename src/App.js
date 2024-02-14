import Accordion from "./Accordion";
import { accordionData } from "./Utilities";
import './Style.css'


function App() {
  
  const items = accordionData;

  return (
   <div>
      <Accordion 
        items={items}
      />
   </div>
  );
}

export default App;
