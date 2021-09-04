const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
	// [GET] /courses/detail
	storedCourse(req, res, next) {
		Course.find()
			.then((courses) =>
				res.render('me/stored-course', {
					courses: mutipleMongooseToObject(courses),
				})
			)
			.catch(next);
	}
}

module.exports = new MeController();
