import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';


const mockEmployeeService = {
  getHierarchy: jest.fn().mockResolvedValue([
    { id: 2, name: "Name 2", positionId: 2, positionName: 'Senior software eng', child: [] },
    // Add mock hierarchy here if necessary
  ]),
};

describe('EmployeeController', () => {
  let controller: EmployeeController;
  let service: EmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeController],
      providers: [
        EmployeeService,
        { provide: EmployeeService, useValue: mockEmployeeService }, // Use the mock service
      ],
    }).compile();

    controller = module.get<EmployeeController>(EmployeeController);
    service = module.get<EmployeeService>(EmployeeService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return employee hierarchy', async () => {
    const result = await controller.getHierarchy(1);
    expect(result).toMatchObject([
      { id: 2, name: 'Name 2', positionId: 2, positionName: 'Senior software eng', child: [] },
    ]);
  });
});
