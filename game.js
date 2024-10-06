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
        text:"<h1>后山上</h1><p>你在山洞中发现了昏迷的小李。</p>",
        options: [
            { text: "继续", next: 18 },
        ]
    },
    {
        text:"<h1>后山上</h1><p>你想搜查，但是碍于村民在场。</p>",
        options: [{ text: "继续", next: 18 }]
    },
    {
        text:"<h1>后山上</h1><p>你在山洞细细搜查，发现山洞中有草药燃烧的痕迹，你将没有烧完的草药收集了起来。</p>",
        options: [{ text: "继续", next: 18 }]
    },
    {
        text:"<h1>后山上</h1><p>你将小李带回了村中，案件结束，你回到了警局，小李暂时失忆了，好像就是一个简单的迷路案件。</p>",
        options: [{ text: "进入第二章", next: 19 }]
    },
    {
        text:"<h1>第二章</h1><p>圆月无缺，无缺，无疑，无惑，但又是否只是我们的一厢情愿？抑或只是浮于表面。<br>圆月象征着完美和圆满，但在这份圆满之中，也可能隐藏着虚伪和假象。它让我们反思，那些看似无缺、无疑、无惑的事物，是否真的如我们所愿那般真实可靠？</p>",
        options: [{ text: '继续', next: 22 }]
    },
    {
        text:"<h1>第二章</h1><p>在月圆的当天，你觉得案件还是有些蹊跷，决定这次避开村民，再次进村搜查。</p>",
        options: [{ text: '继续', next: 22 }]
    },
    {
        text:"<h1>第二章</h1><p>你研究了之前带回来的草药，发现草药有致幻性并研究出了解药。疑点重重，决定再次进村勘察。</p>",
        options: [{ text: '继续', next: 22 }]
    },
    {
        text:"<h1>月村中</h1><p>你再次进入了“月”村，那个奇怪的牌子并没有改变。</p>",
        options: [{ text: '继续', next: 23 }]
    },
    {
        text:"<h1>月村中</h1><p>你发现，众人变得神经兮兮，看你的眼神也有点奇怪。<br>你开始思考一些问题，小李为什么昏迷了？为什么满月的晚上不允许出门？你越来越怀疑……</p>",
        options: [{ text: '继续', next: 24 }]
    },
    {
        text:"<h1>月村中</h1><p>夜晚降临，你决定在元圆月夜间来找到一些蛛丝马迹。你发现之前的各种门牌堆在垃圾桶内，门牌竟然换成了“所有人不得进入村子”！</p>",
        options: [{ text: '继续', next: 25 }]
    },
    {
        text:"<h1>月村中</h1><p>此时你选择：</p>",
        options: [{ text: '细思极恐，你决定前往村长家中', next: 26 },
                     { text: '你决定再次前往后山', next: 27 }
        ]
    },
    {
        text:"<h1>月村中</h1><p>你被发现了，只能回去。</p>",
        options: [{ text: '继续', next: 29 }]
    },
    {
        text:"<h1>月村中</h1><p>明明也是月圆之夜，你却没有发现商人口中的草药。你前往山洞，然后听到了村长和别人的谈话。</p>",
        options: [{ text: '继续', next: 28 }]
    },
    {
        text:"<h1>月村中</h1><p>村长:都怪那个多事的警察，不然我们不会放了那个小李。<br>村民谨慎地问道:那明天在山腰祭坛的祭祀还要继续么？<br>村长：当然。<br>由于你村外人的身份，村民对你很警惕，发现了你夜间不在屋子里。</p>",
        options: [{ text: '继续', next: 29 }]
    },
    {
        text:"<h1>月村中</h1><p>你失去了村民们的信任。</p>",
        options: [{ text: '进入第三章', next: 30 }]
    },
    {
        text:"<h1>第三章 血月</h1><p>月呈血色，“血月出，妖孽现”，呓语不绝，意欲何去何从？<br>血月则是一个充满神秘和不安的意象。它预示着灾难、变革或重大事件的到来，也鼓励我们面对内心的恐惧和不安，勇于承担起改变命运的责任。它提醒我们，在困境中寻找机遇，在绝望中孕育希望。</p>",
        options: [{ text: '继续', next: 31 }]
    },
    {
        text:"<h1>月村中</h1><p>满月第二天白天，村民看你的表情已经改变。<br>村民好像在准备一些祭祀的东西。<br>时间很快到了晚上，你警惕地准备最后一搏。</p>",
        options: [{ text: '继续', next: 34 }]
    },
    {
        text:"<h1>结局一</h1><p>你准备了匕首<br>村民放了迷药，你被迷晕了，醒来发现自己在山腰祭坛。<br>你看向村民，他们目光凶狠，像是狼看猎物的眼神。<br>村民拿出匕首靠向你，此时，你发现了祭祀的真相，但为时已晚。</p>",
        options: [{ text: '结局一 莽撞', next: 35 }]
    },
    {
        text:"<h1>结局二</h1><p>幸好你备有解药，逃过了一劫。<br>危险的气息不断靠近，你连夜逃回了警局。</p>",
        options: [{ text: '结局二 迷惘', next: 35 }]
    },
    {
        text:"<h1>结局三</h1><p>幸好你备有解药，逃过了一劫。<br>你想起来昨天村长口中的祭祀，前往山腰祭坛。<br>你在暗处目睹了祭祀的过程。<br>原来“月”村的祭祀，是用活人祭祀...<br>你发现了月村的秘密，逃回了警局中。</p>",
        options: [{ text: '结局三 幸运', next: 36 }]
    },
    {
        text: `<h1>“月亮”逆位</h1>
               <p>当“月亮”牌以逆位出现时，则可能意味着我们在困惑和迷茫中逐渐迷失了方向。我们可能会受到旁门左道的影响，听从那些不理智的呓语和诱惑。因此，保持清醒的头脑和坚定的信念显得尤为重要。在逆位的“月亮”牌面前，我们需要更加努力地寻找真相和光明之路。</p>
             <img src="./资源/月亮逆位.png" style="width: 200px; height: auto; display: block; margin: 0 auto; border-radius: 10px; box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);" alt="月亮正位图片">`,       
              options: [{ text: '游戏结束', next: 37 }]

    },
    {
        text: `<h1>“月亮”正位</h1>
               <p>当“月亮”牌以正位出现时，它鼓励我们直面内心的潜意识世界，勇敢地击破那些束缚我们的幻想和欺骗。通过深入自我探索，我们可以获得更加清晰的人生方向和更加坚定的内心力量。</p>
             <img src="./资源/月亮正位.jpg" style="width: 200px; height: auto; display: block; margin: 0 auto; border-radius: 10px; box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);" alt="月亮正位图片">`,        
             options: [{ text: '游戏结束', next: 37 }]
    }
    
];

