import React, { useState, useEffect } from 'react';
import './style.css';

function Notification({ message, type }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setVisible(true);  // Show the notification
            const timer = setTimeout(() => {
                setVisible(false);  // Hide the notification after 5 seconds
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    // Adding enter and exit animations using CSS classes
    const notificationClass = visible ? "notification-visible" : "notification-hidden";

    return (
        <div id="notification" className={`${notificationClass}`} style={{ position: 'fixed', top: 0, width: '100%', textAlign: 'center', zIndex: 1050 }}>
            <div className={`alert ${type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                {message}
            </div>
        </div>
    );
}

export default Notification;

