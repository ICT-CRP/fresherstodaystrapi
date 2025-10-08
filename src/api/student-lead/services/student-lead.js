'use strict';

/**
 * student-lead service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-lead.student-lead');
