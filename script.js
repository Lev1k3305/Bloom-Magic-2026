const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzK9wPShztnM3SSUGWURX6eTDf0Z2GiJXI3BdJP96vYx93roxKdiHWSRi0TqYqJEn-6/exec"; // Сюда вставишь URL после настройки таблицы

        const VIP = { "мама": { 
            card: "Мамочка, ты — моё всё! ❤️", 
            letter: "Дорогая мама, с праздником! Ты научила меня видеть красоту в мире и воспитала меня как настоящего мужчину. Пусть этот день будет таким же светлым, как твоя душа!" 
        },
                "Алена": { 
            card: "Алена, ты — твои глаза все также прекрасные как звезда! ✨", 
            letter: "Дорогая Алена, с 8 Марта! Ты приносишь свет и радость в жизни всех вокруг. Пусть эта весна будет для тебя началом новых ярких приключений!" 
        },
                "Руфина": { 
            card: "Руфина, ты — воплощение красоты! 🌸", 
            letter: "Дорогая Руфина, с праздником! Ты словно весенний цветок, который расцветает и радует всех своей красотой. Пусть эта весна принесет тебе много счастья и вдохновения!" 
        },
                "Зоя": { 
            card: "Зоя, ты — нежный цветок! 💐", 
            letter: "Дорогая Зоя, с 8 Марта! Ты приносишь в этот мир столько тепла и света. Пусть эта весна будет для тебя временем новых надежд и радостных моментов!" 
        },
                "Шугыла": { 
            card: "Шугыла, ты — весенний ветер перемен! 🌬️", 
            letter: "Дорогая Шугыла, с 8 Марта! Ты словно свежий ветер, который приносит перемены и вдохновение. Пусть эта весна будет для тебя временем новых открытий и ярких эмоций!" 
        },
                "Диля": { 
            card: "Диля, ты — нежная и красивая как сакура! 🌺", 
            letter: "Дорогая Диля, с праздником! Ты приносишь в этот мир свою неповторимую красоту и аромат. Пусть эта весна будет для тебя временем новых достижений и радостных моментов!" 
        },
                "Дильназ": { 
            card: "Дильназ, ты — сияющая луна в ночи! 🌙", 
            letter: "Дорогая Дильназ, с 8 Марта! Ты словно луна, которая освещает путь и приносит спокойствие. Пусть эта весна будет для тебя временем гармонии и вдохновения!" 
        },
                "Зарина": { 
            card: "Зарина, ты — королева весны! 👑",
            letter: "Дорогая Зарина, с 8 Марта! Ты — королева весны, которая освещает мир своей красотой и добротой. Пусть эта весна будет для тебя временем радости и счастья!" 
        },
                "Лина": { 
            card: "Лина, ты — нежный цветок весны! 🌷", 
            letter: "Дорогая Лина, с праздником! Ты приносишь в этот мир столько нежности и красоты. Пусть эта весна будет для тебя временем новых надежд и радостных моментов!" 
        },
                "Лейла": { 
            card: "Лейла, ты — звезда, освещающая весну! ✨", 
            letter: "Дорогая Лейла, с 8 Марта! Ты словно звезда, которая освещает весну своим светом и теплом. Пусть эта весна будет для тебя временем новых достижений и ярких эмоций!" 
        },
                "Ангелина": { 
            card: "Ангелина, ты — ангел весны! 😇", 
            letter: "Дорогая Ангелина, с праздником! Ты приносишь в этот мир столько света и добра. Пусть эта весна будет для тебя временем новых надежд и радостных моментов!" 
        },
                "Венера": { 
            card: "Венера, ты — богиня весны! 🌹", 
            letter: "Дорогая Венера, с 8 Марта! Ты словно богиня, которая приносит в этот мир красоту и любовь. Пусть эта весна будет для тебя временем новых открытий и ярких эмоций!" 
        },
                "Анель": { 
            card: "Анель, ты — нежный цветок весны! 🌼", 
            letter: "Дорогая Анель, с праздником! Ты приносишь в этот мир столько нежности и красоты. Пусть эта весна будет для тебя временем новых надежд и радостных моментов!" 
        },
                "Аида Ирманова": { 
            card: "Аида, ты — цветок с уникальным ароматом! 🌺", 
            letter: "Дорогая Аида, с 8 Марта! Ты приносишь в этот мир свою неповторимую красоту и аромат. Пусть эта весна будет для тебя временем новых достижений и радостных моментов!" 
        },
                "Аида": { 
            card: "Аида, ты — цветок с уникальным ароматом! 🌺", 
            letter: "Дорогая Аида, с 8 Марта! Ты приносишь в этот мир свою неповторимую красоту и аромат. Пусть эта весна будет для тебя временем новых достижений и радостных моментов!" 
        },
                "Алина": { 
            card: "Алина, ты — нежный цветок весны! 🌷", 
            letter: "Дорогая Алина, с праздником! Ты приносишь в этот мир столько нежности и красоты. Пусть эта весна будет для тебя временем новых надежд и радостных моментов!" 
        },
                "Румия": { 
            card: "Румия, ты — нежный цветок весны! 🌷", 
            letter: "Дорогая Румия, с праздником! Ты приносишь в этот мир столько нежности и красоты. Пусть эта весна будет для тебя временем новых надежд и радостных моментов!" 
        },
    };

        
        const i18n = {
            ru: { welcome: "Весна начинается с тебя...", start: "Начать ✨", choice: "Выбери свой цветок 💐", gift: "Открыть подарок", final: "С 8 МАРТА!", wish: "Пусть эта весна принесет тебе столько радости, сколько цветов расцветает в мире. Сияй и будь счастлива! ✨" },
            kz: { welcome: "Көктем сенен басталады...", start: "Бастау ✨", choice: "Гүліңді таңда 💐", gift: "Сыйлықты ашу", final: "8 НАУРЫЗБЕН!", wish: "Осынау көктем мерекесінде саған әлемнің барлық гүлін сыйлаймын. Жүзіңнен күлкі кетпесін! 🌸" },
            en: { welcome: "Spring starts with you...", start: "Start ✨", choice: "Pick a flower 💐", gift: "Open gift", final: "HAPPY MARCH 8!", wish: "May this spring bring you as much joy as there are flowers in the world. Shine bright! ✨" },
            id: { welcome: "Musim semi dimulai darimu...", start: "Mulai ✨", choice: "Pilih bunga 💐", gift: "Buka hadiah", final: "SELAMAT 8 MARET!", wish: "Semoga musim semi ini memberimu kebahagiaan sebanyak bunga yang mekar di dunia. Bersinarlah! 🌸" },
            jp: { welcome: "春はあなたから始まる...", start: "スタート ✨", choice: "花を選んで 💐", gift: "ギフトを開く", final: "3月8日おめでとう！", wish: "この春が、世界中に咲く花のようにあなたに喜びをもたらしますように。輝いてください！ ✨" },
            uk: { welcome: "Весна починається з тебе...", start: "Почати ✨", choice: "Вибери свою квітку 💐", gift: "Відкрити подарунок", final: "З 8 БЕРЕЗНЯ!", wish: "Нехай ця весна принесе тобі стільки радості, скільки квітів розквітає у світі. Сяй і будь щаслива! ✨" },
            kr: { welcome: "봄은 당신으로부터 시작됩니다...", start: "시작 ✨", choice: "꽃을 선택하세요 💐", gift: "선물 열기", final: "3월 8일 축하합니다!", wish: "이번 봄이 세상에 피어나는 꽃들처럼 당신에게 기쁨을 가져다주길 바랍니다. 빛나세요! ✨" },
        };

        let lang = 'ru';
        let userName = "";

        function setLang(l, btn) {
            lang = l;
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            document.getElementById('welcome-text').innerText = i18n[lang].welcome;
            document.getElementById('start-btn').innerText = i18n[lang].start;
            document.getElementById('choice-title').innerText = i18n[lang].choice;
            document.getElementById('gift-btn').innerText = i18n[lang].gift;
        }

        function showScreen(n) {
            document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
            document.getElementById('screen-'+n).classList.add('active');
        }

        function nextStep(f) { window.selectedFlower = f; showScreen(2); }

 async function finalMagic() {
    userName = document.getElementById('nameInput').value.trim() || "Spring";
    const data = VIP[userName.toLowerCase()];
    
    showScreen(3);
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });

    // 1. Вставляем рукописное имя (оно само проявится благодаря CSS)
    document.getElementById('f-personalized-name').innerText = userName;

    // 2. Устанавливаем заголовок
    document.getElementById('f-title').innerText = data ? "ДЛЯ ТЕБЯ" : i18n[lang].final;
    
    const msg = data ? data.card : i18n[lang].wish;
    
    // 3. VIP-проверка
    if(data) {
        document.getElementById('letter-btn').style.display = "block";
        document.getElementById('letter-text').innerText = data.letter;
    }

    // 4. Печатаем текст поздравления
    let el = document.getElementById('f-msg');
    el.innerText = "";
    for (let char of msg) { 
        el.innerText += char; 
        await new Promise(r => setTimeout(r, 45)); 
    }
}

