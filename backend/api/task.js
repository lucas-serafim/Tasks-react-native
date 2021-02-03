const moment = require('moment')

module.exports = app => {
   const getTasks = (request, response) => {
      const date = request.query.date ? request.query.date : moment().endOf('day').toDate()

      app.db('tasks')
         .where({ userId: request.user.id })
         .where('estimateAt', '<=', date)
         .orderBy('estimateAt')
         .then(tasks = response.json(tasks))
         .catch(error => response.status(400).json(error))
   }

   const save = (request, response) => {
      if (!request.body.desc.trim()) {
         return response.status(400).send("Description can't be null or empty")
      }

      request.body.userId = request.user.id

      app.db('tasks')
         .insert(request.body)
         .then(_ => response.status(204).send())
         .catch(error => response.status(400).json(error))
   }

   const remove = (request, response) => {
      app.db('tasks')
         .where({ id: request.params.id, userId: request.user.id })
         .del()
         .then(rowsDeleted => {
            if (rowsDeleted > 0) {
               response.status(204).send()
            } else {
               const message = `Task with ID: ${request.params.id} not found.`
               response.status(400).send(message)
            }
         })

         .catch(error => response.status(400).json(error))
   }
}