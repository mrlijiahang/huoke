class Regular{
  constructor() {

  }
  getNewString(str){

    // 匹配p
    const patternP = new RegExp(/<.*?p.*?>/gm)
    // 匹配img
    const patternImg = new RegExp(/<img.*?(?:>|\/>)/gm)
    const patternWidth = new RegExp(/width.*?=.*?'(.*?)'/gm)
    const patternHeight = new RegExp(/height.*?=.*?'(.*?)'/gm)
    const patternPEnd = new RegExp(/<\/.*?p.*?>/gm)

    str = str.replace(patternWidth, "style='width:100%'")
    str = str.replace(patternHeight, '')
    str = str.replace(/'  '/gm, '')
    str = str.replace(patternPEnd, '</p>')
    str = str.replace(/< img/gm, '<img')
    
    // 结果
    return str.replace(patternP, "<p style='font-size: 14px; padding: 10px;'>")
  }
}
export { Regular }