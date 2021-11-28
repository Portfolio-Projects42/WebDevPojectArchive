/*
 * @license Apache-2.0
 *
 * Copyright (c) 2019 The Stdlib Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/// <reference types="@stdlib/types"/>

import * as array from '@stdlib/types/array';
import * as iter from '@stdlib/types/iter';
import * as ndarray from '@stdlib/types/ndarray';
import * as obj from '@stdlib/types/object';
import * as random from '@stdlib/types/random';

/**
 * Returns an iterator protocol-compliant object.
 *
 * @returns iterator protocol-compliant object
 */
function createIterator1(): iter.Iterator {
  return {
    next: next1,
  };
}

/**
 * Implements the iterator protocol `next` method.
 *
 * @returns iterator protocol-compliant object
 */
function next1(): iter.IteratorResult {
  return {
    value: true,
    done: false,
  };
}

/**
 * Returns an iterator protocol-compliant object.
 *
 * @returns iterator protocol-compliant object
 */
function createIterator2(): iter.Iterator {
  return {
    next: next2,
  };
}

/**
 * Implements the iterator protocol `next` method.
 *
 * @returns iterator protocol-compliant object
 */
function next2(): iter.IteratorResult {
  return {
    done: true,
  };
}

/**
 * Returns an iterable iterator protocol-compliant object.
 *
 * @returns iterable iterator protocol-compliant object
 */
function createIterableIterator(): iter.IterableIterator {
  return {
    next: next3,
    [Symbol.iterator]: factory,
  };
}

/**
 * Implements the iterator protocol `next` method.
 *
 * @returns iterator protocol-compliant object
 */
function next3(): iter.IteratorResult {
  return {
    done: true,
  };
}

/**
 * Returns an iterable iterator protocol-compliant object.
 *
 * @returns iterable iterator protocol-compliant object
 */
function factory(): iter.IterableIterator {
  return createIterableIterator();
}

// TESTS //

// The compiler should not throw an error when using array type aliases...
{
  const x: array.TypedArray = new Float64Array(10);
  if (x[0] !== 0.0) {
    throw new Error('something went wrong');
  }

  const y: array.IntegerTypedArray = new Int32Array(10);
  if (y[0] !== 0) {
    throw new Error('something went wrong');
  }

  const z: array.NumericArray = new Float64Array(10);
  if (z[0] !== 0.0) {
    throw new Error('something went wrong');
  }

  const w: array.ArrayLike<string> = 'beep';
  if (w[0] !== 'b') {
    throw new Error('something went wrong');
  }

  const v: array.ArrayLike<number> = [1, 2, 3];
  if (v[0] !== 1) {
    throw new Error('something went wrong');
  }

  const t: array.ArrayLike<number> = new Int8Array(10);
  if (t[0] !== 1) {
    throw new Error('something went wrong');
  }
}

// The compiler should not throw an error when using iterator or iterable types...
{
  createIterator1();
  createIterator2();
  createIterableIterator();
}

// The compiler should not throw an error when using ndarray types...
{
  const arr: ndarray.ndarray = {
    byteLength: null,
    BYTES_PER_ELEMENT: null,
    data: [1, 2, 3],
    dtype: 'generic',
    flags: {
      ROW_MAJOR_CONTIGUOUS: true,
      COLUMN_MAJOR_CONTIGUOUS: false,
    },
    length: 3,
    ndims: 1,
    offset: 0,
    order: 'row-major',
    shape: [3],
    strides: [1],
    get: (i: number): any => {
      return arr.data[i];
    },
    set: (i: number, v: any): ndarray.ndarray => {
      arr.data[i] = v;
      return arr;
    },
  };
  if (arr.length !== 3) {
    throw new Error('something went wrong');
  }
}

