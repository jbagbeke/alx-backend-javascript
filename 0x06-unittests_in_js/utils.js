const Utils = {
  calculateNumber: (type, a, b) => {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b)
    } else if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b)
    } else if (type === 'DIVIDE') {
      if (Math.round(a) <= 0 || Math.round(b) <= 0) {
        return 'Error'
      }
      return Number((Math.round(a) / Math.round(b)).toFixed(2))
    }
  }
}
module.exports = Utils
