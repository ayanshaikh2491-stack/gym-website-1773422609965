const ServicesSection: React.FC<{ children: any }> = ({ children }) => {
  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <ul>
          <li>
            <i className="fa fa-weight" />
            <p>Weightlifting</p>
          </li>
          <li>
            <i className="fa fa-heart" />
            <p>Cardio</p>
          </li>
          <li>
            <i className="fa fa-male" />
            <p>Group Fitness</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;