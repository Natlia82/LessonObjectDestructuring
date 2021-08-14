export default function Destructuring(charact) {
  const spec = charact.special;

  const massNew = [];
  for (let i = 0; i < spec.length; i += 1) {
    massNew[i] = [spec[i].id, spec[i].name, spec[i].icon, ('description' in spec[i]) ? spec[i].description : 'Описание недоступно'];
  }


  return massNew;
}
