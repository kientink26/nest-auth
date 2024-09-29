import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidateIDPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10);
    if (Number.isNaN(val) || val < 1) {
      throw new BadRequestException('id must be a positive integer');
    }
    return value;
  }
}
