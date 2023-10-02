import { Schema , model } from 'mongoose';

// Create a schema for the SubscriptionHistory
const subscriptionHistorySchema = new Schema({
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
  subscriptionId: {
    type: Schema.Types.ObjectId,
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
