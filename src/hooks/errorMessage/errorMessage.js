//gestione errori molto semplice e minima
import { useState, useCallback } from 'react';

export const useErrorMessage = () => {
  const [error, setError] = useState(null);

  // Mostra l'errore
  const showError = useCallback((message) => {
    setError(message);
  }, []);

  // Chiudi l'errore
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    error,
    showError,
    clearError
  };
};