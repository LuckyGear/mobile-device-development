export default function kalkulasiBMI(bb, tb) {
  const bmi = bb / (tb * tb);
  return bmi;
}

export function kategoriBMI(bmi) {
  if (bmi < 18.5) {
    return 'Berat anda kurang';
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Normal (badan sehat)';
  } else if (bmi >= 25 && bmi < 30) {
    return 'BB lebih';
  } else {
    return 'Obesitas';
  }
}
