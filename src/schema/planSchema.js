import { Schema ,  model } from 'mongoose';

// Create a schema for the pricingPlan
const pricingPlanSchema = new Schema({
  planName: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  numberOfEmployees: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    enum: ['monthly', 'annual'],
    required: true,
  },
  description: String,
});

const PricingPlan = model('PricingPlan', pricingPlanSchema);

export default PricingPlan;
