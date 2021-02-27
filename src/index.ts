import {CalcInterface} from './interface'

export default class Calc implements CalcInterface {
    value = 0 // 链式调用中的值

    constructor() {
        this.value = 0
    }

    // 两个数加法
    add(a: number, b: number): number {
        return 0
    }

    // 两个数减法
    sub(a: number, b: number): number {
        return 0
    }

    // 两个数乘法
    mul(a: number, b: number): number {
        return 0
    }

    // 两个数除法
    div(a: number, b: number): number {
        return 0
    }
}
