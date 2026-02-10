import { useEffect } from 'react';

const Popup = ({ message, onClose }) => {
  // Auto-chiusura dopo 4 secondi
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  // Non mostrare se non c'è messaggio
  if (!message) return null;

  return (
    <>
      {/* Overlay shadow */}
      <div 
        className="fixed inset-0 bg-black/50 z-100 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Popup centrato */}
      <div className="fixed inset-0 z-101 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="bg-[#090933] text-white rounded-2xl shadow-2xl w-full max-w-md p-6 pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* X rossa in alto a destra */}
          <div className="flex justify-end mb-4">
            <button 
              onClick={onClose}
              className="text-red-500 hover:text-red-600 transition-colors text-2xl font-bold leading-none"
              aria-label="Chiudi"
            >
              ✕
            </button>
          </div>

          {/* Messaggio errore */}
          <p className="text-white text-center text-base">
            {message}
          </p>
        </div>
      </div>
    </>
  );
};

export default Popup;