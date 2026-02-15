import { useState } from 'react';
import emailjs from '@emailjs/browser';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
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
      setIsSubmitting(true);

      try {
        // Invia email tramite EmailJS
        await emailjs.send(
          'service_10y38ln',     // Sostituisci con il tuo Service ID
          'template_0xwh5a5',    // Sostituisci con il tuo Template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject || 'Nessun oggetto',
            message: formData.message
          },
          'f4b52kD9UEoBilrAq'      // Sostituisci con la tua Public Key
        );

        console.log('Email inviata con successo!');
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

      } catch (error) {
        console.error('Errore invio email:', error);
        alert('Errore durante l\'invio del messaggio. Riprova più tardi.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return {
    formData,
    errors,
    showSuccess,
    isSubmitting,
    handleChange,
    handleSubmit
  };
};