//拦截安卓回退按钮
history.pushState(null, null, location.href);
window.addEventListener('popstate', function(event) {
    history.pushState(null, null, location.href );
    //此处加入回退时你要执行的代码
	//window.location.href="about:blank";
});


//变换背景颜色
/**
 * 产生随机整数，包含下限值，包括上限值
 * @param {Number} lower 下限
 * @param {Number} upper 上限
 * @return {Number} 返回在下限到上限之间的一个随机整数
 */
// function random(lower, upper) {
	// return Math.floor(Math.random() * (upper - lower+1)) + lower;
// }
//随机设置背景色
 function setBGC(){
	 var va2 = localStorage.value2
	 document.getElementById("imgBg").style.background = document.write(va2);
 }
 setInterval(setBGC,300); 





