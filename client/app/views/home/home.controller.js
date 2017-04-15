class HomeController {
  constructor() {
    "ngInject";
    this.name = 'home';
    this.state = {
      turn: 'X',
      board: [
        { pos: 0, player: 'E' },
        { pos: 1, player: 'E' },
        { pos: 2, player: 'E' },
        { pos: 3, player: 'E' },
        { pos: 4, player: 'E' },
        { pos: 5, player: 'E' },
        { pos: 6, player: 'E' },
        { pos: 7, player: 'E' },
        { pos: 8, player: 'E' }
      ],
      utility: 0
    };
  }

}

export default HomeController;
