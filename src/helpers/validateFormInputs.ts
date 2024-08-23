export const validateFormInputs = (Divs: HTMLCollection): object | string => {
    let phoneExp = /^[\s\d()+-]+$/;
    let emailExp = /.+@...+.com\b/

    let arrDivs = Divs as unknown as Element[];
    let newDivs = [...arrDivs] as unknown as HTMLDivElement[];

    if (!newDivs) return ('no input found')
    newDivs.pop()

    let userInfo = [];

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

        userInfo.push(input.value)
    }

    return (userInfo)
}
