import siteContent from "../data/siteContent";

function FeaturedFood() {
  return (
    <section className="featured-food">

      <div className="container featured-food-header">
        <p>Featured</p>
        <h2>Customer Favorites</h2>
      </div>

      <div className="featured-food-grid">

        {siteContent.featuredFood.map((food) => (
          <article className="food-card" key={food.name}>

            <p className="food-card-category">
              {food.category}
            </p>

            <h3>{food.name}</h3>

            <p>{food.description}</p>

            <span className="food-card-price">
              {food.price}
            </span>

          </article>
        ))}

      </div>

    </section>
  );
}

export default FeaturedFood;