//名言集の処理
const nextQuote = document.getElementById("next-quote")
const quote = document.getElementById("quote")
const person = document.getElementById("person")
const quotesList = [
    {
        quote: "お金がないなら、臓器を売ればいいじゃない",
        person: "---S.Otake(GeekSalon Webメンター)"
    },
    {
        quote: "五臓六腑、つまり11個も方法があるじゃん",
        person: "---S.Otake(GeekSalon Webメンター)"
    },
    {
        quote: "私はこのGSDCにともきの膵臓を賭ける",
        person: "---S.Otake(GeekSalon Webメンター)"
    },
    {
        quote: "臓器の1つも売らないで何がGRITなの？",
        person: "---S.Otake(GeekSalon Webメンター)"
    },
    {
        quote: "左もあるんだし右肺くらい別によくない？",
        person: "---S.Otake(GeekSalon Webメンター)"
    },
    {
        quote: "いうて自分の臓器も選択肢に入れてるし",
        person: "---S.Otake(GeekSalon Webメンター)"
    },
    {
        quote: "いけるっしょ...（ねっとり）",
        person: "---T.Sato(GeekSalon Webメンター)"
    },
    {
        quote: "さなりゅうさぁん...（ねっとり）",
        person: "---T.Sato(GeekSalon Webメンター)"
    },
    {
        quote: "愛ですね",
        person: "---R.Sanada(GeekSalon Webメンター)"
    },
    {
        quote: "俺お昼ご飯食べなきゃだから",
        person: "---R.Sanada(GeekSalon Webメンター)"
    }
]

//次の格言を押した時の処理
nextQuote.onclick = function() {
    let randum = Math.floor( Math.random() * quotesList.length );
    quote.innerText = quotesList[randum].quote
    person.innerText = quotesList[randum].person
};

//ボードゲームの処理
const gameImage = document.getElementById("game-image")
const title = document.getElementById("title")
const number = document.getElementById("number")
const text = document.getElementById("text")
const next = document.getElementById("next")
const back = document.getElementById("back")

const imageList = [
    "ペンパ1.jpeg","インサイダー.jpeg","ブロックス.jpeg","ペンパ2.jpeg",
    "ワード.jpeg","ラブレター.jpeg","ペンパ3.jpeg","カタン.jpeg","ドミニオン.jpeg","ペンパ4.jpeg"
]

const gameList = [
    {
        title: "ペンギンパーティ",
        number: "10位",
        text: "5種類のカードを使ってペンギンのタワーを作る。子供たちはこのゲームで大人の狡さを知る。"
    },
    {
        title: "インサイダーゲーム",
        number: "9位",
        text: "ひとりだけ答えを知っている人がいる。人狼よりも気軽にできる"
    },
    {
        title: "Blokus",
        number: "8位",
        text: "テトリスみたいなのを使った陣取りゲーム。人はなぜ憎しみ合うのだろうか"
    },
    {
        title: "ペンギンパーティ",
        number: "7位",
        text: "その一手でペンギンの行く末が決まる...! ペンギンの命をかけた究極のデスゲーム"
    },
    {
        title: "ワードバスケット",
        number: "6位",
        text: "反射神経と語彙力、両方が試される新感覚ゲーム。よく謎の造語が作られる"
    },
    {
        title: "ラブレター",
        number: "5位",
        text: "もう一回！がなかなか止まらないお手軽なゲーム"
    },
    {
        title: "ペンギンパーティ",
        number: "4位",
        text: "賭けペンパで破産する人間が毎年現れる、それでも彼らはピラミッドを作ることをやめない"
    },
    {
        title: "カタン",
        number: "3位",
        text: "無人島を開拓せよ！運と戦略、そして交渉、様々な要素が集約されたゲーム"
    },
    {
        title: "ドミニオン",
        number: "2位",
        text: "ゲームの可能性は無限大、オンライン化もされたデッキ構築ゲーム。俺とやろう"
    },
    {
        title: "ペンギンパーティ",
        number: "1位",
        text: "東工大生がよく発狂しながらプレイしている。意見が対立したらペンパの勝敗で決めるのがお約束"
    }
]
let i = 0

next.onclick = function() {
    i ++
    title.innerText = gameList[i].title
    number.innerText = gameList[i].number
    text.innerText = gameList[i].text
    gameImage.src = "./images/" + imageList[i]
    if (i === 1) {
        back.classList.toggle("hidden")
    }
    if (i === 9) {
        next.classList.toggle("hidden")
    }
}

back.onclick = function() {
    i --
    title.innerText = gameList[i].title
    number.innerText = gameList[i].number
    text.innerText = gameList[i].text
    gameImage.src = "./images/" + imageList[i]
    if (i === 0) {
        back.classList.toggle("hidden")
    }
    if (i === 8) {
        next.classList.toggle("hidden")
    }
}