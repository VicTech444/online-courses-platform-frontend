import { type FormEventHandler, useState } from "react";
import { FormInputItem } from "./FormInputItem";
import { validateFormInputs } from "../helpers/validateFormInputs";
import Link from "next/link";
import { FormInputProps } from "@/interfaces/interfaces";

export const SignForm = ({FormInput}: {FormInput: FormInputProps[]}) => {
  const [policy, setPolicy] = useState(false);
  const [isError, setIsError] = useState(false);
  const [Error, setError] = useState("Unknown");

  const handleValidation: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();

    let isValid = validateFormInputs(ev.currentTarget.children);
    if (typeof isValid === "string") {
      let errorMsg = isValid;

      setIsError(true);
      setError(errorMsg);

      setTimeout(() => {
        setIsError(false);
        setError("Unknown");
      }, 3000);
    } else if (typeof isValid === "boolean") {

    }
  };

  return (
    <form
      onSubmit={(ev) => handleValidation(ev)}
      className="grid w-[500px] grid-cols-1 gap-x-6 gap-y-4 text-neutral-600 dark:text-neutral-400"
      itemProp="potentialAction"
      itemScope
      itemType="https://schema.org/CommunicateAction"
    >
      {FormInput.map((item) => (
        <>
          <FormInputItem {...item} key={item.nameID}/>
        </>
      ))}
      <div className="flex flex-col justify-center gap-y-2">
        <div className="flex flex-col gap-y-6">
          <div className="flex justify-between">
            <label className="text-base font-light text-white outline-none sm:text-lg">
              <input
                type="checkbox"
                className=""
                onChange={(ev) => setPolicy(ev.target.checked)}
              />{" "}
              I read and I agree with the  <Link href={'/terms/'} className="underline text-purple-500">terms of use and privacy policy</Link>
            </label>
          </div>
          <button
            type="submit"
            className="mx-auto w-max rounded-3xl border-[2px] border-black border-opacity-50 bg-neutral-300 px-6 py-2 text-base text-black transition-all duration-200 ease-linear hover:scale-105 hover:bg-neutral-400 active:scale-90 disabled:opacity-50 sm:text-lg"
            itemProp="result"
          >
            Register
          </button>
        </div>
        <div
          className={`flex self-center text-center text-red-200 ${
            isError ? "opacity-100" : "opacity-0"
          }`}
        >
          {Error}
        </div>
      </div>
    </form>
  );
};
