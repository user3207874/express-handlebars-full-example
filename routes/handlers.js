const express = require('express');
const router = express.Router(); 
const handlebars = require('handlebars');


// Routing 
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        name: 'Esterling Accime',
        style:  'home.css',
        age: 5,
        isDisplayName: true,
        isAgeEnabled: true,
        people: [
            {firstName: "Yehuda", lastName: "Katz"},
            {firstName: "Carl", lastName: "Lerche"},
            {firstName: "Alan", lastName: "Johnson"}
        ],

        test: '<h3>Welcome to New Orlands</h3>',
    });
});

router.post('/', function(req, res){
  console.log(req)
  var template = handlebars.compile(req.body.body)
  var result = template({})
  res.render('index', {
    result: result,
  });
});


router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        style:  'about.css',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, eligendi eius! Qui'
    });
});



router.get('/dashboard', (req, res) => {

    res.render('dashboard', {
        isListEnabled: true,
        style:  'dashboard.css',
        author: {
            firstName: 'Peter',
            lastName: 'James',
            project: {
                name: 'Build Random Quote'
            }
        }
    });
});

router.get('/each/helper', (req, res) => {

    res.render('contact', {
        people: [
            "James",
            "Peter",
            "Sadrack",
            "Morissa"
        ],
        user: {
            username: 'accimeesterlin',
            age: 20,
            phone: 4647644
        },
        lists: [
            {
                items: ['Mango', 'Banana', 'Pinerouterle']
            },

            {
                items: ['Potatoe', 'Manioc', 'Avocado']
            }
        ]
    });
});



router.get('/look', (req, res) => {

    res.render('lookup', {
        user: {
            username: 'accimeesterlin',
            age: 20,
            phone: 4647644
        },
        people: [
            "James",
            "Peter",
            "Sadrack",
            "Morissa"
        ]
    });
});

module.exports = router;


