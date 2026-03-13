const ContactSection: React.FC<{ children: any }> = ({ children }) => {
  return (
    <section className="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <button>Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;