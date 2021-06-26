export const getContactLink = (type, value) => {
  switch(type){
    case 'telegram':
      return `https://t.me/${value}`
    case 'instagram':
      return `https://instagram.com/asyshelest`
    case 'phone':
      return `tel:${value}`
    default:
      return ''
  }
}
