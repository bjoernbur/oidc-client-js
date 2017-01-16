// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

import Log from './Log';
import CordovaPopupWindow from './CordovaPopupWindow';
import CordovaPopupWindowEvents from './CordovaPopupWindowEvents';

export default class CordovaPopupNavigator {
  constructor(params) {
    this._events = new CordovaPopupWindowEvents();
  }

  prepare(params) {
    var popup = new CordovaPopupWindow(params, this._events);
    return Promise.resolve(popup);
  }

  get events() {
    return this._events;
  }
}
