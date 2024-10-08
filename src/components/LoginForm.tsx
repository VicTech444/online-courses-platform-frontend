import { type FormEventHandler, useState } from "react";
import { FormInputItem } from "./FormInputItem";
import { validateFormInputs } from "../helpers/validateFormInputs";
import Link from "next/link";
import { FormInputProps } from "@/interfaces/interfaces";
import { logUser } from "@/react-query/logUser";

export const LoginForm = ({FormInput}: {FormInput: FormInputProps[]}) => {
  const [rememberMe, setRememberMe] = useState(true);
  const [isError, setIsError] = useState(false);
  const [Error, setError] = useState("Unknown");

  const handleValidation: FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault();

    let userValidation = validateFormInputs(ev.currentTarget.children);
    if (typeof userValidation === "string") {
      let errorMsg = userValidation;

      setIsError(true);
      setError(errorMsg);

      setTimeout(() => {
        setIsError(false);
        setError("Unknown");
      }, 3000);
    } else if (Array.isArray(userValidation)) {
      let userInfo = userValidation;
      let [email, password] = userInfo;
      logUser({email, password})
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
          <FormInputItem {...item} rememberMe={rememberMe} key={item.nameID}/>
      ))}
      <div className="flex flex-col justify-center gap-y-2">
        <div className="flex flex-col gap-y-6">
          <div className="flex justify-between">
            <label className="text-base font-light text-red-200 outline-none sm:text-lg">
              <input
                defaultChecked
                type="checkbox"
                className=""
                onChange={(ev) => setRememberMe(ev.target.checked)}
              />{" "}
              Remember me
            </label>
            <Link
              href={"/password/new"}
              className="text-base font-light text-red-200 outline-none sm:text-lg"
            >
              Forgot your password?
            </Link>
          </div>
          <button
            type="submit"
            className="mx-auto w-max rounded-3xl border-[2px] border-black border-opacity-50 bg-neutral-300 px-6 py-2 text-base text-black transition-all duration-200 ease-linear hover:scale-105 hover:bg-neutral-400 active:scale-90 disabled:opacity-50 sm:text-lg"
            itemProp="result"
          >
            Log In
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
