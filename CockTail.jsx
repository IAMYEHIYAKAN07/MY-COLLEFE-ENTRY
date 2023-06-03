import React, { useEffect, useState } from "react";

function CockTail() {
 const [CockDrinks, setCockDrinks] = useState();

  function fetchDrinks() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
      .then((resp) => resp.json())
      .then((data) => setCockDrinks(data.drinks));
  }

  useEffect(() => {
    fetchDrinks();
  });

  return (
    <div className="container mt-5">
      <h1 className="mb-3"> CockTails List</h1>
      <hr />
      <div className="row my-5">
        {
            CockDrinks.map((item) => {
                const{idDrink , strDrink ,strDrinkThumb } = item;
                return (
<div className="col-md-4">
    <div className="card">
        <img src={strDrinkThumb} alt="" />
        <div className="card-body">
<h4>{strDrink }</h4>
        </div>
        <div className="card-footer">
            <button className="btn btn-primary" >View Detals</button>
        </div>
    </div>
</div>



                    )
            })
        }
      </div>
    </div>
  );
}

export default CockTail;
