function MenuItem({ item }) {
    return (
      <article className="menu-item">
        <div className="menu-item-info">
          <h3>{item.name}</h3>
  
          <p className="menu-item-description">{item.description}</p>
          <p className="menu-item-calories">Calories {item.calories}
</p>
        </div>
  
        <span className="menu-item-price">
          {item.price}
        </span>
      </article>
    );
  }
  
  export default MenuItem;