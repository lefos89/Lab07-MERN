//todoList.js 

const mongoose = require('mongoose'); 

const todoSchema = new mongoose.Schema({ 
	task: { 
		type: String, 
	
	}, 
	status: { 
		type: String, 
	},
	description: { 
		type: String,
	},
	category: { 
		type: String, 
	 
	},
	deadline: { 
		type: Date, 
	}, 
}); 


const todoList = mongoose.model("todo", todoSchema); 

module.exports = todoList;
