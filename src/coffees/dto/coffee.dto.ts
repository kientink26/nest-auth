import { Expose, Transform } from 'class-transformer';
import { Flavor } from '../entities/flavor.entity';
import { Coffee } from '../entities/coffee.entity';

export class CoffeeDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  brand: string;

  @Transform(({ obj }: { obj: Coffee }) =>
    obj.flavors?.map((flavor: Flavor) => flavor.name),
  )
  @Expose()
  flavors: string[];
}
