import ReactMapGL, {
  FlyToInterpolator,
  FullscreenControl,
  GeolocateControl,
  Layer,
  Marker,
  NavigationControl,
  Popup,
  Source,
} from "@goongmaps/goong-map-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setViewCamera, setViewPort } from "../redux/slices/goongSlice.js";
import { CAMERA_DATA } from "../assets/data/camera.js";
import CAMERA_ICON from "../assets/images/camera.png";
import { getViewCameraById } from "../utils/code.js";
import ReactPlayer from "react-player";
import useTheme from "../hook/useTheme.js";

const MaptiesKey = `eFzBsrBRpWlI8QY3XULInuOePLflHjV2ayqMhrcW`;

const MapBox = () => {
  //
  const { viewport, origin, destination, direction, camera } = useSelector(
    (state) => state.goong,
  );
  const { filter } = useSelector((state) => state.storage);
  const dispatch = useDispatch();

  const { theme } = useTheme();
  const handleViewControlPanel = (camera) => {
    dispatch(
      setViewCamera({
        url: getViewCameraById(camera.id),
        coordinates: {
          latitude: camera.latitude,
          longitude: camera.longitude,
        },
      }),
    );
  };

  const isDarkMode = "dark";
  return (
    <div className={`flex flex-1 overflow-hidden rounded-[10px] bg-gray-50`}>
      <ReactMapGL
        // làm mượt khi di chuyển phóng to thu nhỏ
        goongApiAccessToken={MaptiesKey}
        mapStyle={
          theme === isDarkMode
            ? "https://tiles.goong.io/assets/goong_map_dark.json"
            : "https://tiles.goong.io/assets/goong_map_web.json"
        }
        {...viewport}
        width="100%"
        height="100%"
        transitionDuration={500}
        transitionInterpolator={new FlyToInterpolator()}
        onViewportChange={(nextViewport) => dispatch(setViewPort(nextViewport))}
      >
        {camera.data && (
        <Popup
          className={`z-20`}
          latitude={camera.data.coordinates.latitude}
          longitude={camera.data.coordinates.longitude}
          offsetTop={-20}
          offsetLeft={-10}
          closeButton={true}
          closeOnClick={false}
          onClose={() => dispatch(setViewCamera(null))}
        >
          <div className="z-20 w-full max-w-sm rounded-lg bg-white dark:border-gray-700 dark:bg-gray-800">
            <ReactPlayer
              url={camera.data.url}
              width="100%"
              height={270}
              playing={true}
              loop={true}
              controls={false}
            />
            <div className="w-full items-center justify-center p-5">
              <div className="flex w-full border-0 text-center">
                <div className="flex-1 items-center justify-center">
                  <p className="text-[16px] font-bold text-gray-800 dark:text-white ">
                    Bình thường
                  </p>
                  <p className="text-xs uppercase text-gray-500 dark:text-gray-300">
                    Tình trạng
                  </p>
                </div>
                <div className="flex-1 items-center justify-center">
                  <p className="text-[16px] font-bold text-gray-800 dark:text-white">
                    60 km/h
                  </p>
                  <p className="text-xs uppercase text-gray-500 dark:text-gray-300">
                    Tốc độ
                  </p>
                </div>
                <div className="w-full flex-1 items-center justify-center">
                  <p className="text-[16px] font-bold text-gray-800 dark:text-white">
                    {
                      // realtime time
                      new Date().toLocaleTimeString("vi-VN", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    }
                  </p>
                  <p className="text-xs uppercase text-gray-500 dark:text-gray-300">
                    Thời gian
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Popup>
        )}
        {/*CAMERA*/}
        {filter[1] && (
          <>
            {CAMERA_DATA.map((camera, index) => (
              <Marker
                key={index}
                longitude={camera.longitude}
                latitude={camera.latitude}
                offsetTop={-20}
                offsetLeft={-10}
              >
                {/*svg   camera*/}
                <img
                  src={CAMERA_ICON}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  contentEditable={false}
                  draggable={false}
                  onClick={() => handleViewControlPanel(camera)}
                  className="fill-current text-red-500"
                  alt={``}
                />
              </Marker>
            ))}
          </>
        )}
        {origin.selected && (
          <Marker
            longitude={origin.coordinates.longitude}
            latitude={origin.coordinates.latitude}
            offsetTop={-20}
            offsetLeft={-10}
          >
            <svg
              width={20}
              height={20}
              className="fill-current text-red-500"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C7.029 0 3 4.029 3 9c0 7 9 15 9 15s9-8 9-15c0-4.971-4.029-9-9-9zm0 13a4 4 0 110-8 4 4 0 010 8z" />
            </svg>
          </Marker>
        )}
        {destination.selected && (
          <Marker
            longitude={destination.coordinates.longitude}
            latitude={destination.coordinates.latitude}
            offsetTop={-20}
            offsetLeft={-10}
          >
            <svg
              width={20}
              height={20}
              className="fill-current text-blue-500"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C7.029 0 3 4.029 3 9c0 7 9 15 9 15s9-8 9-15c0-4.971-4.029-9-9-9zm0 13a4 4 0 110-8 4 4 0 010 8z" />
            </svg>
          </Marker>
        )}
        {/*DIRECTIONS*/}
        {direction.isLoading ? (
          <div className={`absolute left-1/2 top-1/2`}>
            <div className={`h-32 w-32 animate-spin rounded-full border-b-2`} />
          </div>
        ) : (
          <Source type={"geojson"} data={direction.data}>
            <Layer
              id="route"
              type="line"
              source="route"
              layout={{
                "line-join": "round",
                "line-cap": "round",
              }}
              paint={{
                "line-color": "#888",
                "line-width": 8,
              }}
            />
          </Source>
        )}
        <GeolocateControl
          style={{
            top: 0,
            left: 0,
            padding: "10px",
          }}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        <FullscreenControl
          style={{
            top: 36,
            left: 0,
            padding: "10px",
          }}
        />
        <NavigationControl
          style={{
            top: 72,
            left: 0,
            padding: "10px",
          }}
        />
      </ReactMapGL>
    </div >
  );
};
export default MapBox;
