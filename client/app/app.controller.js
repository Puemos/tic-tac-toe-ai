class AppController {
  constructor($state, $localStorage, $transitions, $timeout) {
    "ngInject";
    this.name = 'app';

    this.$state = $state;
    this.$timeout = $timeout;
    this.$localStorage = $localStorage;
    this.transition = false;
    this.body = document.getElementsByTagName('body')[0];

    $transitions.onError('*', ::this.handleErrorPage);
    $transitions.onBefore('*', ::this.handleStartLoading);
    $transitions.onSuccess('*', ::this.handleStopLoading);

  }

  handleErrorPage() {
    this.error = true;
  }

  handleStartLoading() {
    this.error = false;
    this.transition = true;
  }
  handleStopLoading() {
    this.$timeout(() => {
      this.body.scrollIntoView();
      this.transition = false;
    }, 1000);
  }

  getPageName() {
    return this.$state.current.name;
  }
  get shouldShowBars() {
    return this.$state.current.name !== 'login' && this.$localStorage.token;
  }

}

export default AppController;
