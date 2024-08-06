import { FC } from "react";
import { RobotImg } from "./DefaultImage";

interface Props {
  header: string;
  description?: string;
  cardLeft?: boolean;
}

export const HeroDirection: FC<Props> = ({ header, cardLeft, description }) => {
  let globalStyles = "";

  return (
    <>
      <div className="grid grid-cols-2">
        {cardLeft ? (
          <>
            <RobotImg
              height={320}
              width={568}
              className="aspect-video rounded-md"
            />
            <div className="flex justify-center flex-col gap-y-4 max-w-[500px] pl-20">
              <h2 className="max-w-[500px] text-center text-3xl font-bold">
                {header}
              </h2>
              <p className={`text-center ${globalStyles}`}>{description}</p>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center flex-col gap-y-4 pr-20">
              <h2 className="max-w-[500px] text-center text-3xl font-bold">
                {header}
              </h2>
              <p className={`text-center ${globalStyles}`}>{description}</p>
            </div>
            <RobotImg
              height={320}
              width={568}
              className="aspect-video rounded-md"
            />
          </>
        )}
      </div>
    </>
  );
};
