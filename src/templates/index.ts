import type { ITemplateObject } from '../types/index.js';
import { apiServiceTemplate } from './api-service.js';
import { backServiceTemplate } from './back-service.js';
import { frontServiceTemplate } from './front-service.js';

export const templates: ITemplateObject = {
  frontServiceTemplate,
  apiServiceTemplate,
  backServiceTemplate,
};

