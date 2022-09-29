/** @type {HTMLCanvasElement} */

//#region 数据
//宽个数
let wCount = Math.floor(Math.random() * 10) + 5;
//高个数
let hCount = Math.floor(Math.random() * 8) + 5;
//宽高
let cardW = 10;
let cardH = 10;
//层数
const cardLevelCount = 4
    //屏幕宽高
let winWidth = document.documentElement.clientWidth || document.body.clientWidth;
let winHeight = document.documentElement.clientHeight || document.body.clientHeight;
//canvas 宽高
let canvasW = 300
let canvasH = 400
    //canvas
let canvas = null
let ctx = null
    // cards
let CARD_TOTAL = 0
let RANDOM_REMOVE_COUNT = 0
let CARD_KIND = 11;
let cardContents = [];
let cardDataList = [];

const imgList = ["pg", "nm", "tz", "xhs", "xj", "mg", "qz", "hlg", "ft", "nn", "ym"]
const imgData = []
const imgBData = []
    //#endregion

//#region 宽高改变重置数据

window.onresize = () => {
    winWidth = document.documentElement.clientWidth || document.body.clientWidth;
    winHeight = document.documentElement.clientHeight || document.body.clientHeight;

    console.log("==== 宽高 改变", winWidth, winHeight)
    initData();
    initUI();
};

function initData() {
    console.log("==== 宽高 ", winWidth, winHeight)
    var wW = winWidth - 20
    var wH = winHeight - 20
    var tW = wW / Math.max(wCount, 7)
    var tH = wH / (hCount + 3)

    cardW = cardH = Math.min(tW, tH)

    canvasW = cardW * wCount
    canvasH = cardH * (hCount + 3)
    canvas = document.getElementById('canvas_ylgy')
    ctx = canvas.getContext("2d");
}

function initUI() {
    canvas.width = canvasW
    canvas.height = canvasH
}
//#endregion

//#region canvas 操作
class Cards {
    constructor(x, y, level, num) {
        this.x = x;
        this.y = y;
        this.level = level || 0;
        this.num = num || 1
        this.destory = false;
        this.canClick = false;
        this.isCovered = true;
        this.width = cardW;
        this.height = cardW;
    }

