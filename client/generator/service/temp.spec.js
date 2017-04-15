import <%= upCaseName %>Module from './<%= name %>'
import <%= upCaseName %>Service from './<%= name %>.service';


describe('<%= upCaseName %>', () => {
  let makeService;

  beforeEach(window.module(<%= upCaseName %>Module));

  describe('Service', () => {
    // controller specs

  });


});
