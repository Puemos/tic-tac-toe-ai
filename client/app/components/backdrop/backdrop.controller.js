
class BackdropController {
  constructor($document) {
    'ngInject';
    this.name = 'backdrop';
    this.body = $document[0].body;
  }
  $onInit() {
    this.body.style.overflow = 'hidden';
  }
  $onDestroy() {
    this.body.style.overflow = '';
  }

}

export default BackdropController;
