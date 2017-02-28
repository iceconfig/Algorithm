import {Stack} from "../../common/stack";
/**
 * Created by Administrator on 2017/2/28 0028.
 */
export class TwoStacksQueue {
    public stackPush: Stack<number> = new Stack<number>();
    public stackPop: Stack<number> = new Stack<number>();

    public add(data: number): void {
        this.stackPush.push(data);
    };

    public poll(): number {
        if (this.stackPush.isEmpty() && this.stackPop.isEmpty()) {
            return null;
        } else if (this.stackPop.isEmpty()) {
            while (this.stackPush.isEmpty()) {
                this.stackPop.push(this.stackPush.pop());
            }
        }
        return this.stackPop.pop();
    };
}

