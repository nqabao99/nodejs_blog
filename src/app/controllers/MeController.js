const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
	// [GET] /courses/detail
	storedCourse(req, res, next) {
		Promise.all([Course.find({}), Course.countDocumentsDeleted()])
			.then(([courses, deleteCount]) =>
				res.render('me/stored-course', {
					deleteCount,
					courses: mutipleMongooseToObject(courses),
				})
			)
			.catch(next);

		// Course.countDocumentsDeleted()
		// 	.then((deleteCount) => {
		// 		console.log(deleteCount);
		// 	})
		// 	.catch(() => {});

		// Course.find({})
		// 	.then((courses) =>
		// 		res.render('me/stored-course', {
		// 			courses: mutipleMongooseToObject(courses),
		// 		})
		// 	)
		// 	.catch(next);
	}
	// [GET] /courses/trash
	trashCourse(req, res, next) {
		Course.findDeleted()
			.then((courses) =>
				res.render('me/trash-course', {
					courses: mutipleMongooseToObject(courses),
				})
			)
			.catch(next);
	}
}

module.exports = new MeController();
