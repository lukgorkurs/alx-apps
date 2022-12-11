import { useState } from 'react';
import './App.css';
import PRODUCTS from './products';
import Header from './Header';

const getUniqueCategorioes = (collection) => {
  const uniqueCategories = [];

  collection.forEach(item => {
    if(!uniqueCategories.includes(item.category)) {
      uniqueCategories.push(item.category)
    }
  })

  return uniqueCategories
}

function App() {
  const [activeCheckboxes, setActiveCheckboxes] = useState([])
  const [products, setProducts] = useState(PRODUCTS);

  const handleCheckboxChange = (category) => {
    // let newActiveCheckboxes = [];

    // if(activeCheckboxes.includes(category)) {
    //   newActiveCheckboxes = activeCheckboxes.filter(checkboxCategory => {
    //     return checkboxCategory !== category
    //   })
    // } else {
    //   newActiveCheckboxes = activeCheckboxes.concat(category)
    // }

    const newActiveCheckboxes = activeCheckboxes.includes(category)
      ? activeCheckboxes.filter(checkboxCategory => checkboxCategory !== category)
      : activeCheckboxes.concat(category)


    setActiveCheckboxes(newActiveCheckboxes)
  }


  // 1. Wepnij do aplikacji routing (react-router-dom)
  // 2. Na stronie glownej wyswietlaj komponent App
  // 3. Na stronie /login wyswietlaj komopnent Login (ktory stworz)
  // 4. Na stronie /register wyswietlaj komopnent Register (ktory stworz)

  // PS. Nie musisz tworzyc kalalogow, wrzuc komponenty do src


  return (
    <>
      <Header />
      <div className="products__container">
        <h2>Product List</h2>
        <div className="products__list-container">
          <ul className="products__categories">
            {
              getUniqueCategorioes(products)
              .map(category => {
                return (
                  <li key={category}>
                    <label>
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange(category)}
                      />
                      {category}
                    </label>
                  </li>
                )
              })
            }
          </ul>
          <ul className="products__list">
            {products
              .filter(product => {
                if(activeCheckboxes.length === 0) return true;

                return activeCheckboxes.includes(product.category)
              })
              .map(product => {
                return (
                  <li key={product.id} className="products__item">
                    <img src={product.cover} alt="Product"/>
                    <small> {product.category} </small>
                    <h4>{product.name} </h4>
                    <p>{product.currency === 'USD' ? '$' : product.currency}{product.price}</p>
                  </li>
                )}
              )
            }
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