    setPos(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    draw() {
        if (this.destory) {
            return
        }
        let x = this.x
        let y = this.y
        let level = this.level
        let width = this.width
        let jg = width / 20
        let tempW = width - jg
        let tempX = x * width + jg / 2 + level % 2 * width / 2
        let tempY = y * width + jg / 2 + level % 2 * width / 2
        ctx.fillStyle = "#eee";
        ctx.shadowOffsetX = width / 20
        ctx.shadowOffsetY = width / 10
        ctx.shadowBlur = width / 15
        ctx.shadowColor = "gray";
        let img = this.isCovered ? imgBData[this.num] : imgData[this.num]
            // ctx.font = "30px Georgia";
            // ctx.fillRect(tempX, tempY, tempW, tempW)
        ctx.drawImage(img, tempX, tempY, tempW, tempW)
            // ctx.fillText(level, tempX + width / 2, tempY + width / 2)
    }

}

let allCards = []

function initCanvas() {
    ctx.clearRect(0, 0, canvasW, canvasH)

}

function animate() {
    ctx.clearRect(0, 0, canvasW, canvasH)
        // requestAnimationFrame(animate)
}


function initAllCardData() {
    let allCardCount = 0
    for (let index = 0; index < cardLevelCount; index++) {
        let wc = wCount - index % 2
        let hc = hCount - index % 2
        allCardCount += wc * hc
    }

    CARD_TOTAL = Math.floor(allCardCount / 6) * 3
    RANDOM_REMOVE_COUNT = allCardCount - CARD_TOTAL
    console.log("============ wCount hCount ", wCount, hCount)
    console.log("============ CARD_TOTAL RANDOM_REMOVE_COUNT ", CARD_TOTAL, RANDOM_REMOVE_COUNT)
}

function initRandomContent(addRemoveNum) {
    let cardKind = 0;
    cardContents = []
    for (let index = 0; index < CARD_TOTAL / 3; index++) {
        if (cardKind == CARD_KIND) {
            cardKind = 0;
        }
        cardContents.push(cardKind)
        cardContents.push(cardKind)
        cardContents.push(cardKind)
        cardKind++;
    }
    if (addRemoveNum) {
        for (let index = 0; index < RANDOM_REMOVE_COUNT; index++) {
            cardContents.push(CARD_KIND + 10)
        }
    }
    // 打乱顺序
    cardContents.sort(function() { return 0.5 - Math.random() })
}

function initDataJSON() {
    cardDataList = [];
    for (let level = 0; level < cardLevelCount; level++) {
        for (let hi = 0; hi < hCount - level % 2; hi++) {
            for (let wi = 0; wi < wCount - level % 2; wi++) {
                let num = cardContents.pop()
                if (num <= CARD_KIND) {
                    cardDataList.push(new Cards(wi, hi, level, num))
                }
            }
        }
    }
    console.log("============ cardDataList ", cardDataList)
}

function initAllCards() {

}

function listen() {
    canvas.addEventListener("mousedown", e => {
        var clickPosX = e.layerX
        var clickPosY = e.layerY
        ctx.clearRect(0, 0, canvasW, canvasH)
        cardDataList.forEach(card => {
            if (!card.isCovered && !card.destory) {
                let cardX = card.x * cardW + cardW / 2 + card.level % 2 * cardW / 2
                let cardY = card.y * cardW + cardW / 2 + card.level % 2 * cardW / 2
                if (Math.abs(cardX - clickPosX) <= cardW / 2 && Math.abs(cardY - clickPosY) <= cardW / 2) {
                    card.destory = true;
                }
            }
        })
        findAndChangeBottom();
        for (let level = 0; level < cardLevelCount; level++) {
            for (let index = 0; index < cardDataList.length; index++) {
                if (cardDataList[index].level == level) {
                    cardDataList[index].draw()
                }
            }
        }
    })
}

function findAndChangeBottom() {
    cardDataList.forEach(aimCard => {
        const coverCardInfo = cardDataList.find(item => this.isCovered(aimCard, item))
        if (coverCardInfo) {
            aimCard.isCovered = true
        } else {
            aimCard.isCovered = false
        }
    });
    // console.log("========== dd ", cardDataList.map(x => x.destory + "-" + x.isCovered + "-" + x.x + "-" + x.y))
}

function isCovered(bottomCard, topCard) {
    if (bottomCard.destory || topCard.destory) {
        return false;
    }
    if (bottomCard.level >= topCard.level) {
        return false;
    }
    // if (bottomCard.x < topCard.x || bottomCard.y < topCard.y) {
    //     return false
    // }
    if (bottomCard.level % 2 == topCard.level % 2) {
        return bottomCard.x == topCard.x && bottomCard.y == topCard.y
    }
    let isXFit = false;
    let isYFit = false;
    if (bottomCard.level % 2 == 0) {
        isXFit = bottomCard.x - topCard.x <= 1 && bottomCard.x - topCard.x >= 0
        isYFit = bottomCard.y - topCard.y <= 1 && bottomCard.y - topCard.y >= 0
    } else {
        isXFit = bottomCard.x - topCard.x <= 0 && bottomCard.x - topCard.x >= -1
        isYFit = bottomCard.y - topCard.y <= 0 && bottomCard.y - topCard.y >= -1
    }
    return isXFit && isYFit
}


async function initImage() {
    for (let i = 0; i < imgList.length; i++) {
        var img = new Image(); //创建图片对象
        img.src = `img/${imgList[i]}.png` //设置绘制图像路径
        await new Promise((res, rej) => {
            img.onload = function() { //图片加载完再去控制
                res();
            }
        })
        imgData.push(img)
    }
    for (let i = 0; i < imgList.length; i++) {
        var img = new Image(); //创建图片对象
        img.src = `img/${imgList[i]}_b.png` //设置绘制图像路径
        await new Promise((res, rej) => {
            img.onload = function() { //图片加载完再去控制
                res();
            }
        })
        imgBData.push(img)
    }
}


window.onload = async() => {
        initData();
        initUI();
        await initImage();
        listen()
        ctx.clearRect(0, 0, canvasW, canvasH)
        initAllCardData();
        initRandomContent(true);
        initDataJSON();
        findAndChangeBottom();
        for (let level = 0; level < cardLevelCount; level++) {
            for (let index = 0; index < cardDataList.length; index++) {
                if (cardDataList[index].level == level) {
                    cardDataList[index].draw()
                }
            }
        }



    }
    //#endregion