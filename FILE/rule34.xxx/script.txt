/* ПОДКЛЮЧЕНИЕ GOOGLE ICONS */
try {
var Header = document.head.insertAdjacentHTML('beforebegin', '<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">');

/* ПРИВЕТСТВИЕ В КОНСОЛИ */
try { console.image("https://rule34.xxx/images/r34chibi.png", 125, 234);} catch {
	console.log('[en] Welcume comrade!');
	console.log('[ru] Привет камрад!');
}

// HEADER
var navbar = document.getElementById('navbar').innerHTML = `
<ul class="flat-list" id="navbar">
<li title="аккаунт">
	<a href="https://rule34.xxx/index.php?page=account&amp;s=home">
		<span class="material-icons-outlined">account_circle</span>
	</a>
</li>
<li class="current-page" title="посты">
	<a href="https://rule34.xxx/index.php?page=post&amp;s=list&amp;tags=all">
		<span class="material-icons-outlined">collections</span>
	</a>
</li>
<li title="комментарии">
	<a href="https://rule34.xxx/index.php?page=comment&amp;s=list">
			<span class="material-icons-outlined">textsms</span>
	</a>
</li>
<li title="алиасы">
	<a href="https://rule34.xxx/index.php?page=alias&amp;s=list">
		<span class="material-icons-outlined">subscript</span>
	</a>
</li>
<li title="пользователи">
	<a href="https://rule34.xxx/index.php?page=artist&amp;s=list">
		<span class="material-icons-outlined">people</span>	
	</a>
</li>
<li title="теги">
	<a href="https://rule34.xxx/index.php?page=tags&amp;s=list">
		<span class="material-icons-outlined">style</span>
	</a>
</li>
<li title="pool">
	<a href="https://rule34.xxx/index.php?page=pool&amp;s=list">
		<span class="material-icons-outlined">pool</span>
	</a>
</li>
<li title="форум">
	<a href="https://rule34.xxx/index.php?page=forum&amp;s=list">
		<span class="material-icons-outlined">question_answer</span>
	</a>
</li>
<li title="статистика">
	<a href="https://rule34.xxx/index.php?page=stats">
		<span class="material-icons-outlined">query_stats</span>
	</a>
</li>
<li title="топ100 тегов">
	<a href="https://rule34.xxx/index.php?page=icame">
		<span class="material-icons-outlined">money</span>
	</a>
</li>
<li title="помощь/API">
	<a href="https://rule34.xxx/index.php?page=help">
		<span class="material-icons-outlined">help_outline</span>
	</a>
</li>
<!--<li><a href="https://discord.gg/rule34xxx">Discord</a></li>-->
<li title="магазин">
	<a style="font-weight: bolder; color: #e26c5e;" href="https://kanako.store"><span class="material-icons-outlined">local_grocery_store</span>
	</a>
</li>
<li title="ссылки">
	<a style="font-weight: bolder" href="/link.php">
		<span class="material-icons-outlined">link</span>
	</a>
</li>
</ul>
`;
} catch { console.log('HEDER noStyle'); }


// SUB-HEADER
try{
var RelatedPosts = document.getElementById('subnavbar').innerHTML = 
`
<li title="видео">
	<a href="index.php?page=post&amp;s=list&amp;tags=video">
		<span class="material-icons-outlined">smart_display</span>
	</a>
</li>

<li title="загрузить">
	<a href="index.php?page=post&amp;s=add">
		<span class="material-icons-outlined">file_upload</span>
	</a>
</li>
<li title="рандом">
	<a href="index.php?page=post&amp;s=random">
		<span class="material-icons-outlined">casino</span>
	</a>
</li>
<li title="контакты">
	<a href="mailto:staff@booru.org">
		<span class="material-icons-outlined">alternate_email</span>
	</a>
</li>
<li title="помощь">
	<a href="index.php?page=help&amp;topic=post">
		<span class="material-icons-outlined">help_outline</span>
	</a>
</li>
<li title="сервера изображений">
	<a href="index.php?page=servermap">
		<span class="material-icons-outlined">dns</span>
	</a>
</li>
<li title="карта тегов">
	<a href="index.php?page=toptags">
		<span class="material-icons-outlined">account_tree</span>
	</a>
</li>
</ul>`;
} catch { console.log('Sub-HEDER noStyle'); }
/*
<li>
	<a href="index.php?page=post&amp;s=addVideo">
		<span class="material-icons-outlined">file_upload smart_display</span>
	</a>
</li>
<li>
	<a href="mailto:dmca@booru.org">DMCA</a>
</li>
<li>
	<a href="index.php?page=about">About</a>
</li>
<li>
	<a href="/tos.php">TOS</a>
</li>
*/




