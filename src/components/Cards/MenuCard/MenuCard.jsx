const MenuCard = ({ item }) => {
  const { _id, name, recipe, image, category, price } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
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

export default MenuCard;
