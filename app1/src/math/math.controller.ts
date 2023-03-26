import {Controller, Get, Param} from '@nestjs/common';
import {MathService} from "./math.service";


@Controller('math')
export class MathController {
    constructor(private readonly ms: MathService) {}

    @Get('/substract/:a/:b')
    getSubstact(@Param('a')firstNumber, @Param('b')secondNumber) {
        return this.ms.substract(firstNumber, secondNumber);
    }
    @Get('/add/:a/:b')
    getAdd(@Param('a')firstNumber, @Param('b')secondNumber) {
        return this.ms.add(+firstNumber, +secondNumber);
    }

    @Get('/multiply/:a/:b')
    getMultiply(@Param('a')firstNumber, @Param('b')secondNumber) {
        return this.ms.multiply(+firstNumber, +secondNumber);
    }

    @Get('/divide/:a/:b')
    getDivide(@Param('a')firstNumber, @Param('b')secondNumber) {
        return this.ms.divide(+firstNumber, +secondNumber);
    }

    @Get('/operation/:op/:list')
    getComplexOperation(@Param('op')operation, @Param('list')list) {
        return this.ms.complexOperation(operation, list);
    }
}
