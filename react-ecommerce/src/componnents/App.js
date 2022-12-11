import Header from './Header';
import { useState, useEffect } from 'react';
import './App.css';
import PRODUCTS from './products';

function App() {

  const [SELPRODUCTS, setSELPRODUCTS] = useState([]);


  const CATEGORIES = getUniqueCategories(PRODUCTS);

  // let SELPRODUCTS = [];

  


  



  function getUniqueCategories(prod) {

    const result = [];

    prod.map(product => {       
      if (!result.includes(product.category)) {
        result.push(product.category);
      }
    })


    return result;
  }



  function addCategory(category) {

    const result = [];

    SELPRODUCTS.map(product => {             
        result.push(product);      
    })



    PRODUCTS.map(product => {       
      if (product.category===category) {
        result.push(product);
      }
    })

    return result;
  }




  function removeCategory(category) {

    const result = [];

    console.log('run')

    SELPRODUCTS.map(product => {       
      if (product.category!==category) {
        result.push(product);
      }
    })

    return result;
  }




  // console.log(getUniqueCategories(PRODUCTS));


  
  const handleCheckBoxClick= (event) => {   
    
    //  event.preventDefault();      

    console.log(SELPRODUCTS);

    if (event.target.checked) {
          setSELPRODUCTS(addCategory(event.target.id));
    }
    

    if (!event.target.checked) {
        setSELPRODUCTS(removeCategory(event.target.id));
    }
    


    // console.log(event.target.id);
    // console.log(event.target.checked);

    console.log(SELPRODUCTS);

  }  



  return (

    <div className="main">
      
      <Header />
      
      <div className="checkList">
      <ul>
          {CATEGORIES.map(data => { 

                return  (                 

                    <li><label><input type="checkbox" id={data} onClick={handleCheckBoxClick}></input>{data}</label></li>
                 
                )
              })}
      </ul>
      </div>
            
     

      <div className="products">
        <h2>Product list</h2>
        <ul>            
          {SELPRODUCTS.map(product => { 
            return <li className="productLi" key={product.id}>
                  <p className="image" ><img src={product.cover}/> 
                  
                    <div className="addToCart">ADD TO CART</div>
                  </p>
                  <span className="category">{product.category}</span>
                  <h4>{product.name}</h4>
                  <span className="priceP"><span className="price">{product.price}</span>{product.currency}</span>
              </li> 

            })}

        </ul>
      </div> 
      <div className="left">

      </div>
    </div>
  );

}

export default App;


// id: 3,
//       name: 'Main',
//       price: 6.44,
//       currency: 'USD',
//       category: 'People',
//       isBestseller: false,
//       cover:
