import Student from '../models/student.js'

const getStudents = async (req, res) =>{
    try{
        const student = await Student.find();
        res.send(student);

    }catch (error){
        console.log(error)
    }
}

const getStudent = async (req, res) =>{
    try{
        const student = await StudentById(req.params.id)
        res.send(student);

    }catch (error){
        console.log(error)
    }
}

const postStudent = async (req, res) =>{
    try{
        const student = new Student (req, body)
        const saveStudent = await student.save();
        res.status(200).json(savedStudent);
    }catch (error){
        console.log(error)
    }
};
export {getStudent, getStudent, postStudent};
