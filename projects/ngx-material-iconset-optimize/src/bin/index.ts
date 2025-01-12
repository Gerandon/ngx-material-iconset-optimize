#!/usr/bin/env node

import pkg from '../../package.json';
import {runNgxMaterialIconSetOptimize} from '../lib/ngx-material-iconset-optimize';

console.log("Hello, this is ngx-material-iconset-optimize!");

// Run the main function
runNgxMaterialIconSetOptimize()
  .catch(err => console.error(`Error on Icon Set generation: ${err}`));
