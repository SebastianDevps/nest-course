import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidationTestPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value: ',  value);
    // console.log('metadata: ', metadata)
    const ageNumber = parseInt(value.age.toString(), 10);
    
    if(isNaN(ageNumber)){
      throw new HttpException('La edad no se pudo convertir a numero', HttpStatus.BAD_REQUEST);
    }
    return {
      ...value,
      age: ageNumber
    };
  }
}
