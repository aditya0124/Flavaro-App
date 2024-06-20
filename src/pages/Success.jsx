import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      {/* //if loading == true we animate otherwise show the content */}
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className="text-center font-bold text-5xl mb-4">
            Order Successfull!
          </h2>
          <p className="font-normal text-3xl">
            Your Order has been Successfully Placed
          </p>
        </div>
      )}
    </div>
  );
};

export default Success;
