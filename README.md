# Appointment Slot Booker

A simple React application for booking 30-minute appointment slots between 9:00 AM and 5:00 PM.  
Users can select a date, book available slots, and receive a confirmation message upon successful booking.

## 🚀 Features
- Select a date using a date picker.
- Display available time slots (30-minute intervals).
- Book slots with a single click.
- Visual feedback for booked slots.
- Confirmation message on successful booking.
- Slots reset on changing the date.

## 📂 Project Structure
```
appointment-slot-booker/
├── public/
├── src/
│   ├── components/
│   │   ├── DatePicker.jsx
│   │   ├── Slot.jsx
│   │   └── SlotList.jsx
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
├── README.md
```

## ⚙️ Installation

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-url>
cd appointment-slot-booker
```

### 2️⃣ Install Dependencies
```bash
npm install
```

## ▶️ Running the App
```bash
npm start
```
Visit: [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack
- **React**
- **JavaScript (ES6+)**
- **HTML / CSS**

## ✨ How It Works
1. **Select Date:**  
   A simple date picker allows users to pick a specific day.

2. **Book Slots:**  
   30-minute slots from 9:00 AM to 5:00 PM are displayed. Clicking a slot books it.

3. **Confirmation Message:**  
   Upon booking, a success message appears for 3 seconds.

4. **Reset on Date Change:**  
   Changing the date resets booked slots.

## 📌 Future Improvements (Optional)
- Store bookings per date (persist in localStorage or backend).
- Improve UI/UX styling with Tailwind or Material-UI.
- Add a booking summary.
- Integrate real calendar views.

## 📄 License
This project is for learning and demonstration purposes. Feel free to modify and extend it.
