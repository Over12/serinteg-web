import { useState, useEffect } from 'react';

export function useNotification() {
  const [notification, setNotification] = useState({
    isOpen: false,
    message: '',
    status: '',
  });

  useEffect(() => {
    if (notification.isOpen) {
      const timer = setTimeout(() => {
        setNotification({
          isOpen: false,
          message: '',
          status: '',
        });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return [notification, setNotification];
}