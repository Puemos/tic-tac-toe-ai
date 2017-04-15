const AiService = function(Api) {
  "ngInject";

  return {
    move: (move, state) => Api.post({ url: 'turn', data: { move, state } })
  };
};

export default AiService;
