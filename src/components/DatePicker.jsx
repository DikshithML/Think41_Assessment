import React from 'react';

const DatePicker = ({ selectedDate, onChange }) => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <label>Select Date: </label>
            <input 
                type="date" 
                value={selectedDate} 
                onChange={(e) => onChange(e.target.value)} 
            />
        </div>
    );
};

export default DatePicker;
