export const formatter = (originalDate: Date) => {
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(
    originalDate,
  );
  const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(
    originalDate,
  );
  const date = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(
    originalDate,
  );

  return `${year}/${month}/${date}`;
};
