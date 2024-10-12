import path from "node:path";
import {RENDERER_DIST} from "./main.ts";

export const getUIPath = () => path.join(RENDERER_DIST, 'index.html')