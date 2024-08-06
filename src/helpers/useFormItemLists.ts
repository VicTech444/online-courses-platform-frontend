interface Props {
    labelText: string
    nameID: string
    type: string
    placeholder: string
    kind: "input" | "textarea"
    rows?: number;
    minLength: number;
    gridSpace: string;
}

export const useFormItemList = (): Props[] => {
    return [
        {
            labelText: "Email Address",
            nameID: "email",
            type: "email",
            placeholder: "Email eg: (example@gmail.com)",
            kind: "input",
            minLength: 5,
            gridSpace: 'sm:col-start-1'     
        },
        {
            labelText: "Password",
            nameID: "password",
            type: "password",
            placeholder: "eg: (ThisIsAPassword9$)",
            kind: "input",
            minLength: 6,
            gridSpace: 'sm:col-start-2'    
        },
    ]
}