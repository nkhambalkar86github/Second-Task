import './App.css';
import EverythingComp from './Components/EverythingComp/EverythingComp';
import FAQComp from './Components/FAQComp/FAQComp';
import FirstComp from './Components/FirstComp/FirstComp';
import Footer from './Components/Footer/Footer';
import GetInstance from './Components/GetInstance/GetInstance';
import Header from './Components/Header/Header';
import InnovationTeam from './Components/InnovationTeam/InnovationTeam';
import InterfaceComp from './Components/InterfaceComp/InterfaceComp';
import NavigationBar from './Components/NavigationBar/NavigationBar';

function App() {
  return (
    <>
    <Header></Header>
    <NavigationBar></NavigationBar>
    <FirstComp></FirstComp>
    <InnovationTeam></InnovationTeam>
    <EverythingComp></EverythingComp>
    <InterfaceComp></InterfaceComp>
    <FAQComp></FAQComp>
    <GetInstance></GetInstance>
    <Footer></Footer>
    </>
  );
}

export default App;
