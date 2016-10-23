import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Controls from 'Controls';

describe('Controls', () => {
  it('Should exist', () => {
    expect(Controls).toExist();
  });

  describe('Render countdown', () => {
    it('Should render pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started' mode='countdown'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('Should render start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused' mode='countdown'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });

  });

  describe('Render timer', () => {
    it('Should render pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started' mode='timer'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('Should render start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused' mode='timer'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });

  });

});
