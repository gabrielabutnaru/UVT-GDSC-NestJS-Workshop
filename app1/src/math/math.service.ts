import {HttpException, Injectable} from '@nestjs/common';

@Injectable()
export class MathService {
    substract(a, b) {
        return a - b;
    }
    add(a, b) {
        return a + b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b == 0) {
            throw new HttpException('Division by zero', 400);
        }
        return a / b;
    }

    complexOperation(op, list){
        list = list.split();

        if (op !== 'add' && op !== 'substract' && op !== 'multiply' && op !== 'divide') {
            throw new HttpException('Invalid operation' ,400);
        }

        if (op === 'divide' && list.includes('0')) {
            throw new HttpException('Division by zero' ,400);
        }

        const ops = {

        }
    }
}
