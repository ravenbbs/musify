/**
 * @license Apache-2.0
 * @copyright Julio Condor 2024
 */
"use strict";

/**
 * Add events on elements
 */

const addEventOnElems = function (elements, eventType, callback){
  elements.forEach(element => element.addEventListener(eventType, callback))
}

export { addEventOnElems }