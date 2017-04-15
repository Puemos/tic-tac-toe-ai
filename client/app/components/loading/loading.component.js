import template from './loading.html';
import controller from './loading.controller';
import './loading.scss';

const loadingComponent = {
  restrict: 'E',
  bindings: {
    label: '@'
  },
  template,
  controller
};

export default loadingComponent;
