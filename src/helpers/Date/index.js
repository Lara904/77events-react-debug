export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};

// Correction: getMonth() retourne 0-11, donc on ajoute 1
export const getMonth = (date) => MONTHS[date.getMonth() + 1];
