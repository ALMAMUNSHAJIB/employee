import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { KnexService } from '../database/knex.service';

@Injectable()
export class EmployeeService {
  constructor(private knexService: KnexService) { }

  async getEmployeeHierarchy(id: number) {
    const employees = await this.knexService.knex('employees').where('parentId', id);

    for (const employee of employees) {
      employee.child = await this.getEmployeeHierarchy(employee.id);
    }

    return employees;
  }
}
