import React, { useState } from 'react';
import DatePicker from './components/DatePicker';
import SlotList from './components/SlotList';
import './App.css';

function App() {
    const [selectedDate, setSelectedDate] = useState(() => {
        const today = new Date().toISOString().split('T')[0];
        return today;
    });

    return (
        <div className="App">
            <h1>Appointment Slot Booker</h1>
            <DatePicker selectedDate={selectedDate} onChange={setSelectedDate} />
            <SlotList selectedDate={selectedDate} />
        </div>
    );
}

export default App;
