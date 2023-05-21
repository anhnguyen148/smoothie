import './App.css';
import MainContent from './components/MainContent/MainContent';
import SideBar from './components/SideBar/SideBar';

function App() {
    return (
        <div className="App">
            <div id="wrapper">        
                <SideBar />
                <MainContent />
            </div>
        </div>
    );
}

export default App;
