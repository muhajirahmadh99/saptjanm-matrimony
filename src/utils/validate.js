
export const checkValidData = (name, age, dob, gender, email, password, description) => {
  const isNameValid = name.trim() !== '';
  const isAgeValid = age > 0;
  const isDobValid = dob.trim() !== '';
  const isGenderValid = gender !== '';
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isDescriptionValid = description.trim() !== '';

  if (!isNameValid) return "Invalid name";
  if (!isAgeValid) return "Invalid age";
  if (!isDobValid) return "Invalid date of birth";
  if (!isGenderValid) return "Invalid gender";
  if (!isEmailValid) return "Invalid email";
  if (!isPasswordValid) return "Invalid password";
  if (!isDescriptionValid) return "Invalid description";

  return null;
};