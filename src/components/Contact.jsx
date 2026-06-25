import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [charCount, setCharCount] = useState(0);

  const handleMessageChange = (e) => {
    setCharCount(e.target.value.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    if (!name || !email || !subject || !message) {
      alert('Please fill in all required fields before sending.');
      return;
    }

    const mailto = `mailto:yadurajsy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <p className="section-kana">Contact · Let's Connect</p>
        <motion.h2
          className="section-title"
          id="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get in <span className="accent">Touch</span>
        </motion.h2>

        <motion.div
          className="contact-split"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >

          {/* LEFT: Info Panel */}
          <div className="contact-info-panel">
            <div className="cip-badge">Available for Hire 🔥</div>
            <h3 className="cip-title">Let's Build Something<br /><span>Amazing Together</span></h3>
            <p className="cip-sub">
              I'm actively looking for <strong>internship opportunities</strong> in AI/ML engineering,
              full-stack development, or product engineering. I respond to all messages promptly.
            </p>

            <div className="cip-details">
              <div className="cip-row">
                <div className="cip-icon">✉</div>
                <div>
                  <div className="cip-label">Email</div>
                  <a href="mailto:yadurajsy@gmail.com" className="cip-val" id="email-link">yadurajsy@gmail.com</a>
                </div>
              </div>
              <div className="cip-row">
                <div className="cip-icon">📞</div>
                <div>
                  <div className="cip-label">Phone</div>
                  <div className="cip-val">+91 7880296277</div>
                </div>
              </div>
              <div className="cip-row">
                <div className="cip-icon">📍</div>
                <div>
                  <div className="cip-label">Location</div>
                  <div className="cip-val">Bilaspur, Chhattisgarh, India</div>
                </div>
              </div>
              <div className="cip-row">
                <div className="cip-icon">🎓</div>
                <div>
                  <div className="cip-label">College</div>
                  <div className="cip-val">BIT Durg, Chhattisgarh</div>
                </div>
              </div>
            </div>

            <div className="cip-socials">
              <a href="https://www.linkedin.com/in/yaduraj-singh-yadav" target="_blank" rel="noreferrer" className="cip-social" id="cip-linkedin" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/Yaduraj21" target="_blank" rel="noreferrer" className="cip-social" id="cip-github" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
              </a>
              <a href="YADURAJ_SINGH_YADAV_Resume.pdf" download className="cip-social" id="cip-resume" aria-label="Download Resume">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Resume
              </a>
            </div>
          </div>

          {/* RIGHT: Mailbox Form */}
          <div className="contact-form-panel">
            <div className="mailbox-header">
              <div className="mailbox-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="10" width="40" height="30" rx="4" fill="currentColor" opacity="0.12" />
                  <path d="M4 14l20 14 20-14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <rect x="4" y="10" width="40" height="30" rx="4" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <div className="mailbox-title">Send a Message</div>
                <div className="mailbox-sub">I'll get back to you within 24 hours</div>
              </div>
            </div>

            <form id="contact-form" className="mailbox-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cf-name" className="form-label">Full Name *</label>
                  <input type="text" id="cf-name" name="name" className="form-input" placeholder="John Doe" required autoComplete="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-email" className="form-label">Email Address *</label>
                  <input type="email" id="cf-email" name="email" className="form-input" placeholder="john@example.com" required autoComplete="email" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="cf-subject" className="form-label">Subject *</label>
                <input type="text" id="cf-subject" name="subject" className="form-input" placeholder="Internship Opportunity / Project Collaboration" required />
              </div>

              <div className="form-group">
                <label htmlFor="cf-message" className="form-label">Message *</label>
                <textarea
                  id="cf-message"
                  name="message"
                  className="form-textarea"
                  rows="5"
                  placeholder="Tell me about your project, opportunity, or just say hi! I'd love to hear from you."
                  maxLength={500}
                  onChange={handleMessageChange}
                  required
                ></textarea>
                <div className="char-count">
                  <span id="char-num" style={{ color: charCount > 400 ? (charCount === 500 ? 'var(--red, #E63A00)' : '#F59E0B') : 'inherit' }}>
                    {charCount}
                  </span> / 500
                </div>
              </div>

              <button type="submit" className="form-submit" id="btn-send-msg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send Message
              </button>
            </form>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
