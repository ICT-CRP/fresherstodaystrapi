'use strict';

/**
 * companies-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::companies-list.companies-list');
