const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'current',
    currency: 'BRL',
  }).format(value); // TODO

export default formatValue;
