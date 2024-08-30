export interface dataProps {
    id: number;
    name: string;
    email: string;
    role: ConstructionRole,
    action: boolean;
  } 

export type dropDownRoleProps = {
   id : number ,
   title : string,
} 

export type ConstructionRole = 
  'Construction Worker' | 
  'Subcontractor' | 
  'Project Manager' | 
  'Supervisor' | 
  'Engineer' | 
  'Architect' | 
  'Electrician' | 
  'Estimator' | 
  'Construction Expeditor' | 
  'Construction Foreman' | 
  'Construction Manager' | 
  'Surveyor';