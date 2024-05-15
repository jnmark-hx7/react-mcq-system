/* DATA MANAGEMENT FOR according to their respective section */

import DATA from "../data";

/* This is a function to split the data according to their section */
function SPLIT(section) {
  // taking the section initial and final from reducer
  return { initial: section.initial, final: section.total }; // Returning an object
}

//Display the data according to their resp total number of section
export function DATA_MANAGE(section) {
  let content = [];
  const split = SPLIT(section);
  for (let i = split.initial; i < split.final; i++) {
    content.push(DATA[i]);
  }
  return content;
}

export function STATUS_MANAGE(section, template) {
  let content = [];
  const split = SPLIT(section);
  for (let i = split.initial; i < split.final; i++) {
    content.push(template[i]);
  }
  return content;
}

export default DATA_MANAGE;
