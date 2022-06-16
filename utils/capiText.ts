

const wordCapitalize = ( name: string ): string => {
  return name[0].toUpperCase() + name.substring(1);
}

const exportFunction = { wordCapitalize }

export default exportFunction;