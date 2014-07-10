// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser());

var port = process.env.PORT || 8080; 		// set our port

var mongoose   = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Group3'); // connect to our database

var Bear     = require('./app/models/bear');
var Group1SpecificData = require('./app/models/group1SpecificData');
var Group2SpecificData = require('./app/models/group2SpecificData');
var Group3SpecificData = require('./app/models/group3SpecificData');
var Group4SpecificData = require('./app/models/group4SpecificData');
var Group5SpecificData = require('./app/models/group5SpecificData');
var WarningSpecificData = require('./app/models/warningSpecificData');
var EnvironmentSpecificData = require('./app/models/environmentSpecificData');
var SensorsSpecificData = require('./app/models/sensorsSpecificData');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 				// get an instance of the express Router


 //middleware to use for all requests
 router.use(function(req, res, next) {
 	// do logging
 	console.log('Something is happening.');
 	next(); // make sure we go to the next routes and don't stop here
 });


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

// more routes for our API will happen here
router.route('/bears')

	// create a bear (accessed at POST http://localhost:8080/api/bears)
	.post(function(req, res) {
		
		var bear = new Bear(); 		// create a new instance of the Bear model
		bear.name = req.body.name;  // set the bears name (comes from the request)

		// save the bear and check for errors
		bear.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Bear created!' });
		});
		
	})

	// get all the bears (accessed at GET http://localhost:8080/api/bears)
	.get(function(req, res) {
		Bear.find(function(err, bears) {
			if (err)
				res.send(err);

			res.json(bears);
		});
	});


	
	router.route('/bears/:bear_id')

	// get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
	.get(function(req, res) {
		Bear.findById(req.params.bear_id, function(err, bear) {
			if (err)
				res.send(err);
			res.json(bear);
		});
	})
	
		// update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
	.put(function(req, res) {

		// use our bear model to find the bear we want
		Bear.findById(req.params.bear_id, function(err, bear) {

			if (err)
				res.send(err);

			bear.name = req.body.name; 	// update the bears info

			// save the bear
			bear.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Bear updated!' });
			});

		});
	})
	
		// delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
	.delete(function(req, res) {
		Bear.remove({
			_id: req.params.bear_id
		}, function(err, bear) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});

	
	// ..............................................................................................group1SpecificData api
router.route('/group1SpecificData')

	// create a Group1SpecificData instance (accessed at POST http://localhost:8080/api/group1SpecificData)
	.post(function(req, res) {
		
		var group1SpecificData = new Group1SpecificData(); 		// create a new instance of the group1SpecificData model
		group1SpecificData.name = req.body.name;  // set the group1SpecificData name (comes from the request)

		// save the group1SpecificData and check for errors
		group1SpecificData.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'group1SpecificData instance created!' });
		});
		
	})

	// get all the Group1SpecificData instance (accessed at GET http://localhost:8080/api/group1SpecificData)
	.get(function(req, res) {
		Group1SpecificData.find(function(err, group1SpecificData) {
			if (err)
				res.send(err);

			res.json(group1SpecificData);
		});
	});


	router.route('/group1SpecificData/:group1SpecificData_id')

	// get the Group1SpecificData instance with that id (accessed at GET http://localhost:8080/api/group1SpecificData/:group1SpecificData_id)
	.get(function(req, res) {
		Group1SpecificData.findById(req.params.group1SpecificData_id, function(err, group1SpecificData) {
			if (err)
				res.send(err);
			res.json(group1SpecificData);
		});
	})
	
		// update the Group1SpecificData instance with this id (accessed at PUT http://localhost:8080/api/group1SpecificData/:group1SpecificData_id)
	.put(function(req, res) {

		// use our group1SpecificData model to find the group1SpecificData instance we want
		Group1SpecificData.findById(req.params.bear_id, function(err, group1SpecificData) {

			if (err)
				res.send(err);

			group1SpecificData.name = req.body.name; 	// update the group1SpecificData info

			// save the group1SpecificData instance
			group1SpecificData.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'group1SpecificData instance updated!' });
			});

		});
	})
	
		// delete the Group1SpecificData instance with this id (accessed at DELETE http://localhost:8080/api/group1SpecificData/:group1SpecificData_id)
	.delete(function(req, res) {
		Group1SpecificData.remove({
			_id: req.params.group1SpecificData_id
		}, function(err, group1SpecificData) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted group1SpecificData instance' });
		});
	});

	
		// ..............................................................................................group2SpecificData api
