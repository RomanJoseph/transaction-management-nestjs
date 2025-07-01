import { DataSource } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { PrimaryRepository } from 'src/infra/database/typeorm/primary.repository';
import { Test } from '../entities/test.entity';

@Injectable()
class TestRepository extends PrimaryRepository<Test> {
  constructor(@Inject('DATA_SOURCE_SQL') dataSource: DataSource) {
    super(dataSource, Test);
  }
}

export default TestRepository;
