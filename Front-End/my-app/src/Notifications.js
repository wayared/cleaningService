import React, { useState, useEffect } from 'react';

function Notification({ message, type }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
            }, 3000);  // Hide the notification after 3 seconds
            return () => clearTimeout(timer);
        }
    }, [message]);

    if (!visible) return null;

    return (
        <div id="notification" style={{ position: 'fixed', top: 0, width: '100%', textAlign: 'center', zIndex: 1050 }}>
            <div className={`alert ${type === 'success' ? 'alert-success' : 'alert-danger'}`} style={{ display: 'block' }}>
                {message}
            </div>
        </div>
    );
}

export default Notification;
