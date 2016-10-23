import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Timer from 'Timer';

describe('Timer', () => {
  it('Should exist', () => {
    expect(Timer).toExist();
  });
});
