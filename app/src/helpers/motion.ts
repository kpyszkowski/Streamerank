export const removeTranslateProperties = (_: any, generated: string) =>
  generated
    .split(' ')
    .filter((property) => !['translateX', 'translateY'].includes(property))
    .join(' ')
