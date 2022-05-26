export interface IWorkflow {
  name: string;
  version?: number;
  scope: string;
  definitions: Definition[];
  apparatus: string[];
  procedures: Procedure[];
}

export interface Procedure {
  step: string;
  substeps?: string[];
}

export interface Definition {
  name: string;
  description: string;
}
