const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
	// [GET] /courses/detail
	show(req, res, next) {
		Course.findOne({ slug: req.param.slug })
			.then((course) => {
				res.render('courses/show', { course: mongooseToObject(course) });
			})
			.catch(next);
	}
}

module.exports = new CourseController();
