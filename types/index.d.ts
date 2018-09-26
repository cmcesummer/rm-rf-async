// Type definitions for rm-rf-async 5.0

/// <reference types="node" />

import util = require("util");
import fs = require('fs');
import assert = require('assert');
import glob = require('glob');

declare function R(path: string, cb: () => void): void;
declare function R(path: string, options: R.IOptions, cb: () => void): void;

declare namespace R {
    interface IOptions {
        log?: boolean;
    }
}

export = R;
