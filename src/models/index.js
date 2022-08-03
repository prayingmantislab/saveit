// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Reminder, Recipient, Order, CartProduct, Product, User, ReminderRecipient } = initSchema(schema);

export {
  Reminder,
  Recipient,
  Order,
  CartProduct,
  Product,
  User,
  ReminderRecipient
};