const express = require('express');
const Subject = require('../model/subject');
const router = express.Router();

router.get('/', (req, res, next) => res.status(200).send(/*TODO: edu 컴포넌트 전송*/));
router.get('/:subject/:no', async (req, res) => {
  const { subject, no } = req.params;

  try {
    const subjectObj = await Subject.findOne({ name: subject, lectures: { $elemMatch: {no: no}} });
    if (subjectObj == null)
      return res.status(404).end();

    res.status(200).json({
      index: no,
      titles: subjectObj.lectures[no - 1].title,
      content: subjectObj.lectures[no - 1].content,
      src: subjectObj.lectures[no - 1].src
    });
  } catch (err) {
    console.log(err);
    res.status(500).end('error!');
  }
});

module.exports = router;
