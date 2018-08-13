const express = require('express');
const Subject = require('../model/subject');
const router = express.Router();

// router.get('/', (req, res, next) => res.render('education.ejs'));
router.get('/:subject/:no', async (req, res) => {
  const { subject, no } = req.params;

  try {
    const subjectObj = await Subject.findOne({ name: subject });
    let lecture;
    console.log(typeof subjectObj);
    for(let i = 0; i < subjectObj.lectures.length; i++) {
      if (subjectObj.lectures[i].no == no)
         lecture = subjectObj.lectures[i];
      subjectObj.lectures[i] = subjectObj.lectures[i].title;
    }

    if (subjectObj == null || lecture == undefined)
      return res.status(404).end('<h1>404 Not Found</h1>');

    res.status(200).render('../views/education.ejs', {
      lectures: subjectObj.lectures,
      title: lecture.title,
      content: lecture.content,
      link: lecture.link
    });
  } catch (err) {
    console.log(err);
    res.status(500).end('error!');
  }
});

module.exports = router;
