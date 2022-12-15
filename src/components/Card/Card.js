import "./Card.css";

function Card({ data }) {
  return (
    <>
      {data.products.map((elem) => {
        return (
          <div key={elem.id}>
            <div id="container">
              <div className="product-details">
                <h1>{elem.title}</h1>
                <span className="hint-star star">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                </span>

                <p className="information">{elem.description}</p>
              </div>

              <div className="product-image">
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
