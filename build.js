const fs = require('fs');
const CryptoJS = require('crypto-js');


async function start() {
  let fileList = await fs.readdirSync(convertDir)
  for (let fileName of fileList) {
    console.log("正在处理==>",fileName)
    await deal(fileName)
  }
}

async function deal(fileName){
  let originData = await fs.readFileSync(`${convertDir}/${fileName}`, { encoding: 'utf-8' })
  //加密
  let pwdList = originData.match(/(?<=pwd\>)(.+?)(?=<\/pwd)/g)
  let valueList = originData.match(/(?<=<jm>)[\d\D]+?(?=<\/jm)/g)
  let jmTypeList = originData.match(/(?<=jmType>)(.+?)(?=<\/jmType)/g)
  let jmInfoList = originData.match(/(?<=jmInfo>)(.+?)(?=<\/jmInfo)/g)
  console.log("pwdList ====  ",pwdList)
  console.log("valueList ====  ",valueList)
  console.log("jmTypeList ====  ",jmTypeList)
  console.log("jmInfoList ====  ",jmInfoList)
  pwdList && pwdList.forEach((pwd,index) => {
    let value = valueList[index]
    let jmType = jmTypeList[index] || 'html'
    let jmInfo = jmInfoList[index] || '加密内容，点击查看'
    let encrypted = CryptoJS.AES.encrypt(value, pwd).toString();
    originData = originData.replace(/<pwd[\d\D]+?\/jm>/,  `<div class='decrypt undecrypt' jmType='${jmType}' style='margin: 1rem;' value='${encrypted}'>${jmInfo}</div>`)
  })
  await fs.writeFileSync(`${saveDir}/${fileName}`, originData, { encoding: 'utf-8' })
}

let saveDir = 'articles'
let convertDir = 'wait_convert'

start()



// let pwd = '1122'
// let value = '阿松大'
// var encrypted = CryptoJS.AES.encrypt(value, pwd).toString();
// console.log("=====encrypted ",encrypted)


// let originData = fs.readFileSync(`wait_convert/jquery.md`, { encoding: 'utf-8' })

// var matchD = originData.match(/<jm>[\d\D]+?\/jm>/g)
// var matchD = originData.match(/(?<=<jm>)[\d\D]+?(?=<\/jm)/g)
// console.log("=====originData ",matchD.length, matchD)
