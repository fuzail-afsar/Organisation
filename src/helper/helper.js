export const avatarLetters = (fullName) => {
  const [firstName, lastName] = fullName.split(" ");
  return `${firstName[0]}${lastName ? lastName[0] : ""}`;
};
