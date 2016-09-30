/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */
'use strict';

var Animated = require('./Animated');

class AnimatedWithChildren extends Animated {
  _children: Array<Animated>;

  constructor() {
    super();
    if (typeof this._children === 'undefined') {
      this._children = [];
    }
  }

  __addChild(child: Animated): void {
    if (typeof this._children === 'undefined') {
      this._children = [];
    }
    if (this._children.length === 0) {
      this.__attach();
    }
    this._children.push(child);
  }

  __removeChild(child: Animated): void {
    if (typeof this._children === 'undefined') {
      this._children = [];
    }
    var index = this._children.indexOf(child);
    if (index === -1) {
      console.warn('Trying to remove a child that doesn\'t exist');
      return;
    }
    this._children.splice(index, 1);
    if (this._children.length === 0) {
      this.__detach();
    }
  }

  __getChildren(): Array<Animated> {
    if (typeof this._children === 'undefined') {
      this._children = [];
    }
    return this._children;
  }
}

module.exports = AnimatedWithChildren;