// The compiler should not throw an error when using object types...
{
  const desc1: obj.DataPropertyDescriptor = {
    configurable: true,
    enumerable: false,
    writable: false,
    value: 'beep',
  };
  if (desc1.value !== 'beep') {
    throw new Error('something went wrong');
  }

  const desc2: obj.DataPropertyDescriptor = {
    enumerable: false,
    writable: false,
    value: 'beep',
  };
  if (desc2.value !== 'beep') {
    throw new Error('something went wrong');
  }

  const desc3: obj.DataPropertyDescriptor = {
    configurable: true,
    writable: false,
    value: 'beep',
  };
  if (desc3.value !== 'beep') {
    throw new Error('something went wrong');
  }

  const desc4: obj.DataPropertyDescriptor = {
    configurable: true,
    enumerable: false,
    writable: false,
  };
  if (desc4.value) {
    throw new Error('something went wrong');
  }

  const desc5: obj.DataPropertyDescriptor = {
    writable: false,
    value: 'beep',
  };
  if (desc5.value !== 'beep') {
    throw new Error('something went wrong');
  }

  const desc6: obj.DataPropertyDescriptor = {
    configurable: true,
    value: 'beep',
  };
  if (desc6.value !== 'beep') {
    throw new Error('something went wrong');
  }

  const desc7: obj.DataPropertyDescriptor = {
    enumerable: false,
    value: 'beep',
  };
  if (desc7.value !== 'beep') {
    throw new Error('something went wrong');
  }

  const desc8: obj.DataPropertyDescriptor = {
    enumerable: false,
    writable: false,
  };
  if (desc8.value) {
    throw new Error('something went wrong');
  }

  const desc9: obj.AccessorPropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get: (): string => 'beep',
    set: () => {
      throw new Error('beep');
    },
  };
  if (desc9.enumerable !== false) {
    throw new Error('something went wrong');
  }

  const desc10: obj.AccessorPropertyDescriptor = {
    enumerable: false,
    get: (): string => 'beep',
    set: () => {
      throw new Error('beep');
    },
  };
  if (desc10.enumerable !== false) {
    throw new Error('something went wrong');
  }

  const desc11: obj.AccessorPropertyDescriptor = {
    configurable: true,
    get: (): string => 'beep',
    set: () => {
      throw new Error('beep');
    },
  };
  if (desc11.enumerable !== false) {
    throw new Error('something went wrong');
  }

  const desc12: obj.AccessorPropertyDescriptor = {
    configurable: true,
    enumerable: false,
    set: () => {
      throw new Error('beep');
    },
  };
  if (desc12.enumerable !== false) {
    throw new Error('something went wrong');
  }

  const desc13: obj.AccessorPropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get: (): string => 'beep',
  };
  if (desc13.enumerable !== false) {
    throw new Error('something went wrong');
  }

  const desc14: obj.AccessorPropertyDescriptor = {
    get: (): string => 'beep',
    set: () => {
      throw new Error('beep');
    },
  };
  if (desc14.enumerable !== false) {
    throw new Error('something went wrong');
  }

  const desc15: obj.PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    writable: false,
    value: 'beep',
  };
  if (desc15.value !== 'beep') {
    throw new Error('something went wrong');
  }

  const prop: obj.PropertyName = 'foo';
  if (prop !== 'foo') {
    throw new Error('something went wrong');
  }

  const arr: obj.Collection = [1, 2, 3];
  if (arr.length !== 3) {
    throw new Error('something went wrong');
  }

  const z: obj.ComplexLike = {
    re: 1.0,
    im: 1.0,
  };
  if (z.re !== 1.0) {
    throw new Error('something went wrong');
  }
}

// The compiler should not throw an error when using PRNG types...
{
  const rand: random.PRNG = (): number => 3.14;
  if (rand() !== 3.14) {
    throw new Error('something went wrong');
  }

  const s1: random.PRNGSeedMT19937 = 12345;
  if (s1 !== 12345) {
    throw new Error('something went wrong');
  }

  const s2: random.PRNGSeedMT19937 = new Uint32Array(10);
  if (s2[0] !== 0) {
    throw new Error('something went wrong');
  }

  const s3: random.PRNGSeedMINSTD = 12345;
  if (s3 !== 12345) {
    throw new Error('something went wrong');
  }

  const s4: random.PRNGSeedMINSTD = new Int32Array(10);
  if (s4[0] !== 0) {
    throw new Error('something went wrong');
  }

  const s5: random.PRNGStateMT19937 = new Uint32Array(10);
  if (s5[0] !== 0) {
    throw new Error('something went wrong');
  }

  const s6: random.PRNGStateMINSTD = new Int32Array(10);
  if (s6[0] !== 0) {
    throw new Error('something went wrong');
  }
}
