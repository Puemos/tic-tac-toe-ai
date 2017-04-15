import { combineReducers } from 'redux';
import { GameReducer }  from './game.reducer';

export const RootReducer = combineReducers({
    game: GameReducer
});