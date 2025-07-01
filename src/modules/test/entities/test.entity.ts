import { PrimaryEntity } from 'src/infra/database/typeorm/primary.entity';
import { Entity } from 'typeorm';

@Entity('tests')
export class Test extends PrimaryEntity {
  name: string;
}
