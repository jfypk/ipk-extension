'use strict';

//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of mongoose.scehma. 

var modelSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: String,
	type: String, 
	overall_score: Number,
	energy_use: Number,
	renewable_source: Number,
	energy_usage: Number,
	supply_chain: Number,
	local_suppliers: Number,
	organic_ingredients: Number,
	waste_management: Number,
	composting: Number,
	recycling: Number,
	food_waste: Number,
	labor: Number,
	fair_wage: Number,
	diversity: Number
} {collection: 'ipx'});

module.exports = mongoose.model('model', modelSchema);