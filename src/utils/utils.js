export function removeDuplicatesFromArr (arr) {
  return Array.from(new Set(arr))
}

export function firstLetterUpp (text) {
  if (!text) return ''
  return (text[0].toUpperCase().concat(text.slice(1).toLowerCase()))
}

export function getColorFromVanType (type) {
  const typeColors = {
    simple: 'bg-orange-600/75',
    rugged: 'bg-emerald-700',
    luxury: 'bg-black'
  }

  return `${typeColors[type]} text-neutral-100`
}
