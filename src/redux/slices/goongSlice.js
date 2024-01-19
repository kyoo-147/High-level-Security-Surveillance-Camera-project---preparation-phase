import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GoongService } from "../../utils/goong.service.js";
import polyline from "@mapbox/polyline";

const initialState = {
  hideMap: false,
  viewport: {
    latitude: 13.090228061000062,
    longitude: 109.31707043400007,
    zoom: 15,
    bearing: 0,
    pitch: 0,
  },
  origin: {
    coordinates: {
      latitude: null,
      longitude: null,
    },
    isLoading: false,
    options: [],
    selected: null,
  },
  destination: {
    coordinates: {
      latitude: null,
      longitude: null,
    },
    isLoading: false,
    options: [],
    selected: null,
  },
  direction: {
    isLoading: false,
    data: null,
  },
  camera: {
    isLoading: false,
    data: null,
  },
};

export const goongSlice = createSlice({
  name: "goong",
  initialState,
  reducers: {
    setViewPort: (state, action) => {
      state.viewport = action.payload;
    },
    setHideMap: (state, action) => {
      state.hideMap = action.payload;
    },
    setViewCamera: (state, action) => {
      state.camera.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(autoCompleteApiThunk.pending, (state, action) => {
      const { type } = action.meta.arg;
      switch (type) {
        case "origin":
          state.origin.isLoading = true;
          break;
        case "destination":
          state.destination.isLoading = true;
          break;
        default:
          break;
      }
    });
    builder.addCase(autoCompleteApiThunk.fulfilled, (state, action) => {
      state.origin.isLoading = false;
      const { type, data } = action.payload;
      const options = data.predictions.map((item) => ({
        label: item.description,
        value: item.place_id,
      }));
      switch (type) {
        case "origin":
          state.origin.options = options;
          break;
        case "destination":
          state.destination.options = options;
          break;
        default:
          break;
      }
    });
    builder.addCase(autoCompleteApiThunk.rejected, (state, action) => {
      state.origin.isLoading = false;
    });
    // PLACE DETAIL
    builder.addCase(getPlaceDetailThunk.fulfilled, (state, action) => {
      const { type, data } = action.payload;
      console.log("data", data);
      switch (type) {
        case "origin":
          state.origin.selected = data.result;
          state.origin.coordinates = {
            latitude: data.result.geometry.location.lat,
            longitude: data.result.geometry.location.lng,
          };
          break;
        case "destination":
          state.destination.selected = data.result;
          state.destination.coordinates = {
            latitude: data.result.geometry.location.lat,
            longitude: data.result.geometry.location.lng,
          };
          break;
        default:
          break;
      }
      state.viewport = {
        ...state.viewport,
        latitude: data.result.geometry.location.lat,
        longitude: data.result.geometry.location.lng,
      };
    });
    // DIRECTION
    builder.addCase(getDirectionThunk.pending, (state, action) => {
      state.direction.isLoading = true;
    });
    builder.addCase(getDirectionThunk.fulfilled, (state, action) => {
      state.direction.isLoading = false;
      const { routes } = action.payload.data;
      const geometry_string = routes[0].overview_polyline.points;
      state.direction.data = polyline.toGeoJSON(geometry_string);
    });
    builder.addCase(getDirectionThunk.rejected, (state, action) => {
      state.direction.isLoading = false;
    });
  },
});

export const autoCompleteApiThunk = createAsyncThunk(
  "goong/autoCompleteApiThunk",
  async ({ value, type }, thunkAPI) => {
    const response = await GoongService.autoCompleteApi(value);
    return {
      data: response.data,
      type,
    };
  },
);

export const getPlaceDetailThunk = createAsyncThunk(
  "goong/getPlaceDetailThunk",
  async ({ placeId, type }, thunkAPI) => {
    const response = await GoongService.getPlaceDetail(placeId);
    return {
      data: response.data,
      type,
    };
  },
);

export const getDirectionThunk = createAsyncThunk(
  "goong/getDirectionThunk",
  async ({ origin, destination }, thunkAPI) => {
    const response = await GoongService.getDirections(origin, destination);
    return {
      data: response.data,
    };
  },
);
export const { setViewPort, setViewCamera, setHideMap } = goongSlice.actions;

export default goongSlice.reducer;
