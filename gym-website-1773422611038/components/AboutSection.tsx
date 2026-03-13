const AboutSection: React.FC<{ children: any }> = ({ children }) => {
  return (
    <section className="about">
      <div className="container">
        <h2>About Us</h2>
        <p>
          Welcome to Gym Website, your premier fitness destination. Our
          experienced trainers and state-of-the-art equipment will help you
          achieve your fitness goals.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;