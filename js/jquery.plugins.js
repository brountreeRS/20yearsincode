/*
 Plugin: jQuery Parallax
 Version 1.1.3
 Author: Ian Lunn
 Twitter: @IanLunn
 Author URL: http://www.ianlunn.co.uk/
 Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

 Dual licensed under the MIT and GPL licenses:
 http://www.opensource.org/licenses/mit-license.php
 http://www.gnu.org/licenses/gpl.html
 */


(function($){var $window=$(window);var windowHeight=$window.height();$window.resize(function(){windowHeight=$window.height();});$.fn.parallax=function(xpos,speedFactor,outerHeight){var $this=$(this);var getHeight;var firstTop;var paddingTop=0;$this.each(function(){firstTop=$this.offset().top;});if(outerHeight){getHeight=function(jqo){return jqo.outerHeight(true);};}else{getHeight=function(jqo){return jqo.height();};}
    if(arguments.length<1||xpos===null)xpos="50%";if(arguments.length<2||speedFactor===null)speedFactor=0.1;if(arguments.length<3||outerHeight===null)outerHeight=true;function update(){var pos=$window.scrollTop();$this.each(function(){var $element=$(this);var top=$element.offset().top;var height=getHeight($element);if(top+height<pos||top>pos+windowHeight){return;}
        $this.css('backgroundPosition',xpos+" "+Math.round((firstTop-pos)*speedFactor)+"px");});}
    $window.bind('scroll',update).resize(update);update();};})(jQuery);

/**
 * Copyright (c) 2007-2013 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.6
 */
(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}
    if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}
        targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}
        $.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}
            attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}
            if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,targ,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/**
 * jquery local scroll
 */
(function($){var l=location.href.replace(/#.*/,'');var g=$.localScroll=function(a){$('body').localScroll(a)};g.defaults={duration:1e3,axis:'y',event:'click',stop:true,target:window,reset:true};g.hash=function(a){if(location.hash){a=$.extend({},g.defaults,a);a.hash=false;if(a.reset){var e=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=e}
    i(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},g.defaults,b);return b.lazy?this.bind(b.event,function(a){var e=$([a.target,a.target.parentNode]).filter(d)[0];if(e)i(a,e,b)}):this.find('a,area').filter(d).bind(b.event,function(a){i(a,this,b)}).end().end();function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==l&&(!b.filter||$(this).is(b.filter))}};function i(a,e,b){var d=e.hash.slice(1),f=document.getElementById(d)||document.getElementsByName(d)[0];if(!f)return;if(a)a.preventDefault();var h=$(b.target);if(b.lock&&h.is(':animated')||b.onBefore&&b.onBefore.call(b,a,f,h)===false)return;if(b.stop)h.stop(true);if(b.hash){var j=f.id==d?'id':'name',k=$('<a> </a>').attr(j,d).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});f[j]='';$('body').prepend(k);location=e.hash;k.remove();f[j]=d}
    h.scrollTo(f,b).trigger('notify.serialScroll',[f])}})(jQuery);


/**
 * jquery sticky
 */

