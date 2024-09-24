import fs from 'fs';
import { parseData } from './parse.js';
import { buildImg } from './/dds.js';
import cfg from '../../cfg.js';
if (fs.existsSync(cfg.unpackDir)) {
  await buildImg(parseData().dds);
}
