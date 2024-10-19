import { Games } from '../types';
import { Action } from 'redux';

export const FETCH_GAMES_BEGIN = 'FETCH_GAMES_BEGIN';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_FAILURE = 'FETCH_GAMES_FAILURE';

export interface FetchGamesBeginAction extends Action<typeof FETCH_GAMES_BEGIN> {
    type: typeof FETCH_GAMES_BEGIN;
}

export interface FetchGamesSuccessAction extends Action<typeof FETCH_GAMES_SUCCESS> {
    type: typeof FETCH_GAMES_SUCCESS;
    payload: Games[];
}

export interface FetchGamesFailureAction extends Action<typeof FETCH_GAMES_FAILURE> {
    type: typeof FETCH_GAMES_FAILURE;
    payload: string;
}

export type GamesActionTypes =
    | FetchGamesBeginAction
    | FetchGamesSuccessAction
    | FetchGamesFailureAction;