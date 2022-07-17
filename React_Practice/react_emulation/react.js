'use strict';

const React = {
  createElement(tagName, props, content) {
    const child = document.createElement(tagName);
    child.textContent = content;

    return child;
  },
};
