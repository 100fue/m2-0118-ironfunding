const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TYPES = require('./campaign-types');
const moment = require('moment');

const CampaignSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: TYPES, required: true },
  creator_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  goal: { type: Number, required: true },
  backerCount: { type: Number, default: 0 },
  totalPledged: { type: Number, default: 0 },
  deadline: { type: Date, required: true },
  imgUrl: { type: String, default: "https://placeholdit.imgix.net/~text?txtsize=50&txt=Ironfunding&w=650&h=250" }
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  });

CampaignSchema.virtual('timeRemaining').get(function () {
  return moment(this.deadline).fromNow(true);
});


module.exports = mongoose.model('Campaign', CampaignSchema);