'use strict';

/**
 * free-resource router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::free-resource.free-resource');
