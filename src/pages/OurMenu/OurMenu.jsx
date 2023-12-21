import { Helmet } from "react-helmet";
import PageBanner from "../../components/PageBanner/PageBanner";
import ourMenuImg from "../../assets/images/our-menu/our-menu-banner.jpg";

const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>ABC Restaurant | Our Menu</title>
      </Helmet>

      <PageBanner img={ourMenuImg} title="Our Menu" />
    </div>
  );
};

export default OurMenu;
