import React from "react";
import { PuffLoader } from "react-spinners";

const Loader = () => {
    const [color] = React.useState("#36A398");
  return (
    <div className="w-full h-screen fixed inset-0 flex justify-center items-center bg-white">
      <PuffLoader
        color={color}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
