'use strict';

/**
 * preparation-module service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::preparation-module.preparation-module');
