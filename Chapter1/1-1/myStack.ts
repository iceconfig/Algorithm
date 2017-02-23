/**
 * Created by Administrator on 2017/2/23 0023.
 */
class MyStack<T> {
    private stackData: T[] = [];
    private stackMin: T[] = [];

    get length(): number {
        return this.stackData.length;
    }

    public push(data: T) {
        this.stackData.push(data);
        let curMin = this.getMin();
        this.stackMin.push(curMin < data ? curMin : data);
    };

    public pop(): T {
        this.stackMin.pop();
        return this.stackData.pop();
    };

    public getMin(): T {
        return this.stackMin[this.stackMin.length - 1];
    };

    public print() {
        console.log(this.stackData);
        console.log(this.length);
        console.log(this.getMin());
    }
}

let myStack = new MyStack<number>();
let data = [13, 22, 9, 6, 8, 4, 88, 2, 54];

data.filter(data => {
    myStack.push(data);
    myStack.print()
})