exports.seed = function (knex) {
  return knex('employees').del()
    .then(() => {
      return knex('employees').insert([
        { id: 1, name: 'Name 1', positionId: 1, positionName: 'CTO', parentId: null },
        { id: 2, name: 'Name 2', positionId: 2, positionName: 'Senior Software Engineer', parentId: 1 },
        { id: 3, name: 'Name 3', positionId: 3, positionName: 'Software Engineer', parentId: 2 },
        { id: 4, name: 'Name 4', positionId: 4, positionName: 'Junior Software Engineer', parentId: 3 },
      ]);
    });
};