export interface LookupItem {
  id: number;
  name: string;
}

export interface Subcategory extends LookupItem {
  categoryId: number;
}

export interface StaticData {
  skills: LookupItem[];
  specialties: LookupItem[];
  industries: LookupItem[];
  categories: LookupItem[];
  subcategories: Subcategory[];
}
