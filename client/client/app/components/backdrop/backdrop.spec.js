import BackdropModule from './index'
import BackdropController from './backdrop.controller';
import BackdropComponent from './backdrop.component';
import BackdropTemplate from './backdrop.html';

describe('Backdrop', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BackdropModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BackdropController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(BackdropTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BackdropComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(BackdropTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BackdropController);
      });
  });
});
