/**
 * Created by iceconfig on 2017/2/23 0023.
 */
import {IStack} from "./../../common/stack";
import {IComparator} from "./../../common/comparator";

export class MinStack<T> implements IStack<T> {
    private stackData: T[] = [];
    private stackMin: T[] = [];
    private comparator: IComparator<T>;

    get length(): number {
        return this.stackData.length;
    }

    constructor(_comparator: IComparator<T>) {
        this.comparator = _comparator;
    };

    push(newData: T) {

        if(this.isEmpty()) {
            this.stackMin.push(newData);
        } else {
            let curMin = this.getMin();
            this.stackMin.push(this.comparator.compare(curMin, newData) < 0 ? curMin : newData);
        }

        this.stackData.push(newData);
    };

    pop(): T {

        if(this.isEmpty()) {
            return undefined;
        }

        this.stackMin.pop();
        return this.stackData.pop();
    };

    isEmpty(): boolean {
        return this.stackData.length == 0;
    };

    getMin(): T {
        return this.stackMin[this.stackMin.length - 1];
    };

    print() {
        console.log(this.stackData);
        console.log(this.getMin());
    };
}

class NumberComparator implements IComparator<number> {
    
    compare(arg1: number, arg2: number): number {
        return (arg1 - arg2);
    };
}

let myStack = new MinStack<number>(new NumberComparator());
let data = [13, 22, 9, 6, 8, 4, 88, 2, 54];

data.filter(data => {
    myStack.push(data);
    myStack.print();
});