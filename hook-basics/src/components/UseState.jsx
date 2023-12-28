import React, { useState, useEffect } from "react";

function UseState() {
  const [currContent, setContent] = useState(false);
  const [currLike, setLike] = useState(0);
  const [showLorem, setShowLorem] = useState(false);

  const handleContentClick = () => {
    setContent(!currContent);
    alert("Content Button Clicked!");
  };

  useEffect(() => {
    if (currContent) {
      setShowLorem(true);
    } else {
      setShowLorem(false);
    }
  }, [currContent]);

  return (
    <div>
      {showLorem && (
        <p>
          He hid under the covers hoping that nobody would notice him there. It really didn't make much sense since it would be obvious to anyone who walked into the room there was someone hiding there, but he still held out hope. He heard footsteps coming down the hall and stop in front in front of the bedroom door. He heard the squeak of the door hinges and someone opened the bedroom door. He held his breath waiting for whoever was about to discover him, but they never did.
        </p>
      )}
      <button onClick={handleContentClick}>Content</button>
      <h1>{currLike}</h1>
      <button onClick={() => setLike((prevLike) => prevLike + 1)}>Like</button>
    </div>
  );
}

export default UseState;
