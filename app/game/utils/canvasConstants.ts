/**
 * constants used for useCanvas hook
 */
const CANVAS_ID = "mycanvas";
const RIOT_IMG_WIDTH = 1215;
const RIOT_IMG_HEIGHT = 717;
const SHRINK_FACTOR = 0.4; //needs to be between 0 and 1
const CANVAS_HEIGHT = RIOT_IMG_HEIGHT * SHRINK_FACTOR;
const CANVAS_WIDTH = RIOT_IMG_WIDTH * SHRINK_FACTOR;

export {CANVAS_ID, CANVAS_WIDTH, CANVAS_HEIGHT, RIOT_IMG_HEIGHT, RIOT_IMG_WIDTH};