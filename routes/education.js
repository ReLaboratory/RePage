const express = require('express');
const path = require('path');
const Subject = require('../model/subject');
const router = express.Router();

router.get('/:subject/:no', async (req, res) => {
  const { subject, no } = req.params;

  try {
    const subjectObj = await Subject.findOne({ name: subject });
    if (subjectObj == null || subjectObj.lectures[no] == null)
    return res.status(404).end();
    
    res.status(200).json({
      index: no - 1,
      titles: subjectObj.lectures.map(e => e.title),
      content: subjectObj.lectures[no - 1].content,
      src: subjectObj.lectures[no - 1].src
    });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

module.exports = router;
