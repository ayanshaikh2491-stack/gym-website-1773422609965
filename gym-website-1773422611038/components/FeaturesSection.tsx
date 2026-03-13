const FeaturesSection: React.FC<{ children: any }> = ({ children }) => {
  return (
    <section className="features">
      <div className="container">
        <h2>Our Features</h2>
        <ul>
          <li>
            <i className="fa fa-dumbbell" />
            <p>State-of-the-art equipment</p>
          </li>
          <li>
            <i className="fa fa-trophy" />
            <p>Personalized training programs</p>
          </li>
          <li>
            <i className="fa fa-graduation-cap" />
            <p>Certified trainers and coaches</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;