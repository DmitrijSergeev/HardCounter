import React from 'react';
import './styles/App.css';
import {Counter} from "./components/counter/Counter.tsx";

function App() {
    return (
        <div className="wrapper">
            <Counter id={1} min={5} max={12} />
        </div>
    );
}

export default App;
