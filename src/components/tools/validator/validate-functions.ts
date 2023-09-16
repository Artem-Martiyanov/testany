type checkFunc = (input: string, value?: any) => boolean

interface ICheck {
  email: checkFunc,
  minInputLength: checkFunc,
  compareValues: checkFunc
}

export const checkFunctions: ICheck = {
  email: (input) => input.length < 1 || /\w*@[a-zA-Z]+\.[a-zA-Z]+/g.test(input),
  minInputLength: (input, value) => input.length >= value,
  compareValues: (firstInput, secondInput) => firstInput === secondInput
}