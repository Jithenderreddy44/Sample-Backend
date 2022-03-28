const express = require('express')
const data = require('../data/prize.json');

const router = new express.Router();

// router
// getting nobel prize winner with name. 
router.get('/nobel-prize/winners-name',(req,res) =>
{ 
  try
  {
    if(req.query.name)
    {
      console.log(req.params.name);
      const filteredData = data.prizes.filter((prize) =>{
        return prize.laureates.some((element) =>
        {
          return element.firstname.toLowerCase() ===  req.query.name.toLowerCase();       
        }) 
      });
      console.log(filteredData)
      res.send(filteredData);
    }
  }
  catch(e)
  {
      res.status(500).send(e)
  }
});

// getting nobel prize winners with name and year
router.get('/nobel-prize/winners-name-year',(req,res) =>
{ 
  try
  {
    if(req.query.name && req.query.year)
    {
      const filteredData = data.prizes.filter((prize) =>{
        return prize.year === req.query.year && prize.laureates.some((element) =>
        {
          return element.firstname.toLowerCase() ===  req.query.name.toLowerCase();       
        }) 
      });
      console.log(filteredData)
      res.send(filteredData);
    }
  }
  catch(e)
  {
      res.status(500).send(e)
  }
});

// getting nobel prize winners with category and year
router.get('/nobel-prize/winners-category-year',(req,res) =>
{ 
  try
  {
    if(req.query.category && req.query.year)
    {
      const filteredData = data.prizes.filter((prize) =>{
        return prize.year === req.query.year && prize.category.toLocaleLowerCase() === req.query.category.toLocaleLowerCase();
      });
      res.send(filteredData);
    }
  }
  catch(e)
  {
      res.status(500).send(e)
  }
});

// getting nobel prize winners with latest year first
router.get('/nobel-prize/winners',(req,res) =>
{ 
  try
  {
      const filteredData = data.prizes.sort((a,b) =>
      {
        return Number(b.year) - Number(a.year);
      });
      console.log(filteredData)
      res.send(filteredData);
  }
  catch(e)
  {
      res.status(500).send(e)
  }
});


module.exports = router;