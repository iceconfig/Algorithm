/**
 * Created by iceconfig on 2017/2/23 0023.
 */
import {IStack} from "./../../common/stack";


class MinStack<T> implements IStack<T> {
    private stackData: T[] = [];
    private stackMin: T[] = [];

    get length(): number {
        return this.stackData.length;
    }

    push(data: T) {
        this.stackData.push(data);
        let curMin = this.getMin();
        this.stackMin.push(curMin < data ? curMin : data);
    };

    pop(): T {
        this.stackMin.pop();
        return this.stackData.pop();
    };

    isEmpty():boolean {
        return this.stackData.length == 0;
    };

    getMin(): T {
        return this.stackMin[this.stackMin.length - 1];
    };

    print() {
        console.log(this.stackData);
        console.log(this.getMin());
    }
}

let myStack = new MinStack<number>();
let data = [13, 22, 9, 6, 8, 4, 88, 2, 54];

data.filter(data => {
    myStack.push(data);
    myStack.print();
})