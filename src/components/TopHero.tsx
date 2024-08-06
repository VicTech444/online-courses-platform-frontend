import { FC } from "react";
import { RobotImg } from "./DefaultImage";
import { DecorationPoints } from "./DecorationPoints";
import { HeroDirection } from "./HeroDirection";

interface Props {
  header: string;
  description?: string;
  showDiscount?: boolean;
  cardLeft?: boolean
}

export const TopHero: FC<Props> = ({ header, description, showDiscount, cardLeft }) => {
  return (
      <section className="flex flex-col gap-y-20">
          <HeroDirection header={header} cardLeft={cardLeft} description={description}/>
        <div className={`rounded-lg ${showDiscount ? '' : 'hidden'}`}>
          <div className="flex flex-col items-center">
            <div className="max-w-[900px]">
              <div className="flex items-center justify-between rounded-t-3xl bg-[#021526] px-6 py-4">
                <DecorationPoints amountOfDots={3} />
                <h5 className="text-center text-white">Discount</h5>
              </div>
              <div className="flex flex-col gap-y-8 rounded-b-3xl bg-white px-8 py-8">
                <div className="grid grid-cols-2 gap-x-6">
                  <RobotImg
                    height={320}
                    width={500}
                    className="aspect-video rounded-md"
                  />
                  <div className="flex flex-col px-4 text-center text-black justify-center">
                    <h2 className="text-2xl font-bold">Lorem</h2>
                    <p className="mb-4 text-xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="rounded-lg bg-gray-200 bg-opacity-80 text-xl py-2">
                      <p>
                        Coupon: <label className="font-bold">Lorem Ipsum</label>
                      </p>
                      <p>
                        Launch Price:{" "}
                        <label className="font-bold">15 USD</label>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center text-black">
                  <label className="mx-auto block max-w-sm">
                    Apply only for the new course{" "}
                    <strong>
                      Lorem: Lorem ipsum dolor sit amet consectetur adipisicing
                      elit.
                    </strong>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
