import { Controller, Get, HttpCode, Param, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { query, Request, Response } from 'express';
import { ValidationTestPipe } from './pipe/validation-test/validation-test.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class PruebaController {
    @Get('/')
    index(@Req() request: Request, @Res() response: Response) {
        console.log(request.url)
        response.status(200).json({
            message: 'Hola',
        })
    }

    @Get('/test')
    @HttpCode(404)
    notFound() {
        return 'Not Found'
    }

    @Get('ticket/:num')
    getTicket(@Param('num', ParseIntPipe) num:number){
        console.log(typeof(num))
        return num+1
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidationTestPipe) query: {name:string, age:number}){
        console.log(typeof(query.name))
        console.log(typeof(query.age))
        return `Hola ${query.name} tu edad es ${query.age} ?`
    }
}
