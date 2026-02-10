import { useState } from 'react';

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const validateEmail = (email) => {
    return email.includes('@') && email.trim().length > 0;
  };

  const validateRequired = (value) => {
    return value.trim().length > 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Rimuovi errore quando l'utente inizia a scrivere
    if (name === 'name' && validateRequired(value)) {
      setErrors(prev => ({ ...prev, name: false }));
    }
    if (name === 'email' && validateEmail(value)) {
      setErrors(prev => ({ ...prev, email: false }));
    }
    if (name === 'message' && validateRequired(value)) {
      setErrors(prev => ({ ...prev, message: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = { name: false, email: false, message: false };

    // Validazione Nome
    if (!validateRequired(formData.name)) {
      newErrors.name = true;
      isValid = false;
    }

    // Validazione Email
    if (!validateEmail(formData.email)) {
      newErrors.email = true;
      isValid = false;
    }

    // Validazione Messaggio
    if (!validateRequired(formData.message)) {
      newErrors.message = true;
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      // TODO: Integrare EmailJS qui
      console.log('Form submitted:', formData);
      
      setShowSuccess(true);
      
      // Reset del form dopo 2 secondi
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setShowSuccess(false);
      }, 2000);
    }
  };

  return {
    formData,
    errors,
    showSuccess,
    handleChange,
    handleSubmit
  };
};