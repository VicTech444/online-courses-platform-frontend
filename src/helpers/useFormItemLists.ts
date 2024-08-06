import { FormInputProps } from "@/interfaces/interfaces"

export const useFormItemList = (): FormInputProps[] => {
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