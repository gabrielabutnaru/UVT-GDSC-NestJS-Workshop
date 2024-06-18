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
    if (b === 0) {
      throw new HttpException('Division by zero', 400);
    }
    return a / b;
  }

  complexOperation(op, list) {
    list = list.split(',');
    if (op !== 'add' && op !== 'multiply' && op !== 'substract' && op !== 'divide') {
      throw new HttpException('Invalid operation', 400);
    }
    if (op === 'divide' && list.includes('0')) {
      throw new HttpException('Division by zero', 400);
    }
    const ops = {
      add: (a, b) => a + b,
      substract: (a, b) => a - b,
      multiply: (a, b) => a * b,
      divide: (a, b) => a / b,
    }
    return list.reduce((acc, currentValue) => {
      return ops[op](+acc, +currentValue);
    }, op === 'add' || op === 'substract' ? 0 : op === 'multiply' ? 1 : list[0] * list[0]);
  }
}
