const fs = require('fs');
const CryptoJS = require('crypto-js');


async function start() {
  await InitData();
  await DealWeb();
  await DealSoft();
  await DealConvertPath();
  // console.log("dataJSON1 ====  ",dataJSON)
  await fs.writeFileSync(`data.json`, JSON.stringify(dataJSON), { encoding: 'utf-8' })
}

async function DealWeb(){
  let list = shareJSON.list
  let mdData = `# <div align="center">网站分享</div>
  <span id='date'>${GetDate()}</span>
  <span class='key-tag'>分享</span><span class='key-tag'>网站</span>
  - - -
  `
  for (let data of list) {
    let webListName = data.name;
    mdData += '\n\n' + `## ${webListName}`
    mdData += '\n' + `<div class='share-web'>`
    for (let webData of data.list) {
      mdData += '\n' + `<div class='web-item item' to='${webData.url}'>
      <img class='web-img' src='${webData.ico}'/>
        <div class='web-detail mg-l-1'>
        <a target='_blank'>${webData.name}</a>
        <div>${'⭐⭐⭐⭐⭐'.substr(0,webData.stars)}</div>
      </div>
    </div>`
    }
    mdData += '\n' + `</div>`
  }

  await fs.writeFileSync(`${convertDir}/web_share.md`, mdData, { encoding: 'utf-8' })
}

async function DealSoft(){
  let list = shareJSON.softList
  let mdData = `# <div align="center">软件分享</div>
  <span id='date'>${GetDate()}</span>
  <span class='key-tag'>分享</span><span class='key-tag'>软件</span>
  - - -
  `
  for (let data of list) {
    let softListName = data.name;
    mdData += `\n\n## ${softListName}`
    mdData += `\n<div class='share-soft'>`
    for (let softData of data.list) {
      let tagsMD = ''
      softData.tags.forEach(tag => {
        tagsMD += `<span class='tag'>${tag}</span>`
      })
      let urlMD = ''
      softData.urls.forEach(url => {
        if(url.pwd) {
          urlMD += `<pwd>${url.pwd}</pwd>
          <jmType>html</jmType>
          <jmInfo><div>${url.pwdName}</div></jmInfo>
          <jm><div to='${url.link}'>${url.name}</div></jm>`
        } else {
          urlMD += `<div to='${url.link}'>${url.name}</div>`
        }
      })
      mdData += `<div class='soft-item item'>
          <div class='flex'>
            <a stars='4'>${softData.name}</a>
            <div class='title-after'>${'⭐⭐⭐⭐⭐'.substr(0,softData.stars)}</div>
          </div>
          <div class='soft-detail'>
            <div class='soft-info'>
            <span id="date" >${softData.date}</span>
            <span id="version" >5.15.0</span>
            <div class='soft-tag'>
              ${tagsMD}
            </div>
          </div>
          <div class='info'>
            ${softData.info}
          </div>
          <div class='dl flex'>
            ${urlMD}
          </div>
          </div>
        </div>
      `
    }
    mdData += `</div>`
  }

  await fs.writeFileSync(`${convertDir}/soft_share.md`, mdData, { encoding: 'utf-8' })
}
async function InitData(){
  try {
    shareJSON = await fs.readFileSync(`${convertDir}/share.json`, { encoding: 'utf-8' })
    shareJSON = JSON.parse(shareJSON)
  } catch (error) {
    console.log("error ====  ",error)
  }
  dataJSON.toolList = shareJSON.myWeb
}

async function DealConvertPath(){
  let fileList = await fs.readdirSync(convertDir)
  for (let fileName of fileList) {
    if(/.md$/g.test(fileName)) {
      console.log("正在处理==>",fileName)
      await DealArticle(fileName)
    }
  }
}

async function DealArticle(fileName){
  let originData = await fs.readFileSync(`${convertDir}/${fileName}`, { encoding: 'utf-8' })
  //加密
  let pwdList = originData.match(/(?<=pwd\>)(.+?)(?=<\/pwd)/g)
  let valueList = originData.match(/(?<=<jm>)[\d\D]+?(?=<\/jm)/g)
  let jmTypeList = originData.match(/(?<=jmType>)(.+?)(?=<\/jmType)/g)
  let jmInfoList = originData.match(/(?<=jmInfo>)(.+?)(?=<\/jmInfo)/g)
  let tagList = originData.match(/(?<='key-tag'>)(.+?)(?=<\/)/g) || []
  let date = originData.match(/(?<='date'>)(.+?)(?=<\/)/g)[0]
  let title = originData.match(/(?<=center">)(.+?)(?=<\/)/g)[0]
  pwdList && pwdList.forEach((pwd,index) => {
    let value = valueList[index]
    let jmType = jmTypeList[index] || 'html'
    let jmInfo = jmInfoList[index] || '加密内容，点击查看'
    let encrypted = CryptoJS.AES.encrypt(value, pwd).toString();
    originData = originData.replace(/<pwd[\d\D]+?\/jm>/,  `<div class='decrypt undecrypt' jmType='${jmType}' value='${encrypted}'>${jmInfo}</div>`)
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
