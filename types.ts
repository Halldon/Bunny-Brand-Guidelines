import { LucideIcon } from "lucide-react";

export interface ColorSwatch {
  name: string;
  hex: string;
  textColor: string;
  description?: string;
}

export interface TypeSpecimen {
  weight: string;
  label: string;
  sample: string;
}

export interface BrandIcon {
  icon: LucideIcon;
  label: string;
}
