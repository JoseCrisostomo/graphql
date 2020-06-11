const uuid = require('uuid')

async function clear(knex) {
  await knex('todo').del()
  await knex('project').del()
}

async function seed(knex) {
  await clear(knex)

  const projectId = uuid()

  await knex('project').insert({
    id: projectId,
    title: 'Project',
  })

  await knex('todo').insert({
    projectId,
    id: uuid(),
    title: 'Test action one',
    complete: false,
  })

  await knex('todo').insert({
    projectId,
    id: uuid(),
    title: 'Test action two',
    complete: false,
  })
}

module.exports = { clear, seed }
