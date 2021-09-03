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
	// [GET] /courses/create
	create(req, res, next) {
		res.render('courses/create');
	}

	// [POST] /courses/create
	store(req, res, next) {
		const formData = req.body;
		formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
		const course = new Course(formData);
		course
			.save()
			.then(() => res.redirect('/'))
			.catch((err) => {});
	}
}

module.exports = new CourseController();
