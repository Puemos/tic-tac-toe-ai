import template from './saBoard.html';
import controller from './saBoard.controller';
import './saBoard.scss';

const saBoardComponent = {
  restrict: 'E',
  bindings: {
    state: '<'
  },
  template,
  controller
};

export default saBoardComponent;
