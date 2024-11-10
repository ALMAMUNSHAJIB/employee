import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
 
  @UseGuards(JwtAuthGuard)
  @Get(':id/hierarchy')
  async getHierarchy(@Param('id') id: number) {
    return this.employeeService.getEmployeeHierarchy(id);
  }

}
