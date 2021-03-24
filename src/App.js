
import {Header, Introduction, Contact, Photos, Footer} from './Components/';

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', height:'100%'}}>
      <Header />
      <Introduction />
      <Photos /> 
      <Contact />
      <Footer />
        
    </div>
  );
}

export default App;
