import { Injectable } from '@nestjs/common';
import {
  Repository,
  DataSource,
  EntityTarget,
  FindOptionsWhere,
  In,
} from 'typeorm';
import { PrimaryEntity } from './primary.entity';

@Injectable()
export class PrimaryRepository<T extends PrimaryEntity> extends Repository<T> {
  private readonly entityName: string;

  constructor(
    dataSource: DataSource,
    private readonly entity: EntityTarget<T>,
  ) {
    super(entity, dataSource.createEntityManager());
  }
  public async findById(id: string): Promise<T | null> {
    return this.findOne({
      where: { id } as FindOptionsWhere<T> | FindOptionsWhere<T>[] | undefined,
    });
  }

  public async findInIds(ids: string[]): Promise<T[]> {
    return this.find({
      where: {
        id: In(ids),
      } as FindOptionsWhere<T> | FindOptionsWhere<T>[] | undefined,
    });
  }
}