router.route('/group2SpecificData')

	// create a group2SpecificData instance (accessed at POST http://localhost:8080/api/group2SpecificData)
	.post(function(req, res) {
		
		var group2SpecificData = new Group2SpecificData(); 		// create a new instance of the group2SpecificData model
		group2SpecificData.name = req.body.name;  // set the group2SpecificData name (comes from the request)

		// save the group2SpecificData and check for errors
		group2SpecificData.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'group2SpecificData instance created!' });
		});
		
	})

	// get all the group2SpecificData instance (accessed at GET http://localhost:8080/api/group2SpecificData)
	.get(function(req, res) {
		Group2SpecificData.find(function(err, group2SpecificData) {
			if (err)
				res.send(err);

			res.json(group2SpecificData);
		});
	});


	router.route('/group2SpecificData/:group2SpecificData_id')

	// get the group2SpecificData instance with that id (accessed at GET http://localhost:8080/api/group2SpecificData/:group2SpecificData_id)
	.get(function(req, res) {
		Group2SpecificData.findById(req.params.group2SpecificData_id, function(err, group2SpecificData) {
			if (err)
				res.send(err);
			res.json(group2SpecificData);
		});
	})
	
		// update the group2SpecificData instance with this id (accessed at PUT http://localhost:8080/api/group2SpecificData/:group2SpecificData_id)
	.put(function(req, res) {

		// use our group2SpecificData model to find the group2SpecificData instance we want
		Group2SpecificData.findById(req.params.group2SpecificData_id, function(err, group2SpecificData) {

			if (err)
				res.send(err);

			group2SpecificData.name = req.body.name; 	// update the group2SpecificData info

			// save the group2SpecificData instance
			group2SpecificData.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'group2SpecificData instance updated!' });
			});

		});
	})
	
		// delete the group2SpecificData instance with this id (accessed at DELETE http://localhost:8080/api/group2SpecificData/:group2SpecificData_id)
	.delete(function(req, res) {
		Group2SpecificData.remove({
			_id: req.params.group2SpecificData_id
		}, function(err, group2SpecificData) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted group2SpecificData instance' });
		});
	});

	
			// ..............................................................................................group3SpecificData api
router.route('/group3SpecificData')

	// create a group3SpecificData instance (accessed at POST http://localhost:8080/api/group3SpecificData)
	.post(function(req, res) {
		
		var group3SpecificData = new Group3SpecificData(); 		// create a new instance of the group3SpecificData model
		group3SpecificData.name = req.body.name;  // set the group3SpecificData name (comes from the request)

		// save the group3SpecificData and check for errors
		group3SpecificData.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'group3SpecificData instance created!' });
		});
		
	})

	// get all the group3SpecificData instance (accessed at GET http://localhost:8080/api/group3SpecificData)
	.get(function(req, res) {
		Group3SpecificData.find(function(err, group3SpecificData) {
			if (err)
				res.send(err);

			res.json(group3SpecificData);
		});
	});


	router.route('/group3SpecificData/:group3SpecificData_id')

	// get the group3SpecificData instance with that id (accessed at GET http://localhost:8080/api/group3SpecificData/:group3SpecificData_id)
	.get(function(req, res) {
		Group3SpecificData.findById(req.params.group3SpecificData_id, function(err, group3SpecificData) {
			if (err)
				res.send(err);
			res.json(group3SpecificData);
		});
	})
	
		// update the group3SpecificData instance with this id (accessed at PUT http://localhost:8080/api/group3SpecificData/:group3SpecificData_id)
	.put(function(req, res) {

		// use our group3SpecificData model to find the group3SpecificData instance we want
		Group3SpecificData.findById(req.params.group3SpecificData_id, function(err, group3SpecificData) {

			if (err)
				res.send(err);

			group3SpecificData.name = req.body.name; 	// update the group3SpecificData info

			// save the group3SpecificData instance
			group3SpecificData.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'group3SpecificData instance updated!' });
			});

		});
	})
	
		// delete the group3SpecificData instance with this id (accessed at DELETE http://localhost:8080/api/group3SpecificData/:group3SpecificData_id)
	.delete(function(req, res) {
		Group3SpecificData.remove({
			_id: req.params.group3SpecificData_id
		}, function(err, group3SpecificData) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted group3SpecificData instance' });
		});
	});

	
			// ..............................................................................................group4SpecificData api
