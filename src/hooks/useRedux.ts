import { AddDispatch, RootState } from '../store';
import { TypedUseSelectorHook, useDispatch as useOriginalDispatch, useSelector as useOriginalSelector } from 'react-redux';

export const useSelector: TypedUseSelectorHook<RootState> = useOriginalSelector;
export const useDispatch: () => AddDispatch = useOriginalDispatch;