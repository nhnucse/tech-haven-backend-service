import { Schema , model } from 'mongoose';
const subscriptionSchema = new Schema({
  shopId: {
    type: Schema.Types.ObjectId,
    ref: 'ShopAccount',
    required: true,
  },
  planId: {
    type: Schema.Types.ObjectId,
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
