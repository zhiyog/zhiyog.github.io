let userChoices = [];

const dialogues = [
    {
        text: "<h1>序</h1><p>你是一名警察，突然有一天，有一位商人急急忙忙来警局报案，打破了你以往平静的生活。那个商人被带到审讯室，过了一阵子，他镇静了下来，开始讲述发生的故事。</p>",
        options: [
            { text: "继续", next: 1 }
        ]
    },
    {
        text: "<h1>审讯室</h1><p>商人：我是一个草药商人，我和我的朋友前一段时间听说月村的后山上有比较稀有的草药，有个同行靠着这个小赚了一笔，我们也仅仅是想去碰碰运气而已，谁想到队里的小李会莫名失踪。说完懊恼地低下了头</p>",
        options: [{ text: "继续", next: 2 }]
    },
    {
        text: "<h1>审讯室</h1><p>你稍做思考，接着问了一个问题：</p>",
        options: [
            { text: "月村是哪里？", next: 3 },
            { text: "什么草药？", next: 4 }
        ]
    },
    {
        text: "<h1>审讯室</h1><p>他眼神露出了惊恐之色，顿了顿，又继续说：这是个比较偏僻的地方，村民信奉月亮，月圆之时会进行祭祀活动。为了避免有人打扰祭祀，村口还立着一个牌子：‘逢圆月、血月之夜，不允许村外人在间出门’。</p>",
        options: [{ text: "继续", next: 5 }]
    },
    {
        text: "<h1>审讯室</h1><p>他顿了顿，说：“那个草药据说是养气的，对有钱人来说是大补，能买个好价钱，好像还可以用作医用麻药，在市场上很是炙手可热。</p>",
        options: [{ text: "继续", next: 5 }]
    },
    {
        text: "<h1>审讯室</h1><p>“于是我们就趁着弦月之时出门，但是我们到了后山，发现都是杂草，连个草药毛都没看到。”说完他遗憾地摇了摇头。”</p>",
        options: [{ text: "继续", next: 6 }]
    },
    {
        text: "<h1>审讯室</h1><p>“我们就准备下山，我们里面的小李说内急，我们让他赶快去，没想到一刻钟了还不回来，于是我们过去找他，却发现找不到人了，电话也联系不上。我们当时以为他先回去了，也先走了，以为一个大活人能跑到哪里去。没想到，最后在村子里怎么也没有找到小李，这才意识到小李失踪了，才赶忙过来报警了。”</p>",
        options: [{ text: "继续", next: 7 },]
    },
    {
        text: "<h1>审讯室</h1><p>你听完之后，觉得有些奇怪，继续问道：</p>",
        options: [
            { text: "村子人没反应么？", next: 8 },
            { text: "你的同行是如何找到的？", next: 9 }
        ]
    },
    {
        text: "<h1>审讯室</h1><p>商人：我们告诉了村长，村长说后山地形比较复杂，偶尔会有人迷路，叫我们不要担心，他还叫了几个熟悉地形的村民帮我们寻找，但迟迟没有找到小李。</p>",
        options: [{ text: "继续", next: 10 }]
    },
    {
        text: "<h1>审讯室</h1><p>商人：当时我给同行打了电话，当时虽然是半夜，但他一下子就接通了我的电话，估计是忙着数钱呢。他说：‘我当时就是在满月时出门的，你不用管村口的牌子，只要不妨碍村民祭祀就可以。满月时那个山上的光线好，仔细看才能找到那些药材，药材和野草不一样’，说完他就挂了。</p>",
        options: [{ text: "继续", next: 10 }]
    },
    {
        text: "<h1>审讯室</h1><p>听完这些，你陷入了沉思，你决定和同事去一趟“月”村。</p>",
        options: [
            { text: "进入第一章", next: 11 },
        ]
    },
    {
        text:"<h1>第一章 弦月</h1><p>明月如弦，像往常一样的生活，平静之下，是否又隐藏了深处的某物？<br>弦月象征着生活的起伏与变化。在这个阶段，平静的生活之下可能隐藏着未知的波动和挑战。它引导我们思考，在看似平静的日常中，是否忽略了内心深处的真实需求和感受</p>",
        options: [
            { text: "继续", next: 12 },
        ]
    },
    {
        text:"<h1>第一章 弦月</h1><p>你们来到了“月”村，发现村口有一个告示牌：“逢圆月、血月之夜，不允许村外人在间出门”。<br>血月是村里的称呼，他们认为圆月过后的第二天，月亮会进入虚弱状态，这一天就叫做血月。你喃喃地想：果然是个奇怪的村子。</p>",
        options: [
            { text: "继续", next: 13 },
        ]
    },
    {
        text:"<h1>月村中</h1><p>很快，你来到了村长家中，告知村长你们要进行调查，村长也很热情地招待了你们，并要帮忙派人帮你带路。你可以选择：</p>",
        options: [
            { text: "让村民带路", next: 14 },
            { text: "自己调查", next: 14 },
        ]
    },
    {
        text:"<h1>月村中</h1><p>你在村中搜查了一番，没有发现小李的踪迹,于是你决定去后山搜查。</p>",
        options: [
            { text: "继续", next: 15 },
        ]
    },
    {
        text:"<h1>月村中</h1><p>你在山洞中发现了昏迷的小李。</p>",
        options: [
            { text: "继续", next: 16 },
        ]
    },
    
];

let currentDialogue = 0; // 当前对话索引

function nextDialogue() {
    const dialogue = dialogues[currentDialogue];
    const dialogueText = document.getElementById('dialogue-text');
    const optionsDiv = document.querySelector('.options');
    
    // 更新对话文本
    dialogueText.innerHTML = dialogue.text;
    
    // 清除旧的选项
    optionsDiv.innerHTML = '';
    
    if (userChoices.includes("月村是哪里？")) {
        // 执行某些逻辑
    }

    if (dialogue.options.length > 0) {
        // 如果有选项，显示按钮
        dialogue.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('option-btn');
            button.onclick = () => selectOption(option.next);
            optionsDiv.appendChild(button);
        });

        // 隐藏 "继续" 按钮
        document.getElementById('next-btn').style.display = 'none';
    } else {
        // 没有选项时，显示 "继续" 按钮
        document.getElementById('next-btn').style.display = 'block';
        currentDialogue++;

        // 如果超出对话长度，禁用 "继续" 按钮
        if (currentDialogue >= dialogues.length) {
            document.getElementById('next-btn').style.display = 'none';
        }
    }
}

function selectOption(nextDialogueIndex) {
    const dialogue = dialogues[currentDialogue];
    userChoices.push(dialogue.options.find(option => option.next === nextDialogueIndex).text); // 记录选择
    currentDialogue = nextDialogueIndex;
    nextDialogue();
}


// 初始化对话
nextDialogue();
