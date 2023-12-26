import { Helmet } from "react-helmet";
import PageBanner from "../../components/PageBanner/PageBanner";
import MenuCard from "../../components/Cards/MenuCard/MenuCard";
import ourMenuImg from "../../assets/images/our-menu/our-menu-banner.jpg";
import saladImg from "../../assets/images/our-menu/salad-bg.jpg";
import soupImg from "../../assets/images/our-menu/soup-bg.jpg";
import dessertImg from "../../assets/images/our-menu/dessert-bg.jpeg";
import drinksImg from "../../assets/images/our-menu/drink-bg.jpg";
import { useMenu } from "../../hooks/useMenu";

const OurMenu = () => {
  const [menu] = useMenu();

  const offeredCollection = menu.filter((item) => item.category === "offered");
  const saladCollection = menu.filter((item) => item.category === "salad");
  const soupCollection = menu.filter((item) => item.category === "soup");
  const dessertCollection = menu.filter((item) => item.category === "dessert");
  const drinksCollection = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>ABC Restaurant | Our Menu</title>
      </Helmet>

      <PageBanner img={ourMenuImg} title="Our Menu" />
      <h1 className="menu-heading">Todays Offer</h1>
      <div className="menu-grid">
        {offeredCollection.map((item) => (
          <MenuCard key={item._id} item={item} />
        ))}
      </div>

      <PageBanner img={saladImg} title="Salad" />
      <div className="menu-grid">
        {saladCollection.map((item) => (
          <MenuCard key={item._id} item={item} />
        ))}
      </div>

      <div className="menu-button-box">
        <button className="menu-button">Order your favorite food</button>
      </div>

      <PageBanner img={soupImg} title="Soup" />
      <div className="menu-grid">
        {soupCollection.map((item) => (
          <MenuCard key={item._id} item={item} />
        ))}
      </div>

      <div className="menu-button-box">
        <button className="menu-button">Order your favorite food</button>
      </div>

      <PageBanner img={dessertImg} title="Dessert" />
      <div className="menu-grid">
        {dessertCollection.map((item) => (
          <MenuCard key={item._id} item={item} />
        ))}
      </div>

      <div className="menu-button-box">
        <button className="menu-button">Order your favorite food</button>
      </div>

      <PageBanner img={drinksImg} title="Cocktail" />
      <div className="menu-grid">
        {drinksCollection.map((item) => (
          <MenuCard key={item._id} item={item} />
        ))}
      </div>

      <div className="menu-button-box">
        <button className="menu-button">Order your favorite food</button>
      </div>
    </div>
  );
};

export default OurMenu;
