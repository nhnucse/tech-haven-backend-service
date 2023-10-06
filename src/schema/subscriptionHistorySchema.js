import { Schema , model } from 'mongoose';
const { v4: uuidv4 } = require('uuid');
// Create a schema for the SubscriptionHistory
const subscriptionHistorySchema = new Schema({
  subscriptionHistoryId: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  shopId: {
    type: String,
    ref: 'ShopAccount',
    required: true,
  },
  planId: {
    type: String,
    ref: 'PricingPlan',
    required: true,
  },
  subscriptionId: {
    type: String,
    ref: 'Subscription',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  price: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
});

// Create a model for the SubscriptionHistory
const SubscriptionHistory = model('SubscriptionHistory', subscriptionHistorySchema);

export default SubscriptionHistory;
