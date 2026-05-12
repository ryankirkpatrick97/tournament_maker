import React from 'react';
import './styles/app.css';
import Scheduler from './components/Scheduler';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Coed Volleyball Mixer Scheduler</h1>
            <Scheduler />
        </div>
    );
};

export default App;