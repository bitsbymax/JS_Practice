import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;//кастомний хук, де зарахунок типу TypedUseSelectorHook з react-redux ми говоримо тайпскрипту якого типу буде змінна useAppSelector, а саме, що це буде хук useSelector, який повертатиме state типу RootState
export const useAppDispatch: () => AppDispatch = useDispatch;//кастомний хук з типом AppDispatch, який ми додали в store