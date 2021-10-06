function convertDate(dateStr) {
  const monthPtBr = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  let phrase = '';

  phrase = `${day + 1} ${monthPtBr[month]} ${year}`;

  return phrase;
}

export default convertDate;