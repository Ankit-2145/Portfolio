import React from "react";

interface CircleProps {
  size?: number;
  position?: string;
  className?: string;
}
interface SmallCircleProps {
  size?: number;
  position?: string;
  className?: string;
}

const Circle: React.FC<CircleProps> = ({
  position = "top-0 -inset-80",
  className = "",
}) => {
  return (
    <div
      className={`absolute ${position} w-[800px] h-[800px] rounded-full hidden border-2 -z-10 ${className}`}
    />
  );
};

const SmallerCircle: React.FC<SmallCircleProps> = ({
  position = "top-1/3 -left-60",
  className = "",
}) => {
  return (
    <div
      className={`absolute ${position} w-[500px] h-[500px] rounded-full lg:hidden border -z-10 ${className}`}
    />
  );
};

export { SmallerCircle, Circle };
