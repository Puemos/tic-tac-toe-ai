import SaBoardTileModule from './index.js'
import SaBoardTileController from './saBoardTile.controller';
import SaBoardTileComponent from './saBoardTile.component';
import SaBoardTileTemplate from './saBoardTile.html';

describe('SaBoardTile', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SaBoardTileModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SaBoardTileController();
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
      expect(SaBoardTileTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SaBoardTileComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SaBoardTileTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SaBoardTileController);
      });
  });
});
