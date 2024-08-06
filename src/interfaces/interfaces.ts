export interface FormInputProps {
    labelText: string
    nameID: string
    type: string
    placeholder: string
    kind: "input" | "textarea"
    rows?: number;
    minLength: number;
    gridSpace: string;
}