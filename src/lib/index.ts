// place files you want to import through the `$lib` alias in this folder.
export async function getRandomNumber() {
  const sleep = (waitTime: number) =>
    new Promise((resolve) => setTimeout(resolve, waitTime));
  await sleep(1000);
  return Math.floor(Math.random() * 100);
}
