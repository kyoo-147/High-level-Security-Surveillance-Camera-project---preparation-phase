import test_1 from "../assets/video/test_1.mp4";
import test_2 from "../assets/video/test_2.mp4";
import test_3 from "../assets/video/test_3.mp4";
import test_4 from "../assets/video/test_4.mp4";
import test_7 from "../assets/video/test_7.mp4";
import test_10 from "../assets/video/test_10.mp4";

export const getViewCameraById = (id) => {
  switch (id) {
    case 1:
      return test_1;
    case 2:
      return test_2;
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
