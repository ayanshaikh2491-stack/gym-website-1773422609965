import Image from 'next/image';

const HeroSection: React.FC<{ children: any }> = ({ children }) => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Welcome to Gym Website</h1>
        <p>Get fit, feel great!</p>
        <button>Join Now</button>
      </div>
      <div className="background-image">
        <Image
          src="/images/gym.jpg"
          width={1000}
          height={500}
          alt="Gym Image"
        />
      </div>
    </section>
  );
};

export default HeroSection;