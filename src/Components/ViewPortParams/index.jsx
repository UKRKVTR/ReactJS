import React, { useEffect, useState } from "react";

function ViewPortParams() {
  const [viewPortSizes, setViewPortSizes] = useState({ x: 0, y: 0 });
  function resizedView() {
    setViewPortSizes({ x: window.innerWidth, y: window.innerHeight });
  }
  useEffect(() => {
    resizedView();
  }, []);
  useEffect(() => {
    window.addEventListener("resize", resizedView);
    return () => {
      window.removeEventListener("resize", resizedView);
    };
  }, []);

  return (
    <>
      <div>Width:{viewPortSizes.x}</div>
      <div>Height:{viewPortSizes.y}</div>
    </>
  );
}

export default ViewPortParams;
