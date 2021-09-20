export const formatDate = (date) => {
  return new Date(date)
    .toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
    .split(' ')
    .join(' ');
};