router.route('/group4SpecificData')

	// create a group4SpecificData instance (accessed at POST http://localhost:8080/api/group4SpecificData)
	.post(function(req, res) {
		
		var group4SpecificData = new Group4SpecificData(); 		// create a new instance of the group4SpecificData model
		group4SpecificData.name = req.body.name;  // set the group4SpecificData name (comes from the request)

		// save the group4SpecificData and check for errors
		group4SpecificData.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'group4SpecificData instance created!' });
		});
		
	})

	// get all the group4SpecificData instance (accessed at GET http://localhost:8080/api/group4SpecificData)
	.get(function(req, res) {
		Group4SpecificData.find(function(err, group4SpecificData) {
			if (err)
				res.send(err);

			res.json(group4SpecificData);
		});
	});


	router.route('/group4SpecificData/:group4SpecificData_id')

	// get the group4SpecificData instance with that id (accessed at GET http://localhost:8080/api/group4SpecificData/:group4SpecificData_id)
	.get(function(req, res) {
		Group4SpecificData.findById(req.params.group4SpecificData_id, function(err, group4SpecificData) {
			if (err)
				res.send(err);
			res.json(group4SpecificData);
		});
	})
	
		// update the group4SpecificData instance with this id (accessed at PUT http://localhost:8080/api/group4SpecificData/:group4SpecificData_id)
	.put(function(req, res) {

		// use our group4SpecificData model to find the group4SpecificData instance we want
		Group4SpecificData.findById(req.params.group4SpecificData_id, function(err, group4SpecificData) {

			if (err)
				res.send(err);

			group4SpecificData.name = req.body.name; 	// update the group4SpecificData info

			// save the group4SpecificData instance
			group4SpecificData.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'group4SpecificData instance updated!' });
			});

		});
	})
	
		// delete the group4SpecificData instance with this id (accessed at DELETE http://localhost:8080/api/group4SpecificData/:group4SpecificData_id)
	.delete(function(req, res) {
		Group4SpecificData.remove({
			_id: req.params.group4SpecificData_id
		}, function(err, group4SpecificData) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted group4SpecificData instance' });
		});
	});

	
			// ..............................................................................................group5SpecificData api
