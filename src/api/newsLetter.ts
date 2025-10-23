export const subscribeToNewsLetter = async (_: {
  name: string;
  lastName: string;
  email: string;
}): Promise<{ msg: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ msg: "success, check your email" });
    }, 1500);
  });
};
