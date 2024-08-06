export const validateFormInputs = (Divs: HTMLCollection): boolean | string => {
    let phoneExp = /^[\s\d()+-]+$/;
    let emailExp = /.+@...+.com\b/

    let newDivs = [...Divs] as unknown as HTMLDivElement[];
    console.log(newDivs)
    if (!newDivs) return ('no input found')
    newDivs.pop()

    for(let i = 0; i < newDivs.length; i++){
        let input = newDivs[i].children[1] as HTMLInputElement

        if (input.hasAttribute('minLength') && input.value.length < input.minLength) {
            return (`min characters must be ${input.minLength} at the ${input.name} Field`)
        }
        else if (input.hasAttribute('maxLength') && input.value.length > input.maxLength) {
            return (`max characters must be ${input.maxLength} at the ${input.name} Field`)
        }
        else if (input.getAttribute('type') === "tel" && !phoneExp.test(input.value)) {
            return ('There cannot be a letter at the phone field')
        }
        else if (input.getAttribute('type') === 'email' && !emailExp.test(input.value)) {
            return ('Please provide a correct email: (eg: example@gmail.com)')
        }
    }

    return (true)
}
