module.exports = function alphabeta_search(game, state, d = 3) {
  const player = game.to_move(state);
  const eval_fn = (eval_state) => game.utility(eval_state);
  const cutoff_test = (cutoff_state, depth) => {
    return (depth > d || game.terminal_test(cutoff_state));
  };

  function max_value(max_value_state, alpha, beta, depth) {
    if (cutoff_test(max_value_state, depth)) {
      return eval_fn(max_value_state);
    }
    let v = -Infinity;
    game
      .successors(max_value_state)
      .forEach(({ state: new_state }) => {
        v = Math.max(v, min_value(new_state, alpha, beta, depth + 1));
        if (v >= beta) {
          return v;
        }
        alpha = Math.max(alpha, v);
      });
    return v;

  }

  function min_value(min_value_state, alpha, beta, depth) {
    if (cutoff_test(min_value_state, depth)) {
      return eval_fn(min_value_state);
    }
    let v = Infinity;
    game
      .successors(min_value_state)
      .forEach(({ state: new_state }) => {
        v = Math.min(v, max_value(new_state, alpha, beta, depth + 1));
        if (v <= alpha) {
          return v;
        }
        beta = Math.min(beta, v);
      });
    return v;
  }
  const calc = ({ state, pos }) => {
    return {
      val: min_value(state, -Infinity, Infinity, 0),
      pos,
      state
    };
  };
  const res = game
    .successors(state)
    .map(calc)
    .sort((a, b) => (b.val - a.val));

  return res.length > 0 ? res[0].pos : null;
};
