export const EXPERIENCE_START = new Date("2022-03-09");

export function getExperienceYears(precision: number = 1): string {
  const now = new Date();

  let months =
    (now.getFullYear() - EXPERIENCE_START.getFullYear()) * 12 +
    (now.getMonth() - EXPERIENCE_START.getMonth());

  if (now.getDate() < EXPERIENCE_START.getDate()) {
    months -= 1;
  }

  const years = months / 12;
  const factor = Math.pow(10, precision);

  return (Math.floor(years * factor) / factor).toFixed(precision);
}
