const btn = document.getElementById('btn');
const text = document.getElementById('text')

//text要素にテキストを追加する
btn.addEventListener('click', () => {
text.textContent = 'ボタンをクリックしました';
});