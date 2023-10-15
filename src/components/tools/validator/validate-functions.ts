
interface ICheck {
  email: (input: string) => boolean,
  minInputLength: (input: string, length: number) => boolean,
  compareValues: (firstInput: string, secondInput: string) => boolean,
  noSpecialSign: (input: string) => boolean,
}

export const checkFunctions: ICheck = {
  email: (input) => input.length < 1 || /\w+@[a-zA-Z]+\.[a-zA-Z]+/g.test(input),
  minInputLength: (input, length) => input.length >= length,
  compareValues: (firstInput, secondInput) => firstInput === secondInput,
  noSpecialSign: (input) => !input.includes('::'),
}