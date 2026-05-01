'use strict';

// write code here
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const leftOffset = (wall.offsetWidth - spider.offsetWidth) / 2;
const topOffset = (wall.offsetHeight - spider.offsetHeight) / 2;

spider.style.left = `${leftOffset}px`;
spider.style.top = `${topOffset}px`;
