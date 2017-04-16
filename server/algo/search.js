function max_value(game, state, alpha, beta, depth, cutoff_test, eval_fn) {
  if (cutoff_test(state, depth)) {
    return eval_fn(state);
  }
  let v = -Infinity;
  game
    .successors(state)
    .forEach(({
      state: child_state
    }) => {
      v = Math.max(v, min_value(game, child_state, alpha, beta, depth + 1, cutoff_test, eval_fn));
      if (v >= beta) {
        return v;
      }
      alpha = Math.max(alpha, v);
    });
  return v;

}

function min_value(game, state, alpha, beta, depth, cutoff_test, eval_fn) {
  if (cutoff_test(state, depth)) {
    return eval_fn(state);
  }
  let v = Infinity;
  game
    .successors(state)
    .forEach(({
      state: child_state
    }) => {
      v = Math.min(v, max_value(game, child_state, alpha, beta, depth + 1, cutoff_test, eval_fn));
      if (v <= alpha) {
        return v;
      }
      beta = Math.min(beta, v);
    });
  return v;
}

function alphabeta_search(game, state, d = 4) {
  const eval_fn = (eval_state) => game.utility(eval_state);
  const cutoff_test = (cutoff_state, depth) => {
    return (depth > d || game.terminal_test(cutoff_state));
  };
  const search = ({
    state,
    pos
  }) => {
    return {
      val: min_value(game, state, -Infinity, Infinity, 0, cutoff_test, eval_fn),
      pos,
      state
    };
  };
  const res = game
    .successors(state)
    .map(search)
    .sort((a, b) => (b.val - a.val));

  return res.length > 0 ? res[0].pos : null;
}
module.exports = alphabeta_search;
