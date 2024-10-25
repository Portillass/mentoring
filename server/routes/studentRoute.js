import express from 'express'
import { getStudents, getStudent, postStudent} from '../comtrollers/studentController.js'

const router = express.Router();

router.get('/' , getStudents);

router.get('/:id' , getStudent);

router.post('/' , postStudent);


export default router;





