import React, { useState } from "react";

const rules =
  "Try to guess the pattern,in both order and color,within ten turns After submitting a row, a small red peg is placed for each code peg from the guess which is correct in both color and position.A black peg indicates the existence of a correct color code peg placed in the wrong position.More info on";
function Rules() {
  const [showRules, setShowRules] = useState(false);

  const text = () => {
    setShowRules(showRules ? false : true);
  };

  return (
    <div>
      <h2 onClick={text}>{showRules ? "Hide Rules" : "Show Rules"}</h2>
      {showRules && <p style={{ width: "27%" }}>{rules}</p>}
    </div>
  );
}

export default Rules;