function createNameHeart(name) {
    const container = document.getElementById('name-heart-container');
    if (!container) return;
    container.innerHTML = '';
    
    let heartText = name.toUpperCase();
    // Делаем строку длиннее, чтобы сердце было четким
    while (heartText.length < 18) { heartText += " " + name.toUpperCase(); }
    
    const letters = heartText.split('');
    const total = letters.length;

    letters.forEach((char, i) => {
        if (char === " ") return; // Пропускаем пробелы в отрисовке
        
        const span = document.createElement('span');
        span.innerText = char;
        span.className = 'heart-letter';
        
        const angle = (i / total) * Math.PI * 2;
        
        // Математика сердца
        const x = 16 * Math.pow(Math.sin(angle), 3);
        const y = -(13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));
        
        // Уменьшил масштаб до 4.5, чтобы не разлеталось как на твоем скрине
        const scale = 4.5; 
        
        span.style.left = `calc(50% + ${x * scale}px)`;
        span.style.top = `calc(50% + ${y * scale}px)`;
        span.style.animationDelay = `${i * 0.1}s`;
        
        container.appendChild(span);
    });
}

        function generateWallpaper(emoji) {
            document.getElementById('wp-title').innerText = userName.toUpperCase() || "SPRING";
            document.getElementById('wp-emoji').innerText = emoji;
            document.getElementById('wp-text').innerText = i18n[lang].wish;

            const target = document.getElementById('wallpaper-render');
            html2canvas(target).then(canvas => {
                const link = document.createElement('a');
                link.download = `Bloom_Wallpaper_${emoji}.png`;
                link.href = canvas.toDataURL("image/png");
                link.click();
            });
        }

        function openOverlay(id) { document.getElementById(id).style.display = 'flex'; }
        function closeOverlay(id) { document.getElementById(id).style.display = 'none'; }

        // Фон
        const cvs = document.getElementById('bg-canvas'); const ctx = cvs.getContext('2d');
        function res() { cvs.width = window.innerWidth; cvs.height = window.innerHeight; }
        window.onresize = res; res();
        const syms = ["❤️", "🌸", "✨"];
        let pts = Array.from({length: 40}, () => ({ x: Math.random()*cvs.width, y: Math.random()*cvs.height, v: 0.5, char: syms[Math.floor(Math.random()*3)] }));
        function anim() {
            ctx.clearRect(0,0,cvs.width,cvs.height); ctx.globalAlpha = 0.2;
            pts.forEach(p => { ctx.fillText(p.char, p.x, p.y); p.y -= p.v; if(p.y < -30) p.y = cvs.height + 30; });
            requestAnimationFrame(anim);
        }
        anim();