import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from './store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;//зарахунок типу TypedUseSelectorHook з react-redux ми говоримо тайпскрипту якого типу буде змінна useAppSelector, а саме, що це буде хук useSelector, який повертатиме state типу RootState