router.route('/group5SpecificData')

	// create a group5SpecificData instance (accessed at POST http://localhost:8080/api/group5SpecificData)
	.post(function(req, res) {
		
		var group5SpecificData = new Group5SpecificData(); 		// create a new instance of the group5SpecificData model
		group5SpecificData.name = req.body.name;  // set the group5SpecificData name (comes from the request)

		// save the group5SpecificData and check for errors
		group5SpecificData.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'group5SpecificData instance created!' });
		});
		
	})

	// get all the group5SpecificData instance (accessed at GET http://localhost:8080/api/group5SpecificData)
	.get(function(req, res) {
		Group5SpecificData.find(function(err, group5SpecificData) {
			if (err)
				res.send(err);

			res.json(group5SpecificData);
		});
	});


	router.route('/group5SpecificData/:group5SpecificData_id')

	// get the group5SpecificData instance with that id (accessed at GET http://localhost:8080/api/group5SpecificData/:group5SpecificData_id)
	.get(function(req, res) {
		Group5SpecificData.findById(req.params.group5SpecificData_id, function(err, group5SpecificData) {
			if (err)
				res.send(err);
			res.json(group5SpecificData);
		});
	})
	
		// update the group5SpecificData instance with this id (accessed at PUT http://localhost:8080/api/group5SpecificData/:group5SpecificData_id)
	.put(function(req, res) {

		// use our group5SpecificData model to find the group5SpecificData instance we want
		Group5SpecificData.findById(req.params.group5SpecificData_id, function(err, group5SpecificData) {

			if (err)
				res.send(err);

			group5SpecificData.name = req.body.name; 	// update the group5SpecificData info

			// save the group5SpecificData instance
			group5SpecificData.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'group5SpecificData instance updated!' });
			});

		});
	})
	
		// delete the group5SpecificData instance with this id (accessed at DELETE http://localhost:8080/api/group5SpecificData/:group5SpecificData_id)
	.delete(function(req, res) {
		Group5SpecificData.remove({
			_id: req.params.group5SpecificData_id
		}, function(err, group5SpecificData) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted group5SpecificData instance' });
		});
	});

	
			// ..............................................................................................warningSpecificData api
router.route('/warningSpecificData')

	// create a warningSpecificData instance (accessed at POST http://localhost:8080/api/warningSpecificData)
	.post(function(req, res) {
		
		var warningSpecificData = new WarningSpecificData(); 		// create a new instance of the warningSpecificData model
		warningSpecificData.name = req.body.name;  // set the warningSpecificData name (comes from the request)

		// save the warningSpecificData and check for errors
		warningSpecificData.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'warningSpecificData instance created!' });
		});
		
	})

	// get all the warningSpecificData instance (accessed at GET http://localhost:8080/api/warningSpecificData)
	.get(function(req, res) {
		WarningSpecificData.find(function(err, warningSpecificData) {
			if (err)
				res.send(err);

			res.json(warningSpecificData);
		});
	});


	router.route('/warningSpecificData/:warningSpecificData_id')

	// get the warningSpecificData instance with that id (accessed at GET http://localhost:8080/api/warningSpecificData/:warningSpecificData_id)
	.get(function(req, res) {
		WarningSpecificData.findById(req.params.warningSpecificData_id, function(err, warningSpecificData) {
			if (err)
				res.send(err);
			res.json(warningSpecificData);
		});
	})
	
		// update the warningSpecificData instance with this id (accessed at PUT http://localhost:8080/api/warningSpecificData/:warningSpecificData_id)
	.put(function(req, res) {

		// use our warningSpecificData model to find the warningSpecificData instance we want
		WarningSpecificData.findById(req.params.warningSpecificData_id, function(err, warningSpecificData) {

			if (err)
				res.send(err);

			warningSpecificData.name = req.body.name; 	// update the warningSpecificData info

			// save the warningSpecificData instance
			warningSpecificData.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'warningSpecificData instance updated!' });
			});

		});
	})
	
		// delete the warningSpecificData instance with this id (accessed at DELETE http://localhost:8080/api/warningSpecificData/:warningSpecificData_id)
	.delete(function(req, res) {
		WarningSpecificData.remove({
			_id: req.params.warningSpecificData_id
		}, function(err, warningSpecificData) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted warningSpecificData instance' });
		});
	});

	
				// ..............................................................................................environmentSpecificData api
