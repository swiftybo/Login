export function isNotEmpty(userInput) {
  return userInput.trim().length > 0;
}

export function isEmail(userInput) {
  return userInput.includes("@");
}