(function($){var defaults={topSpacing:0,bottomSpacing:0,className:'is-sticky',wrapperClassName:'sticky-wrapper',center:false,getWidthFrom:''},$window=$(window),$document=$(document),sticked=[],windowHeight=$window.height(),scroller=function(){var scrollTop=$window.scrollTop(),documentHeight=$document.height(),dwh=documentHeight-windowHeight,extra=(scrollTop>dwh)?dwh-scrollTop:0;for(var i=0;i<sticked.length;i++){var s=sticked[i],elementTop=s.stickyWrapper.offset().top,etse=elementTop-s.topSpacing-extra;if(scrollTop<=etse){if(s.currentTop!==null){s.stickyElement.css('position','').css('top','');s.stickyElement.parent().removeClass(s.className);s.currentTop=null;}}
else{var newTop=documentHeight-s.stickyElement.outerHeight()
    -s.topSpacing-s.bottomSpacing-scrollTop-extra;if(newTop<0){newTop=newTop+s.topSpacing;}else{newTop=s.topSpacing;}
    if(s.currentTop!=newTop){s.stickyElement.css('position','fixed').css('top',newTop);if(typeof s.getWidthFrom!=='undefined'){s.stickyElement.css('width',$(s.getWidthFrom).width());}
        s.stickyElement.parent().addClass(s.className);s.currentTop=newTop;}}}},resizer=function(){windowHeight=$window.height();},methods={init:function(options){var o=$.extend(defaults,options);return this.each(function(){var stickyElement=$(this);var stickyId=stickyElement.attr('id');var wrapper=$('<div></div>').attr('id',stickyId+'-sticky-wrapper').addClass(o.wrapperClassName);stickyElement.wrapAll(wrapper);if(o.center){stickyElement.parent().css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});}
    if(stickyElement.css("float")=="right"){stickyElement.css({"float":"none"}).parent().css({"float":"right"});}
    var stickyWrapper=stickyElement.parent();stickyWrapper.css('height',stickyElement.outerHeight());sticked.push({topSpacing:o.topSpacing,bottomSpacing:o.bottomSpacing,stickyElement:stickyElement,currentTop:null,stickyWrapper:stickyWrapper,className:o.className,getWidthFrom:o.getWidthFrom});});},update:scroller};if(window.addEventListener){window.addEventListener('scroll',scroller,false);window.addEventListener('resize',resizer,false);}else if(window.attachEvent){window.attachEvent('onscroll',scroller);window.attachEvent('onresize',resizer);}
    $.fn.sticky=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}else{$.error('Method '+method+' does not exist on jQuery.sticky');}};$(function(){setTimeout(scroller,0);});})(jQuery);

/**
 * flexible slides and responve content slider
 */

