### On this page

1. [Tic Tac Toe - AI](#tic-tac-toe-ai)
1. [Server](#server)
1. [Client](#client)
1. [Flow](#flow)
1. [See also](#see-also)

### <a id="tic-tac-toe-ai" href="#tic-tac-toe-ai">Tic Tac Toe - AI</a>

A Tic-Tac-Toe game impl Javascript/Node
Checkout the [Preview](https://tictac-toe-ai.herokuapp.com/) on Heroku
### <a id="server" href="#server">Server</a>

|Module|Description|
|-|-|
|Server|Lift the Express app and setup middlewares|
|Turn|Controller for the 'turn' route|
|Game|Implement functionalities|
|State|Representing a state in the game|
|Search|Using min-max with alpha-beta-pruning search the best next move|

### <a id="client" href="#client">Client</a>

|Module|Description|
|-|-|
|Api|Implement functionalities for http calls|
|AI|Compute the next move of the AI|
|App|The main container of the app |
|Home|The container of the root route |
|Board| Rendering tiles by a given state, updating the state |
|Tile| Rendering a single tile |

### <a id="flow" href="#flow">Flow</a>

    1. The client send a state and a move to the server
    2. The server compute the next move.
    3. The server send back the new state.
    4. The client render the UI by the new state.

### <a id="see-also" href="#see-also">See also</a>

External resources

* [Tic Tac Toe - tictac-toe-ai.herokuapp.com](https://tictac-toe-ai.herokuapp.com/)
