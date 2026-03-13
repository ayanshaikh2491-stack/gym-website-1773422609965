const TestimonialsSection: React.FC<{ children: any }> = ({ children }) => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Members Say</h2>
        <div className="testimonial">
          <p>
            "I've never felt more confident and fit in my life! The trainers at
            Gym Website are top-notch and the facilities are always clean and
            well-maintained."
          </p>
          <span>John Doe, Member since 2020</span>
        </div>
        <div className="testimonial">
          <p>
            "I was skeptical at first, but the results I've seen in just a few
            weeks are incredible! The staff is friendly and supportive, and the
            atmosphere is always energetic and motivating."
          </p>
          <span>Jane Doe, Member since 2021</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;