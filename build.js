const fs = require('fs');
const CryptoJS = require('crypto-js');


async function start() {
  await InitData();
  await DealWeb();
  await DealConvertPath();
  // console.log("dataJSON1 ====  ",dataJSON)
  await fs.writeFileSync(`data.json`, JSON.stringify(dataJSON), { encoding: 'utf-8' })
}

async function DealWeb(){
  let list = shareJSON.list
  let mdData = `# <div align="center">网站分享</div>
  <span id='date'>${GetDate()}</span>
  <span class='tag'>分享</span><span class='tag'>网站</span>
  - - -
  `
  for (let data of list) {
    let webListName = data.name;
    mdData += '\n\n' + `## ${webListName}`
    mdData += '\n' + `<div class='share-web'>`
    for (let webData of data.list) {
      mdData += '\n' + `<div class='web-item' to='${webData.url}'>
      <img class='web-img' src='${webData.ico}'/>
        <div class='web-detail'>
        <a target='_blank'>${webData.name}</a>
        <div>${'⭐⭐⭐⭐⭐'.substr(0,webData.stars)}</div>
      </div>
    </div>`
    }
    mdData += '\n' + `</div>`
  }

  await fs.writeFileSync(`${convertDir}/web_share.md`, mdData, { encoding: 'utf-8' })
}

async function InitData(){
  try {
    shareJSON = await fs.readFileSync(`origin/share.json`, { encoding: 'utf-8' })
    shareJSON = JSON.parse(shareJSON)
  } catch (error) {
    console.log("error ====  ",error)
  }
  dataJSON.toolList = shareJSON.myWeb
}

async function DealConvertPath(){
  let fileList = await fs.readdirSync(convertDir)
  for (let fileName of fileList) {
    console.log("正在处理==>",fileName)
    await DealArticle(fileName)
  }
}

async function DealArticle(fileName){
  let originData = await fs.readFileSync(`${convertDir}/${fileName}`, { encoding: 'utf-8' })
  //加密
  let pwdList = originData.match(/(?<=pwd\>)(.+?)(?=<\/pwd)/g)
  let valueList = originData.match(/(?<=<jm>)[\d\D]+?(?=<\/jm)/g)
  let jmTypeList = originData.match(/(?<=jmType>)(.+?)(?=<\/jmType)/g)
  let jmInfoList = originData.match(/(?<=jmInfo>)(.+?)(?=<\/jmInfo)/g)
  let tagList = originData.match(/(?<='tag'>)(.+?)(?=<\/)/g)
  let date = originData.match(/(?<='date'>)(.+?)(?=<\/)/g)[0]
  let title = originData.match(/(?<=center">)(.+?)(?=<\/)/g)[0]
  pwdList && pwdList.forEach((pwd,index) => {
    let value = valueList[index]
    let jmType = jmTypeList[index] || 'html'
    let jmInfo = jmInfoList[index] || '加密内容，点击查看'
    let encrypted = CryptoJS.AES.encrypt(value, pwd).toString();
    originData = originData.replace(/<pwd[\d\D]+?\/jm>/,  `<div class='decrypt undecrypt' jmType='${jmType}' style='margin: 1rem;' value='${encrypted}'>${jmInfo}</div>`)
  })
  dataJSON.articleList.push({
    path: `${saveDir}/${fileName}`,
    name: `${title.replace(/\.[0-9a-zA-Z]+$/g,'')}`,
    date,
    tag: tagList
  })
  await fs.writeFileSync(`${saveDir}/${fileName}`, originData, { encoding: 'utf-8' })
}

function GetDate(){
  let now = new Date(Date.now())
  return now.toLocaleDateString().replace(/[^0-9]/g,'-').replace(/(?<=[^0-9])([0-9])(?=[^0-9]|$)/g,'0$1')
}

let saveDir = 'articles'
let convertDir = 'wait_convert'
let dataJSON = {
  articleList:[],
  toolList:[]
}
let shareJSON = {
  list:[],
  myWeb:[]
}

start()



// let pwd = '1122'
// let value = '阿松大'
// var encrypted = CryptoJS.AES.encrypt(value, pwd).toString();
// console.log("=====encrypted ",encrypted)


// let originData = fs.readFileSync(`wait_convert/jquery.md`, { encoding: 'utf-8' })

// var matchD = originData.match(/<jm>[\d\D]+?\/jm>/g)
// var matchD = originData.match(/(?<=<jm>)[\d\D]+?(?=<\/jm)/g)
// console.log("=====originData ",matchD.length, matchD)
