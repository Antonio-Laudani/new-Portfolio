import { useContactForm } from '../../hooks/contactForm/contactForm';
import '../../styles/contact-form/contact-form.css';
import '../../styles/glass-container/glass-container.css';
import { useState } from 'react';

const ContactSection = () => {
  const { formData, errors, showSuccess, isSubmitting, handleChange, handleSubmit: hookSubmit } = useContactForm();
  const [consent, setConsent] = useState(false); // ✅ GDPR consent
  const [gdprError, setGdprError] = useState(false);

  // wrapper handleSubmit per bloccare invio senza consenso
  const handleSubmit = (e) => {
  e.preventDefault();

  if (!consent) {
    setGdprError(true);

    setTimeout(() => setGdprError(false), 2500);
    return;
  }

  hookSubmit(e);
};

  return (
    <section id="contact" className="w-full max-w-2xl mx-auto rounded-2xl mt-10 pt-10">
      <div className="glass-base rounded-2xl p-4 mt-7">
        <h2 className="text-white text-center font-bold uppercase text-2xl md:text-3xl lg:text-4xl mb-8 relative z-3">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="relative z-10 space-y-6 font-semibold">
          
          {/* Nome */}
          <div>
            <label htmlFor="name" className="glass-label">Name *</label>
            <div className="glass-input-wrapper">
              <input 
                type="text" 
                id="name" 
                name="name" 
                className={`glass-input ${errors.name ? 'error' : ''}`}
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
            </div>
            <p className={`error-message ${errors.name ? 'show' : ''}`}>Name is required</p>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="glass-label">Email *</label>
            <div className="glass-input-wrapper">
              <input 
                type="email" 
                id="email" 
                name="email" 
                className={`glass-input ${errors.email ? 'error' : ''}`}
                placeholder="your-email@example.com"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
            </div>
            <p className={`error-message ${errors.email ? 'show' : ''}`}>Please enter a valid email address with @</p>
          </div>

          {/* Oggetto */}
          <div>
            <label htmlFor="subject" className="glass-label">Subject</label>
            <div className="glass-input-wrapper">
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className="glass-input" 
                placeholder="Oggetto del messaggio"
                value={formData.subject}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Messaggio */}
          <div>
            <label htmlFor="message" className="glass-label">Message *</label>
            <div className="glass-input-wrapper">
              <textarea 
                id="message" 
                name="message" 
                className={`glass-input glass-textarea ${errors.message ? 'error' : ''}`}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              ></textarea>
            </div>
            <p className={`error-message ${errors.message ? 'show' : ''}`}>Message is required</p>
          </div>


          {/* GDPR CHECKBOX */}
<div>
  <div className="flex items-start gap-2 text-sm text-white">
    <input
      id='privacy'
      type="checkbox"
      name="privacy"
      checked={consent}
      onChange={(e) => setConsent(e.target.checked)}
      className="mt-1 accent-white"
    />
    <label htmlFor="privacy" className="cursor-pointer select-none">
      Accetto la{" "}
      <a
        href="https://www.iubenda.com/privacy-policy/23324822"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Privacy Policy
      </a>
    </label>
  </div>
  {gdprError && (
    <p className="text-red-400 text-sm mt-2">
      You must accept the Privacy Policy to send the message.
    </p>
  )}
</div>

          

          {/* Button */}
          <div className="flex justify-center pt-4">
            <button 
              type="submit" 
              className="glass-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {/* Success Message */}
          <div className={`success-message ${showSuccess ? 'show' : ''}`}>
            ✓ Message sent successfully!
          </div>

        </form>
      </div>
    </section>
  );
};

export default ContactSection;