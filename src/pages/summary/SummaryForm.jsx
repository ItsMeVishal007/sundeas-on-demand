import React, { useState, useEffect } from "react";

const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);

   return (
    <div>
      <form>
        <input
          onChange={(event) => {
            setIsChecked(event.target.checked);
          }}
          type="checkbox"
          name="checkbox"
          checked={isChecked}

          />
          <button type="submit" disabled={!isChecked}>Place your order</button>
      </form>
    </div>
  );
};

export default SummaryForm;
