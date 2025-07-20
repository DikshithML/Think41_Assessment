import React from 'react';

const Slot = ({ time, isBooked, onClick }) => {
    return (
        <button
            style={{
                margin: '5px',
                padding: '10px 20px',
                backgroundColor: isBooked ? '#ccc' : '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: isBooked ? 'not-allowed' : 'pointer'
            }}
            disabled={isBooked}
            onClick={onClick}
        >
            {time} {isBooked ? '(Booked)' : ''}
        </button>
    );
};

export default Slot;