try {
	var post_list = document.getElementById('post-list');
	post_list.insertAdjacentHTML('beforebegin', '<button type="button"><span class="material-icons-outlined" onclick="hiden()">swap_horiz</span></button>');
} catch {
	console.log('post_list - не найден');
}

/* СКРЫТЬ/ПОКАЗАТЬ ТЕГ-МЕНЮ */
try {
	var s123 = document.getElementById('post-list');
	var ss = s123.getElementsByTagName('div')[0];
	
	n=1
	function hiden(){
		if (n==1){
			ss.style.cssText = `
				display: none;
			`;
			n=0
		} else {
			ss.style.cssText = `
				display: block;
			`;
			n=1
		}
	}
} catch {
	console.log('post-list > div - не найден');
}



// ПОЛУЧЕНИЕ ССЫЛОК next_back
try {
	var next_back = document.getElementById('post-view').getElementsByTagName('div')[0].getElementsByClassName('link-list')[2].getElementsByTagName('ul')[0];
	
	var Back = next_back.getElementsByTagName('li')[0].getElementsByTagName('a')[0].getAttribute('onclick');
	var Next = next_back.getElementsByTagName('li')[1].getElementsByTagName('a')[0].getAttribute('onclick');
	var Open = document.getElementsByClassName('link-list')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[1].getElementsByTagName('a')[0].href;
	var Download = document.getElementById('image').src;
	
	console.log('ORIGINAL == ', Download);
	console.log('onclick[ next/back ] -- получено');
	console.log('onclick[Next] == ', Next);
	console.log('onclick[Back] == ', Back);
} catch { console.log('next_back -- не найден') };

/* назад/вперед */
try{
	var adad = document.getElementsByClassName('flexi')[0];
	adad.insertAdjacentHTML('beforebegin', `
	<a onclick="${Back}">
		<span class="material-icons-outlined next_back hill">arrow_back_ios</span>
	</a>
	<a onclick="${Next}">
		<span class="material-icons-outlined next_back hill">arrow_forward_ios</span>
	</a>
	<a href="#" download="${Download}">
		<span class="material-icons-outlined next_back hill">download</span>
	</a>
	<a href="${Open}">
		<span class="material-icons-outlined next_back hill">launch</span>
	</a>`);
} catch { console.log('next_back - не исполнен'); };

// УПРАВЛЕНИЕ С КЛАВИАТУРЫ
// ↑ - открыть в новой вкладке
// ↓ - скачать
// ← - прошлый пост
// → - следующий пост

document.onkeydown = function(event) {
    console.log(event);
    if (event.code == 'ArrowDown') {};
    if (event.code == 'ArrowUp') {};
    if (event.code == 'ArrowLeft') {};
    if (event.code == 'ArrowRight') {`${Next}`};
};



/* SEARCH */
try{
	var FORM_DIV = document.getElementsByTagName('form')[0].getElementsByTagName('div')[0];
	FORM_DIV.innerHTML = `
<div class="awesomplete"><input name="tags" style="" type="text" value="" placeholder="Search..." autocomplete="off" aria-autocomplete="list"><ul hidden=""></ul><span class="visually-hidden" role="status" aria-live="assertive" aria-relevant="additions"></span></div><input name="commit" style="" type="submit" value="Search">`;
	FORM_DIV.style.display = 'flex';
} catch {console.log('div');};

try{
	var SEARCH_LINE = document.getElementsByTagName('form')[0].getElementsByTagName('input')[0];
	SEARCH_LINE.placeholder = "Search...";
	SEARCH_LINE.style = 
	console.log('SEARCH Inject');
} catch { console.log('SEARCH noInject'); };

try{
var SEARCH_BUTTON = document.getElementsByTagName('form')[0].getElementsByTagName('div')[0].getElementsByTagName('input')[1];
	SEARCH_BUTTON.style.cssText = ``;
} catch { console.log('SEARCH_BUTTON - noInject') };