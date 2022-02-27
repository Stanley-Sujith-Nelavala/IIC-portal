const mongoose = require('mongoose')

const StorySchema2 = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  title2: {
    type: String,
    required: true,
  },
  title3: {
    type: String,
    required: true,
  },
  title4: {
    type: String,
    required: true,
  },
  title5: {
    type: String,
    required: true,
  },
  title6: {
    type: String,
    required: true,
  },
  title7: {
    type: String,
    required: true,
  },
  title8: {
    type: String,
    required: true,
  },
  title9: {
    type: String,
    required: true,
  },
  title10: {
    type: String,
    required: true,
  },
  title11: {
    type: String,
    required: true,
  },
  title12: {
    type: String,
    required: true,
  },
  title13: {
    type: String,
    required: true,
  },
  title14: {
    type: String,
    required: true,
  },
  title15: {
    type: String,
    required: true,
  },
  title16: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'public',
    enum: ['public', 'private'],
  },
  status1: {
    type: String,
    default: 'public1',
    enum: ['public1', 'private1'],
  },
  status2: {
    type: String,
    default: 'public2',
    enum: ['public2', 'private2'],
  },
  status3: {
    type: String,
    default: 'public3',
    enum: ['public3', 'private3'],
  },
  status4: {
    type: String,
    default: 'public4',
    enum: ['public4', 'private4'],
  },
  status5: {
    type: String,
    default: 'Technological innovation',
    enum: ['Technological innovation', 'Non-Technological / Social / Community Innovation'],
  },
  status6: {
    type: String,
    default: 'IP/Patented Technology',
    enum: ['IP/Patented Technology', 'Non-Patented Technology'],
  },
  status7: {
    type: String,
    default: 'Faculty',
    enum: ['Faculty', 'Staff', 'Student', 'Faculty and Student', 'Incubatee Entrepreneur', 'Alumini Entrepreneur', 'Innovator/ Entrepreeur External to institute'],
  },
  status8: {
    type: String,
    default: 'Male',
    enum: ['Male', 'Female', 'Transgender'],
  },
  status9: {
    type: String,
    default: 'Faculty',
    enum: ['Faculty', 'Staff', 'Student', 'Faculty and Student', 'Incubatee Entrepreneur', 'Alumini Entrepreneur', 'Innovator/ Entrepreeur External to institute'],
  },
  status10: {
    type: String,
    default: 'TRL 0',
    enum: ['TRL 0', 'TRL 1', 'TRL 2', 'TRL 3', 'TRL 4', 'TRL 5', 'TRL 6', 'TRL 7', 'TRL 8', 'TRL 9'],
  },
  status11: {
    type: String,
    default: 'TRL 0',
    enum: ['TRL 0', 'TRL 1', 'TRL 2', 'TRL 3', 'TRL 4', 'TRL 5', 'TRL 6', 'TRL 7', 'TRL 8', 'TRL 9'],
  },
  status12: {
    type: String,
    default: 'Innovation Development Dropped',
    enum: ['Innovation Development Dropped', 'Innovation Development Ongoing', 'Innovation Development Completed', 'Innovation adopted and Implemented at Ground'],
  },
  status13: {
    type: String,
    default: 'Yes',
    enum: ['Yes', 'No'],
  },
  status14: {
    type: String,
    default: 'Govt. Agency (Central)',
    enum: ['Govt. Agency (Central)', 'Govt. Agency (State)', 'Educational Institution', 'Corporate/industry Association', 'Non Govt. Agency', 'International Agency'],
  },
  status15: {
    type: String,
    default: 'Yes',
    enum: ['Yes', 'No'],
  },
  status16: {
    type: String,
    default: 'Yes',
    enum: ['Yes', 'No'],
  },
  status17: {
    type: String,
    default: 'Yes',
    enum: ['Yes', 'No'],
  },
  status18: {
    type: String,
    default: 'Yes',
    enum: ['Yes', 'No'],
  },
  status19: {
    type: String,
    default: 'Product innovation',
    enum: ['Product innovation', 'Process innovation', 'Service innovation', 'Market place Innovation', 'Reverse Engineering', 'Management Process'],
  },
  status20: {
    type: String,
    default: 'Faculty',
    enum: ['Faculty', 'Staff', 'Student', 'Faculty and Student', 'Incubatee Entrepreneur', 'Alumini Entrepreneur', 'Innovator/ Entrepreeur External to institute'],
  },
  status21: {
    type: String,
    default: 'Male',
    enum: ['Male', 'Female', 'Transgender'],
  },
  status22: {
    type: String,
    default: 'Govt. Agency (Central)',
    enum: ['Govt. Agency (Central)', 'Govt. Agency (State)', 'Educational Institution', 'Corporate/industry Association', 'Non Govt. Agency', 'International Agency'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Story2', StorySchema2)
