const Student = require('../models').Student;
const Classroom = require('../models').Classroom;
const Course = require('../models').Course;
module.exports = (app) => {

    app.get('/api',(req,res) => {
        return Student
        .findAll({
          include: [{
            model: Classroom,
            as: 'classroom'
          },{
            model: Course,
            as: 'courses'
          }],
          order: [
            ['createdAt', 'DESC'],
            [{ model: Course, as: 'courses' }, 'createdAt', 'DESC'],
          ],
        })
        .then((students) => res.status(200).send(students))
        .catch((error) => { res.status(400).send(error); });
    })

   
}