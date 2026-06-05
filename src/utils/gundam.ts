import type { GundamKit } from '../types';

const gradeLabels: Record<string, string> = {
  HG: 'High Grade',
  MG: 'Master Grade',
  MGEX: 'Master Grade Extreme',
  PG: 'Perfect Grade',
  RG: 'Real Grade',
};

export function getGundamGradeLabel(kit: GundamKit) {
  if (gradeLabels[kit.grade]) {
    return gradeLabels[kit.grade];
  }

  if (kit.series === 'SNAA') {
    return 'Beyond Exquisite';
  }

  if (kit.series === 'Motor Nuclear') {
    return 'Master Grade';
  }

  return kit.grade;
}
