const Card = ({
    name,
    cuisines,
    costForTwo,
    areaName,
    cloudinaryImageId,
    avgRating,
}) => {
    return (
        <div className="Card-Container">
            <div className="image2">
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt={name} />
            </div>
            <div className="card-details">
                <p className="restaurantname">{name}</p>
                <div className="side">
                    <p className="item">{cuisines.join(", ")}</p>
                    <p className="offer">{costForTwo}</p>
                    <p className="time">{areaName}</p>
                    <p className="rating">{avgRating}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
