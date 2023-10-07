import { Schema , model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
const subscriptionSchema = new Schema({
  subscriptionId: {
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
  planName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  activatedOn: {
    type: Date,
    required: true,
  },
  expiredOn: {
    type: Date,
    required: true,
  },
  paymentAccount: {
    type: String,
    required: true,
  },
  nextBillingOn: {
    type: Date,
    required: true,
  },
  nextBillingAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'expired'],
    default: 'active',
    required: true,
  },
  subStatus: {
    type: String,
    enum: ['subscription', 'recurring', 'suspended'],
    default: 'subscription',
    required: true,
  },
});

// Create a model for the Subscription
const Subscription = model('Subscription', subscriptionSchema);

export default Subscription;
