import { FC, ReactElement } from "react";

interface Props {
  amountOfDots: number;
  className?: string;
}

export const DecorationPoints: FC<Props> = ({
  amountOfDots,
  className = "h-4 w-4",
}) => {
  let dots: ReactElement[] = [];
  for (let i = 0; i < amountOfDots; i++) {
    dots.push(
      <div
        className={`rounded-full bg-white text-white ${className}`}
        key={i}
      ></div>,
    );
  }
  return <div className="flex gap-x-2">{dots.map((dot) => dot)}</div>;
};
