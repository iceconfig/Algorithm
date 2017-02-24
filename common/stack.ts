export interface IStack<T> {
	readonly length: number;
	isEmpty(): boolean;
	pop(): T;
	push(newData:T): void;
}


export abstract class Stack<T> implements IStack<T>{
	
	private data: T[] = [];

	get length() {
		return this.data.length;
	};

	isEmpty() {
		return this.data.length == 0;
	};

	pop():T {
		return this.data.pop();
	};

	push(newData:T) {
		this.data.push(newData);
	};
}