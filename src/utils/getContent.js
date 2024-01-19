import { CONTENT } from "../assets/data/content";


export const getContentById = (id) => {
  switch (id) {
    case 1:
      return CONTENT[0];
    case 2:
      return CONTENT[1];
    case 3:
      return test_3;
    case 4:
      return test_4;
    case 6:
      return test_7;
    case 10:
      return test_10;
    default:
      return test_1;
  }
};
