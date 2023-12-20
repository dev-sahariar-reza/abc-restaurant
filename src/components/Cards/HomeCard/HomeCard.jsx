const HomeCard = ({ item }) => {
  const { _id, name, recipe, image, category, price } = item;
  return (
    <div className="card shadow-xl">
      <figure>
        <img src={image} alt="image of food" loading="lazy" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="mb-6 mt-3 text-lg font-semibold">Price: ${price}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
