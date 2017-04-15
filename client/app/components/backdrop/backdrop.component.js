import template from './backdrop.html';
import controller from './backdrop.controller';
import './backdrop.scss';

const backdropComponent = {
  restrict: 'E',
  transclude: true,
  bindings: {},
  template,
  controller
};

export default backdropComponent;
