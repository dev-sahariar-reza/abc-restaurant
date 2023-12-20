import categoryImg1 from "../../../assets/images/home/home-categories/slide1.jpg";
import categoryImg2 from "../../../assets/images/home/home-categories/slide2.jpg";
import categoryImg3 from "../../../assets/images/home/home-categories/slide3.jpg";
import categoryImg4 from "../../../assets/images/home/home-categories/slide4.jpg";
import categoryImg5 from "../../../assets/images/home/home-categories/slide5.jpg";

const Categories = () => {
  return (
    <section className="abc-container">
      <h1 className="abc-section-title">Food Categories</h1>

      <div className="abc-home-categories-grid">
        <div className="abc-home-categories-image-box">
          <img src={categoryImg1} alt="home category image 1" loading="lazy" />
          <p className="abc-home-categories-image-text">Salad</p>
        </div>
        <div className="abc-home-categories-image-box">
          <img src={categoryImg2} alt="home category image 2" loading="lazy" />
          <p className="abc-home-categories-image-text">Pizza</p>
        </div>
        <div className="abc-home-categories-image-box">
          <img src={categoryImg3} alt="home category image 3" loading="lazy" />
          <p className="abc-home-categories-image-text">Soup</p>
        </div>
        <div className="abc-home-categories-image-box">
          <img src={categoryImg4} alt="home category image 4" loading="lazy" />
          <p className="abc-home-categories-image-text">Dessert</p>
        </div>
        <div className="abc-home-categories-image-box">
          <img src={categoryImg5} alt="home category image 5" loading="lazy" />
          <p className="abc-home-categories-image-text">Cocktail</p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
