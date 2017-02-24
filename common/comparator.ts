export interface IComparator<T> {
	compare(arg1: T, arg2: T): number;
}