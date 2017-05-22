$(document).ready(function(){
/* jRumble v1.2 - http://jackrugile.com/jrumble - MIT License */
(function(f){f.fn.jrumble=function(g){var a=f.extend({x:2,y:2,rotation:1,speed:15,opacity:false,opacityMin:0.5},g);return this.each(function(){var b=f(this),h=a.x*2,i=a.y*2,k=a.rotation*2,g=a.speed===0?1:a.speed,m=a.opacity,n=a.opacityMin,l,j,o=function(){var e=Math.floor(Math.random()*(h+1))-h/2,a=Math.floor(Math.random()*(i+1))-i/2,c=Math.floor(Math.random()*(k+1))-k/2,d=m?Math.random()+n:1,e=e===0&&h!==0?Math.random()<0.5?1:-1:e,a=a===0&&i!==0?Math.random()<0.5?1:-1:a;b.css("display")==="inline"&&(l=true,b.css("display","inline-block"));b.css({position:"relative",left:e+"px",top:a+"px","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity="+d*100+")",filter:"apha(opacity="+d*100+")","-moz-opacity":d,"-khtml-opacity":d,opacity:d,"-webkit-transform":"rotate("+c+"deg)","-moz-transform":"rotate("+c+"deg)","-ms-transform":"rotate("+c+"deg)","-o-transform":"rotate("+c+"deg)",transform:"rotate("+c+"deg)"})},p={left:0,top:0,"-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",filter:"apha(opacity=100)","-moz-opacity":1,"-khtml-opacity":1,opacity:1,"-webkit-transform":"rotate(0deg)","-moz-transform":"rotate(0deg)","-ms-transform":"rotate(0deg)","-o-transform":"rotate(0deg)",transform:"rotate(0deg)"};b.bind({startRumble:function(a){a.stopPropagation();clearInterval(j);j=setInterval(o,g)},stopRumble:function(a){a.stopPropagation();clearInterval(j);l&&b.css("display","inline");b.css(p)}})})}})(jQuery);//JRumble Plugin End
//Style Sheet Switcher version 1.1 Oct 10th, 2006
var manual_or_random="manual" //"manual" or "random"
var randomsetting="3 days" //"eachtime", "sessiononly", or "x days (replace x with desired integer)". Only applicable if mode is random.
//////No need to edit beyond here//////////////
function getCookie(Name) { 
var re=new RegExp(Name+"=[^;]+", "i"); //construct RE to search for target name/value pair
if (document.cookie.match(re)) //if cookie found
return document.cookie.match(re)[0].split("=")[1] //return its value
return null}
function setCookie(name, value, days) {
var expireDate = new Date()
//set "expstring" to either future or past date, to set or delete cookie, respectively
var expstring=(typeof days!="undefined")? expireDate.setDate(expireDate.getDate()+parseInt(days)) : expireDate.setDate(expireDate.getDate()-5)
document.cookie = name+"="+value+"; expires="+expireDate.toGMTString()+"; path=/";}
function deleteCookie(name){
setCookie(name, "moot")
}
function setStylesheet(title, randomize){ //Main stylesheet switcher function. Second parameter if defined causes a random alternate stylesheet (including none) to be enabled
var i, cacheobj, altsheets=[""]
for(i=0; (cacheobj=document.getElementsByTagName("link")[i]); i++) {
if(cacheobj.getAttribute("rel").toLowerCase()=="alternate stylesheet" && cacheobj.getAttribute("title")) { //if this is an alternate stylesheet with title
cacheobj.disabled = true
altsheets.push(cacheobj) //store reference to alt stylesheets inside array
if(cacheobj.getAttribute("title") == title) //enable alternate stylesheet with title that matches parameter
cacheobj.disabled = false //enable chosen style sheet
}
}
if (typeof randomize!="undefined"){ //if second paramter is defined, randomly enable an alt style sheet (includes non)
var randomnumber=Math.floor(Math.random()*altsheets.length)
altsheets[randomnumber].disabled=false
}
return (typeof randomize!="undefined" && altsheets[randomnumber]!="")? altsheets[randomnumber].getAttribute("title") : "" //if in "random" mode, return "title" of randomly enabled alt stylesheet
}
function chooseStyle(styletitle, days){ //Interface function to switch style sheets plus save "title" attr of selected stylesheet to cookie
if (document.getElementById){
setStylesheet(styletitle)
setCookie("mysheet", styletitle, days)
}
}
function indicateSelected(element){ //Optional function that shows which style sheet is currently selected within group of radio buttons or select menu
if (selectedtitle!=null && (element.type==undefined || element.type=="select-one")){ //if element is a radio button or select menu
var element=(element.type=="select-one") ? element.options : element
for (var i=0; i<element.length; i++){
if (element[i].value==selectedtitle){ //if match found between form element value and cookie value
if (element[i].tagName=="OPTION") //if this is a select menu
element[i].selected=true
else //else if it's a radio button
element[i].checked=true
break
}
}
}
}
if (manual_or_random=="manual"){ //IF MANUAL MODE
var selectedtitle=getCookie("mysheet")
if (document.getElementById && selectedtitle!=null) //load user chosen style sheet from cookie if there is one stored
setStylesheet(selectedtitle)
}
else if (manual_or_random=="random"){ //IF AUTO RANDOM MODE
if (randomsetting=="eachtime")
setStylesheet("", "random")
else if (randomsetting=="sessiononly"){ //if "sessiononly" setting
if (getCookie("mysheet_s")==null) //if "mysheet_s" session cookie is empty
document.cookie="mysheet_s="+setStylesheet("", "random")+"; path=/" //activate random alt stylesheet while remembering its "title" value
else
setStylesheet(getCookie("mysheet_s")) //just activate random alt stylesheet stored in cookie
}
else if (randomsetting.search(/^[1-9]+ days/i)!=-1){ //if "x days" setting
if (getCookie("mysheet_r")==null || parseInt(getCookie("mysheet_r_days"))!=parseInt(randomsetting)){ //if "mysheet_r" cookie is empty or admin has changed number of days to persist in "x days" variable
setCookie("mysheet_r", setStylesheet("", "random"), parseInt(randomsetting)) //activate random alt stylesheet while remembering its "title" value
setCookie("mysheet_r_days", randomsetting, parseInt(randomsetting)) //Also remember the number of days to persist per the "x days" variable
}
else
setStylesheet(getCookie("mysheet_r")) //just activate random alt stylesheet stored in cookie
} 
};
//styleswitch Plugin End
//start title tooltip plugin
var qTipTag = "a,label,input"; //Which tag do you want to qTip-ize? Keep it lowercase!//
var qTipX = 0; //This is qTip's X offset//
var qTipY = 15; //This is qTip's Y offset//
//There's No need to edit anything below this line//
tooltip = {
  name : "qTip",
  offsetX : qTipX,
  offsetY : qTipY,
  tip : null
}
tooltip.init = function () {
	var tipNameSpaceURI = "http://www.w3.org/1999/xhtml";
	if(!tipContainerID){ var tipContainerID = "qTip";}
	var tipContainer = document.getElementById(tipContainerID);

	if(!tipContainer) {
	  tipContainer = document.createElementNS ? document.createElementNS(tipNameSpaceURI, "div") : document.createElement("div");
		tipContainer.setAttribute("id", tipContainerID);
	  document.getElementsByTagName("body").item(0).appendChild(tipContainer);
	}

	if (!document.getElementById) return;
	this.tip = document.getElementById (this.name);
	if (this.tip) document.onmousemove = function (evt) {tooltip.move (evt)};

	var a, sTitle, elements;
	
	var elementList = qTipTag.split(",");
	for(var j = 0; j < elementList.length; j++)
	{	
		elements = document.getElementsByTagName(elementList[j]);
		if(elements)
		{
			for (var i = 0; i < elements.length; i ++)
			{
				a = elements[i];
				sTitle = a.getAttribute("title");				
				if(sTitle)
				{
					a.setAttribute("tiptitle", sTitle);
					a.removeAttribute("title");
					a.removeAttribute("alt");
					a.onmouseover = function() {tooltip.show(this.getAttribute('tiptitle'))};
					a.onmouseout = function() {tooltip.hide()};
				}
			}
		}
	}
}

tooltip.move = function (evt) {
	var x=0, y=0;
	if (document.all) {//IE
		x = (document.documentElement && document.documentElement.scrollLeft) ? document.documentElement.scrollLeft : document.body.scrollLeft;
		y = (document.documentElement && document.documentElement.scrollTop) ? document.documentElement.scrollTop : document.body.scrollTop;
		x += window.event.clientX;
		y += window.event.clientY;
		
	} else {//Good Browsers
		x = evt.pageX;
		y = evt.pageY;
	}
	this.tip.style.left = (x + this.offsetX) + "px";
	this.tip.style.top = (y + this.offsetY) + "px";
}

tooltip.show = function (text) {
	if (!this.tip) return;
	this.tip.innerHTML = text;
	this.tip.style.display = "block";
}

tooltip.hide = function () {
	if (!this.tip) return;
	this.tip.innerHTML = "";
	this.tip.style.display = "none";
}

window.onload = function () {
	tooltip.init ();
}
//End title tooltip plugin
//login slidedown
$("#login_show").click(function () {
$(".login").slideDown();});
$("#login_hide").click(function () {
$(".login").slideUp();});
//jrumble
$('.logo,').jrumble({rangeX: 2,rangeY: 2,rangeRot: 4});;
$('.logo,').hover(function(){$(this).trigger('startRumble');}, function(){
$(this).trigger('stopRumble');});


//slide show effect
    var itemHeight = 103;
    var delay = 150;
    $('.carousel').carouFredSel({
	auto:true,
	responsive : true,
    items: 4,
    scroll: {
    duration: 1400,
    timeoutDuration: 2500,
    onBefore: function( data ) {
    data.items.old.each(function( i ) {
    $(this).delay(i*delay).animate({
    marginTop: itemHeight,
    marginBottom: -itemHeight
    }, 500);
    });
    data.items.visible.css({
    marginTop: -itemHeight,
    marginBottom: itemHeight
    });
    data.items.visible.each(function( i ) {
    $(this).delay((3+i)*delay).animate({
    marginTop: 0,
    marginBottom: 0
    }, 500);
    });
    }
    }
    });
	//slide show-hide
    $(".tabs li a").click(function () {  
        // switch all tabs off  
        $(".selected").removeClass("selected");  
        // switch this tab on  
        $(this).addClass("selected");  
        // slide all elements with the class 'content' up  
        });  
		//
/* http://www.menucool.com/tabbed-content Free to use. Version 2013.7.6 */
(function(){var g=function(a){if(a&&a.stopPropagation)a.stopPropagation();else window.event.cancelBubble=true;var b=a?a:window.event;b.preventDefault&&b.preventDefault()},d=function(a,c,b){if(a.addEventListener)a.addEventListener(c,b,false);else a.attachEvent&&a.attachEvent("on"+c,b)},a=function(c,a){var b=new RegExp("(^| )"+a+"( |$)");return b.test(c.className)?true:false},j=function(b,c,d){if(!a(b,c))if(b.className=="")b.className=c;else if(d)b.className=c+" "+b.className;else b.className+=" "+c},h=function(a,b){var c=new RegExp("(^| )"+b+"( |$)");a.className=a.className.replace(c,"$1");a.className=a.className.replace(/ $/,"")},e=function(){var b=window.location.pathname;if(b.indexOf("/")!=-1)b=b.split("/");var a=b[b.length-1]||"root";if(a.indexOf(".")!=-1)a=a.substring(0,a.indexOf("."));if(a>20)a=a.substring(a.length-19);return a},c="mi"+e(),b=function(b,a){this.g(b,a)};b.prototype={h:function(){var b=new RegExp(c+this.a+"=(\\d+)"),a=document.cookie.match(b);return a?a[1]:this.i()},i:function(){for(var b=0,c=this.b.length;b<c;b++)if(a(this.b[b].parentNode,"selected"))return b;return 0},j:function(b,d){var c=document.getElementById(b.TargetId);if(!c)return;this.l(c);for(var a=0;a<this.b.length;a++)if(this.b[a]==b){j(b.parentNode,"selected");d&&this.d&&this.k(this.a,a)}else h(this.b[a].parentNode,"selected")},k:function(a,b){document.cookie=c+a+"="+b+"; path=/"},l:function(b){for(var a=0;a<this.c.length;a++)this.c[a].style.visibility=this.c[a].id==b.id?"visible":"hidden"},m:function(){this.c=[];for(var c=this,a=0;a<this.b.length;a++){var b=document.getElementById(this.b[a].TargetId);if(b){this.c.push(b);d(this.b[a],"click",function(b){var a=this;if(a===window)a=window.event.srcElement;c.j(a,1);g(b);return false})}}},g:function(f,h){this.a=h;this.b=[];for(var e=f.getElementsByTagName("a"),i=/#([^?]+)/,a,b,c=0;c<e.length;c++){b=e[c];a=b.getAttribute("href");if(a.indexOf("#")==-1)continue;else{var d=a.match(i);if(d){a=d[1];b.TargetId=a;this.b.push(b)}else continue}}var g=f.getAttribute("data-persist")||"";this.d=g.toLowerCase()=="true"?1:0;this.m();this.n()},n:function(){var a=this.d?parseInt(this.h()):this.i();if(a>=this.b.length)a=0;this.j(this.b[a],0)}};var k=[],i=function(e){var b=false;function a(){if(b)return;b=true;setTimeout(e,4)}if(document.addEventListener)document.addEventListener("DOMContentLoaded",a,false);else if(document.attachEvent){try{var f=window.frameElement!=null}catch(g){}if(document.documentElement.doScroll&&!f){function c(){if(b)return;try{document.documentElement.doScroll("left");a()}catch(d){setTimeout(c,10)}}c()}document.attachEvent("onreadystatechange",function(){document.readyState==="complete"&&a()})}d(window,"load",a)},f=function(){for(var d=document.getElementsByTagName("ul"),c=0,e=d.length;c<e;c++)a(d[c],"tabs")&&k.push(new b(d[c],c))};i(f);return{}})();
//slide show-hide End
//
//sidbar hid/show
$("#sidebar-show-hide1").click(function () {
$(".brosers-download-cont").animate({width: 'toggle'});});
$("#color-switch-show-hide").click(function () {
$(".colors-switch-cont").animate({width: 'toggle'});});
$("#social-media-follow-show-hide").click(function () {
$(".social-media-follow-cont").animate({width: 'toggle'});});
//legacy show-hide info
$(".show-legacy-info").click(function () {
$(".postbit-legacy-hideinfo").animate({height: 'toggle'});});
//end document ready
});