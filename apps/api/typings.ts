/* eslint-disable */
export type Schema = {
  '_prisma_migrations': {
    plain: {
      'id': string;
      'checksum': string;
      'finished_at': string;
      'migration_name': string;
      'logs': string;
      'rolled_back_at': string;
      'started_at': string;
      'applied_steps_count': number;
    };
    nested: {};
    flat: {};
  };
  'brands': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'name': string;
    };
    nested: {};
    flat: {};
  };
  'cart_items': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'user_id': string;
      'pool_item_id': string;
      'drop_id': string;
    };
    nested: {
      'user': Schema['users']['plain'] & Schema['users']['nested'];
      'pool_item': Schema['pool_items']['plain'] & Schema['pool_items']['nested'];
      'drop': Schema['drops']['plain'] & Schema['drops']['nested'];
    };
    flat: {
      'user:id': string;
      'user:created_at': string;
      'user:updated_at': string;
      'user:phone_number': string;
      'user:name': string;
      'user:instagram': string;
      'user:profile_image_path': string;
      'user:stripe_customer_id': string;
      'user:profile_image_url': string;
      'user:subscription:id': string;
      'user:subscription:created_at': string;
      'user:subscription:updated_at': string;
      'user:subscription:user_id': string;
      'user:subscription:subscription_product_id': string;
      'user:subscription:status': 'ACTIVE' | 'CANCELED' | 'PAST_DUE' | 'UNPAID' | 'INCOMPLETE' | 'INCOMPLETE_EXPIRED' | 'TRIALING' | 'PAUSED';
      'user:subscription:subscription_product:id': string;
      'user:subscription:subscription_product:created_at': string;
      'user:subscription:subscription_product:updated_at': string;
      'user:subscription:subscription_product:name': string;
      'user:subscription:subscription_product:stripe_product_id': string;
      'pool_item:id': string;
      'pool_item:created_at': string;
      'pool_item:updated_at': string;
      'pool_item:name': string;
      'pool_item:brand': string;
      'pool_item:price': number;
      'pool_item:user_id': string;
      'pool_item:size_id': string;
      'pool_item:run_to_size': number;
      'pool_item:description': string;
      'pool_item:review_id': string;
      'pool_item:image_paths': Array<string>;
      'pool_item:product_id': string;
      'pool_item:image_urls': Array<string>;
      'pool_item:user:id': string;
      'pool_item:user:created_at': string;
      'pool_item:user:updated_at': string;
      'pool_item:user:phone_number': string;
      'pool_item:user:name': string;
      'pool_item:user:instagram': string;
      'pool_item:user:profile_image_path': string;
      'pool_item:user:stripe_customer_id': string;
      'pool_item:user:profile_image_url': string;
      'pool_item:user:subscription:id': string;
      'pool_item:user:subscription:created_at': string;
      'pool_item:user:subscription:updated_at': string;
      'pool_item:user:subscription:user_id': string;
      'pool_item:user:subscription:subscription_product_id': string;
      'pool_item:user:subscription:status': 'ACTIVE' | 'CANCELED' | 'PAST_DUE' | 'UNPAID' | 'INCOMPLETE' | 'INCOMPLETE_EXPIRED' | 'TRIALING' | 'PAUSED';
      'pool_item:user:subscription:subscription_product:id': string;
      'pool_item:user:subscription:subscription_product:created_at': string;
      'pool_item:user:subscription:subscription_product:updated_at': string;
      'pool_item:user:subscription:subscription_product:name': string;
      'pool_item:user:subscription:subscription_product:stripe_product_id': string;
      'pool_item:size:id': string;
      'pool_item:size:created_at': string;
      'pool_item:size:updated_at': string;
      'pool_item:size:size': string;
      'pool_item:size:region': 'US' | 'UK' | 'EU' | 'JP' | 'IT' | 'FR';
      'pool_item:size:size_standard_id': string;
      'pool_item:size:size_standard:id': string;
      'pool_item:size:size_standard:created_at': string;
      'pool_item:size:size_standard:updated_at': string;
      'pool_item:size:size_standard:size': string;
      'pool_item:size:size_standard:category': 'TOP' | 'BOTTOM' | 'OUTER' | 'SHOES' | 'ACCESSORY' | 'DRESS';
      'pool_item:review:id': string;
      'pool_item:review:created_at': string;
      'pool_item:review:updated_at': string;
      'pool_item:review:description': string;
      'pool_item:review:price': number;
      'pool_item:review:accepted_at': string;
      'pool_item:review:rejected_at': string;
      'pool_item:product:id': string;
      'pool_item:product:created_at': string;
      'pool_item:product:updated_at': string;
      'pool_item:product:name': string;
      'pool_item:product:brand_id': string;
      'pool_item:product:description': string;
      'pool_item:product:price': number;
      'pool_item:product:image_paths': Array<string>;
      'pool_item:product:run_to_size': number;
      'pool_item:product:brand:id': string;
      'pool_item:product:brand:created_at': string;
      'pool_item:product:brand:updated_at': string;
      'pool_item:product:brand:name': string;
      'drop:id': string;
      'drop:created_at': string;
      'drop:updated_at': string;
      'drop:name': string;
      'drop:endsAt': string;
      'drop:startsAt': string;
    };
  };
  'clothing_size_standards': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'size': string;
      'category': 'TOP' | 'BOTTOM' | 'OUTER' | 'SHOES' | 'ACCESSORY' | 'DRESS';
    };
    nested: {};
    flat: {};
  };
  'clothing_sizes': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'size': string;
      'region': 'US' | 'UK' | 'EU' | 'JP' | 'IT' | 'FR';
      'size_standard_id': string;
    };
    nested: {
      'size_standard': Schema['clothing_size_standards']['plain'] & Schema['clothing_size_standards']['nested'];
    };
    flat: {
      'size_standard:id': string;
      'size_standard:created_at': string;
      'size_standard:updated_at': string;
      'size_standard:size': string;
      'size_standard:category': 'TOP' | 'BOTTOM' | 'OUTER' | 'SHOES' | 'ACCESSORY' | 'DRESS';
    };
  };
  'drops': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'name': string;
      'endsAt': string;
      'startsAt': string;
    };
    nested: {};
    flat: {};
  };
  'pool_item_reviews': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'description': string;
      'price': number;
      'accepted_at': string;
      'rejected_at': string;
    };
    nested: {
      'pool_item': Schema['pool_items']['plain'] & Schema['pool_items']['nested'];
    };
    flat: {
      'pool_item:id': string;
      'pool_item:created_at': string;
      'pool_item:updated_at': string;
      'pool_item:name': string;
      'pool_item:brand': string;
      'pool_item:price': number;
      'pool_item:user_id': string;
      'pool_item:size_id': string;
      'pool_item:run_to_size': number;
      'pool_item:description': string;
      'pool_item:review_id': string;
      'pool_item:image_paths': Array<string>;
      'pool_item:product_id': string;
      'pool_item:image_urls': Array<string>;
      'pool_item:user:id': string;
      'pool_item:user:created_at': string;
      'pool_item:user:updated_at': string;
      'pool_item:user:phone_number': string;
      'pool_item:user:name': string;
      'pool_item:user:instagram': string;
      'pool_item:user:profile_image_path': string;
      'pool_item:user:stripe_customer_id': string;
      'pool_item:user:profile_image_url': string;
      'pool_item:user:subscription:id': string;
      'pool_item:user:subscription:created_at': string;
      'pool_item:user:subscription:updated_at': string;
      'pool_item:user:subscription:user_id': string;
      'pool_item:user:subscription:subscription_product_id': string;
      'pool_item:user:subscription:status': 'ACTIVE' | 'CANCELED' | 'PAST_DUE' | 'UNPAID' | 'INCOMPLETE' | 'INCOMPLETE_EXPIRED' | 'TRIALING' | 'PAUSED';
      'pool_item:user:subscription:subscription_product:id': string;
      'pool_item:user:subscription:subscription_product:created_at': string;
      'pool_item:user:subscription:subscription_product:updated_at': string;
      'pool_item:user:subscription:subscription_product:name': string;
      'pool_item:user:subscription:subscription_product:stripe_product_id': string;
      'pool_item:size:id': string;
      'pool_item:size:created_at': string;
      'pool_item:size:updated_at': string;
      'pool_item:size:size': string;
      'pool_item:size:region': 'US' | 'UK' | 'EU' | 'JP' | 'IT' | 'FR';
      'pool_item:size:size_standard_id': string;
      'pool_item:size:size_standard:id': string;
      'pool_item:size:size_standard:created_at': string;
      'pool_item:size:size_standard:updated_at': string;
      'pool_item:size:size_standard:size': string;
      'pool_item:size:size_standard:category': 'TOP' | 'BOTTOM' | 'OUTER' | 'SHOES' | 'ACCESSORY' | 'DRESS';
      'pool_item:product:id': string;
      'pool_item:product:created_at': string;
      'pool_item:product:updated_at': string;
      'pool_item:product:name': string;
      'pool_item:product:brand_id': string;
      'pool_item:product:description': string;
      'pool_item:product:price': number;
      'pool_item:product:image_paths': Array<string>;
      'pool_item:product:run_to_size': number;
      'pool_item:product:brand:id': string;
      'pool_item:product:brand:created_at': string;
      'pool_item:product:brand:updated_at': string;
      'pool_item:product:brand:name': string;
    };
  };
  'pool_items': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'name': string;
      'brand': string;
      'price': number;
      'user_id': string;
      'size_id': string;
      'run_to_size': number;
      'description': string;
      'review_id': string;
      'image_paths': Array<string>;
      'product_id': string;
      'image_urls': Array<string>;
    };
    nested: {
      'user': Schema['users']['plain'] & Schema['users']['nested'];
      'size': Schema['clothing_sizes']['plain'] & Schema['clothing_sizes']['nested'];
      'review': Schema['pool_item_reviews']['plain'] & Schema['pool_item_reviews']['nested'];
      'product': Schema['products']['plain'] & Schema['products']['nested'];
    };
    flat: {
      'user:id': string;
      'user:created_at': string;
      'user:updated_at': string;
      'user:phone_number': string;
      'user:name': string;
      'user:instagram': string;
      'user:profile_image_path': string;
      'user:stripe_customer_id': string;
      'user:profile_image_url': string;
      'user:subscription:id': string;
      'user:subscription:created_at': string;
      'user:subscription:updated_at': string;
      'user:subscription:user_id': string;
      'user:subscription:subscription_product_id': string;
      'user:subscription:status': 'ACTIVE' | 'CANCELED' | 'PAST_DUE' | 'UNPAID' | 'INCOMPLETE' | 'INCOMPLETE_EXPIRED' | 'TRIALING' | 'PAUSED';
      'user:subscription:subscription_product:id': string;
      'user:subscription:subscription_product:created_at': string;
      'user:subscription:subscription_product:updated_at': string;
      'user:subscription:subscription_product:name': string;
      'user:subscription:subscription_product:stripe_product_id': string;
      'size:id': string;
      'size:created_at': string;
      'size:updated_at': string;
      'size:size': string;
      'size:region': 'US' | 'UK' | 'EU' | 'JP' | 'IT' | 'FR';
      'size:size_standard_id': string;
      'size:size_standard:id': string;
      'size:size_standard:created_at': string;
      'size:size_standard:updated_at': string;
      'size:size_standard:size': string;
      'size:size_standard:category': 'TOP' | 'BOTTOM' | 'OUTER' | 'SHOES' | 'ACCESSORY' | 'DRESS';
      'review:id': string;
      'review:created_at': string;
      'review:updated_at': string;
      'review:description': string;
      'review:price': number;
      'review:accepted_at': string;
      'review:rejected_at': string;
      'product:id': string;
      'product:created_at': string;
      'product:updated_at': string;
      'product:name': string;
      'product:brand_id': string;
      'product:description': string;
      'product:price': number;
      'product:image_paths': Array<string>;
      'product:run_to_size': number;
      'product:brand:id': string;
      'product:brand:created_at': string;
      'product:brand:updated_at': string;
      'product:brand:name': string;
    };
  };
  'products': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'name': string;
      'brand_id': string;
      'description': string;
      'price': number;
      'image_paths': Array<string>;
      'run_to_size': number;
    };
    nested: {
      'brand': Schema['brands']['plain'] & Schema['brands']['nested'];
    };
    flat: {
      'brand:id': string;
      'brand:created_at': string;
      'brand:updated_at': string;
      'brand:name': string;
    };
  };
  'subscription_product_discounts': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'name': string;
      'stripe_discount_id': string;
      'subscription_product_id': string;
      'amount_off': number;
      'percent_off': number;
      'redeem_by': string;
      'duration_in_months': number;
    };
    nested: {
      'subscription_product': Schema['subscription_products']['plain'] & Schema['subscription_products']['nested'];
    };
    flat: {
      'subscription_product:id': string;
      'subscription_product:created_at': string;
      'subscription_product:updated_at': string;
      'subscription_product:name': string;
      'subscription_product:stripe_product_id': string;
    };
  };
  'subscription_product_prices': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'subscription_product_id': string;
      'stripe_price_id': string;
      'unit_amount': number;
      'recurring_interval': 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
      'recurring_interval_count': number;
    };
    nested: {
      'subscription_product': Schema['subscription_products']['plain'] & Schema['subscription_products']['nested'];
    };
    flat: {
      'subscription_product:id': string;
      'subscription_product:created_at': string;
      'subscription_product:updated_at': string;
      'subscription_product:name': string;
      'subscription_product:stripe_product_id': string;
    };
  };
  'subscription_products': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'name': string;
      'stripe_product_id': string;
    };
    nested: {};
    flat: {};
  };
  'subscriptions': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'user_id': string;
      'subscription_product_id': string;
      'status': 'ACTIVE' | 'CANCELED' | 'PAST_DUE' | 'UNPAID' | 'INCOMPLETE' | 'INCOMPLETE_EXPIRED' | 'TRIALING' | 'PAUSED';
    };
    nested: {
      'user': Schema['users']['plain'] & Schema['users']['nested'];
      'subscription_product': Schema['subscription_products']['plain'] & Schema['subscription_products']['nested'];
    };
    flat: {
      'user:id': string;
      'user:created_at': string;
      'user:updated_at': string;
      'user:phone_number': string;
      'user:name': string;
      'user:instagram': string;
      'user:profile_image_path': string;
      'user:stripe_customer_id': string;
      'user:profile_image_url': string;
      'subscription_product:id': string;
      'subscription_product:created_at': string;
      'subscription_product:updated_at': string;
      'subscription_product:name': string;
      'subscription_product:stripe_product_id': string;
    };
  };
  'user_clothing_sizes': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'user_id': string;
      'clothing_size_id': string;
    };
    nested: {
      'user': Schema['users']['plain'] & Schema['users']['nested'];
      'clothing_size': Schema['clothing_sizes']['plain'] & Schema['clothing_sizes']['nested'];
    };
    flat: {
      'user:id': string;
      'user:created_at': string;
      'user:updated_at': string;
      'user:phone_number': string;
      'user:name': string;
      'user:instagram': string;
      'user:profile_image_path': string;
      'user:stripe_customer_id': string;
      'user:profile_image_url': string;
      'user:subscription:id': string;
      'user:subscription:created_at': string;
      'user:subscription:updated_at': string;
      'user:subscription:user_id': string;
      'user:subscription:subscription_product_id': string;
      'user:subscription:status': 'ACTIVE' | 'CANCELED' | 'PAST_DUE' | 'UNPAID' | 'INCOMPLETE' | 'INCOMPLETE_EXPIRED' | 'TRIALING' | 'PAUSED';
      'user:subscription:subscription_product:id': string;
      'user:subscription:subscription_product:created_at': string;
      'user:subscription:subscription_product:updated_at': string;
      'user:subscription:subscription_product:name': string;
      'user:subscription:subscription_product:stripe_product_id': string;
      'clothing_size:id': string;
      'clothing_size:created_at': string;
      'clothing_size:updated_at': string;
      'clothing_size:size': string;
      'clothing_size:region': 'US' | 'UK' | 'EU' | 'JP' | 'IT' | 'FR';
      'clothing_size:size_standard_id': string;
      'clothing_size:size_standard:id': string;
      'clothing_size:size_standard:created_at': string;
      'clothing_size:size_standard:updated_at': string;
      'clothing_size:size_standard:size': string;
      'clothing_size:size_standard:category': 'TOP' | 'BOTTOM' | 'OUTER' | 'SHOES' | 'ACCESSORY' | 'DRESS';
    };
  };
  'users': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'phone_number': string;
      'name': string;
      'instagram': string;
      'profile_image_path': string;
      'stripe_customer_id': string;
      'profile_image_url': string;
    };
    nested: {
      'subscription': Schema['subscriptions']['plain'] & Schema['subscriptions']['nested'];
    };
    flat: {
      'subscription:id': string;
      'subscription:created_at': string;
      'subscription:updated_at': string;
      'subscription:user_id': string;
      'subscription:subscription_product_id': string;
      'subscription:status': 'ACTIVE' | 'CANCELED' | 'PAST_DUE' | 'UNPAID' | 'INCOMPLETE' | 'INCOMPLETE_EXPIRED' | 'TRIALING' | 'PAUSED';
      'subscription:subscription_product:id': string;
      'subscription:subscription_product:created_at': string;
      'subscription:subscription_product:updated_at': string;
      'subscription:subscription_product:name': string;
      'subscription:subscription_product:stripe_product_id': string;
    };
  };
};
