'use strict';

/**
 * refund-and-cancellation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::refund-and-cancellation.refund-and-cancellation');
