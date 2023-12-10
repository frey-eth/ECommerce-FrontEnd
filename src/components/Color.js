import React, { useState } from "react";

const Color = (props) => {
  const { colorData, setColor } = props;
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className="d-flex flex-wrap">
      <ul className="colors ps-0 d-flex">
        {colorData &&
          colorData?.map((item, index) => {
            const isSelected = item?._id === selectedColor;
            return (
              <li
                onClick={() => {
                  setColor(item?._id);
                  setSelectedColor(item?._id);
                }}
                key={index}
                style={{
                  backgroundColor: item?.colorCode,
                  transform: isSelected ? "scale(1.5)" : "scale(1)",
                  transition: "transform 0.3s ease",
                }}
              ></li>
            );
          })}
      </ul>
    </div>
  );
};

export default Color;
