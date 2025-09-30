'use strict';

/**
 * free-resource service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::free-resource.free-resource');
