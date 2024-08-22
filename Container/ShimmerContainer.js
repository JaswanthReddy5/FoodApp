// ShimmerContainer.js
import Shimmer from "./Shimmer";

const ShimmerContainer = () => {
  return (
    <div className="shimmer-display">
      {Array(9).fill(<Shimmer />)}
    </div>
    
  );
};

export default ShimmerContainer;
