import { ColorSwatch, TypeSpecimen } from './types';

export const BRAND_COLORS: ColorSwatch[] = [
  { name: 'Bunny Red', hex: '#FF385C', textColor: '#FFFFFF', description: 'Primary action color' },
  { name: 'Warm Charcoal', hex: '#222222', textColor: '#FFFFFF', description: 'Primary typography' },
  { name: 'Soft Gray', hex: '#717171', textColor: '#FFFFFF', description: 'Secondary text' },
  { name: 'Canvas White', hex: '#FFFFFF', textColor: '#222222', description: 'Backgrounds' },
  { name: 'Wash Gray', hex: '#F7F7F7', textColor: '#222222', description: 'UI Areas' },
  { name: 'Sunset Orange', hex: '#FFB4A2', textColor: '#222222', description: 'Accent Warmth' },
];

export const TYPE_RAMP: TypeSpecimen[] = [
  { weight: '300', label: 'Light', sample: 'The quick brown fox jumps over the lazy dog.' },
  { weight: '400', label: 'Regular', sample: 'Sophisticated events for everyone.' },
  { weight: '500', label: 'Medium', sample: 'Join the community today.' },
  { weight: '600', label: 'SemiBold', sample: 'Bunny Brand Guidelines.' },
  { weight: '800', label: 'ExtraBold', sample: 'Make it happen.' },
];
