'use strict';

/**
 * nurse-practitioner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nurse-practitioner.nurse-practitioner');
