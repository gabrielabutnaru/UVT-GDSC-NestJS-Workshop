import {Controller, Get, Param} from '@nestjs/common';
import {MathService} from "./math.service";

@Controller('math')
export class MathController {
  constructor(private readonly mathService: MathService) {}

  @Get('/substract/:a/:b')
  getSubstract(@Param('a') primulNumar, @Param('b') b) {
    return this.mathService.substract(primulNumar, b);
  }

  @Get('/add/:a/:b')
  getAdd(@Param('a') a, @Param('b') b) {
    return this.mathService.add(+a, +b);
  }

  @Get('/multiply/:a/:b')
  getMultiply(@Param('a') a, @Param('b') b) {
    return this.mathService.multiply(+a, +b);
  }

  @Get('/divide/:a/:b')
  getDivide(@Param('a') a, @Param('b') b) {
    return this.mathService.divide(+a, +b);
  }

  @Get('/operation/:op/:list')
  getComplexOperation(@Param('op') op, @Param('list') list) {
    return this.mathService.complexOperation(op, list);
  }
}
