import MapBox from "../../components/MapBox.jsx";
import { useState } from "react";
import LocationPanel from "../../modules/dashboard/LocationPanel.jsx";
import De from "../../modules/dashboard/De.jsx";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  const [cameraChecked, setCameraChecked] = useState(false);
  console.log(cameraChecked);

  const { hideMap } = useSelector((state) => state.goong);

  return (
    <>
      <div className={`flex flex-1 gap-5`}>
        {/*Right*/}
        <LocationPanel />
        {/*Left*/}
        {
          hideMap ? <De/> : <MapBox />
        }
      </div>
    </>
  );
};

export default DashboardPage;
