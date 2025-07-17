import { motion } from 'framer-motion';
import './schedule.css';
import { MdToday, MdAccessTime } from 'react-icons/md';

const schedule = [
  { day: "Monday", time: "6:00 AM - 7:30 AM", class: "Hatha Yoga" },
  { day: "Tuesday", time: "7:00 AM - 8:00 AM", class: "Vinyasa Flow" },
  { day: "Wednesday", time: "6:00 AM - 7:30 AM", class: "Hatha Yoga" },
  { day: "Thursday", time: "7:00 AM - 8:00 AM", class: "Vinyasa Flow" },
  { day: "Friday", time: "6:00 AM - 7:30 AM", class: "Hatha Yoga" },
  { day: "Saturday", time: "9:00 AM - 10:30 AM", class: "Yin Yoga" },
  { day: "Sunday", time: "Rest Day", class: "" }
];

const Schedule = () => {
  return (
    <section className="schedule" id="schedule">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Class Schedule
      </motion.h2>
      
      <div className="schedule-table">
        <div className="schedule-header">
          <div className="header-cell">Day</div>
          <div className="header-cell">Time</div>
          <div className="header-cell">Class</div>
        </div>
        
        {schedule.map((item, index) => (
          <motion.div 
            className="schedule-row"
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="schedule-cell">
              <MdToday className="schedule-icon" />
              {item.day}
            </div>
            <div className="schedule-cell">
              <MdAccessTime className="schedule-icon" />
              {item.time}
            </div>
            <div className="schedule-cell">{item.class}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;