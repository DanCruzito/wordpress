/*! SmartMenus jQuery Plugin - v0.9.6 - March 27, 2014
 * http://www.smartmenus.org/
 * Copyright 2014 Vasil Dinkov, Vadikom Web Ltd. http://vadikom.com; Licensed MIT */
(function(t) {
    function s(s) {
        if (h || s) h && s && (t(document).unbind(".smartmenus_mouse"), h = !1);
        else {
            var e = !0,
                o = null;
            t(document).bind({
                "mousemove.smartmenus_mouse": function(s) {
                    var a = {
                        x: s.pageX,
                        y: s.pageY,
                        timeStamp: (new Date).getTime()
                    };
                    if (o) {
                        var r = Math.abs(o.x - a.x),
                            h = Math.abs(o.y - a.y);
                        if ((r > 0 || h > 0) && 2 >= r && 2 >= h && 300 >= a.timeStamp - o.timeStamp && (n = !0, e)) {
                            var u = t(s.target).closest("a");
                            u.is("a") && t.each(i, function() {
                                return t.contains(this.$root[0], u[0]) ? (this.itemEnter({
                                    currentTarget: u[0]
                                }), !1) : void 0
                            }), e = !1
                        }
                    }
                    o = a
                },
                "touchstart.smartmenus_mouse pointerover.smartmenus_mouse MSPointerOver.smartmenus_mouse": function(t) {
                    /^(4|mouse)$/.test(t.originalEvent.pointerType) || (n = !1)
                }
            }), h = !0
        }
    }
    var i = [],
        e = !!window.createPopup,
        o = e && !document.defaultView,
        a = e && !document.querySelector,
        r = e && document.documentElement.currentStyle.minWidth === void 0,
        n = !1,
        h = !1;
    t.SmartMenus = function(s, i) {
        this.$root = t(s), this.opts = i, this.rootId = "", this.$subArrow = null, this.subMenus = [], this.activatedItems = [], this.visibleSubMenus = [], this.showTimeout = 0, this.hideTimeout = 0, this.scrollTimeout = 0, this.clickActivated = !1, this.zIndexInc = 0, this.$firstLink = null, this.$firstSub = null, this.disabled = !1, this.$disableOverlay = null, this.init()
    }, t.extend(t.SmartMenus, {
        hideAll: function() {
            t.each(i, function() {
                this.menuHideAll()
            })
        },
        destroy: function() {
            for (; i.length;) i[0].destroy();
            s(!0)
        },
        prototype: {
            init: function(e) {
                var o = this;
                if (!e) {
                    i.push(this), this.rootId = ((new Date).getTime() + Math.random() + "").replace(/\D/g, ""), this.$root.hasClass("sm-rtl") && (this.opts.rightToLeftSubMenus = !0), this.$root.data("smartmenus", this).attr("data-smartmenus-id", this.rootId).dataSM("level", 1).bind({
                        "mouseover.smartmenus focusin.smartmenus": t.proxy(this.rootOver, this),
                        "mouseout.smartmenus focusout.smartmenus": t.proxy(this.rootOut, this)
                    }).delegate("a", {
                        "mouseenter.smartmenus": t.proxy(this.itemEnter, this),
                        "mouseleave.smartmenus": t.proxy(this.itemLeave, this),
                        "mousedown.smartmenus": t.proxy(this.itemDown, this),
                        "focus.smartmenus": t.proxy(this.itemFocus, this),
                        "blur.smartmenus": t.proxy(this.itemBlur, this),
                        "click.smartmenus": t.proxy(this.itemClick, this),
                        "touchend.smartmenus": t.proxy(this.itemTouchEnd, this)
                    });
                    var a = ".smartmenus" + this.rootId;
                    this.opts.hideOnClick && t(document).bind("touchstart" + a, t.proxy(this.docTouchStart, this)).bind("touchmove" + a, t.proxy(this.docTouchMove, this)).bind("touchend" + a, t.proxy(this.docTouchEnd, this)).bind("click" + a, t.proxy(this.docClick, this)), t(window).bind("resize" + a + " orientationchange" + a, t.proxy(this.winResize, this)), this.opts.subIndicators && (this.$subArrow = t("<span/>").addClass("sub-arrow"), this.opts.subIndicatorsText && this.$subArrow.html(this.opts.subIndicatorsText)), s()
                }
                if (this.$firstSub = this.$root.find("ul").each(function() {
                        o.menuInit(t(this))
                    }).eq(0), this.$firstLink = this.$root.find("a").eq(0), this.opts.markCurrentItem) {
                    var r = /(index|default)\.[^#\?\/]*/i,
                        n = /#.*/,
                        h = window.location.href.replace(r, ""),
                        u = h.replace(n, "");
                    this.$root.find("a").each(function() {
                        var s = this.href.replace(r, ""),
                            i = t(this);
                        (s == h || s == u) && (i.addClass("current"), o.opts.markCurrentTree && i.parents("li").each(function() {
                            var s = t(this);
                            s.dataSM("sub") && s.children("a").addClass("current")
                        }))
                    })
                }
            },
            destroy: function() {
                this.menuHideAll(), this.$root.removeData("smartmenus").removeAttr("data-smartmenus-id").removeDataSM("level").unbind(".smartmenus").undelegate(".smartmenus");
                var s = ".smartmenus" + this.rootId;
                t(document).unbind(s), t(window).unbind(s), this.opts.subIndicators && (this.$subArrow = null);
                var e = this;
                t.each(this.subMenus, function() {
                    this.hasClass("mega-menu") && this.find("ul").removeDataSM("in-mega"), this.dataSM("shown-before") && (a && this.children().css({
                        styleFloat: "",
                        width: ""
                    }), (e.opts.subMenusMinWidth || e.opts.subMenusMaxWidth) && (r ? this.css({
                        width: "",
                        overflowX: "",
                        overflowY: ""
                    }).children().children("a").css("white-space", "") : this.css({
                        width: "",
                        minWidth: "",
                        maxWidth: ""
                    }).removeClass("sm-nowrap")), this.dataSM("scroll-arrows") && this.dataSM("scroll-arrows").remove(), this.css({
                        zIndex: "",
                        top: "",
                        left: "",
                        marginLeft: "",
                        marginTop: "",
                        display: ""
                    })), e.opts.subIndicators && this.dataSM("parent-a").removeClass("has-submenu").children("span.sub-arrow").remove(), this.removeDataSM("shown-before").removeDataSM("ie-shim").removeDataSM("scroll-arrows").removeDataSM("parent-a").removeDataSM("level").removeDataSM("beforefirstshowfired").parent().removeDataSM("sub")
                }), this.opts.markCurrentItem && this.$root.find("a.current").removeClass("current"), this.$root = null, this.$firstLink = null, this.$firstSub = null, this.$disableOverlay && (this.$disableOverlay.remove(), this.$disableOverlay = null), i.splice(t.inArray(this, i), 1)
            },
            disable: function(s) {
                if (!this.disabled) {
                    if (this.menuHideAll(), !s && !this.opts.isPopup && this.$root.is(":visible")) {
                        var i = this.$root.offset();
                        this.$disableOverlay = t('<div class="sm-jquery-disable-overlay"/>').css({
                            position: "absolute",
                            top: i.top,
                            left: i.left,
                            width: this.$root.outerWidth(),
                            height: this.$root.outerHeight(),
                            zIndex: this.getStartZIndex() + 1,
                            opacity: 0
                        }).appendTo(document.body)
                    }
                    this.disabled = !0
                }
            },
            docClick: function(s) {
                (this.visibleSubMenus.length && !t.contains(this.$root[0], s.target) || t(s.target).is("a")) && this.menuHideAll()
            },
            docTouchEnd: function() {
                if (this.lastTouch) {
                    if (!(!this.visibleSubMenus.length || void 0 !== this.lastTouch.x2 && this.lastTouch.x1 != this.lastTouch.x2 || void 0 !== this.lastTouch.y2 && this.lastTouch.y1 != this.lastTouch.y2 || this.lastTouch.target && t.contains(this.$root[0], this.lastTouch.target))) {
                        this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0);
                        var s = this;
                        this.hideTimeout = setTimeout(function() {
                            s.menuHideAll()
                        }, 350)
                    }
                    this.lastTouch = null
                }
            },
            docTouchMove: function(t) {
                if (this.lastTouch) {
                    var s = t.originalEvent.touches[0];
                    this.lastTouch.x2 = s.pageX, this.lastTouch.y2 = s.pageY
                }
            },
            docTouchStart: function(t) {
                var s = t.originalEvent.touches[0];
                this.lastTouch = {
                    x1: s.pageX,
                    y1: s.pageY,
                    target: s.target
                }
            },
            enable: function() {
                this.disabled && (this.$disableOverlay && (this.$disableOverlay.remove(), this.$disableOverlay = null), this.disabled = !1)
            },
            getHeight: function(t) {
                return this.getOffset(t, !0)
            },
            getOffset: function(t, s) {
                var i;
                "none" == t.css("display") && (i = {
                    position: t[0].style.position,
                    visibility: t[0].style.visibility
                }, t.css({
                    position: "absolute",
                    visibility: "hidden"
                }).show());
                var e = t[0].ownerDocument.defaultView,
                    o = e && e.getComputedStyle && e.getComputedStyle(t[0], null),
                    a = o && parseFloat(o[s ? "height" : "width"]);
                return a ? a += parseFloat(o[s ? "paddingTop" : "paddingLeft"]) + parseFloat(o[s ? "paddingBottom" : "paddingRight"]) + parseInt(o[s ? "borderTopWidth" : "borderLeftWidth"]) + parseInt(o[s ? "borderBottomWidth" : "borderRightWidth"]) : a = s ? t[0].offsetHeight : t[0].offsetWidth, i && t.hide().css(i), a
            },
            getWidth: function(t) {
                return this.getOffset(t)
            },
            getStartZIndex: function() {
                var t = parseInt(this.$root.css("z-index"));
                return isNaN(t) ? 1 : t
            },
            handleEvents: function() {
                return !this.disabled && this.isCSSOn()
            },
            handleItemEvents: function(t) {
                return this.handleEvents() && !this.isLinkInMegaMenu(t)
            },
            isCollapsible: function() {
                return "static" == this.$firstSub.css("position")
            },
            isCSSOn: function() {
                return "block" == this.$firstLink.css("display")
            },
            isFixed: function() {
                return "fixed" == this.$root.css("position")
            },
            isLinkInMegaMenu: function(t) {
                return !t.parent().parent().dataSM("level")
            },
            isTouchMode: function() {
                return !n || this.isCollapsible()
            },
            itemActivate: function(s) {
                var i = s.parent(),
                    e = i.parent(),
                    o = e.dataSM("level");
                if (o > 1 && (!this.activatedItems[o - 2] || this.activatedItems[o - 2][0] != e.dataSM("parent-a")[0])) {
                    var a = this;
                    t(e.parentsUntil("[data-smartmenus-id]", "ul").get().reverse()).add(e).each(function() {
                        a.itemActivate(t(this).dataSM("parent-a"))
                    })
                }
                if (this.visibleSubMenus.length > o)
                    for (var r = this.visibleSubMenus.length - 1, n = this.activatedItems[o - 1] && this.activatedItems[o - 1][0] == s[0] ? o : o - 1; r > n; r--) this.menuHide(this.visibleSubMenus[r]);
                if (this.activatedItems[o - 1] = s, this.visibleSubMenus[o - 1] = e, this.$root.triggerHandler("activate.smapi", s[0]) !== !1) {
                    var h = i.dataSM("sub");
                    h && (this.isTouchMode() || !this.opts.showOnClick || this.clickActivated) && this.menuShow(h)
                }
            },
            itemBlur: function(s) {
                var i = t(s.currentTarget);
                this.handleItemEvents(i) && this.$root.triggerHandler("blur.smapi", i[0])
            },
            itemClick: function(s) {
                var i = t(s.currentTarget);
                if (this.handleItemEvents(i)) {
                    if (i.removeDataSM("mousedown"), this.$root.triggerHandler("click.smapi", i[0]) === !1) return !1;
                    var e = i.parent().dataSM("sub");
                    if (this.isTouchMode()) {
                        if (i.dataSM("href") && i.attr("href", i.dataSM("href")).removeDataSM("href"), e && (!e.dataSM("shown-before") || !e.is(":visible")) && (this.itemActivate(i), e.is(":visible"))) return !1
                    } else if (this.opts.showOnClick && 1 == i.parent().parent().dataSM("level") && e) return this.clickActivated = !0, this.menuShow(e), !1;
                    return i.hasClass("disabled") ? !1 : this.$root.triggerHandler("select.smapi", i[0]) === !1 ? !1 : void 0
                }
            },
            itemDown: function(s) {
                var i = t(s.currentTarget);
                this.handleItemEvents(i) && i.dataSM("mousedown", !0)
            },
            itemEnter: function(s) {
                var i = t(s.currentTarget);
                if (this.handleItemEvents(i)) {
                    if (!this.isTouchMode()) {
                        this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = 0);
                        var e = this;
                        this.showTimeout = setTimeout(function() {
                            e.itemActivate(i)
                        }, this.opts.showOnClick && 1 == i.parent().parent().dataSM("level") ? 1 : this.opts.showTimeout)
                    }
                    this.$root.triggerHandler("mouseenter.smapi", i[0])
                }
            },
            itemFocus: function(s) {
                var i = t(s.currentTarget);
                this.handleItemEvents(i) && (this.isTouchMode() && i.dataSM("mousedown") || this.activatedItems.length && this.activatedItems[this.activatedItems.length - 1][0] == i[0] || this.itemActivate(i), this.$root.triggerHandler("focus.smapi", i[0]))
            },
            itemLeave: function(s) {
                var i = t(s.currentTarget);
                this.handleItemEvents(i) && (this.isTouchMode() || (i[0].blur && i[0].blur(), this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = 0)), i.removeDataSM("mousedown"), this.$root.triggerHandler("mouseleave.smapi", i[0]))
            },
            itemTouchEnd: function(s) {
                var i = t(s.currentTarget);
                if (this.handleItemEvents(i)) {
                    var e = i.parent().dataSM("sub");
                    "#" === i.attr("href").charAt(0) || !e || e.dataSM("shown-before") && e.is(":visible") || (i.dataSM("href", i.attr("href")), i.attr("href", "#"))
                }
            },
            menuFixLayout: function(t) {
                t.dataSM("shown-before") || (t.hide().dataSM("shown-before", !0), a && t.children().css({
                    styleFloat: "left",
                    width: "100%"
                }))
            },
            menuHide: function(t) {
                if (this.$root.triggerHandler("beforehide.smapi", t[0]) !== !1 && (t.stop(!0, !0), t.is(":visible"))) {
                    var s = function() {
                        o ? t.parent().css("z-index", "") : t.css("z-index", "")
                    };
                    this.isCollapsible() ? this.opts.collapsibleHideFunction ? this.opts.collapsibleHideFunction.call(this, t, s) : t.hide(this.opts.collapsibleHideDuration, s) : this.opts.hideFunction ? this.opts.hideFunction.call(this, t, s) : t.hide(this.opts.hideDuration, s), t.dataSM("ie-shim") && t.dataSM("ie-shim").remove(), t.dataSM("scroll") && t.unbind(".smartmenus_scroll").removeDataSM("scroll").dataSM("scroll-arrows").hide(), t.dataSM("parent-a").removeClass("highlighted");
                    var i = t.dataSM("level");
                    this.activatedItems.splice(i - 1, 1), this.visibleSubMenus.splice(i - 1, 1), this.$root.triggerHandler("hide.smapi", t[0])
                }
            },
            menuHideAll: function() {
                this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = 0);
                for (var t = this.visibleSubMenus.length - 1; t > 0; t--) this.menuHide(this.visibleSubMenus[t]);
                this.opts.isPopup && (this.$root.stop(!0, !0), this.$root.is(":visible") && (this.opts.hideFunction ? this.opts.hideFunction.call(this, this.$root) : this.$root.hide(this.opts.hideDuration), this.$root.dataSM("ie-shim") && this.$root.dataSM("ie-shim").remove())), this.activatedItems = [], this.visibleSubMenus = [], this.clickActivated = !1, this.zIndexInc = 0
            },
            menuIframeShim: function(s) {
                e && this.opts.overlapControlsInIE && !s.dataSM("ie-shim") && s.dataSM("ie-shim", t("<iframe/>").attr({
                    src: "javascript:0",
                    tabindex: -9
                }).css({
                    position: "absolute",
                    top: "auto",
                    left: "0",
                    opacity: 0,
                    border: "0"
                }))
            },
            menuInit: function(t) {
                if (!t.dataSM("in-mega")) {
                    this.subMenus.push(t), t.hasClass("mega-menu") && t.find("ul").dataSM("in-mega", !0);
                    for (var s = 2, i = t[0];
                        (i = i.parentNode.parentNode) != this.$root[0];) s++;
                    t.dataSM("parent-a", t.prevAll("a").eq(-1)).dataSM("level", s).parent().dataSM("sub", t), this.opts.subIndicators && t.dataSM("parent-a").addClass("has-submenu")[this.opts.subIndicatorsPos](this.$subArrow.clone())
                }
            },
            menuPosition: function(s) {
                var i, e, o = s.dataSM("parent-a"),
                    a = s.parent().parent(),
                    r = s.dataSM("level"),
                    h = this.getWidth(s),
                    u = this.getHeight(s),
                    l = o.offset(),
                    d = l.left,
                    c = l.top,
                    m = this.getWidth(o),
                    p = this.getHeight(o),
                    f = t(window),
                    v = f.scrollLeft(),
                    b = f.scrollTop(),
                    M = f.width(),
                    S = f.height(),
                    w = a.hasClass("sm") && !a.hasClass("sm-vertical"),
                    g = 2 == r ? this.opts.mainMenuSubOffsetX : this.opts.subMenusSubOffsetX,
                    T = 2 == r ? this.opts.mainMenuSubOffsetY : this.opts.subMenusSubOffsetY;
                if (w ? (i = this.opts.rightToLeftSubMenus ? m - h - g : g, e = this.opts.bottomToTopSubMenus ? -u - T : p + T) : (i = this.opts.rightToLeftSubMenus ? g - h : m - g, e = this.opts.bottomToTopSubMenus ? p - T - u : T), this.opts.keepInViewport && !this.isCollapsible()) {
                    this.isFixed() && (d -= v, c -= b, v = b = 0);
                    var $ = d + i,
                        I = c + e;
                    if (this.opts.rightToLeftSubMenus && v > $ ? i = w ? v - $ + i : m - g : !this.opts.rightToLeftSubMenus && $ + h > v + M && (i = w ? v + M - h - $ + i : g - h), w || (S > u && I + u > b + S ? e += b + S - u - I : (u >= S || b > I) && (e += b - I)), n && (w && (I + u > b + S + .49 || b > I) || !w && u > S + .49)) {
                        var y = this;
                        s.dataSM("scroll-arrows") || s.dataSM("scroll-arrows", t([t('<span class="scroll-up"><span class="scroll-up-arrow"></span></span>')[0], t('<span class="scroll-down"><span class="scroll-down-arrow"></span></span>')[0]]).bind({
                            mouseenter: function() {
                                y.menuScroll(s, t(this).hasClass("scroll-up"))
                            },
                            mouseleave: function(t) {
                                y.menuScrollStop(s), y.menuScrollOut(s, t)
                            },
                            "mousewheel DOMMouseScroll": function(t) {
                                t.preventDefault()
                            }
                        }).insertAfter(s));
                        var x = b - (c + p);
                        s.dataSM("scroll", {
                            vportY: x,
                            subH: u,
                            winH: S,
                            step: 1
                        }).bind({
                            "mouseover.smartmenus_scroll": function(t) {
                                y.menuScrollOver(s, t)
                            },
                            "mouseout.smartmenus_scroll": function(t) {
                                y.menuScrollOut(s, t)
                            },
                            "mousewheel.smartmenus_scroll DOMMouseScroll.smartmenus_scroll": function(t) {
                                y.menuScrollMousewheel(s, t)
                            }
                        }).dataSM("scroll-arrows").css({
                            top: "auto",
                            left: "0",
                            marginLeft: i + (parseInt(s.css("border-left-width")) || 0),
                            width: this.getWidth(s) - (parseInt(s.css("border-left-width")) || 0) - (parseInt(s.css("border-right-width")) || 0),
                            zIndex: this.getStartZIndex() + this.zIndexInc
                        }).eq(0).css("margin-top", x).end().eq(1).css("margin-top", x + S - this.getHeight(s.dataSM("scroll-arrows").eq(1))).end().eq(w && this.opts.bottomToTopSubMenus ? 0 : 1).show()
                    }
                }
                s.css({
                    top: "auto",
                    left: "0",
                    marginLeft: i,
                    marginTop: e - p
                }), this.menuIframeShim(s), s.dataSM("ie-shim") && s.dataSM("ie-shim").css({
                    zIndex: s.css("z-index"),
                    width: h,
                    height: u,
                    marginLeft: i,
                    marginTop: e - p
                })
            },
            menuScroll: function(t, s, i) {
                var e = parseFloat(t.css("margin-top")),
                    o = t.dataSM("scroll"),
                    a = o.vportY + (s ? 0 : o.winH - o.subH),
                    r = i || !this.opts.scrollAccelerate ? this.opts.scrollStep : Math.floor(t.dataSM("scroll").step);
                if (t.add(t.dataSM("ie-shim")).css("margin-top", Math.abs(a - e) > r ? e + (s ? r : -r) : a), e = parseFloat(t.css("margin-top")), (s && e + o.subH > o.vportY + o.winH || !s && o.vportY > e) && t.dataSM("scroll-arrows").eq(s ? 1 : 0).show(), !i && this.opts.scrollAccelerate && t.dataSM("scroll").step < this.opts.scrollStep && (t.dataSM("scroll").step += .5), 1 > Math.abs(e - a)) t.dataSM("scroll-arrows").eq(s ? 0 : 1).hide(), t.dataSM("scroll").step = 1;
                else if (!i) {
                    var n = this;
                    this.scrollTimeout = setTimeout(function() {
                        n.menuScroll(t, s)
                    }, this.opts.scrollInterval)
                }
            },
            menuScrollMousewheel: function(s, i) {
                for (var e = t(i.target).closest("ul"); e.dataSM("in-mega");) e = e.parent().closest("ul");
                if (e[0] == s[0]) {
                    var o = (i.originalEvent.wheelDelta || -i.originalEvent.detail) > 0;
                    s.dataSM("scroll-arrows").eq(o ? 0 : 1).is(":visible") && this.menuScroll(s, o, !0)
                }
                i.preventDefault()
            },
            menuScrollOut: function(s, i) {
                for (var e = /^scroll-(up|down)/, o = t(i.relatedTarget).closest("ul"); o.dataSM("in-mega");) o = o.parent().closest("ul");
                e.test((i.relatedTarget || "").className) || (s[0] == i.relatedTarget || t.contains(s[0], i.relatedTarget)) && o[0] == s[0] || s.dataSM("scroll-arrows").css("visibility", "hidden")
            },
            menuScrollOver: function(s, i) {
                for (var e = /^scroll-(up|down)/, o = t(i.target).closest("ul"); o.dataSM("in-mega");) o = o.parent().closest("ul");
                e.test(i.target.className) || o[0] != s[0] || s.dataSM("scroll-arrows").css("visibility", "visible")
            },
            menuScrollStop: function(t) {
                this.scrollTimeout && (clearTimeout(this.scrollTimeout), this.scrollTimeout = 0, t.dataSM("scroll").step = 1)
            },
            menuShow: function(t) {
                if ((t.dataSM("beforefirstshowfired") || (t.dataSM("beforefirstshowfired", !0), this.$root.triggerHandler("beforefirstshow.smapi", t[0]) !== !1)) && this.$root.triggerHandler("beforeshow.smapi", t[0]) !== !1 && (this.menuFixLayout(t), t.stop(!0, !0), !t.is(":visible"))) {
                    var s = this.getStartZIndex() + ++this.zIndexInc;
                    if (o ? t.parent().css("z-index", s) : t.css("z-index", s), (this.opts.keepHighlighted || this.isCollapsible()) && t.dataSM("parent-a").addClass("highlighted"), this.opts.subMenusMinWidth || this.opts.subMenusMaxWidth)
                        if (a) {
                            if (t.children().css("styleFloat", "none"), r ? t.width(this.opts.subMenusMinWidth ? this.opts.subMenusMinWidth : 1).children().children("a").css("white-space", "nowrap") : (t.css({
                                    width: "auto",
                                    minWidth: "",
                                    maxWidth: ""
                                }).addClass("sm-nowrap"), this.opts.subMenusMinWidth && t.css("min-width", this.opts.subMenusMinWidth)), this.opts.subMenusMaxWidth) {
                                var i = t.width();
                                if (r) {
                                    var e = t.css({
                                        width: this.opts.subMenusMaxWidth,
                                        overflowX: "hidden",
                                        overflowY: "hidden"
                                    }).width();
                                    i > e ? t.css({
                                        width: e,
                                        overflowX: "visible",
                                        overflowY: "visible"
                                    }).children().children("a").css("white-space", "") : t.css({
                                        width: i,
                                        overflowX: "visible",
                                        overflowY: "visible"
                                    })
                                } else t.css("max-width", this.opts.subMenusMaxWidth), i > t.width() ? t.removeClass("sm-nowrap").css("width", this.opts.subMenusMaxWidth) : t.width(i)
                            } else t.width(t.width());
                            t.children().css("styleFloat", "left")
                        } else if (t.css({
                            width: "auto",
                            minWidth: "",
                            maxWidth: ""
                        }).addClass("sm-nowrap"), this.opts.subMenusMinWidth && t.css("min-width", this.opts.subMenusMinWidth), this.opts.subMenusMaxWidth) {
                        var i = this.getWidth(t);
                        t.css("max-width", this.opts.subMenusMaxWidth), i > this.getWidth(t) && t.removeClass("sm-nowrap").css("width", this.opts.subMenusMaxWidth)
                    }
                    this.menuPosition(t), t.dataSM("ie-shim") && t.dataSM("ie-shim").insertBefore(t);
                    var n = function() {
                        t.css("overflow", "")
                    };
                    this.isCollapsible() ? this.opts.collapsibleShowFunction ? this.opts.collapsibleShowFunction.call(this, t, n) : t.show(this.opts.collapsibleShowDuration, n) : this.opts.showFunction ? this.opts.showFunction.call(this, t, n) : t.show(this.opts.showDuration, n), this.visibleSubMenus[t.dataSM("level") - 1] = t, this.$root.triggerHandler("show.smapi", t[0])
                }
            },
            popupHide: function(t) {
                this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0);
                var s = this;
                this.hideTimeout = setTimeout(function() {
                    s.menuHideAll()
                }, t ? 1 : this.opts.hideTimeout)
            },
            popupShow: function(t, s) {
                return this.opts.isPopup ? (this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0), this.menuFixLayout(this.$root), this.$root.stop(!0, !0), this.$root.is(":visible") || (this.$root.css({
                    left: t,
                    top: s
                }), this.menuIframeShim(this.$root), this.$root.dataSM("ie-shim") && this.$root.dataSM("ie-shim").css({
                    zIndex: this.$root.css("z-index"),
                    width: this.getWidth(this.$root),
                    height: this.getHeight(this.$root),
                    left: t,
                    top: s
                }).insertBefore(this.$root), this.opts.showFunction ? this.opts.showFunction.call(this, this.$root) : this.$root.show(this.opts.showDuration), this.visibleSubMenus[0] = this.$root), void 0) : (alert('SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.'), void 0)
            },
            refresh: function() {
                this.menuHideAll(), this.$root.find("ul").each(function() {
                    var s = t(this);
                    s.dataSM("scroll-arrows") && s.dataSM("scroll-arrows").remove()
                }).removeDataSM("in-mega").removeDataSM("shown-before").removeDataSM("ie-shim").removeDataSM("scroll-arrows").removeDataSM("parent-a").removeDataSM("level").removeDataSM("beforefirstshowfired"), this.$root.find("a.has-submenu").removeClass("has-submenu").parent().removeDataSM("sub"), this.opts.subIndicators && this.$root.find("span.sub-arrow").remove(), this.opts.markCurrentItem && this.$root.find("a.current").removeClass("current"), this.subMenus = [], this.init(!0)
            },
            rootOut: function(t) {
                if (this.handleEvents() && !this.isTouchMode() && t.target != this.$root[0] && (this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0), !this.opts.showOnClick || !this.opts.hideOnClick)) {
                    var s = this;
                    this.hideTimeout = setTimeout(function() {
                        s.menuHideAll()
                    }, this.opts.hideTimeout)
                }
            },
            rootOver: function(t) {
                this.handleEvents() && !this.isTouchMode() && t.target != this.$root[0] && this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0)
            },
            winResize: function(t) {
                if (this.handleEvents()) this.isCollapsible() || "onorientationchange" in window && "orientationchange" != t.type || (this.activatedItems.length && this.activatedItems[this.activatedItems.length - 1][0].blur(), this.menuHideAll());
                else if (this.$disableOverlay) {
                    var s = this.$root.offset();
                    this.$disableOverlay.css({
                        top: s.top,
                        left: s.left,
                        width: this.$root.outerWidth(),
                        height: this.$root.outerHeight()
                    })
                }
            }
        }
    }), t.fn.dataSM = function(t, s) {
        return s ? this.data(t + "_smartmenus", s) : this.data(t + "_smartmenus")
    }, t.fn.removeDataSM = function(t) {
        return this.removeData(t + "_smartmenus")
    }, t.fn.smartmenus = function(s) {
        if ("string" == typeof s) {
            var i = arguments,
                e = s;
            return Array.prototype.shift.call(i), this.each(function() {
                var s = t(this).data("smartmenus");
                s && s[e] && s[e].apply(s, i)
            })
        }
        var o = t.extend({}, t.fn.smartmenus.defaults, s);
        return this.each(function() {
            new t.SmartMenus(this, o)
        })
    }, t.fn.smartmenus.defaults = {
        isPopup: !1,
        mainMenuSubOffsetX: 0,
        mainMenuSubOffsetY: 0,
        subMenusSubOffsetX: 0,
        subMenusSubOffsetY: 0,
        subMenusMinWidth: "10em",
        subMenusMaxWidth: "20em",
        subIndicators: !0,
        subIndicatorsPos: "prepend",
        subIndicatorsText: "+",
        scrollStep: 30,
        scrollInterval: 30,
        scrollAccelerate: !0,
        showTimeout: 250,
        hideTimeout: 500,
        showDuration: 0,
        showFunction: null,
        hideDuration: 0,
        hideFunction: function(t, s) {
            t.fadeOut(200, s)
        },
        collapsibleShowDuration: 0,
        collapsibleShowFunction: function(t, s) {
            t.slideDown(200, s)
        },
        collapsibleHideDuration: 0,
        collapsibleHideFunction: function(t, s) {
            t.slideUp(200, s)
        },
        showOnClick: !1,
        hideOnClick: !0,
        keepInViewport: !0,
        keepHighlighted: !0,
        markCurrentItem: !1,
        markCurrentTree: !0,
        rightToLeftSubMenus: !1,
        bottomToTopSubMenus: !1,
        overlapControlsInIE: !0
    }
})(jQuery);