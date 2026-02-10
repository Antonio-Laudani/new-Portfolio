import { useContactForm } from '../../hooks/contactForm/contactForm';
import '../../styles/contact-form/contact-form.css';
import '../../styles/glass-container/glass-container.css';

const ContactSection = () => {
  const { formData, errors, showSuccess, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="w-full max-w-2xl mx-auto rounded-2xl mt-10 pt-10">
      <div className="glass-base rounded-2xl p-4 mt-7">
        <h2 className="text-white text-center uppercase text-2xl md:text-3xl lg:text-4xl mb-8 relative z-10">
          Contattami
        </h2>

        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
          
          {/* Nome */}
          <div>
            <label htmlFor="name" className="glass-label">Nome *</label>
            <div className="glass-input-wrapper">
              <input 
                type="text" 
                id="name" 
                name="name" 
                className={`glass-input ${errors.name ? 'error' : ''}`}
                placeholder="Il tuo nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <p className={`error-message ${errors.name ? 'show' : ''}`}>
              Il nome è obbligatorio
            </p>
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
                placeholder="la-tua-email@esempio.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <p className={`error-message ${errors.email ? 'show' : ''}`}>
              Inserisci un'email valida con @
            </p>
          </div>

          {/* Oggetto */}
          <div>
            <label htmlFor="subject" className="glass-label">Oggetto</label>
            <div className="glass-input-wrapper">
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className="glass-input" 
                placeholder="Oggetto del messaggio"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Messaggio */}
          <div>
            <label htmlFor="message" className="glass-label">Messaggio *</label>
            <div className="glass-input-wrapper">
              <textarea 
                id="message" 
                name="message" 
                className={`glass-input glass-textarea ${errors.message ? 'error' : ''}`}
                placeholder="Scrivi il tuo messaggio qui..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <p className={`error-message ${errors.message ? 'show' : ''}`}>
              Il messaggio è obbligatorio
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center pt-4">
            <button type="submit" className="glass-button">
              Invia Messaggio
            </button>
          </div>

          {/* Success Message */}
          <div className={`success-message ${showSuccess ? 'show' : ''}`}>
            ✓ Messaggio inviato con successo!
          </div>

        </form>
      </div>
    </section>
  );
};

export default ContactSection;