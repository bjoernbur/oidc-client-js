// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

import Log from './Log';
import Event from './Event';

export default class CordovaPopupWindowEvents {
  constructor() {
    this._callbackLoaded = new Event("Callback loaded");
  }

  load(event, popup) {
    this._callbackLoaded.raise(event, popup);
  }

  addLoad(cb) {
    this._callbackLoaded.addHandler(cb);
  }

  removeLoad(cb) {
    this._callbackLoaded.removeHandler(cb);
  }
}
