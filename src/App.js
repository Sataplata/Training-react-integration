
import {Header, Introduction, Contact, Photos, Footer} from './Components/';

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', height:'100%'}}>
      <Header />
        <div style={{marginRight: '5%', marginLeft:'5%'}}>
        <Introduction />
        <Photos /> 
        <Contact />
        <Footer />
        </div>
        
    </div>
  );
}

export default App;
