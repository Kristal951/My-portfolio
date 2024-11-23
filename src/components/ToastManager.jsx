import React, { useState, useCallback, forwardRef, useImperativeHandle } from 'react';
import CustomToast from './CustomToast';

const ToastManager = forwardRef((props, ref) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, 3000);
  }, []);

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  useImperativeHandle(ref, () => ({ addToast }));

  return (
    <div className="fixed top-0 right-0 m-4 space-y-4 z-50">
      {toasts.map((toast) => (
        <CustomToast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
});

export default ToastManager;
