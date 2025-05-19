const formatDate = (input) => {
  const date = new Date(input);

  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export default formatDate;