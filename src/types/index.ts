export type ServiceTemplate = (moduleName: string) => string;

export interface ITemplateObject {
  backServiceTemplate: ServiceTemplate;
  apiServiceTemplate: ServiceTemplate;
  frontServiceTemplate: ServiceTemplate;
}

