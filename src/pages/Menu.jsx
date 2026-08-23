import menuData from "../data/menuData";
import MenuItem from "../components/MenuItem";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OrderOptions from "../components/OrderOptions";

function Menu() {
  return (


<>
<Navbar />



    <main>
      {/*the menu header section .  */}
      <section className="menu-header">
        <div className="container">
          <p>Steamboat Bill's</p>

          <h1>Menu</h1>

          <p>
            Explore our selection of seafood,
            Cajun favorites, po-boys, sides,
            and more.
          </p>
        </div>
      </section>


      <section className="menu-navigation">
  <div className="container menu-navigation-inner">

    {menuData.map((category) => (
      <a
        key={category.id}
        href={`#${category.id}`}
      >
        {category.title}
      </a>
    ))}

  </div>
</section>
<OrderOptions />

{/* The0 menu content actually starts  here  */}
      <section className="menu-content">
        <div className="container">


{/* Here i have a map that goes thru each menu catergory and look gor the id */}
          {menuData.map((category) => (
            <section
  className="menu-category"
  key={category.id}
>
  <h2>{category.title}</h2>

  <img
    src={category.image}
    alt={category.title}
    className="menu-category-image"
  />
              <div className="menu-items">
                {category.items.map((item) => (
                  <MenuItem
                    key={item.name}
                    item={item}
                  />
                ))}
              </div>
            </section>
          ))}

        </div>


   
      </section>
    </main>
<Footer />

</>
    
  );
}

export default Menu;