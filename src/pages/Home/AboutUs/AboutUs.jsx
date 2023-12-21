import aboutImg from "../../../assets/images/home/about-us/about.jpg";

const AboutUs = () => {
  return (
    <section className="abc-container">
      <h1 className="abc-section-title">About Us</h1>

      <div className="abc-about-us-grid">
        <div>
          <img src={aboutImg} alt="About us image" />
        </div>
        <div>
          <p className="abc-about-us-text">
            ABC Restaurant is a culinary gem that delights taste buds with a
            fusion of flavors and a welcoming ambiance. Nestled in the heart of
            the city, this dining haven caters to diverse palates with its
            eclectic menu spanning international cuisines. From mouthwatering
            appetizers to decadent desserts, every dish is crafted with
            precision and passion. The restaurant's chic decor and attentive
            staff create an inviting atmosphere, perfect for intimate dinners or
            celebratory gatherings. ABC Restaurant prides itself on sourcing
            fresh, high-quality ingredients, ensuring a gastronomic experience
            that lingers in the memory. It's a culinary destination that
            elevates dining to an art form.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
