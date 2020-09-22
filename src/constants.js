import { rgb } from "d3";

export const MAP_WIDTH = 800;
export const MAP_HEIGHT = 400;
export const DEFAULT_COLOR_RED = 109;
export const DEFAULT_COLOR_GREEN = 110;
export const DEFAULT_COLOR_BLUE = 113;
export const DEFAULT_COLOR_OPACITY = 0.1;
export const REGION_COLOR_RED = 45;
export const REGION_COLOR_GREEN = 106;
export const REGION_COLOR_BLUE = 178;
export const REGION_COLOR_OPACITY = 0.3;
export const SELECTED_COUNTRY_COLOR_OPACITY = 1;
export const COEFFICIENT = 0.95;

const width = MAP_WIDTH;
const height = MAP_HEIGHT;
export const defaultColorCode = rgb(
  DEFAULT_COLOR_RED,
  DEFAULT_COLOR_GREEN,
  DEFAULT_COLOR_BLUE,
  DEFAULT_COLOR_OPACITY
);
const regionColorCode = rgb(
  REGION_COLOR_RED,
  REGION_COLOR_GREEN,
  REGION_COLOR_BLUE,
  REGION_COLOR_OPACITY
);
const selectedCountryColorCode = rgb(
  REGION_COLOR_RED,
  REGION_COLOR_GREEN,
  REGION_COLOR_BLUE,
  SELECTED_COUNTRY_COLOR_OPACITY
);
const coefficient = COEFFICIENT;
const globalZone = "Global";
const jsonPath = "/data/world.json";
const mappingJsonPath = "/data/countryMappings.json";