var express = require('express');
var assert = require('assert');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const a = "Kathir";
  console.log(a);
  res.render('index', { title: 'Express' });

});

router.get('/test', function(req, res, next) {
  var lengths = ['one', 'two', 'three'];
  var length = ['4','5','6'];

  res.send({data : [...length,...lengths]});
  //res.render('index', { title: 'Express' });

});

class Demo {
  // const b = ['bb'];   WHy?
  constructor() {
    console.log("Class called")
    this.length =  ['one', 'two', 'three'];
  }
  // This returning fn itself why?
  changeToSize = () => this.length.map(data => data.length); 

  //Default param Method
}


router.get('/arrow', function(req, res, next) {
  const a = ['One'];
  a.push('Two');
  a.push('Three')
  var lengths = a.map(s => s.length);
  var v1 = new Demo();

  res.send({data :" Length of ['one', 'two', 'three'] respectively "+lengths});
  //res.render('index', { title: 'Express' });
});

router.get('/class', function(req, res, next) {
  const v1 = new Demo();
  res.send({data :" Length of ['one', 'two', 'three'] respectively "+v1.changeToSize});
});

router.get('/map', function(req, res, next) {
  const v1 = new Demo();
  var map1 = new Map([
    [1,'a'],
    [2,'b'],
    [3,'c'],
    [4,'d']
  ]);
  
  var map2 = new Map(
    [...map1]
    .filter(([key,value]) => key > 2)
    .map(([key,value]) => [key * 2, value])
  );
  res.send({data :"Map Data of key 6 & 8"+map2.get(6)+' & '+map2.get(8)});
});

// Array Methods

router.get('/ArrayMethods/concat', function(req, res, callback) { 
  const array1 = ['a','b','c'];
  let array2 = ['d','e','f'];
  // concat() will combine mentioned arrays into a single array
  res.send({data: array1.concat(array2)});
});

router.get('/ArrayMethods/indexOf', function(req, res, callback) { 
  const array1 = ['a','b','c'];
  // Indexof will give you the mentioned values index postion
  res.send({data: "Index of c in array [a,b,c] : " + array1.indexOf('c')});
});

router.get('/ArrayMethods/join', function(req, res, callback) { 
  const array1 = ['a','b','c'];
  // join will return array as string
  res.send({data: "Index of c in array [a,b,c] : " + array1.join()});
});

router.get('/ArrayMethods/lastIndexOf', function(req, res, callback) { 
  const array1 = ['a','b','c','a','b','c','a','b','c'];
  // lastIndexOf will return last index position of mentioned value in array
  res.send({data: "Index of a in array [a,b,c,a,b,c,a,b,c] : " + array1.lastIndexOf('a')});
});

let array3 = [];

router.get('/ArrayMethods/push', function(req, res, callback) { 
  // push will add a new value into end of array
  array3.push('a');
  array3.push('b');
  array3.push('c')
  res.send({data: "Pushing a,b,c in to array : " + array3.join()});
});

router.get('/ArrayMethods/pop', function(req, res, callback) { 
  // pop will delete value in end of array
  array3.pop()
  res.send({data: "Executing pop once and array is change to : " + array3.join()});
});

router.get('/ArrayMethods/reverse', function(req, res, callback) { 
  const array1 = ['a','b','c','a','b','c','a','b','c'];
  // reverse will print reverse of arry
  res.send({data: "Reverse of array [a,b,c,a,b,c,a,b,c] : " + array1.reverse()});
});

router.get('/ArrayMethods/splice', function(req, res, callback) { 
  const array1 = ['a','b','f','g','h','i','j'];
  // splice will add/remove elements in array basced on param passsed
  // splice(position , removal items, ourvalues to add in array)
  //if we give 0 then nothing will be removed and our values will be added in mentioned position
  res.send({data: "Splice of array [a,b,e,f,g,h,i] by adding c & d: " + array1.splice(2,0,'a','b')});
});



module.exports = router;
