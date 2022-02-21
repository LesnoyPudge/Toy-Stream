const {Router} = require('express')
const Candidate = require('../models/Candidate')
const router = Router();



router.post('/add', async (req, res) => {
    const { 
        candidateName, 
        candidateEmail, 
        candidatePhone, 
        candidateResume, 
        extraFiles, 
        comment, 
        requestTime, 
        vacancyId 
    } = req.body;

    try {
        const candidate = new Candidate({
            candidateName, 
            candidateEmail, 
            candidatePhone, 
            candidateResume, 
            extraFiles, 
            comment, 
            requestTime, 
            vacancyId
        });
        // await candidate.save();

        res.status(201).json({ message: 'Заявка отправлена' });
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

module.exports = router;