let currentDialogue = 0; // 当前对话索引

condition1=false;
condition2=false;
condition3=false;


function nextDialogue() {
    const dialogue = dialogues[currentDialogue];
    const dialogueText = document.getElementById('dialogue-text');
    const optionsDiv = document.querySelector('.options');
    
    // 更新对话文本
    dialogueText.innerHTML = dialogue.text;
    
    // 清除旧的选项
    optionsDiv.innerHTML = '';
    
    if (userChoices.includes("你的同行是如何找到的？")) {
        // 例如：玩家问了，可以解锁额外信息
        condition1=true;
    } 
    if (!userChoices.includes("自己调查") && currentDialogue == 15) {
        // 跳转到特殊的对话
        currentDialogue = 16;
        nextDialogue(); // 立即跳转并展示解锁的信息
        return;
    }if (userChoices.includes("自己调查") && currentDialogue == 15) {
        // 跳转到特殊的对话
        currentDialogue = 17;
        nextDialogue(); // 立即跳转并展示解锁的信息
        return;
    }
    if (!userChoices.includes("自己调查") && currentDialogue == 20) {
        // 跳转到特殊的对话
        currentDialogue = 21;
        nextDialogue(); // 立即跳转并展示解锁的信息
        return;
    }if (userChoices.includes("自己调查") && currentDialogue == 20) {
        // 跳转到特殊的对话
        currentDialogue = 22;
        nextDialogue(); // 立即跳转并展示解锁的信息
        return;
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

    }
}
function selectOption(next) {
    // 记录玩家选择
    userChoices.push(dialogues[currentDialogue].options.find(option => option.next === next).text);
    
    // 更新到下一段对话
    currentDialogue = next;
    nextDialogue();
}



// 初始化对话
nextDialogue();
