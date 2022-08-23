import {
  ModelInit,
  MutableModel,
  PersistentModelConstructor,
} from '@aws-amplify/datastore';

type ReminderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

type RecipientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

type CartProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

type ReminderRecipientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

export declare class Reminder {
  readonly id: string;
  readonly event?: string | null;
  readonly date: string;
  readonly Recipients?: (ReminderRecipient | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(
    // @ts-ignore
    init: ModelInit<Reminder, ReminderMetaData>,
  );
  static copyOf(
    source: Reminder,
    mutator: (
      // @ts-ignore
      draft: MutableModel<Reminder, ReminderMetaData>,
    ) => // @ts-ignore
    MutableModel<Reminder, ReminderMetaData> | void,
  ): Reminder;
}

export declare class Recipient {
  readonly id: string;
  readonly name: string;
  readonly relation: string;
  readonly birthDay?: string | null;
  readonly address: string;
  readonly interests?: string[] | null;
  readonly reminders?: (ReminderRecipient | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(
    // @ts-ignore
    init: ModelInit<Recipient, RecipientMetaData>,
  );
  static copyOf(
    source: Recipient,
    mutator: (
      // @ts-ignore
      draft: MutableModel<Recipient, RecipientMetaData>,
    ) => // @ts-ignore

    MutableModel<Recipient, RecipientMetaData> | void,
  ): Recipient;
}

export declare class Order {
  readonly id: string;
  readonly CartProducts?: (CartProduct | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(
    // @ts-ignore
    init: ModelInit<Order, OrderMetaData>,
  );
  static copyOf(
    source: Order,
    mutator: (
      // @ts-ignore
      draft: MutableModel<Order, OrderMetaData>,
    ) => // @ts-ignore
    MutableModel<Order, OrderMetaData> | void,
  ): Order;
}

export declare class CartProduct {
  readonly id: string;
  readonly userSub: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly productID: string;
  readonly product?: Product | null;
  readonly orderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(
    // @ts-ignore
    init: ModelInit<CartProduct, CartProductMetaData>,
  );
  static copyOf(
    source: CartProduct,
    mutator: (
      // @ts-ignore
      draft: MutableModel<CartProduct, CartProductMetaData>,
    ) => // @ts-ignore
    MutableModel<CartProduct, CartProductMetaData> | void,
  ): CartProduct;
}

export declare class Product {
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly image: string;
  readonly images: string[];
  readonly options?: string[] | null;
  readonly avgRating?: number | null;
  readonly ratings?: number | null;
  readonly price: number;
  readonly oldPrice?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(
    // @ts-ignore
    init: ModelInit<Product, ProductMetaData>,
  );
  static copyOf(
    source: Product,
    mutator: (
      // @ts-ignore
      draft: MutableModel<Product, ProductMetaData>,
    ) => // @ts-ignore
    MutableModel<Product, ProductMetaData> | void,
  ): Product;
}

export declare class User {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly phoneNumber: string;
  readonly birthDay?: string | null;
  readonly sex?: string | null;
  readonly city?: string | null;
  readonly email: string;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(
    // @ts-ignore
    init: ModelInit<User, UserMetaData>,
  );
  static copyOf(
    source: User,
    mutator: (
      // @ts-ignore
      draft: MutableModel<User, UserMetaData>,
    ) => // @ts-ignore
    MutableModel<User, UserMetaData> | void,
  ): User;
}

export declare class ReminderRecipient {
  readonly id: string;
  readonly reminder: Reminder;
  readonly recipient: Recipient;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(
    // @ts-ignore
    init: ModelInit<ReminderRecipient, ReminderRecipientMetaData>,
  );
  static copyOf(
    source: ReminderRecipient,
    mutator: (
      // @ts-ignore

      draft: MutableModel<ReminderRecipient, ReminderRecipientMetaData>,
    ) => // @ts-ignore
    MutableModel<ReminderRecipient, ReminderRecipientMetaData> | void,
  ): ReminderRecipient;
}
