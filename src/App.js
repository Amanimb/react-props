import Image from './profile/Image';
import Profile from './profile/Profile';
import Alert from './profile/Alert';
import Profession from './profile/Profession';
import './App.css';

function App() {
  return (
    <div className="App">
    <Profile fullName='Amani Mbarki' bio='ldùld'/>
    <Image></Image>
    <Alert/>
    <Profession profession='developper'/>
    </div>
  );
}

export default App;