(function($){$.fn.flexisel=function(options){var defaults=$.extend({visibleItems:4,animationSpeed:200,autoPlay:false,autoPlaySpeed:3000,pauseOnHover:true,setMaxWidthAndHeight:false,enableResponsiveBreakpoints:true,clone:true,responsiveBreakpoints:{portrait:{changePoint:480,visibleItems:1},landscape:{changePoint:640,visibleItems:2},tablet:{changePoint:768,visibleItems:3}}},options);var object=$(this);var settings=$.extend(defaults,options);var itemsWidth;var canNavigate=true;var itemsVisible=settings.visibleItems;var totalItems=object.children().length;var responsivePoints=[];var methods={init:function(){return this.each(function(){methods.appendHTML();methods.setEventHandlers();methods.initializeItems();});},initializeItems:function(){var listParent=object.parent();var innerHeight=listParent.height();var childSet=object.children();methods.sortResponsiveObject(settings.responsiveBreakpoints);var innerWidth=listParent.width();itemsWidth=(innerWidth)/itemsVisible;childSet.width(itemsWidth);if(settings.clone){childSet.last().insertBefore(childSet.first());childSet.last().insertBefore(childSet.first());object.css({'left':-itemsWidth});}
    object.fadeIn();$(window).trigger("resize");},appendHTML:function(){object.addClass("nbs-flexisel-ul");object.wrap("<div class='nbs-flexisel-container'><div class='nbs-flexisel-inner'></div></div>");object.find("li").addClass("nbs-flexisel-item");if(settings.setMaxWidthAndHeight){var baseWidth=$(".nbs-flexisel-item img").width();var baseHeight=$(".nbs-flexisel-item img").height();$(".nbs-flexisel-item img").css("max-width",baseWidth);$(".nbs-flexisel-item img").css("max-height",baseHeight);}
    $("<div class='button-nav button-left-clients'> < </div><div class='button-nav button-right-clients'> > </div>").insertAfter(".nbs-flexisel-inner",object);if(settings.clone){var cloneContent=object.children().clone();object.append(cloneContent);}},setEventHandlers:function(){var listParent=object.closest('.nbs-flexisel-container');var childSet=object.children();var leftArrow=listParent.find($(".button-left-clients"));var rightArrow=listParent.find($(".button-right-clients"));$(window).on("resize",function(event){methods.setResponsiveEvents();var innerWidth=$(listParent).width();var innerHeight=$(listParent).height();itemsWidth=(innerWidth)/itemsVisible;childSet.width(itemsWidth);if(settings.clone){object.css({'left':-itemsWidth});}else{object.css({'left':0});}
    var halfArrowHeight=(leftArrow.height())/2;var arrowMargin=(innerHeight/2)-halfArrowHeight;leftArrow.css("top",arrowMargin+"px");rightArrow.css("top",arrowMargin+"px");});$(leftArrow).on("click",function(event){methods.scrollLeft();});$(rightArrow).on("click",function(event){methods.scrollRight();});if(settings.pauseOnHover==true){$(".nbs-flexisel-item").on({mouseenter:function(){canNavigate=false;},mouseleave:function(){canNavigate=true;}});}
    if(settings.autoPlay==true){setInterval(function(){if(canNavigate==true)
        methods.scrollRight();},settings.autoPlaySpeed);}},setResponsiveEvents:function(){var contentWidth=$('html').width();if(settings.enableResponsiveBreakpoints){var largestCustom=responsivePoints[responsivePoints.length-1].changePoint;for(var i in responsivePoints){if(contentWidth>=largestCustom){itemsVisible=settings.visibleItems;break;}
else{if(contentWidth<responsivePoints[i].changePoint){itemsVisible=responsivePoints[i].visibleItems;break;}
else
    continue;}}}},sortResponsiveObject:function(obj){var responsiveObjects=[];for(var i in obj){responsiveObjects.push(obj[i]);}
    responsiveObjects.sort(function(a,b){return a.changePoint-b.changePoint;});responsivePoints=responsiveObjects;},scrollLeft:function(){if(object.position().left<0){if(canNavigate==true){canNavigate=false;var listParent=object.parent();var innerWidth=listParent.width();itemsWidth=(innerWidth)/itemsVisible;var childSet=object.children();object.animate({'left':"+="+itemsWidth},{queue:false,duration:settings.animationSpeed,easing:"linear",complete:function(){if(settings.clone){childSet.last().insertBefore(childSet.first());}
    methods.adjustScroll();canNavigate=true;}});}}},scrollRight:function(){var listParent=object.parent();var innerWidth=listParent.width();itemsWidth=(innerWidth)/itemsVisible;var difObject=(itemsWidth-innerWidth);var objPosition=(object.position().left+((totalItems-itemsVisible)*itemsWidth)-innerWidth);if((difObject<Math.ceil(objPosition))&&(!settings.clone)){if(canNavigate==true){canNavigate=false;object.animate({'left':"-="+itemsWidth},{queue:false,duration:settings.animationSpeed,easing:"linear",complete:function(){methods.adjustScroll();canNavigate=true;}});}}else if(settings.clone){if(canNavigate==true){canNavigate=false;var childSet=object.children();object.animate({'left':"-="+itemsWidth},{queue:false,duration:settings.animationSpeed,easing:"linear",complete:function(){childSet.first().insertAfter(childSet.last());methods.adjustScroll();canNavigate=true;}});}};},adjustScroll:function(){var listParent=object.parent();var childSet=object.children();var innerWidth=listParent.width();itemsWidth=(innerWidth)/itemsVisible;childSet.width(itemsWidth);if(settings.clone){object.css({'left':-itemsWidth});};}};if(methods[options]){return methods[options].apply(this,Array.prototype.slice.call(arguments,1));}else if(typeof options==='object'||!options){return methods.init.apply(this);}else{$.error('Method "'+method+'" does not exist in flexisel plugin!');}};})(jQuery);(function(c,I,B){c.fn.responsiveSlides=function(l){var a=c.extend({auto:!0,speed:500,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:c.noop,after:c.noop},l);return this.each(function(){B++;var f=c(this),s,r,t,m,p,q,n=0,e=f.children(),C=e.size(),h=parseFloat(a.speed),D=parseFloat(a.timeout),u=parseFloat(a.maxwidth),g=a.namespace,d=g+B,E=g+"_nav "+d+"_nav",v=g+"_here",j=d+"_on",w=d+"_s",k=c("<ul class='"+g+"_tabs "+d+"_tabs' />"),x={"float":"left",position:"relative",opacity:1,zIndex:2},y={"float":"none",position:"absolute",opacity:0,zIndex:1},F=function(){var b=(document.body||document.documentElement).style,a="transition";if("string"===typeof b[a])return!0;s=["Moz","Webkit","Khtml","O","ms"];var a=a.charAt(0).toUpperCase()+a.substr(1),c;for(c=0;c<s.length;c++)if("string"===typeof b[s[c]+a])return!0;return!1}(),z=function(b){a.before(b);F?(e.removeClass(j).css(y).eq(b).addClass(j).css(x),n=b,setTimeout(function(){a.after(b)},h)):e.stop().fadeOut(h,function(){c(this).removeClass(j).css(y).css("opacity",1)}).eq(b).fadeIn(h,function(){c(this).addClass(j).css(x);a.after(b);n=b})};a.random&&(e.sort(function(){return Math.round(Math.random())-0.5}),f.empty().append(e));e.each(function(a){this.id=w+a});f.addClass(g+" "+d);l&&l.maxwidth&&f.css("max-width",u);e.hide().css(y).eq(0).addClass(j).css(x).show();F&&e.show().css({"-webkit-transition":"opacity "+h+"ms ease-in-out","-moz-transition":"opacity "+
    h+"ms ease-in-out","-o-transition":"opacity "+h+"ms ease-in-out",transition:"opacity "+h+"ms ease-in-out"});if(1<e.size()){if(D<h+100)return;if(a.pager&&!a.manualControls){var A=[];e.each(function(a){a+=1;A+="<li><a href='#' class='"+w+a+"'>"+a+"</a></li>"});k.append(A);l.navContainer?c(a.navContainer).append(k):f.after(k)}
    a.manualControls&&(k=c(a.manualControls),k.addClass(g+"_tabs "+d+"_tabs"));(a.pager||a.manualControls)&&k.find("li").each(function(a){c(this).addClass(w+(a+1))});if(a.pager||a.manualControls)q=k.find("a"),r=function(a){q.closest("li").removeClass(v).eq(a).addClass(v)};a.auto&&(t=function(){p=setInterval(function(){e.stop(!0,!0);var b=n+1<C?n+1:0;(a.pager||a.manualControls)&&r(b);z(b)},D)},t());m=function(){a.auto&&(clearInterval(p),t())};a.pause&&f.hover(function(){clearInterval(p)},function(){m()});if(a.pager||a.manualControls)q.bind("click",function(b){b.preventDefault();a.pauseControls||m();b=q.index(this);n===b||c("."+j).queue("fx").length||(r(b),z(b))}).eq(0).closest("li").addClass(v),a.pauseControls&&q.hover(function(){clearInterval(p)},function(){m()});if(a.nav){g="<a href='#' class='"+E+" prev'>"+a.prevText+"</a><a href='#' class='"+E+" next'>"+a.nextText+"</a>";l.navContainer?c(a.navContainer).append(g):f.after(g);var d=c("."+d+"_nav"),G=d.filter(".prev");d.bind("click",function(b){b.preventDefault();b=c("."+j);if(!b.queue("fx").length){var d=e.index(b);b=d-1;d=d+1<C?n+1:0;z(c(this)[0]===G[0]?b:d);if(a.pager||a.manualControls)r(c(this)[0]===G[0]?b:d);a.pauseControls||m()}});a.pauseControls&&d.hover(function(){clearInterval(p)},function(){m()})}}
    if("undefined"===typeof document.body.style.maxWidth&&l.maxwidth){var H=function(){f.css("width","100%");f.width()>u&&f.css("width",u)};H();c(I).bind("resize",function(){H()})}})}})(jQuery,this,0);


/**
 * d3
 */












