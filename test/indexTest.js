// indexTest.js

const { titleCased } = require('../index'); // Adjust path if necessary
const { expect } = require('chai');

describe('index.js', () => {
  describe('titleCased()', () => {
    it('returns an array with title case tutorial names', () => {
      const expected = [
        "What Does The This Keyword Mean?",
        "What Is The Constructor OO Pattern?",
        "Implementing Blockchain Web API",
        "The Test Driven Development Workflow",
        "What Is NaN And How Can We Check For It",
        "What Is The Difference Between StopPropagation And PreventDefault?",
        "Immutable State And Pure Functions",
        "What Is The Difference Between == And ===?",
        "What Is The Difference Between Event Capturing And Bubbling?",
        "What Is JSONP?"
      ];

      const result = titleCased();
      expect(result).to.have.members(expected);
    });
  });
});