router.route('/environmentSpecificData')

	// create a environmentSpecificData instance (accessed at POST http://localhost:8080/api/environmentSpecificData)
	.post(function(req, res) {
		
		var environmentSpecificData = new EnvironmentSpecificData(); 		// create a new instance of the environmentSpecificData model
		environmentSpecificData.name = req.body.name;  // set the environmentSpecificData name (comes from the request)

		// save the environmentSpecificData and check for errors
		environmentSpecificData.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'environmentSpecificData instance created!' });
		});
		
	})

	// get all the environmentSpecificData instance (accessed at GET http://localhost:8080/api/environmentSpecificData)
	.get(function(req, res) {
		EnvironmentSpecificData.find(function(err, environmentSpecificData) {
			if (err)
				res.send(err);

			res.json(environmentSpecificData);
		});
	});


	router.route('/environmentSpecificData/:environmentSpecificData_id')

	// get the environmentSpecificData instance with that id (accessed at GET http://localhost:8080/api/environmentSpecificData/:environmentSpecificData_id)
	.get(function(req, res) {
		EnvironmentSpecificData.findById(req.params.environmentSpecificData_id, function(err, environmentSpecificData) {
			if (err)
				res.send(err);
			res.json(environmentSpecificData);
		});
	})
	
		// update the environmentSpecificData instance with this id (accessed at PUT http://localhost:8080/api/environmentSpecificData/:environmentSpecificData_id)
	.put(function(req, res) {

		// use our environmentSpecificData model to find the environmentSpecificData instance we want
		EnvironmentSpecificData.findById(req.params.environmentSpecificData_id, function(err, environmentSpecificData) {

			if (err)
				res.send(err);

			environmentSpecificData.name = req.body.name; 	// update the environmentSpecificData info

			// save the environmentSpecificData instance
			environmentSpecificData.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'environmentSpecificData instance updated!' });
			});

		});
	})
	
		// delete the environmentSpecificData instance with this id (accessed at DELETE http://localhost:8080/api/environmentSpecificData/:environmentSpecificData_id)
	.delete(function(req, res) {
		EnvironmentSpecificData.remove({
			_id: req.params.environmentSpecificData_id
		}, function(err, environmentSpecificData) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted environmentSpecificData instance' });
		});
	});

	
					// ..............................................................................................sensorsSpecificData api
router.route('/sensorsSpecificData')

	// create a sensorsSpecificData instance (accessed at POST http://localhost:8080/api/sensorsSpecificData)
	.post(function(req, res) {
		
		var sensorsSpecificData = new SensorsSpecificData(); 		// create a new instance of the sensorsSpecificData model
		sensorsSpecificData.name = req.body.name;  // set the sensorsSpecificData name (comes from the request)

		// save the sensorsSpecificData and check for errors
		sensorsSpecificData.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'sensorsSpecificData instance created!' });
		});
		
	})

	// get all the sensorsSpecificData instance (accessed at GET http://localhost:8080/api/sensorsSpecificData)
	.get(function(req, res) {
		SensorsSpecificData.find(function(err, sensorsSpecificData) {
			if (err)
				res.send(err);

			res.json(sensorsSpecificData);
		});
	});


	router.route('/sensorsSpecificData/:sensorsSpecificData_id')

	// get the sensorsSpecificData instance with that id (accessed at GET http://localhost:8080/api/sensorsSpecificData/:sensorsSpecificData_id)
	.get(function(req, res) {
		SensorsSpecificData.findById(req.params.sensorsSpecificData_id, function(err, sensorsSpecificData) {
			if (err)
				res.send(err);
			res.json(sensorsSpecificData);
		});
	})
	
		// update the sensorsSpecificData instance with this id (accessed at PUT http://localhost:8080/api/sensorsSpecificData/:sensorsSpecificData_id)
	.put(function(req, res) {

		// use our sensorsSpecificData model to find the sensorsSpecificData instance we want
		SensorsSpecificData.findById(req.params.sensorsSpecificData_id, function(err, sensorsSpecificData) {

			if (err)
				res.send(err);

			sensorsSpecificData.name = req.body.name; 	// update the sensorsSpecificData info

			// save the sensorsSpecificData instance
			sensorsSpecificData.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'sensorsSpecificData instance updated!' });
			});

		});
	})
	
		// delete the sensorsSpecificData instance with this id (accessed at DELETE http://localhost:8080/api/sensorsSpecificData/:sensorsSpecificData_id)
	.delete(function(req, res) {
		SensorsSpecificData.remove({
			_id: req.params.sensorsSpecificData_id
		}, function(err, sensorsSpecificData) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted sensorsSpecificData instance' });
		});
	});

	
	
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);