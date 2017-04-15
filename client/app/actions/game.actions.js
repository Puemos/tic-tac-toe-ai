import { GAME } from '../constants/GAME';

function chooseTile(tile){
    return {
        type: GAME.CHOOSE_POSITION,
        payload: tile
    };
}

export default { chooseTile };
