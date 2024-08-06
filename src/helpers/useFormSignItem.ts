import { FormInputProps } from "@/interfaces/interfaces"

export const signItemList = (): FormInputProps[] => {
    return [
        {
            labelText: "Name",
            nameID: "text",
            type: "text",
            placeholder: "You name goes here",
            kind: "input",
            minLength: 5,
            gridSpace: 'sm:col-start-1'
        }, 
        {
            labelText: "Last Name",
            nameID: "text",
            type: "text",
            placeholder: "Your last name goes here",
            kind: "input",
            minLength: 5,
            gridSpace: 'sm:col-start-2'
        }, 
        {
            labelText: "Email",
            nameID: "email",
            type: "email",
            placeholder: "eg: (FakeEmail@gmail.com)",
            kind: "input",
            minLength: 8,
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