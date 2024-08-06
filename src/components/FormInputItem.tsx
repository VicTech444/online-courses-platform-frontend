interface Props {
  labelText: string;
  nameID: string;
  type?: string;
  placeholder: string;
  kind: "input" | "textarea";
  rows?: number;
  minLength: number;
  gridSpace: string;
  rememberMe: boolean;
}

export const FormInputItem = (props: Props) => {
  let {
    labelText,
    nameID,
    type,
    placeholder,
    kind,
    rows,
    minLength,
    gridSpace,
    rememberMe,
  } = props;

  return (
    <div
      className={`flex flex-col gap-y-2 ${gridSpace}`}
      itemProp="object"
      itemScope
      itemType="https://schema.org/PropertyValue"
    >
      <label htmlFor={nameID} className="text-base font-bold text-white">
        {labelText}
      </label>
      {kind === "input" ? (
        <input
          id={nameID}
          type={type}
          name={nameID}
          placeholder={placeholder}
          required
          minLength={minLength}
          maxLength={30}
          autoComplete={rememberMe ? 'on' : 'off'}
          className="rounded-md border border-[#5b09ff] border-opacity-40 bg-black px-6 py-4 text-base font-light text-white outline-none sm:text-lg"
        />
      ) : (
        <textarea
          id={nameID}
          name={nameID}
          placeholder={placeholder}
          required
          minLength={minLength}
          rows={rows}
          className="resize-none rounded-md border border-[#5b09ff] border-opacity-40 bg-black px-6 py-4 text-base font-light text-white outline-none sm:text-lg"
        />
      )}
    </div>
  );
};
