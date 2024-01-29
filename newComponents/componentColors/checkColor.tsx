import { dataLevels } from "./datalvl"

export const checkColor = (level: number) => {
  if (level <= 10 && level >= 0) {
    return {
      color: '#FFAA46',
      style: 'OneTen'
    }
  } else if (level <= 20 && level > 10) {
    return {
      color: '#46B1FF',
      style: 'TenTwentry'
    }
  } else if (level <= 30 && level > 20) {
    return {
      color: '#5546FF',
      style: 'TwentyTherth'
    }
  } else if (level <= 40 && level > 30) {
    return {
      color: '#AE46FF',
      style: 'TherthFourteen'
    }
  } else if (level <= 50 && level > 40) {
    return {
      color: '#17A52E',
      style: 'FourteenFiveteen'
    }
  } else if (level <= 60 && level > 50) {
    return {
      color: '#F05353',
      style: 'FiveteenSixteen'
    }
  }
  return {
    color: '#FFAA46',
    style: 'OneTen'
  }
}

export const getNextColor = (level: number) => {
  if (level <= 10 && level >= 0) {
    return {
      color: '#46B1FF',
      style: 'TenTwentry'
    }
  } else if (level <= 20 && level > 10) {
    return {
      color: '#5546FF',
      style: 'TwentyTherth'
    }
  } else if (level <= 30 && level > 20) {
    return {
      color: '#AE46FF',
      style: 'TherthFourteen'
    }
  } else if (level <= 40 && level > 30) {
    return {
      color: '#17A52E',
      style: 'FourteenFiveteen'
    }
  } else if (level <= 50 && level > 40) {
    return {
      color: '#F05353',
      style: 'FiveteenSixteen'
    }
  }
  return {
    color: '#FFAA46',
    style: 'OneTen'
  }
}

export const checkLevel = (exp: number) => {
  for(let i = 0; i < dataLevels.length; i++) {
    if (exp >= dataLevels[i].lowExp && exp < dataLevels[i].maxExp) {
      return dataLevels[i];
    }
  }
}

export const getExp = (exp: number) => {
  let minExp = 0 as any
  let currentExp = 0 as any
  let maxExp = 0 as any
  for(let i = 0; i < dataLevels.length; i++) {
    if (exp >= dataLevels[i].lowExp && exp < dataLevels[i].maxExp) {
      minExp = dataLevels[i].lowExp
      currentExp = exp
      maxExp = dataLevels[i].maxExp
      return { minExp, currentExp, maxExp }
    }
  }
}