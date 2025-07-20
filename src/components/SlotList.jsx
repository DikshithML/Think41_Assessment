import React, { useState, useEffect } from 'react';
import Slot from './Slot';

const generateSlots = (start = 9, end = 17) => {
    const slots = [];
    for (let hour = start; hour < end; hour++) {
        slots.push(`${hour}:00 AM`);
        slots.push(`${hour}:30 AM`);
    }
    slots[slots.length - 1] = `${end}:00 PM`;
    return slots;
};

const SlotList = ({ selectedDate }) => {
    const slots = generateSlots();
    const [bookedSlots, setBookedSlots] = useState([]);
    const [confirmationMessage, setConfirmationMessage] = useState('');

    // Reset slots and clear messages on date change
    useEffect(() => {
        setBookedSlots([]);
        setConfirmationMessage('');
    }, [selectedDate]);

    const handleSlotClick = (time) => {
        if (!bookedSlots.includes(time)) {
            setBookedSlots([...bookedSlots, time]);
            setConfirmationMessage(`Appointment booked for ${time}`);

            // Clear confirmation after 3 seconds
            setTimeout(() => {
                setConfirmationMessage('');
            }, 3000);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Available Slots for {selectedDate}</h2>

            {confirmationMessage && (
                <div style={{
                    marginBottom: '10px',
                    padding: '8px',
                    backgroundColor: '#d4edda',
                    color: '#155724',
                    border: '1px solid #c3e6cb',
                    borderRadius: '4px',
                    display: 'inline-block'
                }}>
                    {confirmationMessage}
                </div>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {slots.map((time) => (
                    <Slot
                        key={time}
                        time={time}
                        isBooked={bookedSlots.includes(time)}
                        onClick={() => handleSlotClick(time)}
                    />
                ))}
            </div>
        </div>
    );
};

export default SlotList;
