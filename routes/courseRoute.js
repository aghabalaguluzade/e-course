import express from "express";
import * as courseController from "../controllers/courseController.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.route('/')
     .post(roleMiddleware(["teacher","admin"]), courseController.createCourse)
     .get(courseController.getAllCourse);

router.route('/:slug')
     .get(courseController.getCourse);
router.route('/enroll').post(courseController.enrollCourse);
router.route('/release').post(courseController.releaseCourse);
router.route('/:slug').delete(courseController.deleteCourse);
router.route('/:slug').put(courseController.updateCourse);

export default router;