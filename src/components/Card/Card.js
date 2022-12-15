import "./Card.css";

function Card({ data }) {
  return (
    <>
      {data.products.map((elem) => {
        return (
          <div>
            <div id="container">
              <div class="product-details">
                <h1>{elem.title}</h1>
                <span class="hint-star star">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                </span>

                <p class="information">{elem.description}</p>
              </div>

              <div class="product-image">
                <img src={elem.thumbnail} alt="" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
