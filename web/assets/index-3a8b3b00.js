import {
  r as O,
  w as Te,
  o as et,
  a as nt,
  i as Na,
  c as D,
  b as Ha,
  h as ja,
  d as pn,
  e as Ie,
  f as Ua,
  g as Oe,
  j as Ge,
  k as ue,
  m as Ar,
  l as Dr,
  p as tr,
  u as We,
  n as q,
  q as _e,
  s as Fr,
  t as Wa,
  v as xt,
  x as go,
  C as Va,
  y as Ka,
  z as ee,
  A as Nr,
  B as c,
  D as Hr,
  L as vn,
  E as Xt,
  F as rr,
  G as or,
  H as qa,
  I as Ga,
  J as jr,
  K as Xa,
  M as rt,
  N as gn,
  O as Ur,
  P as Wr,
  Q as St,
  R as mn,
  S as Pr,
  T as mo,
  U as Ya,
  V as bo,
  W as yo,
  X as Gt,
  Y as Za,
  Z as wo,
  _ as Ja,
  $ as Qa,
  a0 as el,
  a1 as tl,
  a2 as rl,
  a3 as ol,
  a4 as nl,
  a5 as bn,
  a6 as Xe,
  a7 as Be,
  a8 as S,
  a9 as B,
  aa as L,
  ab as Re,
  ac as ae,
  ad as Fe,
  ae as pe,
  af as ie,
  ag as ze,
  ah as j,
  ai as il,
  aj as ft,
  ak as bt,
  al as xo,
  am as yn,
  an as Co,
  ao as So,
  ap as al,
  aq as Lt,
  ar as Ze,
  as as Ve,
  at as wn,
  au as ko,
  av as ll,
  aw as se,
  ax as xn,
  ay as me,
  az as le,
  aA as kt,
  aB as sl,
  aC as Po,
  aD as Cn,
  aE as Sn,
  aF as kn,
  aG as yt,
  aH as dl,
  aI as cl,
  aJ as ul,
  aK as Pn,
  aL as fl,
  aM as hl,
  aN as pl,
  aO as Vr,
  aP as Et,
  aQ as Ae,
  aR as vl,
  aS as Kr,
  aT as Yt,
  aU as $n,
  aV as gl,
  aW as ml,
  aX as $o,
  aY as bl,
  aZ as zo,
  a_ as yl,
  a$ as $r,
  b0 as zn,
  b1 as Tn,
  b2 as Pt,
  b3 as wl,
  b4 as qr,
  b5 as Gr,
  b6 as Xr,
  b7 as Yr,
  b8 as In,
  b9 as ce,
  ba as To,
  bb as xl,
  bc as Zr,
  bd as te,
  be as Se,
  bf as Ue,
  bg as ke,
  bh as X,
  bi as be,
  bj as G,
  bk as Cl,
  bl as E,
  bm as ut,
  bn as ot,
  bo as Sl,
  bp as _n,
  bq as kl,
  br as zr,
  bs as Rn,
  bt as Je,
  bu as Mn,
  bv as Pl,
  bw as $l
} from "./index-63d32cbb.js";
let Zt = [];
const On = new WeakMap;

function zl() {
  Zt.forEach(e => e(...On.get(e))), Zt = []
}

function Bn(e, ...t) {
  On.set(e, t), !Zt.includes(e) && Zt.push(e) === 1 && requestAnimationFrame(zl)
}

function Io(e, t) {
  let {
    target: r
  } = e;
  for (; r;) {
    if (r.dataset && r.dataset[t] !== void 0) return !0;
    r = r.parentElement
  }
  return !1
}

function Tl(e, t = "default", r = []) {
  const n = e.$slots[t];
  return n === void 0 ? r : n()
}

function Il(e) {
  return t => {
    t ? e.value = t.$el : e.value = null
  }
}
const _l = /^(\d|\.)+$/,
  _o = /(\d|\.)+/;

function qe(e, {
  c: t = 1,
  offset: r = 0,
  attachPx: o = !0
} = {}) {
  if (typeof e == "number") {
    const n = (e + r) * t;
    return n === 0 ? "0" : `${n}px`
  } else if (typeof e == "string")
    if (_l.test(e)) {
      const n = (Number(e) + r) * t;
      return o ? n === 0 ? "0" : `${n}px` : `${n}`
    } else {
      const n = _o.exec(e);
      return n ? e.replace(_o, String((Number(n[0]) + r) * t)) : e
    } return e
}
let ur;

function Rl() {
  return ur === void 0 && (ur = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), ur
}

function Ml(e, t, r) {
  if (!t) return e;
  const o = O(e.value);
  let n = null;
  return Te(e, i => {
    n !== null && window.clearTimeout(n), i === !0 ? r && !r.value ? o.value = !0 : n = window.setTimeout(() => {
      o.value = !0
    }, t) : o.value = !1
  }), o
}
let wt, Mt;
const Ol = () => {
  var e, t;
  wt = Na ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || t === void 0 ? void 0 : t.ready : void 0, Mt = !1, wt !== void 0 ? wt.then(() => {
    Mt = !0
  }) : Mt = !0
};
Ol();

function Bl(e) {
  if (Mt) return;
  let t = !1;
  et(() => {
    Mt || wt == null || wt.then(() => {
      t || e()
    })
  }), nt(() => {
    t = !0
  })
}

function nr(e, t) {
  return Te(e, r => {
    r !== void 0 && (t.value = r)
  }), D(() => e.value === void 0 ? t.value : e.value)
}

function Ll(e, t) {
  return D(() => {
    for (const r of t)
      if (e[r] !== void 0) return e[r];
    return e[t[t.length - 1]]
  })
}

function El(e = {}, t) {
  const r = Ha({
      ctrl: !1,
      command: !1,
      win: !1,
      shift: !1,
      tab: !1
    }),
    {
      keydown: o,
      keyup: n
    } = e,
    i = a => {
      switch (a.key) {
        case "Control":
          r.ctrl = !0;
          break;
        case "Meta":
          r.command = !0, r.win = !0;
          break;
        case "Shift":
          r.shift = !0;
          break;
        case "Tab":
          r.tab = !0;
          break
      }
      o !== void 0 && Object.keys(o).forEach(s => {
        if (s !== a.key) return;
        const u = o[s];
        if (typeof u == "function") u(a);
        else {
          const {
            stop: f = !1,
            prevent: h = !1
          } = u;
          f && a.stopPropagation(), h && a.preventDefault(), u.handler(a)
        }
      })
    },
    l = a => {
      switch (a.key) {
        case "Control":
          r.ctrl = !1;
          break;
        case "Meta":
          r.command = !1, r.win = !1;
          break;
        case "Shift":
          r.shift = !1;
          break;
        case "Tab":
          r.tab = !1;
          break
      }
      n !== void 0 && Object.keys(n).forEach(s => {
        if (s !== a.key) return;
        const u = n[s];
        if (typeof u == "function") u(a);
        else {
          const {
            stop: f = !1,
            prevent: h = !1
          } = u;
          f && a.stopPropagation(), h && a.preventDefault(), u.handler(a)
        }
      })
    },
    d = () => {
      (t === void 0 || t.value) && (Oe("keydown", document, i), Oe("keyup", document, l)), t !== void 0 && Te(t, a => {
        a ? (Oe("keydown", document, i), Oe("keyup", document, l)) : (Ie("keydown", document, i), Ie("keyup", document, l))
      })
    };
  return ja() ? (pn(d), nt(() => {
    (t === void 0 || t.value) && (Ie("keydown", document, i), Ie("keyup", document, l))
  })) : d(), Ua(r)
}
const Al = Ge("n-internal-select-menu-body"),
  Ln = "__disabled__";

function Ct(e) {
  const t = ue(Ar, null),
    r = ue(Dr, null),
    o = ue(tr, null),
    n = ue(Al, null),
    i = O();
  if (typeof document < "u") {
    i.value = document.fullscreenElement;
    const l = () => {
      i.value = document.fullscreenElement
    };
    et(() => {
      Oe("fullscreenchange", document, l)
    }), nt(() => {
      Ie("fullscreenchange", document, l)
    })
  }
  return We(() => {
    var l;
    const {
      to: d
    } = e;
    return d !== void 0 ? d === !1 ? Ln : d === !0 ? i.value || "body" : d : t != null && t.value ? (l = t.value.$el) !== null && l !== void 0 ? l : t.value : r != null && r.value ? r.value : o != null && o.value ? o.value : n != null && n.value ? n.value : d ? ? (i.value || "body")
  })
}
Ct.tdkey = Ln;
Ct.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
let tt = null;

function En() {
  if (tt === null && (tt = document.getElementById("v-binder-view-measurer"), tt === null)) {
    tt = document.createElement("div"), tt.id = "v-binder-view-measurer";
    const {
      style: e
    } = tt;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(tt)
  }
  return tt.getBoundingClientRect()
}

function Dl(e, t) {
  const r = En();
  return {
    top: t,
    left: e,
    height: 0,
    width: 0,
    right: r.width - e,
    bottom: r.height - t
  }
}

function fr(e) {
  const t = e.getBoundingClientRect(),
    r = En();
  return {
    left: t.left - r.left,
    top: t.top - r.top,
    bottom: r.height + r.top - t.bottom,
    right: r.width + r.left - t.right,
    width: t.width,
    height: t.height
  }
}

function Fl(e) {
  return e.nodeType === 9 ? null : e.parentNode
}

function An(e) {
  if (e === null) return null;
  const t = Fl(e);
  if (t === null) return null;
  if (t.nodeType === 9) return document;
  if (t.nodeType === 1) {
    const {
      overflow: r,
      overflowX: o,
      overflowY: n
    } = getComputedStyle(t);
    if (/(auto|scroll|overlay)/.test(r + n + o)) return t
  }
  return An(t)
}
const Nl = q({
    name: "Binder",
    props: {
      syncTargetWithParent: Boolean,
      syncTarget: {
        type: Boolean,
        default: !0
      }
    },
    setup(e) {
      var t;
      _e("VBinder", (t = Fr()) === null || t === void 0 ? void 0 : t.proxy);
      const r = ue("VBinder", null),
        o = O(null),
        n = x => {
          o.value = x, r && e.syncTargetWithParent && r.setTargetRef(x)
        };
      let i = [];
      const l = () => {
          let x = o.value;
          for (; x = An(x), x !== null;) i.push(x);
          for (const P of i) Oe("scroll", P, f, !0)
        },
        d = () => {
          for (const x of i) Ie("scroll", x, f, !0);
          i = []
        },
        a = new Set,
        s = x => {
          a.size === 0 && l(), a.has(x) || a.add(x)
        },
        u = x => {
          a.has(x) && a.delete(x), a.size === 0 && d()
        },
        f = () => {
          Bn(h)
        },
        h = () => {
          a.forEach(x => x())
        },
        p = new Set,
        v = x => {
          p.size === 0 && Oe("resize", window, w), p.has(x) || p.add(x)
        },
        y = x => {
          p.has(x) && p.delete(x), p.size === 0 && Ie("resize", window, w)
        },
        w = () => {
          p.forEach(x => x())
        };
      return nt(() => {
        Ie("resize", window, w), d()
      }), {
        targetRef: o,
        setTargetRef: n,
        addScrollListener: s,
        removeScrollListener: u,
        addResizeListener: v,
        removeResizeListener: y
      }
    },
    render() {
      return Wa("binder", this.$slots)
    }
  }),
  Dn = Nl,
  Fn = q({
    name: "Target",
    setup() {
      const {
        setTargetRef: e,
        syncTarget: t
      } = ue("VBinder");
      return {
        syncTarget: t,
        setTargetDirective: {
          mounted: e,
          updated: e
        }
      }
    },
    render() {
      const {
        syncTarget: e,
        setTargetDirective: t
      } = this;
      return e ? xt(go("follower", this.$slots), [
        [t]
      ]) : go("follower", this.$slots)
    }
  }),
  pt = "@@mmoContext",
  Hl = {
    mounted(e, {
      value: t
    }) {
      e[pt] = {
        handler: void 0
      }, typeof t == "function" && (e[pt].handler = t, Oe("mousemoveoutside", e, t))
    },
    updated(e, {
      value: t
    }) {
      const r = e[pt];
      typeof t == "function" ? r.handler ? r.handler !== t && (Ie("mousemoveoutside", e, r.handler), r.handler = t, Oe("mousemoveoutside", e, t)) : (e[pt].handler = t, Oe("mousemoveoutside", e, t)) : r.handler && (Ie("mousemoveoutside", e, r.handler), r.handler = void 0)
    },
    unmounted(e) {
      const {
        handler: t
      } = e[pt];
      t && Ie("mousemoveoutside", e, t), e[pt].handler = void 0
    }
  },
  jl = Hl,
  {
    c: Ht
  } = Va(),
  Ul = "vueuc-style",
  jt = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left"
  },
  Ro = {
    start: "end",
    center: "center",
    end: "start"
  },
  hr = {
    top: "height",
    bottom: "height",
    left: "width",
    right: "width"
  },
  Wl = {
    "bottom-start": "top left",
    bottom: "top center",
    "bottom-end": "top right",
    "top-start": "bottom left",
    top: "bottom center",
    "top-end": "bottom right",
    "right-start": "top left",
    right: "center left",
    "right-end": "bottom left",
    "left-start": "top right",
    left: "center right",
    "left-end": "bottom right"
  },
  Vl = {
    "bottom-start": "bottom left",
    bottom: "bottom center",
    "bottom-end": "bottom right",
    "top-start": "top left",
    top: "top center",
    "top-end": "top right",
    "right-start": "top right",
    right: "center right",
    "right-end": "bottom right",
    "left-start": "top left",
    left: "center left",
    "left-end": "bottom left"
  },
  Kl = {
    "bottom-start": "right",
    "bottom-end": "left",
    "top-start": "right",
    "top-end": "left",
    "right-start": "bottom",
    "right-end": "top",
    "left-start": "bottom",
    "left-end": "top"
  },
  Mo = {
    top: !0,
    bottom: !1,
    left: !0,
    right: !1
  },
  Oo = {
    top: "end",
    bottom: "start",
    left: "end",
    right: "start"
  };

function ql(e, t, r, o, n, i) {
  if (!n || i) return {
    placement: e,
    top: 0,
    left: 0
  };
  const [l, d] = e.split("-");
  let a = d ? ? "center",
    s = {
      top: 0,
      left: 0
    };
  const u = (p, v, y) => {
      let w = 0,
        x = 0;
      const P = r[p] - t[v] - t[p];
      return P > 0 && o && (y ? x = Mo[v] ? P : -P : w = Mo[v] ? P : -P), {
        left: w,
        top: x
      }
    },
    f = l === "left" || l === "right";
  if (a !== "center") {
    const p = Kl[e],
      v = jt[p],
      y = hr[p];
    if (r[y] > t[y]) {
      if (t[p] + t[y] < r[y]) {
        const w = (r[y] - t[y]) / 2;
        t[p] < w || t[v] < w ? t[p] < t[v] ? (a = Ro[d], s = u(y, v, f)) : s = u(y, p, f) : a = "center"
      }
    } else r[y] < t[y] && t[v] < 0 && t[p] > t[v] && (a = Ro[d])
  } else {
    const p = l === "bottom" || l === "top" ? "left" : "top",
      v = jt[p],
      y = hr[p],
      w = (r[y] - t[y]) / 2;
    (t[p] < w || t[v] < w) && (t[p] > t[v] ? (a = Oo[p], s = u(y, p, f)) : (a = Oo[v], s = u(y, v, f)))
  }
  let h = l;
  return t[l] < r[hr[l]] && t[l] < t[jt[l]] && (h = jt[l]), {
    placement: a !== "center" ? `${h}-${a}` : h,
    left: s.left,
    top: s.top
  }
}

function Gl(e, t) {
  return t ? Vl[e] : Wl[e]
}

function Xl(e, t, r, o, n, i) {
  if (i) switch (e) {
    case "bottom-start":
      return {
        top: `${Math.round(r.top-t.top+r.height)}px`, left: `${Math.round(r.left-t.left)}px`, transform: "translateY(-100%)"
      };
    case "bottom-end":
      return {
        top: `${Math.round(r.top-t.top+r.height)}px`, left: `${Math.round(r.left-t.left+r.width)}px`, transform: "translateX(-100%) translateY(-100%)"
      };
    case "top-start":
      return {
        top: `${Math.round(r.top-t.top)}px`, left: `${Math.round(r.left-t.left)}px`, transform: ""
      };
    case "top-end":
      return {
        top: `${Math.round(r.top-t.top)}px`, left: `${Math.round(r.left-t.left+r.width)}px`, transform: "translateX(-100%)"
      };
    case "right-start":
      return {
        top: `${Math.round(r.top-t.top)}px`, left: `${Math.round(r.left-t.left+r.width)}px`, transform: "translateX(-100%)"
      };
    case "right-end":
      return {
        top: `${Math.round(r.top-t.top+r.height)}px`, left: `${Math.round(r.left-t.left+r.width)}px`, transform: "translateX(-100%) translateY(-100%)"
      };
    case "left-start":
      return {
        top: `${Math.round(r.top-t.top)}px`, left: `${Math.round(r.left-t.left)}px`, transform: ""
      };
    case "left-end":
      return {
        top: `${Math.round(r.top-t.top+r.height)}px`, left: `${Math.round(r.left-t.left)}px`, transform: "translateY(-100%)"
      };
    case "top":
      return {
        top: `${Math.round(r.top-t.top)}px`, left: `${Math.round(r.left-t.left+r.width/2)}px`, transform: "translateX(-50%)"
      };
    case "right":
      return {
        top: `${Math.round(r.top-t.top+r.height/2)}px`, left: `${Math.round(r.left-t.left+r.width)}px`, transform: "translateX(-100%) translateY(-50%)"
      };
    case "left":
      return {
        top: `${Math.round(r.top-t.top+r.height/2)}px`, left: `${Math.round(r.left-t.left)}px`, transform: "translateY(-50%)"
      };
    case "bottom":
    default:
      return {
        top: `${Math.round(r.top-t.top+r.height)}px`, left: `${Math.round(r.left-t.left+r.width/2)}px`, transform: "translateX(-50%) translateY(-100%)"
      }
  }
  switch (e) {
    case "bottom-start":
      return {
        top: `${Math.round(r.top-t.top+r.height+o)}px`, left: `${Math.round(r.left-t.left+n)}px`, transform: ""
      };
    case "bottom-end":
      return {
        top: `${Math.round(r.top-t.top+r.height+o)}px`, left: `${Math.round(r.left-t.left+r.width+n)}px`, transform: "translateX(-100%)"
      };
    case "top-start":
      return {
        top: `${Math.round(r.top-t.top+o)}px`, left: `${Math.round(r.left-t.left+n)}px`, transform: "translateY(-100%)"
      };
    case "top-end":
      return {
        top: `${Math.round(r.top-t.top+o)}px`, left: `${Math.round(r.left-t.left+r.width+n)}px`, transform: "translateX(-100%) translateY(-100%)"
      };
    case "right-start":
      return {
        top: `${Math.round(r.top-t.top+o)}px`, left: `${Math.round(r.left-t.left+r.width+n)}px`, transform: ""
      };
    case "right-end":
      return {
        top: `${Math.round(r.top-t.top+r.height+o)}px`, left: `${Math.round(r.left-t.left+r.width+n)}px`, transform: "translateY(-100%)"
      };
    case "left-start":
      return {
        top: `${Math.round(r.top-t.top+o)}px`, left: `${Math.round(r.left-t.left+n)}px`, transform: "translateX(-100%)"
      };
    case "left-end":
      return {
        top: `${Math.round(r.top-t.top+r.height+o)}px`, left: `${Math.round(r.left-t.left+n)}px`, transform: "translateX(-100%) translateY(-100%)"
      };
    case "top":
      return {
        top: `${Math.round(r.top-t.top+o)}px`, left: `${Math.round(r.left-t.left+r.width/2+n)}px`, transform: "translateY(-100%) translateX(-50%)"
      };
    case "right":
      return {
        top: `${Math.round(r.top-t.top+r.height/2+o)}px`, left: `${Math.round(r.left-t.left+r.width+n)}px`, transform: "translateY(-50%)"
      };
    case "left":
      return {
        top: `${Math.round(r.top-t.top+r.height/2+o)}px`, left: `${Math.round(r.left-t.left+n)}px`, transform: "translateY(-50%) translateX(-100%)"
      };
    case "bottom":
    default:
      return {
        top: `${Math.round(r.top-t.top+r.height+o)}px`, left: `${Math.round(r.left-t.left+r.width/2+n)}px`, transform: "translateX(-50%)"
      }
  }
}
const Yl = Ht([Ht(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }), Ht(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [Ht("> *", {
    pointerEvents: "all"
  })])]),
  Nn = q({
    name: "Follower",
    inheritAttrs: !1,
    props: {
      show: Boolean,
      enabled: {
        type: Boolean,
        default: void 0
      },
      placement: {
        type: String,
        default: "bottom"
      },
      syncTrigger: {
        type: Array,
        default: ["resize", "scroll"]
      },
      to: [String, Object],
      flip: {
        type: Boolean,
        default: !0
      },
      internalShift: Boolean,
      x: Number,
      y: Number,
      width: String,
      minWidth: String,
      containerClass: String,
      teleportDisabled: Boolean,
      zindexable: {
        type: Boolean,
        default: !0
      },
      zIndex: Number,
      overlap: Boolean
    },
    setup(e) {
      const t = ue("VBinder"),
        r = We(() => e.enabled !== void 0 ? e.enabled : e.show),
        o = O(null),
        n = O(null),
        i = () => {
          const {
            syncTrigger: h
          } = e;
          h.includes("scroll") && t.addScrollListener(a), h.includes("resize") && t.addResizeListener(a)
        },
        l = () => {
          t.removeScrollListener(a), t.removeResizeListener(a)
        };
      et(() => {
        r.value && (a(), i())
      });
      const d = Ka();
      Yl.mount({
        id: "vueuc/binder",
        head: !0,
        anchorMetaName: Ul,
        ssr: d
      }), nt(() => {
        l()
      }), Bl(() => {
        r.value && a()
      });
      const a = () => {
        if (!r.value) return;
        const h = o.value;
        if (h === null) return;
        const p = t.targetRef,
          {
            x: v,
            y,
            overlap: w
          } = e,
          x = v !== void 0 && y !== void 0 ? Dl(v, y) : fr(p);
        h.style.setProperty("--v-target-width", `${Math.round(x.width)}px`), h.style.setProperty("--v-target-height", `${Math.round(x.height)}px`);
        const {
          width: P,
          minWidth: k,
          placement: b,
          internalShift: m,
          flip: R
        } = e;
        h.setAttribute("v-placement", b), w ? h.setAttribute("v-overlap", "") : h.removeAttribute("v-overlap");
        const {
          style: z
        } = h;
        P === "target" ? z.width = `${x.width}px` : P !== void 0 ? z.width = P : z.width = "", k === "target" ? z.minWidth = `${x.width}px` : k !== void 0 ? z.minWidth = k : z.minWidth = "";
        const A = fr(h),
          $ = fr(n.value),
          {
            left: _,
            top: K,
            placement: F
          } = ql(b, x, A, m, R, w),
          M = Gl(F, w),
          {
            left: C,
            top: T,
            transform: H
          } = Xl(F, $, x, K, _, w);
        h.setAttribute("v-placement", F), h.style.setProperty("--v-offset-left", `${Math.round(_)}px`), h.style.setProperty("--v-offset-top", `${Math.round(K)}px`), h.style.transform = `translateX(${C}) translateY(${T}) ${H}`, h.style.setProperty("--v-transform-origin", M), h.style.transformOrigin = M
      };
      Te(r, h => {
        h ? (i(), s()) : l()
      });
      const s = () => {
        Xt().then(a).catch(h => console.error(h))
      };
      ["placement", "x", "y", "internalShift", "flip", "width", "overlap", "minWidth"].forEach(h => {
        Te(ee(e, h), a)
      }), ["teleportDisabled"].forEach(h => {
        Te(ee(e, h), s)
      }), Te(ee(e, "syncTrigger"), h => {
        h.includes("resize") ? t.addResizeListener(a) : t.removeResizeListener(a), h.includes("scroll") ? t.addScrollListener(a) : t.removeScrollListener(a)
      });
      const u = Nr(),
        f = We(() => {
          const {
            to: h
          } = e;
          if (h !== void 0) return h;
          u.value
        });
      return {
        VBinder: t,
        mergedEnabled: r,
        offsetContainerRef: n,
        followerRef: o,
        mergedTo: f,
        syncPosition: a
      }
    },
    render() {
      return c(vn, {
        show: this.show,
        to: this.mergedTo,
        disabled: this.teleportDisabled
      }, {
        default: () => {
          var e, t;
          const r = c("div", {
            class: ["v-binder-follower-container", this.containerClass],
            ref: "offsetContainerRef"
          }, [c("div", {
            class: "v-binder-follower-content",
            ref: "followerRef"
          }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e))]);
          return this.zindexable ? xt(r, [
            [Hr, {
              enabled: this.mergedEnabled,
              zIndex: this.zIndex
            }]
          ]) : r
        }
      })
    }
  });
var Zl = rr(or, "WeakMap");
const Tr = Zl;
var Jl = qa(Object.keys, Object);
const Ql = Jl;
var es = Object.prototype,
  ts = es.hasOwnProperty;

function rs(e) {
  if (!Ga(e)) return Ql(e);
  var t = [];
  for (var r in Object(e)) ts.call(e, r) && r != "constructor" && t.push(r);
  return t
}

function Jr(e) {
  return jr(e) ? Xa(e) : rs(e)
}
var os = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  ns = /^\w*$/;

function Qr(e, t) {
  if (rt(e)) return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || gn(e) ? !0 : ns.test(e) || !os.test(e) || t != null && e in Object(t)
}
var is = "Expected a function";

function eo(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(is);
  var r = function () {
    var o = arguments,
      n = t ? t.apply(this, o) : o[0],
      i = r.cache;
    if (i.has(n)) return i.get(n);
    var l = e.apply(this, o);
    return r.cache = i.set(n, l) || i, l
  };
  return r.cache = new(eo.Cache || Ur), r
}
eo.Cache = Ur;
var as = 500;

function ls(e) {
  var t = eo(e, function (o) {
      return r.size === as && r.clear(), o
    }),
    r = t.cache;
  return t
}
var ss = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  ds = /\\(\\)?/g,
  cs = ls(function (e) {
    var t = [];
    return e.charCodeAt(0) === 46 && t.push(""), e.replace(ss, function (r, o, n, i) {
      t.push(n ? i.replace(ds, "$1") : o || r)
    }), t
  });
const us = cs;

function Hn(e, t) {
  return rt(e) ? e : Qr(e, t) ? [e] : us(Wr(e))
}
var fs = 1 / 0;

function ir(e) {
  if (typeof e == "string" || gn(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -fs ? "-0" : t
}

function jn(e, t) {
  t = Hn(t, e);
  for (var r = 0, o = t.length; e != null && r < o;) e = e[ir(t[r++])];
  return r && r == o ? e : void 0
}

function hs(e, t, r) {
  var o = e == null ? void 0 : jn(e, t);
  return o === void 0 ? r : o
}

function ps(e, t) {
  for (var r = -1, o = t.length, n = e.length; ++r < o;) e[n + r] = t[r];
  return e
}

function vs(e, t, r, o) {
  var n = -1,
    i = e == null ? 0 : e.length;
  for (o && i && (r = e[++n]); ++n < i;) r = t(r, e[n], n, e);
  return r
}

function gs(e) {
  return function (t) {
    return e == null ? void 0 : e[t]
  }
}
var ms = {
    À: "A",
    Á: "A",
    Â: "A",
    Ã: "A",
    Ä: "A",
    Å: "A",
    à: "a",
    á: "a",
    â: "a",
    ã: "a",
    ä: "a",
    å: "a",
    Ç: "C",
    ç: "c",
    Ð: "D",
    ð: "d",
    È: "E",
    É: "E",
    Ê: "E",
    Ë: "E",
    è: "e",
    é: "e",
    ê: "e",
    ë: "e",
    Ì: "I",
    Í: "I",
    Î: "I",
    Ï: "I",
    ì: "i",
    í: "i",
    î: "i",
    ï: "i",
    Ñ: "N",
    ñ: "n",
    Ò: "O",
    Ó: "O",
    Ô: "O",
    Õ: "O",
    Ö: "O",
    Ø: "O",
    ò: "o",
    ó: "o",
    ô: "o",
    õ: "o",
    ö: "o",
    ø: "o",
    Ù: "U",
    Ú: "U",
    Û: "U",
    Ü: "U",
    ù: "u",
    ú: "u",
    û: "u",
    ü: "u",
    Ý: "Y",
    ý: "y",
    ÿ: "y",
    Æ: "Ae",
    æ: "ae",
    Þ: "Th",
    þ: "th",
    ß: "ss",
    Ā: "A",
    Ă: "A",
    Ą: "A",
    ā: "a",
    ă: "a",
    ą: "a",
    Ć: "C",
    Ĉ: "C",
    Ċ: "C",
    Č: "C",
    ć: "c",
    ĉ: "c",
    ċ: "c",
    č: "c",
    Ď: "D",
    Đ: "D",
    ď: "d",
    đ: "d",
    Ē: "E",
    Ĕ: "E",
    Ė: "E",
    Ę: "E",
    Ě: "E",
    ē: "e",
    ĕ: "e",
    ė: "e",
    ę: "e",
    ě: "e",
    Ĝ: "G",
    Ğ: "G",
    Ġ: "G",
    Ģ: "G",
    ĝ: "g",
    ğ: "g",
    ġ: "g",
    ģ: "g",
    Ĥ: "H",
    Ħ: "H",
    ĥ: "h",
    ħ: "h",
    Ĩ: "I",
    Ī: "I",
    Ĭ: "I",
    Į: "I",
    İ: "I",
    ĩ: "i",
    ī: "i",
    ĭ: "i",
    į: "i",
    ı: "i",
    Ĵ: "J",
    ĵ: "j",
    Ķ: "K",
    ķ: "k",
    ĸ: "k",
    Ĺ: "L",
    Ļ: "L",
    Ľ: "L",
    Ŀ: "L",
    Ł: "L",
    ĺ: "l",
    ļ: "l",
    ľ: "l",
    ŀ: "l",
    ł: "l",
    Ń: "N",
    Ņ: "N",
    Ň: "N",
    Ŋ: "N",
    ń: "n",
    ņ: "n",
    ň: "n",
    ŋ: "n",
    Ō: "O",
    Ŏ: "O",
    Ő: "O",
    ō: "o",
    ŏ: "o",
    ő: "o",
    Ŕ: "R",
    Ŗ: "R",
    Ř: "R",
    ŕ: "r",
    ŗ: "r",
    ř: "r",
    Ś: "S",
    Ŝ: "S",
    Ş: "S",
    Š: "S",
    ś: "s",
    ŝ: "s",
    ş: "s",
    š: "s",
    Ţ: "T",
    Ť: "T",
    Ŧ: "T",
    ţ: "t",
    ť: "t",
    ŧ: "t",
    Ũ: "U",
    Ū: "U",
    Ŭ: "U",
    Ů: "U",
    Ű: "U",
    Ų: "U",
    ũ: "u",
    ū: "u",
    ŭ: "u",
    ů: "u",
    ű: "u",
    ų: "u",
    Ŵ: "W",
    ŵ: "w",
    Ŷ: "Y",
    ŷ: "y",
    Ÿ: "Y",
    Ź: "Z",
    Ż: "Z",
    Ž: "Z",
    ź: "z",
    ż: "z",
    ž: "z",
    Ĳ: "IJ",
    ĳ: "ij",
    Œ: "Oe",
    œ: "oe",
    ŉ: "'n",
    ſ: "s"
  },
  bs = gs(ms);
const ys = bs;
var ws = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
  xs = "\\u0300-\\u036f",
  Cs = "\\ufe20-\\ufe2f",
  Ss = "\\u20d0-\\u20ff",
  ks = xs + Cs + Ss,
  Ps = "[" + ks + "]",
  $s = RegExp(Ps, "g");

function zs(e) {
  return e = Wr(e), e && e.replace(ws, ys).replace($s, "")
}
var Ts = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

function Is(e) {
  return e.match(Ts) || []
}
var _s = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

function Rs(e) {
  return _s.test(e)
}
var Un = "\\ud800-\\udfff",
  Ms = "\\u0300-\\u036f",
  Os = "\\ufe20-\\ufe2f",
  Bs = "\\u20d0-\\u20ff",
  Ls = Ms + Os + Bs,
  Wn = "\\u2700-\\u27bf",
  Vn = "a-z\\xdf-\\xf6\\xf8-\\xff",
  Es = "\\xac\\xb1\\xd7\\xf7",
  As = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
  Ds = "\\u2000-\\u206f",
  Fs = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
  Kn = "A-Z\\xc0-\\xd6\\xd8-\\xde",
  Ns = "\\ufe0e\\ufe0f",
  qn = Es + As + Ds + Fs,
  Gn = "['’]",
  Bo = "[" + qn + "]",
  Hs = "[" + Ls + "]",
  Xn = "\\d+",
  js = "[" + Wn + "]",
  Yn = "[" + Vn + "]",
  Zn = "[^" + Un + qn + Xn + Wn + Vn + Kn + "]",
  Us = "\\ud83c[\\udffb-\\udfff]",
  Ws = "(?:" + Hs + "|" + Us + ")",
  Vs = "[^" + Un + "]",
  Jn = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  Qn = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  gt = "[" + Kn + "]",
  Ks = "\\u200d",
  Lo = "(?:" + Yn + "|" + Zn + ")",
  qs = "(?:" + gt + "|" + Zn + ")",
  Eo = "(?:" + Gn + "(?:d|ll|m|re|s|t|ve))?",
  Ao = "(?:" + Gn + "(?:D|LL|M|RE|S|T|VE))?",
  ei = Ws + "?",
  ti = "[" + Ns + "]?",
  Gs = "(?:" + Ks + "(?:" + [Vs, Jn, Qn].join("|") + ")" + ti + ei + ")*",
  Xs = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
  Ys = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
  Zs = ti + ei + Gs,
  Js = "(?:" + [js, Jn, Qn].join("|") + ")" + Zs,
  Qs = RegExp([gt + "?" + Yn + "+" + Eo + "(?=" + [Bo, gt, "$"].join("|") + ")", qs + "+" + Ao + "(?=" + [Bo, gt + Lo, "$"].join("|") + ")", gt + "?" + Lo + "+" + Eo, gt + "+" + Ao, Ys, Xs, Xn, Js].join("|"), "g");

function ed(e) {
  return e.match(Qs) || []
}

function td(e, t, r) {
  return e = Wr(e), t = r ? void 0 : t, t === void 0 ? Rs(e) ? ed(e) : Is(e) : e.match(t) || []
}
var rd = "['’]",
  od = RegExp(rd, "g");

function nd(e) {
  return function (t) {
    return vs(td(zs(t).replace(od, "")), e, "")
  }
}

function id(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, n = 0, i = []; ++r < o;) {
    var l = e[r];
    t(l, r, e) && (i[n++] = l)
  }
  return i
}

function ad() {
  return []
}
var ld = Object.prototype,
  sd = ld.propertyIsEnumerable,
  Do = Object.getOwnPropertySymbols,
  dd = Do ? function (e) {
    return e == null ? [] : (e = Object(e), id(Do(e), function (t) {
      return sd.call(e, t)
    }))
  } : ad;
const cd = dd;

function ud(e, t, r) {
  var o = t(e);
  return rt(e) ? o : ps(o, r(e))
}

function Fo(e) {
  return ud(e, Jr, cd)
}
var fd = rr(or, "DataView");
const Ir = fd;
var hd = rr(or, "Promise");
const _r = hd;
var pd = rr(or, "Set");
const Rr = pd;
var No = "[object Map]",
  vd = "[object Object]",
  Ho = "[object Promise]",
  jo = "[object Set]",
  Uo = "[object WeakMap]",
  Wo = "[object DataView]",
  gd = St(Ir),
  md = St(Pr),
  bd = St(_r),
  yd = St(Rr),
  wd = St(Tr),
  ct = mn;
(Ir && ct(new Ir(new ArrayBuffer(1))) != Wo || Pr && ct(new Pr) != No || _r && ct(_r.resolve()) != Ho || Rr && ct(new Rr) != jo || Tr && ct(new Tr) != Uo) && (ct = function (e) {
  var t = mn(e),
    r = t == vd ? e.constructor : void 0,
    o = r ? St(r) : "";
  if (o) switch (o) {
    case gd:
      return Wo;
    case md:
      return No;
    case bd:
      return Ho;
    case yd:
      return jo;
    case wd:
      return Uo
  }
  return t
});
const Vo = ct;
var xd = "__lodash_hash_undefined__";

function Cd(e) {
  return this.__data__.set(e, xd), this
}

function Sd(e) {
  return this.__data__.has(e)
}

function Jt(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.__data__ = new Ur; ++t < r;) this.add(e[t])
}
Jt.prototype.add = Jt.prototype.push = Cd;
Jt.prototype.has = Sd;

function kd(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o;)
    if (t(e[r], r, e)) return !0;
  return !1
}

function Pd(e, t) {
  return e.has(t)
}
var $d = 1,
  zd = 2;

function ri(e, t, r, o, n, i) {
  var l = r & $d,
    d = e.length,
    a = t.length;
  if (d != a && !(l && a > d)) return !1;
  var s = i.get(e),
    u = i.get(t);
  if (s && u) return s == t && u == e;
  var f = -1,
    h = !0,
    p = r & zd ? new Jt : void 0;
  for (i.set(e, t), i.set(t, e); ++f < d;) {
    var v = e[f],
      y = t[f];
    if (o) var w = l ? o(y, v, f, t, e, i) : o(v, y, f, e, t, i);
    if (w !== void 0) {
      if (w) continue;
      h = !1;
      break
    }
    if (p) {
      if (!kd(t, function (x, P) {
          if (!Pd(p, P) && (v === x || n(v, x, r, o, i))) return p.push(P)
        })) {
        h = !1;
        break
      }
    } else if (!(v === y || n(v, y, r, o, i))) {
      h = !1;
      break
    }
  }
  return i.delete(e), i.delete(t), h
}

function Td(e) {
  var t = -1,
    r = Array(e.size);
  return e.forEach(function (o, n) {
    r[++t] = [n, o]
  }), r
}

function Id(e) {
  var t = -1,
    r = Array(e.size);
  return e.forEach(function (o) {
    r[++t] = o
  }), r
}
var _d = 1,
  Rd = 2,
  Md = "[object Boolean]",
  Od = "[object Date]",
  Bd = "[object Error]",
  Ld = "[object Map]",
  Ed = "[object Number]",
  Ad = "[object RegExp]",
  Dd = "[object Set]",
  Fd = "[object String]",
  Nd = "[object Symbol]",
  Hd = "[object ArrayBuffer]",
  jd = "[object DataView]",
  Ko = mo ? mo.prototype : void 0,
  pr = Ko ? Ko.valueOf : void 0;

function Ud(e, t, r, o, n, i, l) {
  switch (r) {
    case jd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
      e = e.buffer, t = t.buffer;
    case Hd:
      return !(e.byteLength != t.byteLength || !i(new bo(e), new bo(t)));
    case Md:
    case Od:
    case Ed:
      return Ya(+e, +t);
    case Bd:
      return e.name == t.name && e.message == t.message;
    case Ad:
    case Fd:
      return e == t + "";
    case Ld:
      var d = Td;
    case Dd:
      var a = o & _d;
      if (d || (d = Id), e.size != t.size && !a) return !1;
      var s = l.get(e);
      if (s) return s == t;
      o |= Rd, l.set(e, t);
      var u = ri(d(e), d(t), o, n, i, l);
      return l.delete(e), u;
    case Nd:
      if (pr) return pr.call(e) == pr.call(t)
  }
  return !1
}
var Wd = 1,
  Vd = Object.prototype,
  Kd = Vd.hasOwnProperty;

function qd(e, t, r, o, n, i) {
  var l = r & Wd,
    d = Fo(e),
    a = d.length,
    s = Fo(t),
    u = s.length;
  if (a != u && !l) return !1;
  for (var f = a; f--;) {
    var h = d[f];
    if (!(l ? h in t : Kd.call(t, h))) return !1
  }
  var p = i.get(e),
    v = i.get(t);
  if (p && v) return p == t && v == e;
  var y = !0;
  i.set(e, t), i.set(t, e);
  for (var w = l; ++f < a;) {
    h = d[f];
    var x = e[h],
      P = t[h];
    if (o) var k = l ? o(P, x, h, t, e, i) : o(x, P, h, e, t, i);
    if (!(k === void 0 ? x === P || n(x, P, r, o, i) : k)) {
      y = !1;
      break
    }
    w || (w = h == "constructor")
  }
  if (y && !w) {
    var b = e.constructor,
      m = t.constructor;
    b != m && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof m == "function" && m instanceof m) && (y = !1)
  }
  return i.delete(e), i.delete(t), y
}
var Gd = 1,
  qo = "[object Arguments]",
  Go = "[object Array]",
  Ut = "[object Object]",
  Xd = Object.prototype,
  Xo = Xd.hasOwnProperty;

function Yd(e, t, r, o, n, i) {
  var l = rt(e),
    d = rt(t),
    a = l ? Go : Vo(e),
    s = d ? Go : Vo(t);
  a = a == qo ? Ut : a, s = s == qo ? Ut : s;
  var u = a == Ut,
    f = s == Ut,
    h = a == s;
  if (h && yo(e)) {
    if (!yo(t)) return !1;
    l = !0, u = !1
  }
  if (h && !u) return i || (i = new Gt), l || Za(e) ? ri(e, t, r, o, n, i) : Ud(e, t, a, r, o, n, i);
  if (!(r & Gd)) {
    var p = u && Xo.call(e, "__wrapped__"),
      v = f && Xo.call(t, "__wrapped__");
    if (p || v) {
      var y = p ? e.value() : e,
        w = v ? t.value() : t;
      return i || (i = new Gt), n(y, w, r, o, i)
    }
  }
  return h ? (i || (i = new Gt), qd(e, t, r, o, n, i)) : !1
}

function to(e, t, r, o, n) {
  return e === t ? !0 : e == null || t == null || !wo(e) && !wo(t) ? e !== e && t !== t : Yd(e, t, r, o, to, n)
}
var Zd = 1,
  Jd = 2;

function Qd(e, t, r, o) {
  var n = r.length,
    i = n,
    l = !o;
  if (e == null) return !i;
  for (e = Object(e); n--;) {
    var d = r[n];
    if (l && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1
  }
  for (; ++n < i;) {
    d = r[n];
    var a = d[0],
      s = e[a],
      u = d[1];
    if (l && d[2]) {
      if (s === void 0 && !(a in e)) return !1
    } else {
      var f = new Gt;
      if (o) var h = o(s, u, a, e, t, f);
      if (!(h === void 0 ? to(u, s, Zd | Jd, o, f) : h)) return !1
    }
  }
  return !0
}

function oi(e) {
  return e === e && !Ja(e)
}

function ec(e) {
  for (var t = Jr(e), r = t.length; r--;) {
    var o = t[r],
      n = e[o];
    t[r] = [o, n, oi(n)]
  }
  return t
}

function ni(e, t) {
  return function (r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
  }
}

function tc(e) {
  var t = ec(e);
  return t.length == 1 && t[0][2] ? ni(t[0][0], t[0][1]) : function (r) {
    return r === e || Qd(r, e, t)
  }
}

function rc(e, t) {
  return e != null && t in Object(e)
}

function oc(e, t, r) {
  t = Hn(t, e);
  for (var o = -1, n = t.length, i = !1; ++o < n;) {
    var l = ir(t[o]);
    if (!(i = e != null && r(e, l))) break;
    e = e[l]
  }
  return i || ++o != n ? i : (n = e == null ? 0 : e.length, !!n && Qa(n) && el(l, n) && (rt(e) || tl(e)))
}

function nc(e, t) {
  return e != null && oc(e, t, rc)
}
var ic = 1,
  ac = 2;

function lc(e, t) {
  return Qr(e) && oi(t) ? ni(ir(e), t) : function (r) {
    var o = hs(r, e);
    return o === void 0 && o === t ? nc(r, e) : to(t, o, ic | ac)
  }
}

function sc(e) {
  return function (t) {
    return t == null ? void 0 : t[e]
  }
}

function dc(e) {
  return function (t) {
    return jn(t, e)
  }
}

function cc(e) {
  return Qr(e) ? sc(ir(e)) : dc(e)
}

function uc(e) {
  return typeof e == "function" ? e : e == null ? rl : typeof e == "object" ? rt(e) ? lc(e[0], e[1]) : tc(e) : cc(e)
}

function fc(e, t) {
  return e && ol(e, t, Jr)
}

function hc(e, t) {
  return function (r, o) {
    if (r == null) return r;
    if (!jr(r)) return e(r, o);
    for (var n = r.length, i = t ? n : -1, l = Object(r);
      (t ? i-- : ++i < n) && o(l[i], i, l) !== !1;);
    return r
  }
}
var pc = hc(fc);
const vc = pc;

function gc(e, t) {
  var r = -1,
    o = jr(e) ? Array(e.length) : [];
  return vc(e, function (n, i, l) {
    o[++r] = t(n, i, l)
  }), o
}

function mc(e, t) {
  var r = rt(e) ? nl : gc;
  return r(e, uc(t))
}
var bc = nd(function (e, t, r) {
  return e + (r ? "-" : "") + t.toLowerCase()
});
const yc = bc,
  wc = {
    name: "en-US",
    global: {
      undo: "Undo",
      redo: "Redo",
      confirm: "Confirm",
      clear: "Clear"
    },
    Popconfirm: {
      positiveText: "Confirm",
      negativeText: "Cancel"
    },
    Cascader: {
      placeholder: "Please Select",
      loading: "Loading",
      loadingRequiredMessage: e => `Please load all ${e}'s descendants before checking it.`
    },
    Time: {
      dateFormat: "yyyy-MM-dd",
      dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
    },
    DatePicker: {
      yearFormat: "yyyy",
      monthFormat: "MMM",
      dayFormat: "eeeeee",
      yearTypeFormat: "yyyy",
      monthTypeFormat: "yyyy-MM",
      dateFormat: "yyyy-MM-dd",
      dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
      quarterFormat: "yyyy-qqq",
      clear: "Clear",
      now: "Now",
      confirm: "Confirm",
      selectTime: "Select Time",
      selectDate: "Select Date",
      datePlaceholder: "Select Date",
      datetimePlaceholder: "Select Date and Time",
      monthPlaceholder: "Select Month",
      yearPlaceholder: "Select Year",
      quarterPlaceholder: "Select Quarter",
      startDatePlaceholder: "Start Date",
      endDatePlaceholder: "End Date",
      startDatetimePlaceholder: "Start Date and Time",
      endDatetimePlaceholder: "End Date and Time",
      startMonthPlaceholder: "Start Month",
      endMonthPlaceholder: "End Month",
      monthBeforeYear: !0,
      firstDayOfWeek: 6,
      today: "Today"
    },
    DataTable: {
      checkTableAll: "Select all in the table",
      uncheckTableAll: "Unselect all in the table",
      confirm: "Confirm",
      clear: "Clear"
    },
    LegacyTransfer: {
      sourceTitle: "Source",
      targetTitle: "Target"
    },
    Transfer: {
      selectAll: "Select all",
      unselectAll: "Unselect all",
      clearAll: "Clear",
      total: e => `Total ${e} items`,
      selected: e => `${e} items selected`
    },
    Empty: {
      description: "No Data"
    },
    Select: {
      placeholder: "Please Select"
    },
    TimePicker: {
      placeholder: "Select Time",
      positiveText: "OK",
      negativeText: "Cancel",
      now: "Now"
    },
    Pagination: {
      goto: "Goto",
      selectionSuffix: "page"
    },
    DynamicTags: {
      add: "Add"
    },
    Log: {
      loading: "Loading"
    },
    Input: {
      placeholder: "Please Input"
    },
    InputNumber: {
      placeholder: "Please Input"
    },
    DynamicInput: {
      create: "Create"
    },
    ThemeEditor: {
      title: "Theme Editor",
      clearAllVars: "Clear All Variables",
      clearSearch: "Clear Search",
      filterCompName: "Filter Component Name",
      filterVarName: "Filter Variable Name",
      import: "Import",
      export: "Export",
      restore: "Reset to Default"
    },
    Image: {
      tipPrevious: "Previous picture (←)",
      tipNext: "Next picture (→)",
      tipCounterclockwise: "Counterclockwise",
      tipClockwise: "Clockwise",
      tipZoomOut: "Zoom out",
      tipZoomIn: "Zoom in",
      tipClose: "Close (Esc)",
      tipOriginalSize: "Zoom to original size"
    }
  },
  xc = wc;

function vr(e) {
  return function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.width ? String(t.width) : e.defaultWidth,
      o = e.formats[r] || e.formats[e.defaultWidth];
    return o
  }
}

function _t(e) {
  return function (t, r) {
    var o = r != null && r.context ? String(r.context) : "standalone",
      n;
    if (o === "formatting" && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth,
        l = r != null && r.width ? String(r.width) : i;
      n = e.formattingValues[l] || e.formattingValues[i]
    } else {
      var d = e.defaultWidth,
        a = r != null && r.width ? String(r.width) : e.defaultWidth;
      n = e.values[a] || e.values[d]
    }
    var s = e.argumentCallback ? e.argumentCallback(t) : t;
    return n[s]
  }
}

function Rt(e) {
  return function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      o = r.width,
      n = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth],
      i = t.match(n);
    if (!i) return null;
    var l = i[0],
      d = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth],
      a = Array.isArray(d) ? Sc(d, function (f) {
        return f.test(l)
      }) : Cc(d, function (f) {
        return f.test(l)
      }),
      s;
    s = e.valueCallback ? e.valueCallback(a) : a, s = r.valueCallback ? r.valueCallback(s) : s;
    var u = t.slice(l.length);
    return {
      value: s,
      rest: u
    }
  }
}

function Cc(e, t) {
  for (var r in e)
    if (e.hasOwnProperty(r) && t(e[r])) return r
}

function Sc(e, t) {
  for (var r = 0; r < e.length; r++)
    if (t(e[r])) return r
}

function kc(e) {
  return function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      o = t.match(e.matchPattern);
    if (!o) return null;
    var n = o[0],
      i = t.match(e.parsePattern);
    if (!i) return null;
    var l = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    l = r.valueCallback ? r.valueCallback(l) : l;
    var d = t.slice(n.length);
    return {
      value: l,
      rest: d
    }
  }
}
var Pc = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds"
    },
    xSeconds: {
      one: "1 second",
      other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes"
    },
    xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
    },
    aboutXHours: {
      one: "about 1 hour",
      other: "about {{count}} hours"
    },
    xHours: {
      one: "1 hour",
      other: "{{count}} hours"
    },
    xDays: {
      one: "1 day",
      other: "{{count}} days"
    },
    aboutXWeeks: {
      one: "about 1 week",
      other: "about {{count}} weeks"
    },
    xWeeks: {
      one: "1 week",
      other: "{{count}} weeks"
    },
    aboutXMonths: {
      one: "about 1 month",
      other: "about {{count}} months"
    },
    xMonths: {
      one: "1 month",
      other: "{{count}} months"
    },
    aboutXYears: {
      one: "about 1 year",
      other: "about {{count}} years"
    },
    xYears: {
      one: "1 year",
      other: "{{count}} years"
    },
    overXYears: {
      one: "over 1 year",
      other: "over {{count}} years"
    },
    almostXYears: {
      one: "almost 1 year",
      other: "almost {{count}} years"
    }
  },
  $c = function (t, r, o) {
    var n, i = Pc[t];
    return typeof i == "string" ? n = i : r === 1 ? n = i.one : n = i.other.replace("{{count}}", r.toString()), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "in " + n : n + " ago" : n
  };
const zc = $c;
var Tc = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
  },
  Ic = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  },
  _c = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  },
  Rc = {
    date: vr({
      formats: Tc,
      defaultWidth: "full"
    }),
    time: vr({
      formats: Ic,
      defaultWidth: "full"
    }),
    dateTime: vr({
      formats: _c,
      defaultWidth: "full"
    })
  };
const Mc = Rc;
var Oc = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  },
  Bc = function (t, r, o, n) {
    return Oc[t]
  };
const Lc = Bc;
var Ec = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
  },
  Ac = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
  },
  Dc = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  },
  Fc = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  },
  Nc = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    }
  },
  Hc = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    }
  },
  jc = function (t, r) {
    var o = Number(t),
      n = o % 100;
    if (n > 20 || n < 10) switch (n % 10) {
      case 1:
        return o + "st";
      case 2:
        return o + "nd";
      case 3:
        return o + "rd"
    }
    return o + "th"
  },
  Uc = {
    ordinalNumber: jc,
    era: _t({
      values: Ec,
      defaultWidth: "wide"
    }),
    quarter: _t({
      values: Ac,
      defaultWidth: "wide",
      argumentCallback: function (t) {
        return t - 1
      }
    }),
    month: _t({
      values: Dc,
      defaultWidth: "wide"
    }),
    day: _t({
      values: Fc,
      defaultWidth: "wide"
    }),
    dayPeriod: _t({
      values: Nc,
      defaultWidth: "wide",
      formattingValues: Hc,
      defaultFormattingWidth: "wide"
    })
  };
const Wc = Uc;
var Vc = /^(\d+)(th|st|nd|rd)?/i,
  Kc = /\d+/i,
  qc = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  },
  Gc = {
    any: [/^b/i, /^(a|c)/i]
  },
  Xc = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  },
  Yc = {
    any: [/1/i, /2/i, /3/i, /4/i]
  },
  Zc = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  },
  Jc = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  },
  Qc = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  },
  eu = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  },
  tu = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  },
  ru = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
    }
  },
  ou = {
    ordinalNumber: kc({
      matchPattern: Vc,
      parsePattern: Kc,
      valueCallback: function (t) {
        return parseInt(t, 10)
      }
    }),
    era: Rt({
      matchPatterns: qc,
      defaultMatchWidth: "wide",
      parsePatterns: Gc,
      defaultParseWidth: "any"
    }),
    quarter: Rt({
      matchPatterns: Xc,
      defaultMatchWidth: "wide",
      parsePatterns: Yc,
      defaultParseWidth: "any",
      valueCallback: function (t) {
        return t + 1
      }
    }),
    month: Rt({
      matchPatterns: Zc,
      defaultMatchWidth: "wide",
      parsePatterns: Jc,
      defaultParseWidth: "any"
    }),
    day: Rt({
      matchPatterns: Qc,
      defaultMatchWidth: "wide",
      parsePatterns: eu,
      defaultParseWidth: "any"
    }),
    dayPeriod: Rt({
      matchPatterns: tu,
      defaultMatchWidth: "any",
      parsePatterns: ru,
      defaultParseWidth: "any"
    })
  };
const nu = ou;
var iu = {
  code: "en-US",
  formatDistance: zc,
  formatLong: Mc,
  formatRelative: Lc,
  localize: Wc,
  match: nu,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const au = iu,
  lu = {
    name: "en-US",
    locale: au
  },
  su = lu;

function ro(e) {
  const {
    mergedLocaleRef: t,
    mergedDateLocaleRef: r
  } = ue(bn, null) || {}, o = D(() => {
    var i, l;
    return (l = (i = t == null ? void 0 : t.value) === null || i === void 0 ? void 0 : i[e]) !== null && l !== void 0 ? l : xc[e]
  });
  return {
    dateLocaleRef: D(() => {
      var i;
      return (i = r == null ? void 0 : r.value) !== null && i !== void 0 ? i : su
    }),
    localeRef: o
  }
}
const du = q({
    name: "Add",
    render() {
      return c("svg", {
        width: "512",
        height: "512",
        viewBox: "0 0 512 512",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, c("path", {
        d: "M256 112V400M400 256H112",
        stroke: "currentColor",
        "stroke-width": "32",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }))
    }
  }),
  cu = Xe("attach", c("svg", {
    viewBox: "0 0 16 16",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, c("g", {
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  }, c("g", {
    fill: "currentColor",
    "fill-rule": "nonzero"
  }, c("path", {
    d: "M3.25735931,8.70710678 L7.85355339,4.1109127 C8.82986412,3.13460197 10.4127766,3.13460197 11.3890873,4.1109127 C12.365398,5.08722343 12.365398,6.67013588 11.3890873,7.64644661 L6.08578644,12.9497475 C5.69526215,13.3402718 5.06209717,13.3402718 4.67157288,12.9497475 C4.28104858,12.5592232 4.28104858,11.9260582 4.67157288,11.5355339 L9.97487373,6.23223305 C10.1701359,6.0369709 10.1701359,5.72038841 9.97487373,5.52512627 C9.77961159,5.32986412 9.4630291,5.32986412 9.26776695,5.52512627 L3.96446609,10.8284271 C3.18341751,11.6094757 3.18341751,12.8758057 3.96446609,13.6568542 C4.74551468,14.4379028 6.01184464,14.4379028 6.79289322,13.6568542 L12.0961941,8.35355339 C13.4630291,6.98671837 13.4630291,4.77064094 12.0961941,3.40380592 C10.7293591,2.0369709 8.51328163,2.0369709 7.14644661,3.40380592 L2.55025253,8 C2.35499039,8.19526215 2.35499039,8.51184464 2.55025253,8.70710678 C2.74551468,8.90236893 3.06209717,8.90236893 3.25735931,8.70710678 Z"
  }))))),
  uu = q({
    name: "ChevronRight",
    render() {
      return c("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, c("path", {
        d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",
        fill: "currentColor"
      }))
    }
  }),
  ii = q({
    name: "Eye",
    render() {
      return c("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, c("path", {
        d: "M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "32"
      }), c("circle", {
        cx: "256",
        cy: "256",
        r: "80",
        fill: "none",
        stroke: "currentColor",
        "stroke-miterlimit": "10",
        "stroke-width": "32"
      }))
    }
  }),
  fu = q({
    name: "EyeOff",
    render() {
      return c("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, c("path", {
        d: "M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",
        fill: "currentColor"
      }), c("path", {
        d: "M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",
        fill: "currentColor"
      }), c("path", {
        d: "M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",
        fill: "currentColor"
      }), c("path", {
        d: "M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",
        fill: "currentColor"
      }), c("path", {
        d: "M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",
        fill: "currentColor"
      }))
    }
  }),
  hu = Xe("trash", c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, c("path", {
    d: "M432,144,403.33,419.74A32,32,0,0,1,371.55,448H140.46a32,32,0,0,1-31.78-28.26L80,144",
    style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"
  }), c("rect", {
    x: "32",
    y: "64",
    width: "448",
    height: "80",
    rx: "16",
    ry: "16",
    style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"
  }), c("line", {
    x1: "312",
    y1: "240",
    x2: "200",
    y2: "352",
    style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"
  }), c("line", {
    x1: "312",
    y1: "352",
    x2: "200",
    y2: "240",
    style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"
  }))),
  pu = Xe("download", c("svg", {
    viewBox: "0 0 16 16",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, c("g", {
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  }, c("g", {
    fill: "currentColor",
    "fill-rule": "nonzero"
  }, c("path", {
    d: "M3.5,13 L12.5,13 C12.7761424,13 13,13.2238576 13,13.5 C13,13.7454599 12.8231248,13.9496084 12.5898756,13.9919443 L12.5,14 L3.5,14 C3.22385763,14 3,13.7761424 3,13.5 C3,13.2545401 3.17687516,13.0503916 3.41012437,13.0080557 L3.5,13 L12.5,13 L3.5,13 Z M7.91012437,1.00805567 L8,1 C8.24545989,1 8.44960837,1.17687516 8.49194433,1.41012437 L8.5,1.5 L8.5,10.292 L11.1819805,7.6109127 C11.3555469,7.43734635 11.6249713,7.4180612 11.8198394,7.55305725 L11.8890873,7.6109127 C12.0626536,7.78447906 12.0819388,8.05390346 11.9469427,8.2487716 L11.8890873,8.31801948 L8.35355339,11.8535534 C8.17998704,12.0271197 7.91056264,12.0464049 7.7156945,11.9114088 L7.64644661,11.8535534 L4.1109127,8.31801948 C3.91565056,8.12275734 3.91565056,7.80617485 4.1109127,7.6109127 C4.28447906,7.43734635 4.55390346,7.4180612 4.7487716,7.55305725 L4.81801948,7.6109127 L7.5,10.292 L7.5,1.5 C7.5,1.25454011 7.67687516,1.05039163 7.91012437,1.00805567 L8,1 L7.91012437,1.00805567 Z"
  }))))),
  vu = q({
    name: "Empty",
    render() {
      return c("svg", {
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, c("path", {
        d: "M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",
        fill: "currentColor"
      }), c("path", {
        d: "M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",
        fill: "currentColor"
      }))
    }
  }),
  gu = Xe("cancel", c("svg", {
    viewBox: "0 0 16 16",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, c("g", {
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  }, c("g", {
    fill: "currentColor",
    "fill-rule": "nonzero"
  }, c("path", {
    d: "M2.58859116,2.7156945 L2.64644661,2.64644661 C2.82001296,2.47288026 3.08943736,2.45359511 3.2843055,2.58859116 L3.35355339,2.64644661 L8,7.293 L12.6464466,2.64644661 C12.8417088,2.45118446 13.1582912,2.45118446 13.3535534,2.64644661 C13.5488155,2.84170876 13.5488155,3.15829124 13.3535534,3.35355339 L8.707,8 L13.3535534,12.6464466 C13.5271197,12.820013 13.5464049,13.0894374 13.4114088,13.2843055 L13.3535534,13.3535534 C13.179987,13.5271197 12.9105626,13.5464049 12.7156945,13.4114088 L12.6464466,13.3535534 L8,8.707 L3.35355339,13.3535534 C3.15829124,13.5488155 2.84170876,13.5488155 2.64644661,13.3535534 C2.45118446,13.1582912 2.45118446,12.8417088 2.64644661,12.6464466 L7.293,8 L2.64644661,3.35355339 C2.47288026,3.17998704 2.45359511,2.91056264 2.58859116,2.7156945 L2.64644661,2.64644661 L2.58859116,2.7156945 Z"
  }))))),
  mu = q({
    name: "ChevronDown",
    render() {
      return c("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, c("path", {
        d: "M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",
        fill: "currentColor"
      }))
    }
  }),
  bu = Xe("clear", c("svg", {
    viewBox: "0 0 16 16",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, c("g", {
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  }, c("g", {
    fill: "currentColor",
    "fill-rule": "nonzero"
  }, c("path", {
    d: "M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"
  }))))),
  yu = Xe("retry", c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, c("path", {
    d: "M320,146s24.36-12-64-12A160,160,0,1,0,416,294",
    style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 32px;"
  }), c("polyline", {
    points: "256 58 336 138 256 218",
    style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"
  }))),
  wu = Xe("rotateClockwise", c("svg", {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c("path", {
    d: "M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z",
    fill: "currentColor"
  }), c("path", {
    d: "M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z",
    fill: "currentColor"
  }))),
  xu = Xe("rotateClockwise", c("svg", {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c("path", {
    d: "M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z",
    fill: "currentColor"
  }), c("path", {
    d: "M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z",
    fill: "currentColor"
  }))),
  Cu = Xe("zoomIn", c("svg", {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c("path", {
    d: "M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z",
    fill: "currentColor"
  }), c("path", {
    d: "M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z",
    fill: "currentColor"
  }))),
  Su = Xe("zoomOut", c("svg", {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c("path", {
    d: "M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z",
    fill: "currentColor"
  }), c("path", {
    d: "M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z",
    fill: "currentColor"
  }))),
  ku = q({
    name: "ResizeSmall",
    render() {
      return c("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20"
      }, c("g", {
        fill: "none"
      }, c("path", {
        d: "M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z",
        fill: "currentColor"
      })))
    }
  });

function Yo(e) {
  return Array.isArray(e) ? e : [e]
}
const Mr = {
  STOP: "STOP"
};

function ai(e, t) {
  const r = t(e);
  e.children !== void 0 && r !== Mr.STOP && e.children.forEach(o => ai(o, t))
}

function Pu(e, t = {}) {
  const {
    preserveGroup: r = !1
  } = t, o = [], n = r ? l => {
    l.isLeaf || (o.push(l.key), i(l.children))
  } : l => {
    l.isLeaf || (l.isGroup || o.push(l.key), i(l.children))
  };

  function i(l) {
    l.forEach(n)
  }
  return i(e), o
}

function $u(e, t) {
  const {
    isLeaf: r
  } = e;
  return r !== void 0 ? r : !t(e)
}

function zu(e) {
  return e.children
}

function Tu(e) {
  return e.key
}

function Iu() {
  return !1
}

function _u(e, t) {
  const {
    isLeaf: r
  } = e;
  return !(r === !1 && !Array.isArray(t(e)))
}

function Ru(e) {
  return e.disabled === !0
}

function Mu(e, t) {
  return e.isLeaf === !1 && !Array.isArray(t(e))
}

function gr(e) {
  var t;
  return e == null ? [] : Array.isArray(e) ? e : (t = e.checkedKeys) !== null && t !== void 0 ? t : []
}

function mr(e) {
  var t;
  return e == null || Array.isArray(e) ? [] : (t = e.indeterminateKeys) !== null && t !== void 0 ? t : []
}

function Ou(e, t) {
  const r = new Set(e);
  return t.forEach(o => {
    r.has(o) || r.add(o)
  }), Array.from(r)
}

function Bu(e, t) {
  const r = new Set(e);
  return t.forEach(o => {
    r.has(o) && r.delete(o)
  }), Array.from(r)
}

function Lu(e) {
  return (e == null ? void 0 : e.type) === "group"
}
class Eu extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."
  }
}

function Au(e, t, r, o) {
  return Qt(t.concat(e), r, o, !1)
}

function Du(e, t) {
  const r = new Set;
  return e.forEach(o => {
    const n = t.treeNodeMap.get(o);
    if (n !== void 0) {
      let i = n.parent;
      for (; i !== null && !(i.disabled || r.has(i.key));) r.add(i.key), i = i.parent
    }
  }), r
}

function Fu(e, t, r, o) {
  const n = Qt(t, r, o, !1),
    i = Qt(e, r, o, !0),
    l = Du(e, r),
    d = [];
  return n.forEach(a => {
    (i.has(a) || l.has(a)) && d.push(a)
  }), d.forEach(a => n.delete(a)), n
}

function br(e, t) {
  const {
    checkedKeys: r,
    keysToCheck: o,
    keysToUncheck: n,
    indeterminateKeys: i,
    cascade: l,
    leafOnly: d,
    checkStrategy: a,
    allowNotLoaded: s
  } = e;
  if (!l) return o !== void 0 ? {
    checkedKeys: Ou(r, o),
    indeterminateKeys: Array.from(i)
  } : n !== void 0 ? {
    checkedKeys: Bu(r, n),
    indeterminateKeys: Array.from(i)
  } : {
    checkedKeys: Array.from(r),
    indeterminateKeys: Array.from(i)
  };
  const {
    levelTreeNodeMap: u
  } = t;
  let f;
  n !== void 0 ? f = Fu(n, r, t, s) : o !== void 0 ? f = Au(o, r, t, s) : f = Qt(r, t, s, !1);
  const h = a === "parent",
    p = a === "child" || d,
    v = f,
    y = new Set,
    w = Math.max.apply(null, Array.from(u.keys()));
  for (let x = w; x >= 0; x -= 1) {
    const P = x === 0,
      k = u.get(x);
    for (const b of k) {
      if (b.isLeaf) continue;
      const {
        key: m,
        shallowLoaded: R
      } = b;
      if (p && R && b.children.forEach(_ => {
          !_.disabled && !_.isLeaf && _.shallowLoaded && v.has(_.key) && v.delete(_.key)
        }), b.disabled || !R) continue;
      let z = !0,
        A = !1,
        $ = !0;
      for (const _ of b.children) {
        const K = _.key;
        if (!_.disabled) {
          if ($ && ($ = !1), v.has(K)) A = !0;
          else if (y.has(K)) {
            A = !0, z = !1;
            break
          } else if (z = !1, A) break
        }
      }
      z && !$ ? (h && b.children.forEach(_ => {
        !_.disabled && v.has(_.key) && v.delete(_.key)
      }), v.add(m)) : A && y.add(m), P && p && v.has(m) && v.delete(m)
    }
  }
  return {
    checkedKeys: Array.from(v),
    indeterminateKeys: Array.from(y)
  }
}

function Qt(e, t, r, o) {
  const {
    treeNodeMap: n,
    getChildren: i
  } = t, l = new Set, d = new Set(e);
  return e.forEach(a => {
    const s = n.get(a);
    s !== void 0 && ai(s, u => {
      if (u.disabled) return Mr.STOP;
      const {
        key: f
      } = u;
      if (!l.has(f) && (l.add(f), d.add(f), Mu(u.rawNode, i))) {
        if (o) return Mr.STOP;
        if (!r) throw new Eu
      }
    })
  }), d
}

function Nu(e, {
  includeGroup: t = !1,
  includeSelf: r = !0
}, o) {
  var n;
  const i = o.treeNodeMap;
  let l = e == null ? null : (n = i.get(e)) !== null && n !== void 0 ? n : null;
  const d = {
    keyPath: [],
    treeNodePath: [],
    treeNode: l
  };
  if (l != null && l.ignored) return d.treeNode = null, d;
  for (; l;) !l.ignored && (t || !l.isGroup) && d.treeNodePath.push(l), l = l.parent;
  return d.treeNodePath.reverse(), r || d.treeNodePath.pop(), d.keyPath = d.treeNodePath.map(a => a.key), d
}

function Hu(e) {
  if (e.length === 0) return null;
  const t = e[0];
  return t.isGroup || t.ignored || t.disabled ? t.getNext() : t
}

function ju(e, t) {
  const r = e.siblings,
    o = r.length,
    {
      index: n
    } = e;
  return t ? r[(n + 1) % o] : n === r.length - 1 ? null : r[n + 1]
}

function Zo(e, t, {
  loop: r = !1,
  includeDisabled: o = !1
} = {}) {
  const n = t === "prev" ? Uu : ju,
    i = {
      reverse: t === "prev"
    };
  let l = !1,
    d = null;

  function a(s) {
    if (s !== null) {
      if (s === e) {
        if (!l) l = !0;
        else if (!e.disabled && !e.isGroup) {
          d = e;
          return
        }
      } else if ((!s.disabled || o) && !s.ignored && !s.isGroup) {
        d = s;
        return
      }
      if (s.isGroup) {
        const u = oo(s, i);
        u !== null ? d = u : a(n(s, r))
      } else {
        const u = n(s, !1);
        if (u !== null) a(u);
        else {
          const f = Wu(s);
          f != null && f.isGroup ? a(n(f, r)) : r && a(n(s, !0))
        }
      }
    }
  }
  return a(e), d
}

function Uu(e, t) {
  const r = e.siblings,
    o = r.length,
    {
      index: n
    } = e;
  return t ? r[(n - 1 + o) % o] : n === 0 ? null : r[n - 1]
}

function Wu(e) {
  return e.parent
}

function oo(e, t = {}) {
  const {
    reverse: r = !1
  } = t, {
    children: o
  } = e;
  if (o) {
    const {
      length: n
    } = o, i = r ? n - 1 : 0, l = r ? -1 : n, d = r ? -1 : 1;
    for (let a = i; a !== l; a += d) {
      const s = o[a];
      if (!s.disabled && !s.ignored)
        if (s.isGroup) {
          const u = oo(s, t);
          if (u !== null) return u
        } else return s
    }
  }
  return null
}
const Vu = {
  getChild() {
    return this.ignored ? null : oo(this)
  },
  getParent() {
    const {
      parent: e
    } = this;
    return e != null && e.isGroup ? e.getParent() : e
  },
  getNext(e = {}) {
    return Zo(this, "next", e)
  },
  getPrev(e = {}) {
    return Zo(this, "prev", e)
  }
};

function Ku(e, t) {
  const r = t ? new Set(t) : void 0,
    o = [];

  function n(i) {
    i.forEach(l => {
      o.push(l), !(l.isLeaf || !l.children || l.ignored) && (l.isGroup || r === void 0 || r.has(l.key)) && n(l.children)
    })
  }
  return n(e), o
}

function qu(e, t) {
  const r = e.key;
  for (; t;) {
    if (t.key === r) return !0;
    t = t.parent
  }
  return !1
}

function li(e, t, r, o, n, i = null, l = 0) {
  const d = [];
  return e.forEach((a, s) => {
    var u;
    const f = Object.create(o);
    if (f.rawNode = a, f.siblings = d, f.level = l, f.index = s, f.isFirstChild = s === 0, f.isLastChild = s + 1 === e.length, f.parent = i, !f.ignored) {
      const h = n(a);
      Array.isArray(h) && (f.children = li(h, t, r, o, n, f, l + 1))
    }
    d.push(f), t.set(f.key, f), r.has(l) || r.set(l, []), (u = r.get(l)) === null || u === void 0 || u.push(f)
  }), d
}

function Gu(e, t = {}) {
  var r;
  const o = new Map,
    n = new Map,
    {
      getDisabled: i = Ru,
      getIgnored: l = Iu,
      getIsGroup: d = Lu,
      getKey: a = Tu
    } = t,
    s = (r = t.getChildren) !== null && r !== void 0 ? r : zu,
    u = t.ignoreEmptyChildren ? b => {
      const m = s(b);
      return Array.isArray(m) ? m.length ? m : null : m
    } : s,
    f = Object.assign({
      get key() {
        return a(this.rawNode)
      },
      get disabled() {
        return i(this.rawNode)
      },
      get isGroup() {
        return d(this.rawNode)
      },
      get isLeaf() {
        return $u(this.rawNode, u)
      },
      get shallowLoaded() {
        return _u(this.rawNode, u)
      },
      get ignored() {
        return l(this.rawNode)
      },
      contains(b) {
        return qu(this, b)
      }
    }, Vu),
    h = li(e, o, n, f, u);

  function p(b) {
    if (b == null) return null;
    const m = o.get(b);
    return m && !m.isGroup && !m.ignored ? m : null
  }

  function v(b) {
    if (b == null) return null;
    const m = o.get(b);
    return m && !m.ignored ? m : null
  }

  function y(b, m) {
    const R = v(b);
    return R ? R.getPrev(m) : null
  }

  function w(b, m) {
    const R = v(b);
    return R ? R.getNext(m) : null
  }

  function x(b) {
    const m = v(b);
    return m ? m.getParent() : null
  }

  function P(b) {
    const m = v(b);
    return m ? m.getChild() : null
  }
  const k = {
    treeNodes: h,
    treeNodeMap: o,
    levelTreeNodeMap: n,
    maxLevel: Math.max(...n.keys()),
    getChildren: u,
    getFlattenedNodes(b) {
      return Ku(h, b)
    },
    getNode: p,
    getPrev: y,
    getNext: w,
    getParent: x,
    getChild: P,
    getFirstAvailableNode() {
      return Hu(h)
    },
    getPath(b, m = {}) {
      return Nu(b, m, k)
    },
    getCheckedKeys(b, m = {}) {
      const {
        cascade: R = !0,
        leafOnly: z = !1,
        checkStrategy: A = "all",
        allowNotLoaded: $ = !1
      } = m;
      return br({
        checkedKeys: gr(b),
        indeterminateKeys: mr(b),
        cascade: R,
        leafOnly: z,
        checkStrategy: A,
        allowNotLoaded: $
      }, k)
    },
    check(b, m, R = {}) {
      const {
        cascade: z = !0,
        leafOnly: A = !1,
        checkStrategy: $ = "all",
        allowNotLoaded: _ = !1
      } = R;
      return br({
        checkedKeys: gr(m),
        indeterminateKeys: mr(m),
        keysToCheck: b == null ? [] : Yo(b),
        cascade: z,
        leafOnly: A,
        checkStrategy: $,
        allowNotLoaded: _
      }, k)
    },
    uncheck(b, m, R = {}) {
      const {
        cascade: z = !0,
        leafOnly: A = !1,
        checkStrategy: $ = "all",
        allowNotLoaded: _ = !1
      } = R;
      return br({
        checkedKeys: gr(m),
        indeterminateKeys: mr(m),
        keysToUncheck: b == null ? [] : Yo(b),
        cascade: z,
        leafOnly: A,
        checkStrategy: $,
        allowNotLoaded: _
      }, k)
    },
    getNonLeafKeys(b = {}) {
      return Pu(h, b)
    }
  };
  return k
}
const Xu = {
    iconSizeSmall: "34px",
    iconSizeMedium: "40px",
    iconSizeLarge: "46px",
    iconSizeHuge: "52px"
  },
  Yu = e => {
    const {
      textColorDisabled: t,
      iconColor: r,
      textColor2: o,
      fontSizeSmall: n,
      fontSizeMedium: i,
      fontSizeLarge: l,
      fontSizeHuge: d
    } = e;
    return Object.assign(Object.assign({}, Xu), {
      fontSizeSmall: n,
      fontSizeMedium: i,
      fontSizeLarge: l,
      fontSizeHuge: d,
      textColor: t,
      iconColor: r,
      extraTextColor: o
    })
  },
  Zu = {
    name: "Empty",
    common: Be,
    self: Yu
  },
  Ju = Zu,
  Qu = S("empty", `
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`, [B("icon", `
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `, [L("+", [B("description", `
 margin-top: 8px;
 `)])]), B("description", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), B("extra", `
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),
  ef = Object.assign(Object.assign({}, ae.props), {
    description: String,
    showDescription: {
      type: Boolean,
      default: !0
    },
    showIcon: {
      type: Boolean,
      default: !0
    },
    size: {
      type: String,
      default: "medium"
    },
    renderIcon: Function
  }),
  no = q({
    name: "Empty",
    props: ef,
    setup(e) {
      const {
        mergedClsPrefixRef: t,
        inlineThemeDisabled: r
      } = Re(e), o = ae("Empty", "-empty", Qu, Ju, e, t), {
        localeRef: n
      } = ro("Empty"), i = ue(bn, null), l = D(() => {
        var u, f, h;
        return (u = e.description) !== null && u !== void 0 ? u : (h = (f = i == null ? void 0 : i.mergedComponentPropsRef.value) === null || f === void 0 ? void 0 : f.Empty) === null || h === void 0 ? void 0 : h.description
      }), d = D(() => {
        var u, f;
        return ((f = (u = i == null ? void 0 : i.mergedComponentPropsRef.value) === null || u === void 0 ? void 0 : u.Empty) === null || f === void 0 ? void 0 : f.renderIcon) || (() => c(vu, null))
      }), a = D(() => {
        const {
          size: u
        } = e, {
          common: {
            cubicBezierEaseInOut: f
          },
          self: {
            [ie("iconSize", u)]: h,
            [ie("fontSize", u)]: p,
            textColor: v,
            iconColor: y,
            extraTextColor: w
          }
        } = o.value;
        return {
          "--n-icon-size": h,
          "--n-font-size": p,
          "--n-bezier": f,
          "--n-text-color": v,
          "--n-icon-color": y,
          "--n-extra-text-color": w
        }
      }), s = r ? Fe("empty", D(() => {
        let u = "";
        const {
          size: f
        } = e;
        return u += f[0], u
      }), a, e) : void 0;
      return {
        mergedClsPrefix: t,
        mergedRenderIcon: d,
        localizedDescription: D(() => l.value || n.value.description),
        cssVars: r ? void 0 : a,
        themeClass: s == null ? void 0 : s.themeClass,
        onRender: s == null ? void 0 : s.onRender
      }
    },
    render() {
      const {
        $slots: e,
        mergedClsPrefix: t,
        onRender: r
      } = this;
      return r == null || r(), c("div", {
        class: [`${t}-empty`, this.themeClass],
        style: this.cssVars
      }, this.showIcon ? c("div", {
        class: `${t}-empty__icon`
      }, e.icon ? e.icon() : c(pe, {
        clsPrefix: t
      }, {
        default: this.mergedRenderIcon
      })) : null, this.showDescription ? c("div", {
        class: `${t}-empty__description`
      }, e.default ? e.default() : this.localizedDescription) : null, e.extra ? c("div", {
        class: `${t}-empty__extra`
      }, e.extra()) : null)
    }
  }),
  tf = {
    space: "6px",
    spaceArrow: "10px",
    arrowOffset: "10px",
    arrowOffsetVertical: "10px",
    arrowHeight: "6px",
    padding: "8px 14px"
  },
  rf = e => {
    const {
      boxShadow2: t,
      popoverColor: r,
      textColor2: o,
      borderRadius: n,
      fontSize: i,
      dividerColor: l
    } = e;
    return Object.assign(Object.assign({}, tf), {
      fontSize: i,
      borderRadius: n,
      color: r,
      dividerColor: l,
      textColor: o,
      boxShadow: t
    })
  },
  of = {
    name: "Popover",
    common: Be,
    self: rf
  },
  io = of ,
  yr = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left"
  },
  Pe = "var(--n-arrow-height) * 1.414",
  nf = L([S("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [L(">", [S("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), ze("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [ze("scrollable", [ze("show-header-or-footer", "padding: var(--n-padding);")])]), B("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), B("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), j("scrollable, show-header-or-footer", [B("content", `
 padding: var(--n-padding);
 `)])]), S("popover-shared", `
 transform-origin: inherit;
 `, [S("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [S("popover-arrow", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${Pe});
 height: calc(${Pe});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]), L("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `), L("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `), L("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `), L("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]), je("top-start", `
 top: calc(${Pe} / -2);
 left: calc(${Ye("top-start")} - var(--v-offset-left));
 `), je("top", `
 top: calc(${Pe} / -2);
 transform: translateX(calc(${Pe} / -2)) rotate(45deg);
 left: 50%;
 `), je("top-end", `
 top: calc(${Pe} / -2);
 right: calc(${Ye("top-end")} + var(--v-offset-left));
 `), je("bottom-start", `
 bottom: calc(${Pe} / -2);
 left: calc(${Ye("bottom-start")} - var(--v-offset-left));
 `), je("bottom", `
 bottom: calc(${Pe} / -2);
 transform: translateX(calc(${Pe} / -2)) rotate(45deg);
 left: 50%;
 `), je("bottom-end", `
 bottom: calc(${Pe} / -2);
 right: calc(${Ye("bottom-end")} + var(--v-offset-left));
 `), je("left-start", `
 left: calc(${Pe} / -2);
 top: calc(${Ye("left-start")} - var(--v-offset-top));
 `), je("left", `
 left: calc(${Pe} / -2);
 transform: translateY(calc(${Pe} / -2)) rotate(45deg);
 top: 50%;
 `), je("left-end", `
 left: calc(${Pe} / -2);
 bottom: calc(${Ye("left-end")} + var(--v-offset-top));
 `), je("right-start", `
 right: calc(${Pe} / -2);
 top: calc(${Ye("right-start")} - var(--v-offset-top));
 `), je("right", `
 right: calc(${Pe} / -2);
 transform: translateY(calc(${Pe} / -2)) rotate(45deg);
 top: 50%;
 `), je("right-end", `
 right: calc(${Pe} / -2);
 bottom: calc(${Ye("right-end")} + var(--v-offset-top));
 `), ...mc({
    top: ["right-start", "left-start"],
    right: ["top-end", "bottom-end"],
    bottom: ["right-end", "left-end"],
    left: ["top-start", "bottom-start"]
  }, (e, t) => {
    const r = ["right", "left"].includes(t),
      o = r ? "width" : "height";
    return e.map(n => {
      const i = n.split("-")[1] === "end",
        d = `calc((${`var(--v-target-${o}, 0px)`} - ${Pe}) / 2)`,
        a = Ye(n);
      return L(`[v-placement="${n}"] >`, [S("popover-shared", [j("center-arrow", [S("popover-arrow", `${t}: calc(max(${d}, ${a}) ${i?"+":"-"} var(--v-offset-${r?"left":"top"}));`)])])])
    })
  })]);

function Ye(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)"
}

function je(e, t) {
  const r = e.split("-")[0],
    o = ["top", "bottom"].includes(r) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return L(`[v-placement="${e}"] >`, [S("popover-shared", `
 margin-${yr[r]}: var(--n-space);
 `, [j("show-arrow", `
 margin-${yr[r]}: var(--n-space-arrow);
 `), j("overlap", `
 margin: 0;
 `), il("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${r}: 100%;
 ${yr[r]}: auto;
 ${o}
 `, [S("popover-arrow", t)])])])
}
const si = Object.assign(Object.assign({}, ae.props), {
    to: Ct.propTo,
    show: Boolean,
    trigger: String,
    showArrow: Boolean,
    delay: Number,
    duration: Number,
    raw: Boolean,
    arrowPointToCenter: Boolean,
    arrowStyle: [String, Object],
    displayDirective: String,
    x: Number,
    y: Number,
    flip: Boolean,
    overlap: Boolean,
    placement: String,
    width: [Number, String],
    keepAliveOnHover: Boolean,
    scrollable: Boolean,
    contentStyle: [Object, String],
    headerStyle: [Object, String],
    footerStyle: [Object, String],
    internalDeactivateImmediately: Boolean,
    animated: Boolean,
    onClickoutside: Function,
    internalTrapFocus: Boolean,
    internalOnAfterLeave: Function,
    minWidth: Number,
    maxWidth: Number
  }),
  di = ({
    arrowStyle: e,
    clsPrefix: t
  }) => c("div", {
    key: "__popover-arrow__",
    class: `${t}-popover-arrow-wrapper`
  }, c("div", {
    class: `${t}-popover-arrow`,
    style: e
  })),
  af = q({
    name: "PopoverBody",
    inheritAttrs: !1,
    props: si,
    setup(e, {
      slots: t,
      attrs: r
    }) {
      const {
        namespaceRef: o,
        mergedClsPrefixRef: n,
        inlineThemeDisabled: i
      } = Re(e), l = ae("Popover", "-popover", nf, io, e, n), d = O(null), a = ue("NPopover"), s = O(null), u = O(e.show), f = O(!1);
      ft(() => {
        const {
          show: z
        } = e;
        z && !Rl() && !e.internalDeactivateImmediately && (f.value = !0)
      });
      const h = D(() => {
          const {
            trigger: z,
            onClickoutside: A
          } = e, $ = [], {
            positionManuallyRef: {
              value: _
            }
          } = a;
          return _ || (z === "click" && !A && $.push([xo, b, void 0, {
            capture: !0
          }]), z === "hover" && $.push([jl, k])), A && $.push([xo, b, void 0, {
            capture: !0
          }]), (e.displayDirective === "show" || e.animated && f.value) && $.push([yn, e.show]), $
        }),
        p = D(() => {
          const z = e.width === "trigger" ? void 0 : qe(e.width),
            A = [];
          z && A.push({
            width: z
          });
          const {
            maxWidth: $,
            minWidth: _
          } = e;
          return $ && A.push({
            maxWidth: qe($)
          }), _ && A.push({
            maxWidth: qe(_)
          }), i || A.push(v.value), A
        }),
        v = D(() => {
          const {
            common: {
              cubicBezierEaseInOut: z,
              cubicBezierEaseIn: A,
              cubicBezierEaseOut: $
            },
            self: {
              space: _,
              spaceArrow: K,
              padding: F,
              fontSize: M,
              textColor: C,
              dividerColor: T,
              color: H,
              boxShadow: N,
              borderRadius: Y,
              arrowHeight: re,
              arrowOffset: ve,
              arrowOffsetVertical: Ce
            }
          } = l.value;
          return {
            "--n-box-shadow": N,
            "--n-bezier": z,
            "--n-bezier-ease-in": A,
            "--n-bezier-ease-out": $,
            "--n-font-size": M,
            "--n-text-color": C,
            "--n-color": H,
            "--n-divider-color": T,
            "--n-border-radius": Y,
            "--n-arrow-height": re,
            "--n-arrow-offset": ve,
            "--n-arrow-offset-vertical": Ce,
            "--n-padding": F,
            "--n-space": _,
            "--n-space-arrow": K
          }
        }),
        y = i ? Fe("popover", void 0, v, e) : void 0;
      a.setBodyInstance({
        syncPosition: w
      }), nt(() => {
        a.setBodyInstance(null)
      }), Te(ee(e, "show"), z => {
        e.animated || (z ? u.value = !0 : u.value = !1)
      });

      function w() {
        var z;
        (z = d.value) === null || z === void 0 || z.syncPosition()
      }

      function x(z) {
        e.trigger === "hover" && e.keepAliveOnHover && e.show && a.handleMouseEnter(z)
      }

      function P(z) {
        e.trigger === "hover" && e.keepAliveOnHover && a.handleMouseLeave(z)
      }

      function k(z) {
        e.trigger === "hover" && !m().contains(Co(z)) && a.handleMouseMoveOutside(z)
      }

      function b(z) {
        (e.trigger === "click" && !m().contains(Co(z)) || e.onClickoutside) && a.handleClickOutside(z)
      }

      function m() {
        return a.getTriggerElement()
      }
      _e(tr, s), _e(Dr, null), _e(Ar, null);

      function R() {
        if (y == null || y.onRender(), !(e.displayDirective === "show" || e.show || e.animated && f.value)) return null;
        let A;
        const $ = a.internalRenderBodyRef.value,
          {
            value: _
          } = n;
        if ($) A = $([`${_}-popover-shared`, y == null ? void 0 : y.themeClass.value, e.overlap && `${_}-popover-shared--overlap`, e.showArrow && `${_}-popover-shared--show-arrow`, e.arrowPointToCenter && `${_}-popover-shared--center-arrow`], s, p.value, x, P);
        else {
          const {
            value: K
          } = a.extraClassRef, {
            internalTrapFocus: F
          } = e, M = !So(t.header) || !So(t.footer), C = () => {
            var T;
            const H = M ? c(Ve, null, Ze(t.header, re => re ? c("div", {
                class: `${_}-popover__header`,
                style: e.headerStyle
              }, re) : null), Ze(t.default, re => re ? c("div", {
                class: `${_}-popover__content`,
                style: e.contentStyle
              }, t) : null), Ze(t.footer, re => re ? c("div", {
                class: `${_}-popover__footer`,
                style: e.footerStyle
              }, re) : null)) : e.scrollable ? (T = t.default) === null || T === void 0 ? void 0 : T.call(t) : c("div", {
                class: `${_}-popover__content`,
                style: e.contentStyle
              }, t),
              N = e.scrollable ? c(wn, {
                contentClass: M ? void 0 : `${_}-popover__content`,
                contentStyle: M ? void 0 : e.contentStyle
              }, {
                default: () => H
              }) : H,
              Y = e.showArrow ? di({
                arrowStyle: e.arrowStyle,
                clsPrefix: _
              }) : null;
            return [N, Y]
          };
          A = c("div", Lt({
            class: [`${_}-popover`, `${_}-popover-shared`, y == null ? void 0 : y.themeClass.value, K.map(T => `${_}-${T}`), {
              [`${_}-popover--scrollable`]: e.scrollable,
              [`${_}-popover--show-header-or-footer`]: M,
              [`${_}-popover--raw`]: e.raw,
              [`${_}-popover-shared--overlap`]: e.overlap,
              [`${_}-popover-shared--show-arrow`]: e.showArrow,
              [`${_}-popover-shared--center-arrow`]: e.arrowPointToCenter
            }],
            ref: s,
            style: p.value,
            onKeydown: a.handleKeydown,
            onMouseenter: x,
            onMouseleave: P
          }, r), F ? c(al, {
            active: e.show,
            autoFocus: !0
          }, {
            default: C
          }) : C())
        }
        return xt(A, h.value)
      }
      return {
        displayed: f,
        namespace: o,
        isMounted: a.isMountedRef,
        zIndex: a.zIndexRef,
        followerRef: d,
        adjustedTo: Ct(e),
        followerEnabled: u,
        renderContentNode: R
      }
    },
    render() {
      return c(Nn, {
        ref: "followerRef",
        zIndex: this.zIndex,
        show: this.show,
        enabled: this.followerEnabled,
        to: this.adjustedTo,
        x: this.x,
        y: this.y,
        flip: this.flip,
        placement: this.placement,
        containerClass: this.namespace,
        overlap: this.overlap,
        width: this.width === "trigger" ? "target" : void 0,
        teleportDisabled: this.adjustedTo === Ct.tdkey
      }, {
        default: () => this.animated ? c(bt, {
          name: "popover-transition",
          appear: this.isMounted,
          onEnter: () => {
            this.followerEnabled = !0
          },
          onAfterLeave: () => {
            var e;
            (e = this.internalOnAfterLeave) === null || e === void 0 || e.call(this), this.followerEnabled = !1, this.displayed = !1
          }
        }, {
          default: this.renderContentNode
        }) : this.renderContentNode()
      })
    }
  }),
  lf = Object.keys(si),
  sf = {
    focus: ["onFocus", "onBlur"],
    click: ["onClick"],
    hover: ["onMouseenter", "onMouseleave"],
    manual: [],
    nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
  };

function df(e, t, r) {
  sf[t].forEach(o => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const n = e.props[o],
      i = r[o];
    n ? e.props[o] = (...l) => {
      n(...l), i(...l)
    } : e.props[o] = i
  })
}
const cf = se("").type,
  ar = {
    show: {
      type: Boolean,
      default: void 0
    },
    defaultShow: Boolean,
    showArrow: {
      type: Boolean,
      default: !0
    },
    trigger: {
      type: String,
      default: "hover"
    },
    delay: {
      type: Number,
      default: 100
    },
    duration: {
      type: Number,
      default: 100
    },
    raw: Boolean,
    placement: {
      type: String,
      default: "top"
    },
    x: Number,
    y: Number,
    arrowPointToCenter: Boolean,
    disabled: Boolean,
    getDisabled: Function,
    displayDirective: {
      type: String,
      default: "if"
    },
    arrowStyle: [String, Object],
    flip: {
      type: Boolean,
      default: !0
    },
    animated: {
      type: Boolean,
      default: !0
    },
    width: {
      type: [Number, String],
      default: void 0
    },
    overlap: Boolean,
    keepAliveOnHover: {
      type: Boolean,
      default: !0
    },
    zIndex: Number,
    to: Ct.propTo,
    scrollable: Boolean,
    contentStyle: [Object, String],
    headerStyle: [Object, String],
    footerStyle: [Object, String],
    onClickoutside: Function,
    "onUpdate:show": [Function, Array],
    onUpdateShow: [Function, Array],
    internalDeactivateImmediately: Boolean,
    internalSyncTargetWithParent: Boolean,
    internalInheritedEventHandlers: {
      type: Array,
      default: () => []
    },
    internalTrapFocus: Boolean,
    internalExtraClass: {
      type: Array,
      default: () => []
    },
    onShow: [Function, Array],
    onHide: [Function, Array],
    arrow: {
      type: Boolean,
      default: void 0
    },
    minWidth: Number,
    maxWidth: Number
  },
  uf = Object.assign(Object.assign(Object.assign({}, ae.props), ar), {
    internalOnAfterLeave: Function,
    internalRenderBody: Function
  }),
  ci = q({
    name: "Popover",
    inheritAttrs: !1,
    props: uf,
    __popover__: !0,
    setup(e) {
      const t = Nr(),
        r = O(null),
        o = D(() => e.show),
        n = O(e.defaultShow),
        i = nr(o, n),
        l = We(() => e.disabled ? !1 : i.value),
        d = () => {
          if (e.disabled) return !0;
          const {
            getDisabled: C
          } = e;
          return !!(C != null && C())
        },
        a = () => d() ? !1 : i.value,
        s = Ll(e, ["arrow", "showArrow"]),
        u = D(() => e.overlap ? !1 : s.value);
      let f = null;
      const h = O(null),
        p = O(null),
        v = We(() => e.x !== void 0 && e.y !== void 0);

      function y(C) {
        const {
          "onUpdate:show": T,
          onUpdateShow: H,
          onShow: N,
          onHide: Y
        } = e;
        n.value = C, T && me(T, C), H && me(H, C), C && N && me(N, !0), C && Y && me(Y, !1)
      }

      function w() {
        f && f.syncPosition()
      }

      function x() {
        const {
          value: C
        } = h;
        C && (window.clearTimeout(C), h.value = null)
      }

      function P() {
        const {
          value: C
        } = p;
        C && (window.clearTimeout(C), p.value = null)
      }

      function k() {
        const C = d();
        if (e.trigger === "focus" && !C) {
          if (a()) return;
          y(!0)
        }
      }

      function b() {
        const C = d();
        if (e.trigger === "focus" && !C) {
          if (!a()) return;
          y(!1)
        }
      }

      function m() {
        const C = d();
        if (e.trigger === "hover" && !C) {
          if (P(), h.value !== null || a()) return;
          const T = () => {
              y(!0), h.value = null
            },
            {
              delay: H
            } = e;
          H === 0 ? T() : h.value = window.setTimeout(T, H)
        }
      }

      function R() {
        const C = d();
        if (e.trigger === "hover" && !C) {
          if (x(), p.value !== null || !a()) return;
          const T = () => {
              y(!1), p.value = null
            },
            {
              duration: H
            } = e;
          H === 0 ? T() : p.value = window.setTimeout(T, H)
        }
      }

      function z() {
        R()
      }

      function A(C) {
        var T;
        a() && (e.trigger === "click" && (x(), P(), y(!1)), (T = e.onClickoutside) === null || T === void 0 || T.call(e, C))
      }

      function $() {
        if (e.trigger === "click" && !d()) {
          x(), P();
          const C = !a();
          y(C)
        }
      }

      function _(C) {
        e.internalTrapFocus && C.key === "Escape" && (x(), P(), y(!1))
      }

      function K(C) {
        n.value = C
      }

      function F() {
        var C;
        return (C = r.value) === null || C === void 0 ? void 0 : C.targetRef
      }

      function M(C) {
        f = C
      }
      return _e("NPopover", {
        getTriggerElement: F,
        handleKeydown: _,
        handleMouseEnter: m,
        handleMouseLeave: R,
        handleClickOutside: A,
        handleMouseMoveOutside: z,
        setBodyInstance: M,
        positionManuallyRef: v,
        isMountedRef: t,
        zIndexRef: ee(e, "zIndex"),
        extraClassRef: ee(e, "internalExtraClass"),
        internalRenderBodyRef: ee(e, "internalRenderBody")
      }), ft(() => {
        i.value && d() && y(!1)
      }), {
        binderInstRef: r,
        positionManually: v,
        mergedShowConsideringDisabledProp: l,
        uncontrolledShow: n,
        mergedShowArrow: u,
        getMergedShow: a,
        setShow: K,
        handleClick: $,
        handleMouseEnter: m,
        handleMouseLeave: R,
        handleFocus: k,
        handleBlur: b,
        syncPosition: w
      }
    },
    render() {
      var e;
      const {
        positionManually: t,
        $slots: r
      } = this;
      let o, n = !1;
      if (!t && (r.activator ? o = ko(r, "activator") : o = ko(r, "trigger"), o)) {
        o = ll(o), o = o.type === cf ? c("span", [o]) : o;
        const i = {
          onClick: this.handleClick,
          onMouseenter: this.handleMouseEnter,
          onMouseleave: this.handleMouseLeave,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        };
        if (!((e = o.type) === null || e === void 0) && e.__popover__) n = !0, o.props || (o.props = {
          internalSyncTargetWithParent: !0,
          internalInheritedEventHandlers: []
        }), o.props.internalSyncTargetWithParent = !0, o.props.internalInheritedEventHandlers ? o.props.internalInheritedEventHandlers = [i, ...o.props.internalInheritedEventHandlers] : o.props.internalInheritedEventHandlers = [i];
        else {
          const {
            internalInheritedEventHandlers: l
          } = this, d = [i, ...l], a = {
            onBlur: s => {
              d.forEach(u => {
                u.onBlur(s)
              })
            },
            onFocus: s => {
              d.forEach(u => {
                u.onFocus(s)
              })
            },
            onClick: s => {
              d.forEach(u => {
                u.onClick(s)
              })
            },
            onMouseenter: s => {
              d.forEach(u => {
                u.onMouseenter(s)
              })
            },
            onMouseleave: s => {
              d.forEach(u => {
                u.onMouseleave(s)
              })
            }
          };
          df(o, l ? "nested" : t ? "manual" : this.trigger, a)
        }
      }
      return c(Dn, {
        ref: "binderInstRef",
        syncTarget: !n,
        syncTargetWithParent: this.internalSyncTargetWithParent
      }, {
        default: () => {
          this.mergedShowConsideringDisabledProp;
          const i = this.getMergedShow();
          return [this.internalTrapFocus && i ? xt(c("div", {
            style: {
              position: "fixed",
              inset: 0
            }
          }), [
            [Hr, {
              enabled: i,
              zIndex: this.zIndex
            }]
          ]) : null, t ? null : c(Fn, null, {
            default: () => o
          }), c(af, xn(this.$props, lf, Object.assign(Object.assign({}, this.$attrs), {
            showArrow: this.mergedShowArrow,
            show: i
          })), {
            default: () => {
              var l, d;
              return (d = (l = this.$slots).default) === null || d === void 0 ? void 0 : d.call(l)
            },
            header: () => {
              var l, d;
              return (d = (l = this.$slots).header) === null || d === void 0 ? void 0 : d.call(l)
            },
            footer: () => {
              var l, d;
              return (d = (l = this.$slots).footer) === null || d === void 0 ? void 0 : d.call(l)
            }
          })]
        }
      })
    }
  }),
  ff = {
    closeIconSizeTiny: "12px",
    closeIconSizeSmall: "12px",
    closeIconSizeMedium: "14px",
    closeIconSizeLarge: "14px",
    closeSizeTiny: "16px",
    closeSizeSmall: "16px",
    closeSizeMedium: "18px",
    closeSizeLarge: "18px",
    padding: "0 7px",
    closeMargin: "0 0 0 4px",
    closeMarginRtl: "0 4px 0 0"
  },
  hf = e => {
    const {
      textColor2: t,
      primaryColorHover: r,
      primaryColorPressed: o,
      primaryColor: n,
      infoColor: i,
      successColor: l,
      warningColor: d,
      errorColor: a,
      baseColor: s,
      borderColor: u,
      opacityDisabled: f,
      tagColor: h,
      closeIconColor: p,
      closeIconColorHover: v,
      closeIconColorPressed: y,
      borderRadiusSmall: w,
      fontSizeMini: x,
      fontSizeTiny: P,
      fontSizeSmall: k,
      fontSizeMedium: b,
      heightMini: m,
      heightTiny: R,
      heightSmall: z,
      heightMedium: A,
      closeColorHover: $,
      closeColorPressed: _,
      buttonColor2Hover: K,
      buttonColor2Pressed: F,
      fontWeightStrong: M
    } = e;
    return Object.assign(Object.assign({}, ff), {
      closeBorderRadius: w,
      heightTiny: m,
      heightSmall: R,
      heightMedium: z,
      heightLarge: A,
      borderRadius: w,
      opacityDisabled: f,
      fontSizeTiny: x,
      fontSizeSmall: P,
      fontSizeMedium: k,
      fontSizeLarge: b,
      fontWeightStrong: M,
      textColorCheckable: t,
      textColorHoverCheckable: t,
      textColorPressedCheckable: t,
      textColorChecked: s,
      colorCheckable: "#0000",
      colorHoverCheckable: K,
      colorPressedCheckable: F,
      colorChecked: n,
      colorCheckedHover: r,
      colorCheckedPressed: o,
      border: `1px solid ${u}`,
      textColor: t,
      color: h,
      colorBordered: "rgb(250, 250, 252)",
      closeIconColor: p,
      closeIconColorHover: v,
      closeIconColorPressed: y,
      closeColorHover: $,
      closeColorPressed: _,
      borderPrimary: `1px solid ${le(n,{alpha:.3})}`,
      textColorPrimary: n,
      colorPrimary: le(n, {
        alpha: .12
      }),
      colorBorderedPrimary: le(n, {
        alpha: .1
      }),
      closeIconColorPrimary: n,
      closeIconColorHoverPrimary: n,
      closeIconColorPressedPrimary: n,
      closeColorHoverPrimary: le(n, {
        alpha: .12
      }),
      closeColorPressedPrimary: le(n, {
        alpha: .18
      }),
      borderInfo: `1px solid ${le(i,{alpha:.3})}`,
      textColorInfo: i,
      colorInfo: le(i, {
        alpha: .12
      }),
      colorBorderedInfo: le(i, {
        alpha: .1
      }),
      closeIconColorInfo: i,
      closeIconColorHoverInfo: i,
      closeIconColorPressedInfo: i,
      closeColorHoverInfo: le(i, {
        alpha: .12
      }),
      closeColorPressedInfo: le(i, {
        alpha: .18
      }),
      borderSuccess: `1px solid ${le(l,{alpha:.3})}`,
      textColorSuccess: l,
      colorSuccess: le(l, {
        alpha: .12
      }),
      colorBorderedSuccess: le(l, {
        alpha: .1
      }),
      closeIconColorSuccess: l,
      closeIconColorHoverSuccess: l,
      closeIconColorPressedSuccess: l,
      closeColorHoverSuccess: le(l, {
        alpha: .12
      }),
      closeColorPressedSuccess: le(l, {
        alpha: .18
      }),
      borderWarning: `1px solid ${le(d,{alpha:.35})}`,
      textColorWarning: d,
      colorWarning: le(d, {
        alpha: .15
      }),
      colorBorderedWarning: le(d, {
        alpha: .12
      }),
      closeIconColorWarning: d,
      closeIconColorHoverWarning: d,
      closeIconColorPressedWarning: d,
      closeColorHoverWarning: le(d, {
        alpha: .12
      }),
      closeColorPressedWarning: le(d, {
        alpha: .18
      }),
      borderError: `1px solid ${le(a,{alpha:.23})}`,
      textColorError: a,
      colorError: le(a, {
        alpha: .1
      }),
      colorBorderedError: le(a, {
        alpha: .08
      }),
      closeIconColorError: a,
      closeIconColorHoverError: a,
      closeIconColorPressedError: a,
      closeColorHoverError: le(a, {
        alpha: .12
      }),
      closeColorPressedError: le(a, {
        alpha: .18
      })
    })
  },
  pf = {
    name: "Tag",
    common: Be,
    self: hf
  },
  vf = pf,
  gf = {
    color: Object,
    type: {
      type: String,
      default: "default"
    },
    round: Boolean,
    size: {
      type: String,
      default: "medium"
    },
    closable: Boolean,
    disabled: {
      type: Boolean,
      default: void 0
    }
  },
  mf = S("tag", `
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`, [j("strong", `
 font-weight: var(--n-font-weight-strong);
 `), B("border", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `), B("icon", `
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `), B("avatar", `
 display: flex;
 margin: 0 6px 0 0;
 `), B("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), j("round", `
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `, [B("icon", `
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `), B("avatar", `
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `), j("closable", `
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]), j("icon, avatar", [j("round", `
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]), j("disabled", `
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `), j("checkable", `
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `, [ze("disabled", [L("&:hover", "background-color: var(--n-color-hover-checkable);", [ze("checked", "color: var(--n-text-color-hover-checkable);")]), L("&:active", "background-color: var(--n-color-pressed-checkable);", [ze("checked", "color: var(--n-text-color-pressed-checkable);")])]), j("checked", `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [ze("disabled", [L("&:hover", "background-color: var(--n-color-checked-hover);"), L("&:active", "background-color: var(--n-color-checked-pressed);")])])])]),
  bf = Object.assign(Object.assign(Object.assign({}, ae.props), gf), {
    bordered: {
      type: Boolean,
      default: void 0
    },
    checked: Boolean,
    checkable: Boolean,
    strong: Boolean,
    triggerClickOnClose: Boolean,
    onClose: [Array, Function],
    onMouseenter: Function,
    onMouseleave: Function,
    "onUpdate:checked": Function,
    onUpdateChecked: Function,
    internalCloseFocusable: {
      type: Boolean,
      default: !0
    },
    internalCloseIsButtonTag: {
      type: Boolean,
      default: !0
    },
    onCheckedChange: Function
  }),
  yf = Ge("n-tag"),
  er = q({
    name: "Tag",
    props: bf,
    setup(e) {
      const t = O(null),
        {
          mergedBorderedRef: r,
          mergedClsPrefixRef: o,
          inlineThemeDisabled: n,
          mergedRtlRef: i
        } = Re(e),
        l = ae("Tag", "-tag", mf, vf, e, o);
      _e(yf, {
        roundRef: ee(e, "round")
      });

      function d(p) {
        if (!e.disabled && e.checkable) {
          const {
            checked: v,
            onCheckedChange: y,
            onUpdateChecked: w,
            "onUpdate:checked": x
          } = e;
          w && w(!v), x && x(!v), y && y(!v)
        }
      }

      function a(p) {
        if (e.triggerClickOnClose || p.stopPropagation(), !e.disabled) {
          const {
            onClose: v
          } = e;
          v && me(v, p)
        }
      }
      const s = {
          setTextContent(p) {
            const {
              value: v
            } = t;
            v && (v.textContent = p)
          }
        },
        u = kt("Tag", i, o),
        f = D(() => {
          const {
            type: p,
            size: v,
            color: {
              color: y,
              textColor: w
            } = {}
          } = e, {
            common: {
              cubicBezierEaseInOut: x
            },
            self: {
              padding: P,
              closeMargin: k,
              closeMarginRtl: b,
              borderRadius: m,
              opacityDisabled: R,
              textColorCheckable: z,
              textColorHoverCheckable: A,
              textColorPressedCheckable: $,
              textColorChecked: _,
              colorCheckable: K,
              colorHoverCheckable: F,
              colorPressedCheckable: M,
              colorChecked: C,
              colorCheckedHover: T,
              colorCheckedPressed: H,
              closeBorderRadius: N,
              fontWeightStrong: Y,
              [ie("colorBordered", p)]: re,
              [ie("closeSize", v)]: ve,
              [ie("closeIconSize", v)]: Ce,
              [ie("fontSize", v)]: W,
              [ie("height", v)]: oe,
              [ie("color", p)]: Q,
              [ie("textColor", p)]: we,
              [ie("border", p)]: ye,
              [ie("closeIconColor", p)]: ne,
              [ie("closeIconColorHover", p)]: Le,
              [ie("closeIconColorPressed", p)]: Ne,
              [ie("closeColorHover", p)]: He,
              [ie("closeColorPressed", p)]: Ee
            }
          } = l.value;
          return {
            "--n-font-weight-strong": Y,
            "--n-avatar-size-override": `calc(${oe} - 8px)`,
            "--n-bezier": x,
            "--n-border-radius": m,
            "--n-border": ye,
            "--n-close-icon-size": Ce,
            "--n-close-color-pressed": Ee,
            "--n-close-color-hover": He,
            "--n-close-border-radius": N,
            "--n-close-icon-color": ne,
            "--n-close-icon-color-hover": Le,
            "--n-close-icon-color-pressed": Ne,
            "--n-close-icon-color-disabled": ne,
            "--n-close-margin": k,
            "--n-close-margin-rtl": b,
            "--n-close-size": ve,
            "--n-color": y || (r.value ? re : Q),
            "--n-color-checkable": K,
            "--n-color-checked": C,
            "--n-color-checked-hover": T,
            "--n-color-checked-pressed": H,
            "--n-color-hover-checkable": F,
            "--n-color-pressed-checkable": M,
            "--n-font-size": W,
            "--n-height": oe,
            "--n-opacity-disabled": R,
            "--n-padding": P,
            "--n-text-color": w || we,
            "--n-text-color-checkable": z,
            "--n-text-color-checked": _,
            "--n-text-color-hover-checkable": A,
            "--n-text-color-pressed-checkable": $
          }
        }),
        h = n ? Fe("tag", D(() => {
          let p = "";
          const {
            type: v,
            size: y,
            color: {
              color: w,
              textColor: x
            } = {}
          } = e;
          return p += v[0], p += y[0], w && (p += `a${Po(w)}`), x && (p += `b${Po(x)}`), r.value && (p += "c"), p
        }), f, e) : void 0;
      return Object.assign(Object.assign({}, s), {
        rtlEnabled: u,
        mergedClsPrefix: o,
        contentRef: t,
        mergedBordered: r,
        handleClick: d,
        handleCloseClick: a,
        cssVars: n ? void 0 : f,
        themeClass: h == null ? void 0 : h.themeClass,
        onRender: h == null ? void 0 : h.onRender
      })
    },
    render() {
      var e, t;
      const {
        mergedClsPrefix: r,
        rtlEnabled: o,
        closable: n,
        color: {
          borderColor: i
        } = {},
        round: l,
        onRender: d,
        $slots: a
      } = this;
      d == null || d();
      const s = Ze(a.avatar, f => f && c("div", {
          class: `${r}-tag__avatar`
        }, f)),
        u = Ze(a.icon, f => f && c("div", {
          class: `${r}-tag__icon`
        }, f));
      return c("div", {
        class: [`${r}-tag`, this.themeClass, {
          [`${r}-tag--rtl`]: o,
          [`${r}-tag--strong`]: this.strong,
          [`${r}-tag--disabled`]: this.disabled,
          [`${r}-tag--checkable`]: this.checkable,
          [`${r}-tag--checked`]: this.checkable && this.checked,
          [`${r}-tag--round`]: l,
          [`${r}-tag--avatar`]: s,
          [`${r}-tag--icon`]: u,
          [`${r}-tag--closable`]: n
        }],
        style: this.cssVars,
        onClick: this.handleClick,
        onMouseenter: this.onMouseenter,
        onMouseleave: this.onMouseleave
      }, u || s, c("span", {
        class: `${r}-tag__content`,
        ref: "contentRef"
      }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e)), !this.checkable && n ? c(sl, {
        clsPrefix: r,
        class: `${r}-tag__close`,
        disabled: this.disabled,
        onClick: this.handleCloseClick,
        focusable: this.internalCloseFocusable,
        round: l,
        isButtonTag: this.internalCloseIsButtonTag,
        absolute: !0
      }) : null, !this.checkable && this.mergedBordered ? c("div", {
        class: `${r}-tag__border`,
        style: {
          borderColor: i
        }
      }) : null)
    }
  }),
  wf = S("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [L(">", [B("clear", `
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `, [L("&:hover", `
 color: var(--n-clear-color-hover)!important;
 `), L("&:active", `
 color: var(--n-clear-color-pressed)!important;
 `)]), B("placeholder", `
 display: flex;
 `), B("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Cn({
    originalTransform: "translateX(-50%) translateY(-50%)",
    left: "50%",
    top: "50%"
  })])])]),
  Or = q({
    name: "BaseClear",
    props: {
      clsPrefix: {
        type: String,
        required: !0
      },
      show: Boolean,
      onClear: Function
    },
    setup(e) {
      return Sn("-base-clear", wf, ee(e, "clsPrefix")), {
        handleMouseDown(t) {
          t.preventDefault()
        }
      }
    },
    render() {
      const {
        clsPrefix: e
      } = this;
      return c("div", {
        class: `${e}-base-clear`
      }, c(kn, null, {
        default: () => {
          var t, r;
          return this.show ? c("div", {
            key: "dismiss",
            class: `${e}-base-clear__clear`,
            onClick: this.onClear,
            onMousedown: this.handleMouseDown,
            "data-clear": !0
          }, yt(this.$slots.icon, () => [c(pe, {
            clsPrefix: e
          }, {
            default: () => c(bu, null)
          })])) : c("div", {
            key: "icon",
            class: `${e}-base-clear__placeholder`
          }, (r = (t = this.$slots).placeholder) === null || r === void 0 ? void 0 : r.call(t))
        }
      }))
    }
  }),
  xf = q({
    name: "InternalSelectionSuffix",
    props: {
      clsPrefix: {
        type: String,
        required: !0
      },
      showArrow: {
        type: Boolean,
        default: void 0
      },
      showClear: {
        type: Boolean,
        default: void 0
      },
      loading: {
        type: Boolean,
        default: !1
      },
      onClear: Function
    },
    setup(e, {
      slots: t
    }) {
      return () => {
        const {
          clsPrefix: r
        } = e;
        return c(dl, {
          clsPrefix: r,
          class: `${r}-base-suffix`,
          strokeWidth: 24,
          scale: .85,
          show: e.loading
        }, {
          default: () => e.showArrow ? c(Or, {
            clsPrefix: r,
            show: e.showClear,
            onClear: e.onClear
          }, {
            placeholder: () => c(pe, {
              clsPrefix: r,
              class: `${r}-base-suffix__arrow`
            }, {
              default: () => yt(t.default, () => [c(mu, null)])
            })
          }) : null
        })
      }
    }
  }),
  Cf = {
    paddingTiny: "0 8px",
    paddingSmall: "0 10px",
    paddingMedium: "0 12px",
    paddingLarge: "0 14px",
    clearSize: "16px"
  },
  Sf = e => {
    const {
      textColor2: t,
      textColor3: r,
      textColorDisabled: o,
      primaryColor: n,
      primaryColorHover: i,
      inputColor: l,
      inputColorDisabled: d,
      borderColor: a,
      warningColor: s,
      warningColorHover: u,
      errorColor: f,
      errorColorHover: h,
      borderRadius: p,
      lineHeight: v,
      fontSizeTiny: y,
      fontSizeSmall: w,
      fontSizeMedium: x,
      fontSizeLarge: P,
      heightTiny: k,
      heightSmall: b,
      heightMedium: m,
      heightLarge: R,
      actionColor: z,
      clearColor: A,
      clearColorHover: $,
      clearColorPressed: _,
      placeholderColor: K,
      placeholderColorDisabled: F,
      iconColor: M,
      iconColorDisabled: C,
      iconColorHover: T,
      iconColorPressed: H
    } = e;
    return Object.assign(Object.assign({}, Cf), {
      countTextColorDisabled: o,
      countTextColor: r,
      heightTiny: k,
      heightSmall: b,
      heightMedium: m,
      heightLarge: R,
      fontSizeTiny: y,
      fontSizeSmall: w,
      fontSizeMedium: x,
      fontSizeLarge: P,
      lineHeight: v,
      lineHeightTextarea: v,
      borderRadius: p,
      iconSize: "16px",
      groupLabelColor: z,
      groupLabelTextColor: t,
      textColor: t,
      textColorDisabled: o,
      textDecorationColor: t,
      caretColor: n,
      placeholderColor: K,
      placeholderColorDisabled: F,
      color: l,
      colorDisabled: d,
      colorFocus: l,
      groupLabelBorder: `1px solid ${a}`,
      border: `1px solid ${a}`,
      borderHover: `1px solid ${i}`,
      borderDisabled: `1px solid ${a}`,
      borderFocus: `1px solid ${i}`,
      boxShadowFocus: `0 0 0 2px ${le(n,{alpha:.2})}`,
      loadingColor: n,
      loadingColorWarning: s,
      borderWarning: `1px solid ${s}`,
      borderHoverWarning: `1px solid ${u}`,
      colorFocusWarning: l,
      borderFocusWarning: `1px solid ${u}`,
      boxShadowFocusWarning: `0 0 0 2px ${le(s,{alpha:.2})}`,
      caretColorWarning: s,
      loadingColorError: f,
      borderError: `1px solid ${f}`,
      borderHoverError: `1px solid ${h}`,
      colorFocusError: l,
      borderFocusError: `1px solid ${h}`,
      boxShadowFocusError: `0 0 0 2px ${le(f,{alpha:.2})}`,
      caretColorError: f,
      clearColor: A,
      clearColorHover: $,
      clearColorPressed: _,
      iconColor: M,
      iconColorDisabled: C,
      iconColorHover: T,
      iconColorPressed: H,
      suffixTextColor: t
    })
  },
  kf = {
    name: "Input",
    common: Be,
    self: Sf
  },
  Pf = kf,
  ui = Ge("n-input");

function $f(e) {
  let t = 0;
  for (const r of e) t++;
  return t
}

function Wt(e) {
  return e === "" || e == null
}

function zf(e) {
  const t = O(null);

  function r() {
    const {
      value: i
    } = e;
    if (!(i != null && i.focus)) {
      n();
      return
    }
    const {
      selectionStart: l,
      selectionEnd: d,
      value: a
    } = i;
    if (l == null || d == null) {
      n();
      return
    }
    t.value = {
      start: l,
      end: d,
      beforeText: a.slice(0, l),
      afterText: a.slice(d)
    }
  }

  function o() {
    var i;
    const {
      value: l
    } = t, {
      value: d
    } = e;
    if (!l || !d) return;
    const {
      value: a
    } = d, {
      start: s,
      beforeText: u,
      afterText: f
    } = l;
    let h = a.length;
    if (a.endsWith(f)) h = a.length - f.length;
    else if (a.startsWith(u)) h = u.length;
    else {
      const p = u[s - 1],
        v = a.indexOf(p, s - 1);
      v !== -1 && (h = v + 1)
    }(i = d.setSelectionRange) === null || i === void 0 || i.call(d, h, h)
  }

  function n() {
    t.value = null
  }
  return Te(e, n), {
    recordCursor: r,
    restoreCursor: o
  }
}
const Jo = q({
    name: "InputWordCount",
    setup(e, {
      slots: t
    }) {
      const {
        mergedValueRef: r,
        maxlengthRef: o,
        mergedClsPrefixRef: n,
        countGraphemesRef: i
      } = ue(ui), l = D(() => {
        const {
          value: d
        } = r;
        return d === null || Array.isArray(d) ? 0 : (i.value || $f)(d)
      });
      return () => {
        const {
          value: d
        } = o, {
          value: a
        } = r;
        return c("span", {
          class: `${n.value}-input-word-count`
        }, cl(t.default, {
          value: a === null || Array.isArray(a) ? "" : a
        }, () => [d === void 0 ? l.value : `${l.value} / ${d}`]))
      }
    }
  }),
  Tf = S("input", `
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`, [B("input, textarea", `
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `), B("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder", `
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `), B("input-el, textarea-el", `
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `, [L("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), L("&::placeholder", `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `), L("&:-webkit-autofill ~", [B("placeholder", "display: none;")])]), j("round", [ze("textarea", "border-radius: calc(var(--n-height) / 2);")]), B("placeholder", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `, [L("span", `
 width: 100%;
 display: inline-block;
 `)]), j("textarea", [B("placeholder", "overflow: visible;")]), ze("autosize", "width: 100%;"), j("autosize", [B("textarea-el, input-el", `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]), S("input-wrapper", `
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `), B("input-mirror", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `), B("input-el", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [L("+", [B("placeholder", `
 display: flex;
 align-items: center; 
 `)])]), ze("textarea", [B("placeholder", "white-space: nowrap;")]), B("eye", `
 transition: color .3s var(--n-bezier);
 `), j("textarea", "width: 100%;", [S("input-word-count", `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), j("resizable", [S("input-wrapper", `
 resize: vertical;
 min-height: var(--n-height);
 `)]), B("textarea-el, textarea-mirror, placeholder", `
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `), B("textarea-mirror", `
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]), j("pair", [B("input-el, placeholder", "text-align: center;"), B("separator", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `, [S("icon", `
 color: var(--n-icon-color);
 `), S("base-icon", `
 color: var(--n-icon-color);
 `)])]), j("disabled", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [B("border", "border: var(--n-border-disabled);"), B("input-el, textarea-el", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), B("placeholder", "color: var(--n-placeholder-color-disabled);"), B("separator", "color: var(--n-text-color-disabled);", [S("icon", `
 color: var(--n-icon-color-disabled);
 `), S("base-icon", `
 color: var(--n-icon-color-disabled);
 `)]), S("input-word-count", `
 color: var(--n-count-text-color-disabled);
 `), B("suffix, prefix", "color: var(--n-text-color-disabled);", [S("icon", `
 color: var(--n-icon-color-disabled);
 `), S("internal-icon", `
 color: var(--n-icon-color-disabled);
 `)])]), ze("disabled", [B("eye", `
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `, [L("&:hover", `
 color: var(--n-icon-color-hover);
 `), L("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), L("&:hover", [B("state-border", "border: var(--n-border-hover);")]), j("focus", "background-color: var(--n-color-focus);", [B("state-border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), B("border, state-border", `
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `), B("state-border", `
 border-color: #0000;
 z-index: 1;
 `), B("prefix", "margin-right: 4px;"), B("suffix", `
 margin-left: 4px;
 `), B("suffix, prefix", `
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `, [S("base-loading", `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), S("base-clear", `
 font-size: var(--n-icon-size);
 `, [B("placeholder", [S("base-icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), L(">", [S("icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), S("base-icon", `
 font-size: var(--n-icon-size);
 `)]), S("input-word-count", `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `), ["warning", "error"].map(e => j(`${e}-status`, [ze("disabled", [S("base-loading", `
 color: var(--n-loading-color-${e})
 `), B("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${e});
 `), B("state-border", `
 border: var(--n-border-${e});
 `), L("&:hover", [B("state-border", `
 border: var(--n-border-hover-${e});
 `)]), L("&:focus", `
 background-color: var(--n-color-focus-${e});
 `, [B("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]), j("focus", `
 background-color: var(--n-color-focus-${e});
 `, [B("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),
  If = S("input", [j("disabled", [B("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),
  _f = Object.assign(Object.assign({}, ae.props), {
    bordered: {
      type: Boolean,
      default: void 0
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: [Array, String],
    defaultValue: {
      type: [String, Array],
      default: null
    },
    value: [String, Array],
    disabled: {
      type: Boolean,
      default: void 0
    },
    size: String,
    rows: {
      type: [Number, String],
      default: 3
    },
    round: Boolean,
    minlength: [String, Number],
    maxlength: [String, Number],
    clearable: Boolean,
    autosize: {
      type: [Boolean, Object],
      default: !1
    },
    pair: Boolean,
    separator: String,
    readonly: {
      type: [String, Boolean],
      default: !1
    },
    passivelyActivated: Boolean,
    showPasswordOn: String,
    stateful: {
      type: Boolean,
      default: !0
    },
    autofocus: Boolean,
    inputProps: Object,
    resizable: {
      type: Boolean,
      default: !0
    },
    showCount: Boolean,
    loading: {
      type: Boolean,
      default: void 0
    },
    allowInput: Function,
    renderCount: Function,
    onMousedown: Function,
    onKeydown: Function,
    onKeyup: Function,
    onInput: [Function, Array],
    onFocus: [Function, Array],
    onBlur: [Function, Array],
    onClick: [Function, Array],
    onChange: [Function, Array],
    onClear: [Function, Array],
    countGraphemes: Function,
    status: String,
    "onUpdate:value": [Function, Array],
    onUpdateValue: [Function, Array],
    textDecoration: [String, Array],
    attrSize: {
      type: Number,
      default: 20
    },
    onInputBlur: [Function, Array],
    onInputFocus: [Function, Array],
    onDeactivate: [Function, Array],
    onActivate: [Function, Array],
    onWrapperFocus: [Function, Array],
    onWrapperBlur: [Function, Array],
    internalDeactivateOnEnter: Boolean,
    internalForceFocus: Boolean,
    internalLoadingBeforeSuffix: Boolean,
    showPasswordToggle: Boolean
  }),
  Qe = q({
    name: "Input",
    props: _f,
    setup(e) {
      const {
        mergedClsPrefixRef: t,
        mergedBorderedRef: r,
        inlineThemeDisabled: o,
        mergedRtlRef: n
      } = Re(e), i = ae("Input", "-input", Tf, Pf, e, t);
      ul && Sn("-input-safari", If, t);
      const l = O(null),
        d = O(null),
        a = O(null),
        s = O(null),
        u = O(null),
        f = O(null),
        h = O(null),
        p = zf(h),
        v = O(null),
        {
          localeRef: y
        } = ro("Input"),
        w = O(e.defaultValue),
        x = ee(e, "value"),
        P = nr(x, w),
        k = Pn(e),
        {
          mergedSizeRef: b,
          mergedDisabledRef: m,
          mergedStatusRef: R
        } = k,
        z = O(!1),
        A = O(!1),
        $ = O(!1),
        _ = O(!1);
      let K = null;
      const F = D(() => {
          const {
            placeholder: g,
            pair: I
          } = e;
          return I ? Array.isArray(g) ? g : g === void 0 ? ["", ""] : [g, g] : g === void 0 ? [y.value.placeholder] : [g]
        }),
        M = D(() => {
          const {
            value: g
          } = $, {
            value: I
          } = P, {
            value: Z
          } = F;
          return !g && (Wt(I) || Array.isArray(I) && Wt(I[0])) && Z[0]
        }),
        C = D(() => {
          const {
            value: g
          } = $, {
            value: I
          } = P, {
            value: Z
          } = F;
          return !g && Z[1] && (Wt(I) || Array.isArray(I) && Wt(I[1]))
        }),
        T = We(() => e.internalForceFocus || z.value),
        H = We(() => {
          if (m.value || e.readonly || !e.clearable || !T.value && !A.value) return !1;
          const {
            value: g
          } = P, {
            value: I
          } = T;
          return e.pair ? !!(Array.isArray(g) && (g[0] || g[1])) && (A.value || I) : !!g && (A.value || I)
        }),
        N = D(() => {
          const {
            showPasswordOn: g
          } = e;
          if (g) return g;
          if (e.showPasswordToggle) return "click"
        }),
        Y = O(!1),
        re = D(() => {
          const {
            textDecoration: g
          } = e;
          return g ? Array.isArray(g) ? g.map(I => ({
            textDecoration: I
          })) : [{
            textDecoration: g
          }] : ["", ""]
        }),
        ve = O(void 0),
        Ce = () => {
          var g, I;
          if (e.type === "textarea") {
            const {
              autosize: Z
            } = e;
            if (Z && (ve.value = (I = (g = v.value) === null || g === void 0 ? void 0 : g.$el) === null || I === void 0 ? void 0 : I.offsetWidth), !d.value || typeof Z == "boolean") return;
            const {
              paddingTop: ge,
              paddingBottom: xe,
              lineHeight: he
            } = window.getComputedStyle(d.value), it = Number(ge.slice(0, -2)), at = Number(xe.slice(0, -2)), lt = Number(he.slice(0, -2)), {
              value: Tt
            } = a;
            if (!Tt) return;
            if (Z.minRows) {
              const It = Math.max(Z.minRows, 1),
                cr = `${it+at+lt*It}px`;
              Tt.style.minHeight = cr
            }
            if (Z.maxRows) {
              const It = `${it+at+lt*Z.maxRows}px`;
              Tt.style.maxHeight = It
            }
          }
        },
        W = D(() => {
          const {
            maxlength: g
          } = e;
          return g === void 0 ? void 0 : Number(g)
        });
      et(() => {
        const {
          value: g
        } = P;
        Array.isArray(g) || dr(g)
      });
      const oe = Fr().proxy;

      function Q(g) {
        const {
          onUpdateValue: I,
          "onUpdate:value": Z,
          onInput: ge
        } = e, {
          nTriggerFormInput: xe
        } = k;
        I && me(I, g), Z && me(Z, g), ge && me(ge, g), w.value = g, xe()
      }

      function we(g) {
        const {
          onChange: I
        } = e, {
          nTriggerFormChange: Z
        } = k;
        I && me(I, g), w.value = g, Z()
      }

      function ye(g) {
        const {
          onBlur: I
        } = e, {
          nTriggerFormBlur: Z
        } = k;
        I && me(I, g), Z()
      }

      function ne(g) {
        const {
          onFocus: I
        } = e, {
          nTriggerFormFocus: Z
        } = k;
        I && me(I, g), Z()
      }

      function Le(g) {
        const {
          onClear: I
        } = e;
        I && me(I, g)
      }

      function Ne(g) {
        const {
          onInputBlur: I
        } = e;
        I && me(I, g)
      }

      function He(g) {
        const {
          onInputFocus: I
        } = e;
        I && me(I, g)
      }

      function Ee() {
        const {
          onDeactivate: g
        } = e;
        g && me(g)
      }

      function U() {
        const {
          onActivate: g
        } = e;
        g && me(g)
      }

      function J(g) {
        const {
          onClick: I
        } = e;
        I && me(I, g)
      }

      function V(g) {
        const {
          onWrapperFocus: I
        } = e;
        I && me(I, g)
      }

      function de(g) {
        const {
          onWrapperBlur: I
        } = e;
        I && me(I, g)
      }

      function fe() {
        $.value = !0
      }

      function Me(g) {
        $.value = !1, g.target === f.value ? $e(g, 1) : $e(g, 0)
      }

      function $e(g, I = 0, Z = "input") {
        const ge = g.target.value;
        if (dr(ge), g instanceof InputEvent && !g.isComposing && ($.value = !1), e.type === "textarea") {
          const {
            value: he
          } = v;
          he && he.syncUnifiedContainer()
        }
        if (K = ge, $.value) return;
        p.recordCursor();
        const xe = De(ge);
        if (xe)
          if (!e.pair) Z === "input" ? Q(ge) : we(ge);
          else {
            let {
              value: he
            } = P;
            Array.isArray(he) ? he = [he[0], he[1]] : he = ["", ""], he[I] = ge, Z === "input" ? Q(he) : we(he)
          } oe.$forceUpdate(), xe || Xt(p.restoreCursor)
      }

      function De(g) {
        const {
          countGraphemes: I,
          maxlength: Z,
          minlength: ge
        } = e;
        if (I) {
          let he;
          if (Z !== void 0 && (he === void 0 && (he = I(g)), he > Number(Z)) || ge !== void 0 && (he === void 0 && (he = I(g)), he < Number(Z))) return !1
        }
        const {
          allowInput: xe
        } = e;
        return typeof xe == "function" ? xe(g) : !0
      }

      function Ke(g) {
        Ne(g), g.relatedTarget === l.value && Ee(), g.relatedTarget !== null && (g.relatedTarget === u.value || g.relatedTarget === f.value || g.relatedTarget === d.value) || (_.value = !1), Dt(g, "blur"), h.value = null
      }

      function Bi(g, I) {
        He(g), z.value = !0, _.value = !0, U(), Dt(g, "focus"), I === 0 ? h.value = u.value : I === 1 ? h.value = f.value : I === 2 && (h.value = d.value)
      }

      function Li(g) {
        e.passivelyActivated && (de(g), Dt(g, "blur"))
      }

      function Ei(g) {
        e.passivelyActivated && (z.value = !0, V(g), Dt(g, "focus"))
      }

      function Dt(g, I) {
        g.relatedTarget !== null && (g.relatedTarget === u.value || g.relatedTarget === f.value || g.relatedTarget === d.value || g.relatedTarget === l.value) || (I === "focus" ? (ne(g), z.value = !0) : I === "blur" && (ye(g), z.value = !1))
      }

      function Ai(g, I) {
        $e(g, I, "change")
      }

      function Di(g) {
        J(g)
      }

      function Fi(g) {
        Le(g), e.pair ? (Q(["", ""]), we(["", ""])) : (Q(""), we(""))
      }

      function Ni(g) {
        const {
          onMousedown: I
        } = e;
        I && I(g);
        const {
          tagName: Z
        } = g.target;
        if (Z !== "INPUT" && Z !== "TEXTAREA") {
          if (e.resizable) {
            const {
              value: ge
            } = l;
            if (ge) {
              const {
                left: xe,
                top: he,
                width: it,
                height: at
              } = ge.getBoundingClientRect(), lt = 14;
              if (xe + it - lt < g.clientX && g.clientX < xe + it && he + at - lt < g.clientY && g.clientY < he + at) return
            }
          }
          g.preventDefault(), z.value || ho()
        }
      }

      function Hi() {
        var g;
        A.value = !0, e.type === "textarea" && ((g = v.value) === null || g === void 0 || g.handleMouseEnterWrapper())
      }

      function ji() {
        var g;
        A.value = !1, e.type === "textarea" && ((g = v.value) === null || g === void 0 || g.handleMouseLeaveWrapper())
      }

      function Ui() {
        m.value || N.value === "click" && (Y.value = !Y.value)
      }

      function Wi(g) {
        if (m.value) return;
        g.preventDefault();
        const I = ge => {
          ge.preventDefault(), Ie("mouseup", document, I)
        };
        if (Oe("mouseup", document, I), N.value !== "mousedown") return;
        Y.value = !0;
        const Z = () => {
          Y.value = !1, Ie("mouseup", document, Z)
        };
        Oe("mouseup", document, Z)
      }

      function Vi(g) {
        var I;
        switch ((I = e.onKeydown) === null || I === void 0 || I.call(e, g), g.key) {
          case "Escape":
            sr();
            break;
          case "Enter":
            Ki(g);
            break
        }
      }

      function Ki(g) {
        var I, Z;
        if (e.passivelyActivated) {
          const {
            value: ge
          } = _;
          if (ge) {
            e.internalDeactivateOnEnter && sr();
            return
          }
          g.preventDefault(), e.type === "textarea" ? (I = d.value) === null || I === void 0 || I.focus() : (Z = u.value) === null || Z === void 0 || Z.focus()
        }
      }

      function sr() {
        e.passivelyActivated && (_.value = !1, Xt(() => {
          var g;
          (g = l.value) === null || g === void 0 || g.focus()
        }))
      }

      function ho() {
        var g, I, Z;
        m.value || (e.passivelyActivated ? (g = l.value) === null || g === void 0 || g.focus() : ((I = d.value) === null || I === void 0 || I.focus(), (Z = u.value) === null || Z === void 0 || Z.focus()))
      }

      function qi() {
        var g;
        !((g = l.value) === null || g === void 0) && g.contains(document.activeElement) && document.activeElement.blur()
      }

      function Gi() {
        var g, I;
        (g = d.value) === null || g === void 0 || g.select(), (I = u.value) === null || I === void 0 || I.select()
      }

      function Xi() {
        m.value || (d.value ? d.value.focus() : u.value && u.value.focus())
      }

      function Yi() {
        const {
          value: g
        } = l;
        g != null && g.contains(document.activeElement) && g !== document.activeElement && sr()
      }

      function Zi(g) {
        if (e.type === "textarea") {
          const {
            value: I
          } = d;
          I == null || I.scrollTo(g)
        } else {
          const {
            value: I
          } = u;
          I == null || I.scrollTo(g)
        }
      }

      function dr(g) {
        const {
          type: I,
          pair: Z,
          autosize: ge
        } = e;
        if (!Z && ge)
          if (I === "textarea") {
            const {
              value: xe
            } = a;
            xe && (xe.textContent = (g ? ? "") + `\r
`)
          } else {
            const {
              value: xe
            } = s;
            xe && (g ? xe.textContent = g : xe.innerHTML = "&nbsp;")
          }
      }

      function Ji() {
        Ce()
      }
      const po = O({
        top: "0"
      });

      function Qi(g) {
        var I;
        const {
          scrollTop: Z
        } = g.target;
        po.value.top = `${-Z}px`, (I = v.value) === null || I === void 0 || I.syncUnifiedContainer()
      }
      let Ft = null;
      ft(() => {
        const {
          autosize: g,
          type: I
        } = e;
        g && I === "textarea" ? Ft = Te(P, Z => {
          !Array.isArray(Z) && Z !== K && dr(Z)
        }) : Ft == null || Ft()
      });
      let Nt = null;
      ft(() => {
        e.type === "textarea" ? Nt = Te(P, g => {
          var I;
          !Array.isArray(g) && g !== K && ((I = v.value) === null || I === void 0 || I.syncUnifiedContainer())
        }) : Nt == null || Nt()
      }), _e(ui, {
        mergedValueRef: P,
        maxlengthRef: W,
        mergedClsPrefixRef: t,
        countGraphemesRef: ee(e, "countGraphemes")
      });
      const ea = {
          wrapperElRef: l,
          inputElRef: u,
          textareaElRef: d,
          isCompositing: $,
          focus: ho,
          blur: qi,
          select: Gi,
          deactivate: Yi,
          activate: Xi,
          scrollTo: Zi
        },
        ta = kt("Input", n, t),
        vo = D(() => {
          const {
            value: g
          } = b, {
            common: {
              cubicBezierEaseInOut: I
            },
            self: {
              color: Z,
              borderRadius: ge,
              textColor: xe,
              caretColor: he,
              caretColorError: it,
              caretColorWarning: at,
              textDecorationColor: lt,
              border: Tt,
              borderDisabled: It,
              borderHover: cr,
              borderFocus: ra,
              placeholderColor: oa,
              placeholderColorDisabled: na,
              lineHeightTextarea: ia,
              colorDisabled: aa,
              colorFocus: la,
              textColorDisabled: sa,
              boxShadowFocus: da,
              iconSize: ca,
              colorFocusWarning: ua,
              boxShadowFocusWarning: fa,
              borderWarning: ha,
              borderFocusWarning: pa,
              borderHoverWarning: va,
              colorFocusError: ga,
              boxShadowFocusError: ma,
              borderError: ba,
              borderFocusError: ya,
              borderHoverError: wa,
              clearSize: xa,
              clearColor: Ca,
              clearColorHover: Sa,
              clearColorPressed: ka,
              iconColor: Pa,
              iconColorDisabled: $a,
              suffixTextColor: za,
              countTextColor: Ta,
              countTextColorDisabled: Ia,
              iconColorHover: _a,
              iconColorPressed: Ra,
              loadingColor: Ma,
              loadingColorError: Oa,
              loadingColorWarning: Ba,
              [ie("padding", g)]: La,
              [ie("fontSize", g)]: Ea,
              [ie("height", g)]: Aa
            }
          } = i.value, {
            left: Da,
            right: Fa
          } = pl(La);
          return {
            "--n-bezier": I,
            "--n-count-text-color": Ta,
            "--n-count-text-color-disabled": Ia,
            "--n-color": Z,
            "--n-font-size": Ea,
            "--n-border-radius": ge,
            "--n-height": Aa,
            "--n-padding-left": Da,
            "--n-padding-right": Fa,
            "--n-text-color": xe,
            "--n-caret-color": he,
            "--n-text-decoration-color": lt,
            "--n-border": Tt,
            "--n-border-disabled": It,
            "--n-border-hover": cr,
            "--n-border-focus": ra,
            "--n-placeholder-color": oa,
            "--n-placeholder-color-disabled": na,
            "--n-icon-size": ca,
            "--n-line-height-textarea": ia,
            "--n-color-disabled": aa,
            "--n-color-focus": la,
            "--n-text-color-disabled": sa,
            "--n-box-shadow-focus": da,
            "--n-loading-color": Ma,
            "--n-caret-color-warning": at,
            "--n-color-focus-warning": ua,
            "--n-box-shadow-focus-warning": fa,
            "--n-border-warning": ha,
            "--n-border-focus-warning": pa,
            "--n-border-hover-warning": va,
            "--n-loading-color-warning": Ba,
            "--n-caret-color-error": it,
            "--n-color-focus-error": ga,
            "--n-box-shadow-focus-error": ma,
            "--n-border-error": ba,
            "--n-border-focus-error": ya,
            "--n-border-hover-error": wa,
            "--n-loading-color-error": Oa,
            "--n-clear-color": Ca,
            "--n-clear-size": xa,
            "--n-clear-color-hover": Sa,
            "--n-clear-color-pressed": ka,
            "--n-icon-color": Pa,
            "--n-icon-color-hover": _a,
            "--n-icon-color-pressed": Ra,
            "--n-icon-color-disabled": $a,
            "--n-suffix-text-color": za
          }
        }),
        ht = o ? Fe("input", D(() => {
          const {
            value: g
          } = b;
          return g[0]
        }), vo, e) : void 0;
      return Object.assign(Object.assign({}, ea), {
        wrapperElRef: l,
        inputElRef: u,
        inputMirrorElRef: s,
        inputEl2Ref: f,
        textareaElRef: d,
        textareaMirrorElRef: a,
        textareaScrollbarInstRef: v,
        rtlEnabled: ta,
        uncontrolledValue: w,
        mergedValue: P,
        passwordVisible: Y,
        mergedPlaceholder: F,
        showPlaceholder1: M,
        showPlaceholder2: C,
        mergedFocus: T,
        isComposing: $,
        activated: _,
        showClearButton: H,
        mergedSize: b,
        mergedDisabled: m,
        textDecorationStyle: re,
        mergedClsPrefix: t,
        mergedBordered: r,
        mergedShowPasswordOn: N,
        placeholderStyle: po,
        mergedStatus: R,
        textAreaScrollContainerWidth: ve,
        handleTextAreaScroll: Qi,
        handleCompositionStart: fe,
        handleCompositionEnd: Me,
        handleInput: $e,
        handleInputBlur: Ke,
        handleInputFocus: Bi,
        handleWrapperBlur: Li,
        handleWrapperFocus: Ei,
        handleMouseEnter: Hi,
        handleMouseLeave: ji,
        handleMouseDown: Ni,
        handleChange: Ai,
        handleClick: Di,
        handleClear: Fi,
        handlePasswordToggleClick: Ui,
        handlePasswordToggleMousedown: Wi,
        handleWrapperKeydown: Vi,
        handleTextAreaMirrorResize: Ji,
        getTextareaScrollContainer: () => d.value,
        mergedTheme: i,
        cssVars: o ? void 0 : vo,
        themeClass: ht == null ? void 0 : ht.themeClass,
        onRender: ht == null ? void 0 : ht.onRender
      })
    },
    render() {
      var e, t;
      const {
        mergedClsPrefix: r,
        mergedStatus: o,
        themeClass: n,
        type: i,
        countGraphemes: l,
        onRender: d
      } = this, a = this.$slots;
      return d == null || d(), c("div", {
        ref: "wrapperElRef",
        class: [`${r}-input`, n, o && `${r}-input--${o}-status`, {
          [`${r}-input--rtl`]: this.rtlEnabled,
          [`${r}-input--disabled`]: this.mergedDisabled,
          [`${r}-input--textarea`]: i === "textarea",
          [`${r}-input--resizable`]: this.resizable && !this.autosize,
          [`${r}-input--autosize`]: this.autosize,
          [`${r}-input--round`]: this.round && i !== "textarea",
          [`${r}-input--pair`]: this.pair,
          [`${r}-input--focus`]: this.mergedFocus,
          [`${r}-input--stateful`]: this.stateful
        }],
        style: this.cssVars,
        tabindex: !this.mergedDisabled && this.passivelyActivated && !this.activated ? 0 : void 0,
        onFocus: this.handleWrapperFocus,
        onBlur: this.handleWrapperBlur,
        onClick: this.handleClick,
        onMousedown: this.handleMouseDown,
        onMouseenter: this.handleMouseEnter,
        onMouseleave: this.handleMouseLeave,
        onCompositionstart: this.handleCompositionStart,
        onCompositionend: this.handleCompositionEnd,
        onKeyup: this.onKeyup,
        onKeydown: this.handleWrapperKeydown
      }, c("div", {
        class: `${r}-input-wrapper`
      }, Ze(a.prefix, s => s && c("div", {
        class: `${r}-input__prefix`
      }, s)), i === "textarea" ? c(fl, {
        ref: "textareaScrollbarInstRef",
        class: `${r}-input__textarea`,
        container: this.getTextareaScrollContainer,
        triggerDisplayManually: !0,
        useUnifiedContainer: !0,
        internalHoistYRail: !0
      }, {
        default: () => {
          var s, u;
          const {
            textAreaScrollContainerWidth: f
          } = this, h = {
            width: this.autosize && f && `${f}px`
          };
          return c(Ve, null, c("textarea", Object.assign({}, this.inputProps, {
            ref: "textareaElRef",
            class: [`${r}-input__textarea-el`, (s = this.inputProps) === null || s === void 0 ? void 0 : s.class],
            autofocus: this.autofocus,
            rows: Number(this.rows),
            placeholder: this.placeholder,
            value: this.mergedValue,
            disabled: this.mergedDisabled,
            maxlength: l ? void 0 : this.maxlength,
            minlength: l ? void 0 : this.minlength,
            readonly: this.readonly,
            tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
            style: [this.textDecorationStyle[0], (u = this.inputProps) === null || u === void 0 ? void 0 : u.style, h],
            onBlur: this.handleInputBlur,
            onFocus: p => this.handleInputFocus(p, 2),
            onInput: this.handleInput,
            onChange: this.handleChange,
            onScroll: this.handleTextAreaScroll
          })), this.showPlaceholder1 ? c("div", {
            class: `${r}-input__placeholder`,
            style: [this.placeholderStyle, h],
            key: "placeholder"
          }, this.mergedPlaceholder[0]) : null, this.autosize ? c(hl, {
            onResize: this.handleTextAreaMirrorResize
          }, {
            default: () => c("div", {
              ref: "textareaMirrorElRef",
              class: `${r}-input__textarea-mirror`,
              key: "mirror"
            })
          }) : null)
        }
      }) : c("div", {
        class: `${r}-input__input`
      }, c("input", Object.assign({
        type: i === "password" && this.mergedShowPasswordOn && this.passwordVisible ? "text" : i
      }, this.inputProps, {
        ref: "inputElRef",
        class: [`${r}-input__input-el`, (e = this.inputProps) === null || e === void 0 ? void 0 : e.class],
        style: [this.textDecorationStyle[0], (t = this.inputProps) === null || t === void 0 ? void 0 : t.style],
        tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
        placeholder: this.mergedPlaceholder[0],
        disabled: this.mergedDisabled,
        maxlength: l ? void 0 : this.maxlength,
        minlength: l ? void 0 : this.minlength,
        value: Array.isArray(this.mergedValue) ? this.mergedValue[0] : this.mergedValue,
        readonly: this.readonly,
        autofocus: this.autofocus,
        size: this.attrSize,
        onBlur: this.handleInputBlur,
        onFocus: s => this.handleInputFocus(s, 0),
        onInput: s => this.handleInput(s, 0),
        onChange: s => this.handleChange(s, 0)
      })), this.showPlaceholder1 ? c("div", {
        class: `${r}-input__placeholder`
      }, c("span", null, this.mergedPlaceholder[0])) : null, this.autosize ? c("div", {
        class: `${r}-input__input-mirror`,
        key: "mirror",
        ref: "inputMirrorElRef"
      }, " ") : null), !this.pair && Ze(a.suffix, s => s || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? c("div", {
        class: `${r}-input__suffix`
      }, [Ze(a["clear-icon-placeholder"], u => (this.clearable || u) && c(Or, {
        clsPrefix: r,
        show: this.showClearButton,
        onClear: this.handleClear
      }, {
        placeholder: () => u,
        icon: () => {
          var f, h;
          return (h = (f = this.$slots)["clear-icon"]) === null || h === void 0 ? void 0 : h.call(f)
        }
      })), this.internalLoadingBeforeSuffix ? null : s, this.loading !== void 0 ? c(xf, {
        clsPrefix: r,
        loading: this.loading,
        showArrow: !1,
        showClear: !1,
        style: this.cssVars
      }) : null, this.internalLoadingBeforeSuffix ? s : null, this.showCount && this.type !== "textarea" ? c(Jo, null, {
        default: u => {
          var f;
          return (f = a.count) === null || f === void 0 ? void 0 : f.call(a, u)
        }
      }) : null, this.mergedShowPasswordOn && this.type === "password" ? c("div", {
        class: `${r}-input__eye`,
        onMousedown: this.handlePasswordToggleMousedown,
        onClick: this.handlePasswordToggleClick
      }, this.passwordVisible ? yt(a["password-visible-icon"], () => [c(pe, {
        clsPrefix: r
      }, {
        default: () => c(ii, null)
      })]) : yt(a["password-invisible-icon"], () => [c(pe, {
        clsPrefix: r
      }, {
        default: () => c(fu, null)
      })])) : null]) : null)), this.pair ? c("span", {
        class: `${r}-input__separator`
      }, yt(a.separator, () => [this.separator])) : null, this.pair ? c("div", {
        class: `${r}-input-wrapper`
      }, c("div", {
        class: `${r}-input__input`
      }, c("input", {
        ref: "inputEl2Ref",
        type: this.type,
        class: `${r}-input__input-el`,
        tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
        placeholder: this.mergedPlaceholder[1],
        disabled: this.mergedDisabled,
        maxlength: l ? void 0 : this.maxlength,
        minlength: l ? void 0 : this.minlength,
        value: Array.isArray(this.mergedValue) ? this.mergedValue[1] : void 0,
        readonly: this.readonly,
        style: this.textDecorationStyle[1],
        onBlur: this.handleInputBlur,
        onFocus: s => this.handleInputFocus(s, 1),
        onInput: s => this.handleInput(s, 1),
        onChange: s => this.handleChange(s, 1)
      }), this.showPlaceholder2 ? c("div", {
        class: `${r}-input__placeholder`
      }, c("span", null, this.mergedPlaceholder[1])) : null), Ze(a.suffix, s => (this.clearable || s) && c("div", {
        class: `${r}-input__suffix`
      }, [this.clearable && c(Or, {
        clsPrefix: r,
        show: this.showClearButton,
        onClear: this.handleClear
      }, {
        icon: () => {
          var u;
          return (u = a["clear-icon"]) === null || u === void 0 ? void 0 : u.call(a)
        },
        placeholder: () => {
          var u;
          return (u = a["clear-icon-placeholder"]) === null || u === void 0 ? void 0 : u.call(a)
        }
      }), s]))) : null, this.mergedBordered ? c("div", {
        class: `${r}-input__border`
      }) : null, this.mergedBordered ? c("div", {
        class: `${r}-input__state-border`
      }) : null, this.showCount && i === "textarea" ? c(Jo, null, {
        default: s => {
          var u;
          const {
            renderCount: f
          } = this;
          return f ? f(s) : (u = a.count) === null || u === void 0 ? void 0 : u.call(a, s)
        }
      }) : null)
    }
  }),
  wr = Vr && "loading" in document.createElement("img"),
  Rf = (e = {}) => {
    var t;
    const {
      root: r = null
    } = e;
    return {
      hash: `${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(t=e.threshold)!==null&&t!==void 0?t:"0"}`,
      options: Object.assign(Object.assign({}, e), {
        root: (typeof r == "string" ? document.querySelector(r) : r) || document.documentElement
      })
    }
  },
  xr = new WeakMap,
  Cr = new WeakMap,
  Sr = new WeakMap,
  Mf = (e, t, r) => {
    if (!e) return () => {};
    const o = Rf(t),
      {
        root: n
      } = o.options;
    let i;
    const l = xr.get(n);
    l ? i = l : (i = new Map, xr.set(n, i));
    let d, a;
    i.has(o.hash) ? (a = i.get(o.hash), a[1].has(e) || (d = a[0], a[1].add(e), d.observe(e))) : (d = new IntersectionObserver(f => {
      f.forEach(h => {
        if (h.isIntersecting) {
          const p = Cr.get(h.target),
            v = Sr.get(h.target);
          p && p(), v && (v.value = !0)
        }
      })
    }, o.options), d.observe(e), a = [d, new Set([e])], i.set(o.hash, a));
    let s = !1;
    const u = () => {
      s || (Cr.delete(e), Sr.delete(e), s = !0, a[1].has(e) && (a[0].unobserve(e), a[1].delete(e)), a[1].size <= 0 && i.delete(o.hash), i.size || xr.delete(n))
    };
    return Cr.set(e, u), Sr.set(e, r), u
  },
  Of = {
    padding: "8px 14px"
  },
  Bf = e => {
    const {
      borderRadius: t,
      boxShadow2: r,
      baseColor: o
    } = e;
    return Object.assign(Object.assign({}, Of), {
      borderRadius: t,
      boxShadow: r,
      color: Ae(o, "rgba(0, 0, 0, .85)"),
      textColor: o
    })
  },
  Lf = Et({
    name: "Tooltip",
    common: Be,
    peers: {
      Popover: io
    },
    self: Bf
  }),
  ao = Lf,
  Ef = Et({
    name: "Ellipsis",
    common: Be,
    peers: {
      Tooltip: ao
    }
  }),
  Af = Ef,
  Df = {
    padding: "4px 0",
    optionIconSizeSmall: "14px",
    optionIconSizeMedium: "16px",
    optionIconSizeLarge: "16px",
    optionIconSizeHuge: "18px",
    optionSuffixWidthSmall: "14px",
    optionSuffixWidthMedium: "14px",
    optionSuffixWidthLarge: "16px",
    optionSuffixWidthHuge: "16px",
    optionIconSuffixWidthSmall: "32px",
    optionIconSuffixWidthMedium: "32px",
    optionIconSuffixWidthLarge: "36px",
    optionIconSuffixWidthHuge: "36px",
    optionPrefixWidthSmall: "14px",
    optionPrefixWidthMedium: "14px",
    optionPrefixWidthLarge: "16px",
    optionPrefixWidthHuge: "16px",
    optionIconPrefixWidthSmall: "36px",
    optionIconPrefixWidthMedium: "36px",
    optionIconPrefixWidthLarge: "40px",
    optionIconPrefixWidthHuge: "40px"
  },
  Ff = e => {
    const {
      primaryColor: t,
      textColor2: r,
      dividerColor: o,
      hoverColor: n,
      popoverColor: i,
      invertedColor: l,
      borderRadius: d,
      fontSizeSmall: a,
      fontSizeMedium: s,
      fontSizeLarge: u,
      fontSizeHuge: f,
      heightSmall: h,
      heightMedium: p,
      heightLarge: v,
      heightHuge: y,
      textColor3: w,
      opacityDisabled: x
    } = e;
    return Object.assign(Object.assign({}, Df), {
      optionHeightSmall: h,
      optionHeightMedium: p,
      optionHeightLarge: v,
      optionHeightHuge: y,
      borderRadius: d,
      fontSizeSmall: a,
      fontSizeMedium: s,
      fontSizeLarge: u,
      fontSizeHuge: f,
      optionTextColor: r,
      optionTextColorHover: r,
      optionTextColorActive: t,
      optionTextColorChildActive: t,
      color: i,
      dividerColor: o,
      suffixColor: r,
      prefixColor: r,
      optionColorHover: n,
      optionColorActive: le(t, {
        alpha: .1
      }),
      groupHeaderTextColor: w,
      optionTextColorInverted: "#BBB",
      optionTextColorHoverInverted: "#FFF",
      optionTextColorActiveInverted: "#FFF",
      optionTextColorChildActiveInverted: "#FFF",
      colorInverted: l,
      dividerColorInverted: "#BBB",
      suffixColorInverted: "#BBB",
      prefixColorInverted: "#BBB",
      optionColorHoverInverted: t,
      optionColorActiveInverted: t,
      groupHeaderTextColorInverted: "#AAA",
      optionOpacityDisabled: x
    })
  },
  Nf = Et({
    name: "Dropdown",
    common: Be,
    peers: {
      Popover: io
    },
    self: Ff
  }),
  Hf = Nf,
  jf = Object.assign(Object.assign({}, ar), ae.props),
  fi = q({
    name: "Tooltip",
    props: jf,
    __popover__: !0,
    setup(e) {
      const t = ae("Tooltip", "-tooltip", void 0, ao, e),
        r = O(null);
      return Object.assign(Object.assign({}, {
        syncPosition() {
          r.value.syncPosition()
        },
        setShow(n) {
          r.value.setShow(n)
        }
      }), {
        popoverRef: r,
        mergedTheme: t,
        popoverThemeOverrides: D(() => t.value.self)
      })
    },
    render() {
      const {
        mergedTheme: e,
        internalExtraClass: t
      } = this;
      return c(ci, Object.assign(Object.assign({}, this.$props), {
        theme: e.peers.Popover,
        themeOverrides: e.peerOverrides.Popover,
        builtinThemeOverrides: this.popoverThemeOverrides,
        internalExtraClass: t.concat("tooltip"),
        ref: "popoverRef"
      }), this.$slots)
    }
  }),
  Uf = S("ellipsis", {
    overflow: "hidden"
  }, [ze("line-clamp", `
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `), j("line-clamp", `
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `), j("cursor-pointer", `
 cursor: pointer;
 `)]);

function Qo(e) {
  return `${e}-ellipsis--line-clamp`
}

function en(e, t) {
  return `${e}-ellipsis--cursor-${t}`
}
const Wf = Object.assign(Object.assign({}, ae.props), {
    expandTrigger: String,
    lineClamp: [Number, String],
    tooltip: {
      type: [Boolean, Object],
      default: !0
    }
  }),
  hi = q({
    name: "Ellipsis",
    inheritAttrs: !1,
    props: Wf,
    setup(e, {
      slots: t,
      attrs: r
    }) {
      const {
        mergedClsPrefixRef: o
      } = Re(e), n = ae("Ellipsis", "-ellipsis", Uf, Af, e, o), i = O(null), l = O(null), d = O(null), a = O(!1), s = D(() => {
        const {
          lineClamp: w
        } = e, {
          value: x
        } = a;
        return w !== void 0 ? {
          textOverflow: "",
          "-webkit-line-clamp": x ? "" : w
        } : {
          textOverflow: x ? "" : "ellipsis",
          "-webkit-line-clamp": ""
        }
      });

      function u() {
        let w = !1;
        const {
          value: x
        } = a;
        if (x) return !0;
        const {
          value: P
        } = i;
        if (P) {
          const {
            lineClamp: k
          } = e;
          if (p(P), k !== void 0) w = P.scrollHeight <= P.offsetHeight;
          else {
            const {
              value: b
            } = l;
            b && (w = b.getBoundingClientRect().width <= P.getBoundingClientRect().width)
          }
          v(P, w)
        }
        return w
      }
      const f = D(() => e.expandTrigger === "click" ? () => {
        var w;
        const {
          value: x
        } = a;
        x && ((w = d.value) === null || w === void 0 || w.setShow(!1)), a.value = !x
      } : void 0);
      vl(() => {
        var w;
        e.tooltip && ((w = d.value) === null || w === void 0 || w.setShow(!1))
      });
      const h = () => c("span", Object.assign({}, Lt(r, {
        class: [`${o.value}-ellipsis`, e.lineClamp !== void 0 ? Qo(o.value) : void 0, e.expandTrigger === "click" ? en(o.value, "pointer") : void 0],
        style: s.value
      }), {
        ref: "triggerRef",
        onClick: f.value,
        onMouseenter: e.expandTrigger === "click" ? u : void 0
      }), e.lineClamp ? t : c("span", {
        ref: "triggerInnerRef"
      }, t));

      function p(w) {
        if (!w) return;
        const x = s.value,
          P = Qo(o.value);
        e.lineClamp !== void 0 ? y(w, P, "add") : y(w, P, "remove");
        for (const k in x) w.style[k] !== x[k] && (w.style[k] = x[k])
      }

      function v(w, x) {
        const P = en(o.value, "pointer");
        e.expandTrigger === "click" && !x ? y(w, P, "add") : y(w, P, "remove")
      }

      function y(w, x, P) {
        P === "add" ? w.classList.contains(x) || w.classList.add(x) : w.classList.contains(x) && w.classList.remove(x)
      }
      return {
        mergedTheme: n,
        triggerRef: i,
        triggerInnerRef: l,
        tooltipRef: d,
        handleClick: f,
        renderTrigger: h,
        getTooltipDisabled: u
      }
    },
    render() {
      var e;
      const {
        tooltip: t,
        renderTrigger: r,
        $slots: o
      } = this;
      if (t) {
        const {
          mergedTheme: n
        } = this;
        return c(fi, Object.assign({
          ref: "tooltipRef",
          placement: "top"
        }, t, {
          getDisabled: this.getTooltipDisabled,
          theme: n.peers.Tooltip,
          themeOverrides: n.peerOverrides.Tooltip
        }), {
          trigger: r,
          default: (e = o.tooltip) !== null && e !== void 0 ? e : o.default
        })
      } else return r()
    }
  }),
  pi = q({
    name: "DropdownDivider",
    props: {
      clsPrefix: {
        type: String,
        required: !0
      }
    },
    render() {
      return c("div", {
        class: `${this.clsPrefix}-dropdown-divider`
      })
    }
  }),
  Vf = e => {
    const {
      textColorBase: t,
      opacity1: r,
      opacity2: o,
      opacity3: n,
      opacity4: i,
      opacity5: l
    } = e;
    return {
      color: t,
      opacity1Depth: r,
      opacity2Depth: o,
      opacity3Depth: n,
      opacity4Depth: i,
      opacity5Depth: l
    }
  },
  Kf = {
    name: "Icon",
    common: Be,
    self: Vf
  },
  qf = Kf,
  Gf = S("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [j("color-transition", {
    transition: "color .3s var(--n-bezier)"
  }), j("depth", {
    color: "var(--n-color)"
  }, [L("svg", {
    opacity: "var(--n-opacity)",
    transition: "opacity .3s var(--n-bezier)"
  })]), L("svg", {
    height: "1em",
    width: "1em"
  })]),
  Xf = Object.assign(Object.assign({}, ae.props), {
    depth: [String, Number],
    size: [Number, String],
    color: String,
    component: Object
  }),
  Yf = q({
    _n_icon__: !0,
    name: "Icon",
    inheritAttrs: !1,
    props: Xf,
    setup(e) {
      const {
        mergedClsPrefixRef: t,
        inlineThemeDisabled: r
      } = Re(e), o = ae("Icon", "-icon", Gf, qf, e, t), n = D(() => {
        const {
          depth: l
        } = e, {
          common: {
            cubicBezierEaseInOut: d
          },
          self: a
        } = o.value;
        if (l !== void 0) {
          const {
            color: s,
            [`opacity${l}Depth`]: u
          } = a;
          return {
            "--n-bezier": d,
            "--n-color": s,
            "--n-opacity": u
          }
        }
        return {
          "--n-bezier": d,
          "--n-color": "",
          "--n-opacity": ""
        }
      }), i = r ? Fe("icon", D(() => `${e.depth||"d"}`), n, e) : void 0;
      return {
        mergedClsPrefix: t,
        mergedStyle: D(() => {
          const {
            size: l,
            color: d
          } = e;
          return {
            fontSize: qe(l),
            color: d
          }
        }),
        cssVars: r ? void 0 : n,
        themeClass: i == null ? void 0 : i.themeClass,
        onRender: i == null ? void 0 : i.onRender
      }
    },
    render() {
      var e;
      const {
        $parent: t,
        depth: r,
        mergedClsPrefix: o,
        component: n,
        onRender: i,
        themeClass: l
      } = this;
      return !((e = t == null ? void 0 : t.$options) === null || e === void 0) && e._n_icon__ && Kr("icon", "don't wrap `n-icon` inside `n-icon`"), i == null || i(), c("i", Lt(this.$attrs, {
        role: "img",
        class: [`${o}-icon`, l, {
          [`${o}-icon--depth`]: r,
          [`${o}-icon--color-transition`]: r !== void 0
        }],
        style: [this.cssVars, this.mergedStyle]
      }), n ? c(n) : this.$slots)
    }
  }),
  lo = Ge("n-dropdown-menu"),
  lr = Ge("n-dropdown"),
  tn = Ge("n-dropdown-option");

function Br(e, t) {
  return e.type === "submenu" || e.type === void 0 && e[t] !== void 0
}

function Zf(e) {
  return e.type === "group"
}

function vi(e) {
  return e.type === "divider"
}

function Jf(e) {
  return e.type === "render"
}
const gi = q({
    name: "DropdownOption",
    props: {
      clsPrefix: {
        type: String,
        required: !0
      },
      tmNode: {
        type: Object,
        required: !0
      },
      parentKey: {
        type: [String, Number],
        default: null
      },
      placement: {
        type: String,
        default: "right-start"
      },
      props: Object,
      scrollable: Boolean
    },
    setup(e) {
      const t = ue(lr),
        {
          hoverKeyRef: r,
          keyboardKeyRef: o,
          lastToggledSubmenuKeyRef: n,
          pendingKeyPathRef: i,
          activeKeyPathRef: l,
          animatedRef: d,
          mergedShowRef: a,
          renderLabelRef: s,
          renderIconRef: u,
          labelFieldRef: f,
          childrenFieldRef: h,
          renderOptionRef: p,
          nodePropsRef: v,
          menuPropsRef: y
        } = t,
        w = ue(tn, null),
        x = ue(lo),
        P = ue(tr),
        k = D(() => e.tmNode.rawNode),
        b = D(() => {
          const {
            value: N
          } = h;
          return Br(e.tmNode.rawNode, N)
        }),
        m = D(() => {
          const {
            disabled: N
          } = e.tmNode;
          return N
        }),
        R = D(() => {
          if (!b.value) return !1;
          const {
            key: N,
            disabled: Y
          } = e.tmNode;
          if (Y) return !1;
          const {
            value: re
          } = r, {
            value: ve
          } = o, {
            value: Ce
          } = n, {
            value: W
          } = i;
          return re !== null ? W.includes(N) : ve !== null ? W.includes(N) && W[W.length - 1] !== N : Ce !== null ? W.includes(N) : !1
        }),
        z = D(() => o.value === null && !d.value),
        A = Ml(R, 300, z),
        $ = D(() => !!(w != null && w.enteringSubmenuRef.value)),
        _ = O(!1);
      _e(tn, {
        enteringSubmenuRef: _
      });

      function K() {
        _.value = !0
      }

      function F() {
        _.value = !1
      }

      function M() {
        const {
          parentKey: N,
          tmNode: Y
        } = e;
        Y.disabled || a.value && (n.value = N, o.value = null, r.value = Y.key)
      }

      function C() {
        const {
          tmNode: N
        } = e;
        N.disabled || a.value && r.value !== N.key && M()
      }

      function T(N) {
        if (e.tmNode.disabled || !a.value) return;
        const {
          relatedTarget: Y
        } = N;
        Y && !Io({
          target: Y
        }, "dropdownOption") && !Io({
          target: Y
        }, "scrollbarRail") && (r.value = null)
      }

      function H() {
        const {
          value: N
        } = b, {
          tmNode: Y
        } = e;
        a.value && !N && !Y.disabled && (t.doSelect(Y.key, Y.rawNode), t.doUpdateShow(!1))
      }
      return {
        labelField: f,
        renderLabel: s,
        renderIcon: u,
        siblingHasIcon: x.showIconRef,
        siblingHasSubmenu: x.hasSubmenuRef,
        menuProps: y,
        popoverBody: P,
        animated: d,
        mergedShowSubmenu: D(() => A.value && !$.value),
        rawNode: k,
        hasSubmenu: b,
        pending: We(() => {
          const {
            value: N
          } = i, {
            key: Y
          } = e.tmNode;
          return N.includes(Y)
        }),
        childActive: We(() => {
          const {
            value: N
          } = l, {
            key: Y
          } = e.tmNode, re = N.findIndex(ve => Y === ve);
          return re === -1 ? !1 : re < N.length - 1
        }),
        active: We(() => {
          const {
            value: N
          } = l, {
            key: Y
          } = e.tmNode, re = N.findIndex(ve => Y === ve);
          return re === -1 ? !1 : re === N.length - 1
        }),
        mergedDisabled: m,
        renderOption: p,
        nodeProps: v,
        handleClick: H,
        handleMouseMove: C,
        handleMouseEnter: M,
        handleMouseLeave: T,
        handleSubmenuBeforeEnter: K,
        handleSubmenuAfterEnter: F
      }
    },
    render() {
      var e, t;
      const {
        animated: r,
        rawNode: o,
        mergedShowSubmenu: n,
        clsPrefix: i,
        siblingHasIcon: l,
        siblingHasSubmenu: d,
        renderLabel: a,
        renderIcon: s,
        renderOption: u,
        nodeProps: f,
        props: h,
        scrollable: p
      } = this;
      let v = null;
      if (n) {
        const P = (e = this.menuProps) === null || e === void 0 ? void 0 : e.call(this, o, o.children);
        v = c(mi, Object.assign({}, P, {
          clsPrefix: i,
          scrollable: this.scrollable,
          tmNodes: this.tmNode.children,
          parentKey: this.tmNode.key
        }))
      }
      const y = {
          class: [`${i}-dropdown-option-body`, this.pending && `${i}-dropdown-option-body--pending`, this.active && `${i}-dropdown-option-body--active`, this.childActive && `${i}-dropdown-option-body--child-active`, this.mergedDisabled && `${i}-dropdown-option-body--disabled`],
          onMousemove: this.handleMouseMove,
          onMouseenter: this.handleMouseEnter,
          onMouseleave: this.handleMouseLeave,
          onClick: this.handleClick
        },
        w = f == null ? void 0 : f(o),
        x = c("div", Object.assign({
          class: [`${i}-dropdown-option`, w == null ? void 0 : w.class],
          "data-dropdown-option": !0
        }, w), c("div", Lt(y, h), [c("div", {
          class: [`${i}-dropdown-option-body__prefix`, l && `${i}-dropdown-option-body__prefix--show-icon`]
        }, [s ? s(o) : Yt(o.icon)]), c("div", {
          "data-dropdown-option": !0,
          class: `${i}-dropdown-option-body__label`
        }, a ? a(o) : Yt((t = o[this.labelField]) !== null && t !== void 0 ? t : o.title)), c("div", {
          "data-dropdown-option": !0,
          class: [`${i}-dropdown-option-body__suffix`, d && `${i}-dropdown-option-body__suffix--has-submenu`]
        }, this.hasSubmenu ? c(Yf, null, {
          default: () => c(uu, null)
        }) : null)]), this.hasSubmenu ? c(Dn, null, {
          default: () => [c(Fn, null, {
            default: () => c("div", {
              class: `${i}-dropdown-offset-container`
            }, c(Nn, {
              show: this.mergedShowSubmenu,
              placement: this.placement,
              to: p && this.popoverBody || void 0,
              teleportDisabled: !p
            }, {
              default: () => c("div", {
                class: `${i}-dropdown-menu-wrapper`
              }, r ? c(bt, {
                onBeforeEnter: this.handleSubmenuBeforeEnter,
                onAfterEnter: this.handleSubmenuAfterEnter,
                name: "fade-in-scale-up-transition",
                appear: !0
              }, {
                default: () => v
              }) : v)
            }))
          })]
        }) : null);
      return u ? u({
        node: x,
        option: o
      }) : x
    }
  }),
  Qf = q({
    name: "DropdownGroupHeader",
    props: {
      clsPrefix: {
        type: String,
        required: !0
      },
      tmNode: {
        type: Object,
        required: !0
      }
    },
    setup() {
      const {
        showIconRef: e,
        hasSubmenuRef: t
      } = ue(lo), {
        renderLabelRef: r,
        labelFieldRef: o,
        nodePropsRef: n,
        renderOptionRef: i
      } = ue(lr);
      return {
        labelField: o,
        showIcon: e,
        hasSubmenu: t,
        renderLabel: r,
        nodeProps: n,
        renderOption: i
      }
    },
    render() {
      var e;
      const {
        clsPrefix: t,
        hasSubmenu: r,
        showIcon: o,
        nodeProps: n,
        renderLabel: i,
        renderOption: l
      } = this, {
        rawNode: d
      } = this.tmNode, a = c("div", Object.assign({
        class: `${t}-dropdown-option`
      }, n == null ? void 0 : n(d)), c("div", {
        class: `${t}-dropdown-option-body ${t}-dropdown-option-body--group`
      }, c("div", {
        "data-dropdown-option": !0,
        class: [`${t}-dropdown-option-body__prefix`, o && `${t}-dropdown-option-body__prefix--show-icon`]
      }, Yt(d.icon)), c("div", {
        class: `${t}-dropdown-option-body__label`,
        "data-dropdown-option": !0
      }, i ? i(d) : Yt((e = d.title) !== null && e !== void 0 ? e : d[this.labelField])), c("div", {
        class: [`${t}-dropdown-option-body__suffix`, r && `${t}-dropdown-option-body__suffix--has-submenu`],
        "data-dropdown-option": !0
      })));
      return l ? l({
        node: a,
        option: d
      }) : a
    }
  }),
  eh = q({
    name: "NDropdownGroup",
    props: {
      clsPrefix: {
        type: String,
        required: !0
      },
      tmNode: {
        type: Object,
        required: !0
      },
      parentKey: {
        type: [String, Number],
        default: null
      }
    },
    render() {
      const {
        tmNode: e,
        parentKey: t,
        clsPrefix: r
      } = this, {
        children: o
      } = e;
      return c(Ve, null, c(Qf, {
        clsPrefix: r,
        tmNode: e,
        key: e.key
      }), o == null ? void 0 : o.map(n => {
        const {
          rawNode: i
        } = n;
        return i.show === !1 ? null : vi(i) ? c(pi, {
          clsPrefix: r,
          key: n.key
        }) : n.isGroup ? (Kr("dropdown", "`group` node is not allowed to be put in `group` node."), null) : c(gi, {
          clsPrefix: r,
          tmNode: n,
          parentKey: t,
          key: n.key
        })
      }))
    }
  }),
  th = q({
    name: "DropdownRenderOption",
    props: {
      tmNode: {
        type: Object,
        required: !0
      }
    },
    render() {
      const {
        rawNode: {
          render: e,
          props: t
        }
      } = this.tmNode;
      return c("div", t, [e == null ? void 0 : e()])
    }
  }),
  mi = q({
    name: "DropdownMenu",
    props: {
      scrollable: Boolean,
      showArrow: Boolean,
      arrowStyle: [String, Object],
      clsPrefix: {
        type: String,
        required: !0
      },
      tmNodes: {
        type: Array,
        default: () => []
      },
      parentKey: {
        type: [String, Number],
        default: null
      }
    },
    setup(e) {
      const {
        renderIconRef: t,
        childrenFieldRef: r
      } = ue(lr);
      _e(lo, {
        showIconRef: D(() => {
          const n = t.value;
          return e.tmNodes.some(i => {
            var l;
            if (i.isGroup) return (l = i.children) === null || l === void 0 ? void 0 : l.some(({
              rawNode: a
            }) => n ? n(a) : a.icon);
            const {
              rawNode: d
            } = i;
            return n ? n(d) : d.icon
          })
        }),
        hasSubmenuRef: D(() => {
          const {
            value: n
          } = r;
          return e.tmNodes.some(i => {
            var l;
            if (i.isGroup) return (l = i.children) === null || l === void 0 ? void 0 : l.some(({
              rawNode: a
            }) => Br(a, n));
            const {
              rawNode: d
            } = i;
            return Br(d, n)
          })
        })
      });
      const o = O(null);
      return _e(Ar, null), _e(Dr, null), _e(tr, o), {
        bodyRef: o
      }
    },
    render() {
      const {
        parentKey: e,
        clsPrefix: t,
        scrollable: r
      } = this, o = this.tmNodes.map(n => {
        const {
          rawNode: i
        } = n;
        return i.show === !1 ? null : Jf(i) ? c(th, {
          tmNode: n,
          key: n.key
        }) : vi(i) ? c(pi, {
          clsPrefix: t,
          key: n.key
        }) : Zf(i) ? c(eh, {
          clsPrefix: t,
          tmNode: n,
          parentKey: e,
          key: n.key
        }) : c(gi, {
          clsPrefix: t,
          tmNode: n,
          parentKey: e,
          key: n.key,
          props: i.props,
          scrollable: r
        })
      });
      return c("div", {
        class: [`${t}-dropdown-menu`, r && `${t}-dropdown-menu--scrollable`],
        ref: "bodyRef"
      }, r ? c(wn, {
        contentClass: `${t}-dropdown-menu__content`
      }, {
        default: () => o
      }) : o, this.showArrow ? di({
        clsPrefix: t,
        arrowStyle: this.arrowStyle
      }) : null)
    }
  }),
  rh = S("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [$n(), S("dropdown-option", `
 position: relative;
 `, [L("a", `
 text-decoration: none;
 color: inherit;
 outline: none;
 `, [L("&::before", `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), S("dropdown-option-body", `
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `, [L("&::before", `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `), ze("disabled", [j("pending", `
 color: var(--n-option-text-color-hover);
 `, [B("prefix, suffix", `
 color: var(--n-option-text-color-hover);
 `), L("&::before", "background-color: var(--n-option-color-hover);")]), j("active", `
 color: var(--n-option-text-color-active);
 `, [B("prefix, suffix", `
 color: var(--n-option-text-color-active);
 `), L("&::before", "background-color: var(--n-option-color-active);")]), j("child-active", `
 color: var(--n-option-text-color-child-active);
 `, [B("prefix, suffix", `
 color: var(--n-option-text-color-child-active);
 `)])]), j("disabled", `
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `), j("group", `
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `, [B("prefix", `
 width: calc(var(--n-option-prefix-width) / 2);
 `, [j("show-icon", `
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]), B("prefix", `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `, [j("show-icon", `
 width: var(--n-option-icon-prefix-width);
 `), S("icon", `
 font-size: var(--n-option-icon-size);
 `)]), B("label", `
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `), B("suffix", `
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `, [j("has-submenu", `
 width: var(--n-option-icon-suffix-width);
 `), S("icon", `
 font-size: var(--n-option-icon-size);
 `)]), S("dropdown-menu", "pointer-events: all;")]), S("dropdown-offset-container", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]), S("dropdown-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `), S("dropdown-menu-wrapper", `
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `), L(">", [S("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), ze("scrollable", `
 padding: var(--n-padding);
 `), j("scrollable", [B("content", `
 padding: var(--n-padding);
 `)])]),
  oh = {
    animated: {
      type: Boolean,
      default: !0
    },
    keyboard: {
      type: Boolean,
      default: !0
    },
    size: {
      type: String,
      default: "medium"
    },
    inverted: Boolean,
    placement: {
      type: String,
      default: "bottom"
    },
    onSelect: [Function, Array],
    options: {
      type: Array,
      default: () => []
    },
    menuProps: Function,
    showArrow: Boolean,
    renderLabel: Function,
    renderIcon: Function,
    renderOption: Function,
    nodeProps: Function,
    labelField: {
      type: String,
      default: "label"
    },
    keyField: {
      type: String,
      default: "key"
    },
    childrenField: {
      type: String,
      default: "children"
    },
    value: [String, Number]
  },
  nh = Object.keys(ar),
  ih = Object.assign(Object.assign(Object.assign({}, ar), oh), ae.props),
  rn = q({
    name: "Dropdown",
    inheritAttrs: !1,
    props: ih,
    setup(e) {
      const t = O(!1),
        r = nr(ee(e, "show"), t),
        o = D(() => {
          const {
            keyField: F,
            childrenField: M
          } = e;
          return Gu(e.options, {
            getKey(C) {
              return C[F]
            },
            getDisabled(C) {
              return C.disabled === !0
            },
            getIgnored(C) {
              return C.type === "divider" || C.type === "render"
            },
            getChildren(C) {
              return C[M]
            }
          })
        }),
        n = D(() => o.value.treeNodes),
        i = O(null),
        l = O(null),
        d = O(null),
        a = D(() => {
          var F, M, C;
          return (C = (M = (F = i.value) !== null && F !== void 0 ? F : l.value) !== null && M !== void 0 ? M : d.value) !== null && C !== void 0 ? C : null
        }),
        s = D(() => o.value.getPath(a.value).keyPath),
        u = D(() => o.value.getPath(e.value).keyPath),
        f = We(() => e.keyboard && r.value);
      El({
        keydown: {
          ArrowUp: {
            prevent: !0,
            handler: m
          },
          ArrowRight: {
            prevent: !0,
            handler: b
          },
          ArrowDown: {
            prevent: !0,
            handler: R
          },
          ArrowLeft: {
            prevent: !0,
            handler: k
          },
          Enter: {
            prevent: !0,
            handler: z
          },
          Escape: P
        }
      }, f);
      const {
        mergedClsPrefixRef: h,
        inlineThemeDisabled: p
      } = Re(e), v = ae("Dropdown", "-dropdown", rh, Hf, e, h);
      _e(lr, {
        labelFieldRef: ee(e, "labelField"),
        childrenFieldRef: ee(e, "childrenField"),
        renderLabelRef: ee(e, "renderLabel"),
        renderIconRef: ee(e, "renderIcon"),
        hoverKeyRef: i,
        keyboardKeyRef: l,
        lastToggledSubmenuKeyRef: d,
        pendingKeyPathRef: s,
        activeKeyPathRef: u,
        animatedRef: ee(e, "animated"),
        mergedShowRef: r,
        nodePropsRef: ee(e, "nodeProps"),
        renderOptionRef: ee(e, "renderOption"),
        menuPropsRef: ee(e, "menuProps"),
        doSelect: y,
        doUpdateShow: w
      }), Te(r, F => {
        !e.animated && !F && x()
      });

      function y(F, M) {
        const {
          onSelect: C
        } = e;
        C && me(C, F, M)
      }

      function w(F) {
        const {
          "onUpdate:show": M,
          onUpdateShow: C
        } = e;
        M && me(M, F), C && me(C, F), t.value = F
      }

      function x() {
        i.value = null, l.value = null, d.value = null
      }

      function P() {
        w(!1)
      }

      function k() {
        $("left")
      }

      function b() {
        $("right")
      }

      function m() {
        $("up")
      }

      function R() {
        $("down")
      }

      function z() {
        const F = A();
        F != null && F.isLeaf && r.value && (y(F.key, F.rawNode), w(!1))
      }

      function A() {
        var F;
        const {
          value: M
        } = o, {
          value: C
        } = a;
        return !M || C === null ? null : (F = M.getNode(C)) !== null && F !== void 0 ? F : null
      }

      function $(F) {
        const {
          value: M
        } = a, {
          value: {
            getFirstAvailableNode: C
          }
        } = o;
        let T = null;
        if (M === null) {
          const H = C();
          H !== null && (T = H.key)
        } else {
          const H = A();
          if (H) {
            let N;
            switch (F) {
              case "down":
                N = H.getNext();
                break;
              case "up":
                N = H.getPrev();
                break;
              case "right":
                N = H.getChild();
                break;
              case "left":
                N = H.getParent();
                break
            }
            N && (T = N.key)
          }
        }
        T !== null && (i.value = null, l.value = T)
      }
      const _ = D(() => {
          const {
            size: F,
            inverted: M
          } = e, {
            common: {
              cubicBezierEaseInOut: C
            },
            self: T
          } = v.value, {
            padding: H,
            dividerColor: N,
            borderRadius: Y,
            optionOpacityDisabled: re,
            [ie("optionIconSuffixWidth", F)]: ve,
            [ie("optionSuffixWidth", F)]: Ce,
            [ie("optionIconPrefixWidth", F)]: W,
            [ie("optionPrefixWidth", F)]: oe,
            [ie("fontSize", F)]: Q,
            [ie("optionHeight", F)]: we,
            [ie("optionIconSize", F)]: ye
          } = T, ne = {
            "--n-bezier": C,
            "--n-font-size": Q,
            "--n-padding": H,
            "--n-border-radius": Y,
            "--n-option-height": we,
            "--n-option-prefix-width": oe,
            "--n-option-icon-prefix-width": W,
            "--n-option-suffix-width": Ce,
            "--n-option-icon-suffix-width": ve,
            "--n-option-icon-size": ye,
            "--n-divider-color": N,
            "--n-option-opacity-disabled": re
          };
          return M ? (ne["--n-color"] = T.colorInverted, ne["--n-option-color-hover"] = T.optionColorHoverInverted, ne["--n-option-color-active"] = T.optionColorActiveInverted, ne["--n-option-text-color"] = T.optionTextColorInverted, ne["--n-option-text-color-hover"] = T.optionTextColorHoverInverted, ne["--n-option-text-color-active"] = T.optionTextColorActiveInverted, ne["--n-option-text-color-child-active"] = T.optionTextColorChildActiveInverted, ne["--n-prefix-color"] = T.prefixColorInverted, ne["--n-suffix-color"] = T.suffixColorInverted, ne["--n-group-header-text-color"] = T.groupHeaderTextColorInverted) : (ne["--n-color"] = T.color, ne["--n-option-color-hover"] = T.optionColorHover, ne["--n-option-color-active"] = T.optionColorActive, ne["--n-option-text-color"] = T.optionTextColor, ne["--n-option-text-color-hover"] = T.optionTextColorHover, ne["--n-option-text-color-active"] = T.optionTextColorActive, ne["--n-option-text-color-child-active"] = T.optionTextColorChildActive, ne["--n-prefix-color"] = T.prefixColor, ne["--n-suffix-color"] = T.suffixColor, ne["--n-group-header-text-color"] = T.groupHeaderTextColor), ne
        }),
        K = p ? Fe("dropdown", D(() => `${e.size[0]}${e.inverted?"i":""}`), _, e) : void 0;
      return {
        mergedClsPrefix: h,
        mergedTheme: v,
        tmNodes: n,
        mergedShow: r,
        handleAfterLeave: () => {
          e.animated && x()
        },
        doUpdateShow: w,
        cssVars: p ? void 0 : _,
        themeClass: K == null ? void 0 : K.themeClass,
        onRender: K == null ? void 0 : K.onRender
      }
    },
    render() {
      const e = (o, n, i, l, d) => {
          var a;
          const {
            mergedClsPrefix: s,
            menuProps: u
          } = this;
          (a = this.onRender) === null || a === void 0 || a.call(this);
          const f = (u == null ? void 0 : u(void 0, this.tmNodes.map(p => p.rawNode))) || {},
            h = {
              ref: Il(n),
              class: [o, `${s}-dropdown`, this.themeClass],
              clsPrefix: s,
              tmNodes: this.tmNodes,
              style: [i, this.cssVars],
              showArrow: this.showArrow,
              arrowStyle: this.arrowStyle,
              scrollable: this.scrollable,
              onMouseenter: l,
              onMouseleave: d
            };
          return c(mi, Lt(this.$attrs, h, f))
        },
        {
          mergedTheme: t
        } = this,
        r = {
          show: this.mergedShow,
          theme: t.peers.Popover,
          themeOverrides: t.peerOverrides.Popover,
          internalOnAfterLeave: this.handleAfterLeave,
          internalRenderBody: e,
          onUpdateShow: this.doUpdateShow,
          "onUpdate:show": void 0
        };
      return c(ci, Object.assign({}, xn(this.$props, nh), r), {
        trigger: () => {
          var o, n;
          return (n = (o = this.$slots).default) === null || n === void 0 ? void 0 : n.call(o)
        }
      })
    }
  }),
  ah = {
    gapSmall: "4px 8px",
    gapMedium: "8px 12px",
    gapLarge: "12px 16px"
  },
  lh = () => ah,
  sh = {
    name: "Space",
    self: lh
  },
  dh = sh;
let kr;
const ch = () => {
    if (!Vr) return !0;
    if (kr === void 0) {
      const e = document.createElement("div");
      e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "1px", e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e);
      const t = e.scrollHeight === 1;
      return document.body.removeChild(e), kr = t
    }
    return kr
  },
  uh = Object.assign(Object.assign({}, ae.props), {
    align: String,
    justify: {
      type: String,
      default: "start"
    },
    inline: Boolean,
    vertical: Boolean,
    size: {
      type: [String, Number, Array],
      default: "medium"
    },
    wrapItem: {
      type: Boolean,
      default: !0
    },
    itemStyle: [String, Object],
    wrap: {
      type: Boolean,
      default: !0
    },
    internalUseGap: {
      type: Boolean,
      default: void 0
    }
  }),
  fh = q({
    name: "Space",
    props: uh,
    setup(e) {
      const {
        mergedClsPrefixRef: t,
        mergedRtlRef: r
      } = Re(e), o = ae("Space", "-space", void 0, dh, e, t), n = kt("Space", r, t);
      return {
        useGap: ch(),
        rtlEnabled: n,
        mergedClsPrefix: t,
        margin: D(() => {
          const {
            size: i
          } = e;
          if (Array.isArray(i)) return {
            horizontal: i[0],
            vertical: i[1]
          };
          if (typeof i == "number") return {
            horizontal: i,
            vertical: i
          };
          const {
            self: {
              [ie("gap", i)]: l
            }
          } = o.value, {
            row: d,
            col: a
          } = ml(l);
          return {
            horizontal: $o(a),
            vertical: $o(d)
          }
        })
      }
    },
    render() {
      const {
        vertical: e,
        align: t,
        inline: r,
        justify: o,
        itemStyle: n,
        margin: i,
        wrap: l,
        mergedClsPrefix: d,
        rtlEnabled: a,
        useGap: s,
        wrapItem: u,
        internalUseGap: f
      } = this, h = gl(Tl(this));
      if (!h.length) return null;
      const p = `${i.horizontal}px`,
        v = `${i.horizontal/2}px`,
        y = `${i.vertical}px`,
        w = `${i.vertical/2}px`,
        x = h.length - 1,
        P = o.startsWith("space-");
      return c("div", {
        role: "none",
        class: [`${d}-space`, a && `${d}-space--rtl`],
        style: {
          display: r ? "inline-flex" : "flex",
          flexDirection: e ? "column" : "row",
          justifyContent: ["start", "end"].includes(o) ? "flex-" + o : o,
          flexWrap: !l || e ? "nowrap" : "wrap",
          marginTop: s || e ? "" : `-${w}`,
          marginBottom: s || e ? "" : `-${w}`,
          alignItems: t,
          gap: s ? `${i.vertical}px ${i.horizontal}px` : ""
        }
      }, !u && (s || f) ? h : h.map((k, b) => c("div", {
        role: "none",
        style: [n, {
          maxWidth: "100%"
        }, s ? "" : e ? {
          marginBottom: b !== x ? y : ""
        } : a ? {
          marginLeft: P ? o === "space-between" && b === x ? "" : v : b !== x ? p : "",
          marginRight: P ? o === "space-between" && b === 0 ? "" : v : "",
          paddingTop: w,
          paddingBottom: w
        } : {
          marginRight: P ? o === "space-between" && b === x ? "" : v : b !== x ? p : "",
          marginLeft: P ? o === "space-between" && b === 0 ? "" : v : "",
          paddingTop: w,
          paddingBottom: w
        }]
      }, k)))
    }
  }),
  so = Object.assign(Object.assign({}, ae.props), {
    showToolbar: {
      type: Boolean,
      default: !0
    },
    showToolbarTooltip: Boolean
  }),
  bi = Ge("n-image");

function hh() {
  return {
    toolbarIconColor: "rgba(255, 255, 255, .9)",
    toolbarColor: "rgba(0, 0, 0, .35)",
    toolbarBoxShadow: "none",
    toolbarBorderRadius: "24px"
  }
}
const ph = Et({
    name: "Image",
    common: Be,
    peers: {
      Tooltip: ao
    },
    self: hh
  }),
  vh = e => {
    const {
      textColor2: t,
      cardColor: r,
      modalColor: o,
      popoverColor: n,
      dividerColor: i,
      borderRadius: l,
      fontSize: d,
      hoverColor: a
    } = e;
    return {
      textColor: t,
      color: r,
      colorHover: a,
      colorModal: o,
      colorHoverModal: Ae(o, a),
      colorPopover: n,
      colorHoverPopover: Ae(n, a),
      borderColor: i,
      borderColorModal: Ae(o, i),
      borderColorPopover: Ae(n, i),
      borderRadius: l,
      fontSize: d
    }
  },
  gh = {
    name: "List",
    common: Be,
    self: vh
  },
  mh = gh,
  bh = e => {
    const {
      infoColor: t,
      successColor: r,
      warningColor: o,
      errorColor: n,
      textColor2: i,
      progressRailColor: l,
      fontSize: d,
      fontWeight: a
    } = e;
    return {
      fontSize: d,
      fontSizeCircle: "28px",
      fontWeightCircle: a,
      railColor: l,
      railHeight: "8px",
      iconSizeCircle: "36px",
      iconSizeLine: "18px",
      iconColor: t,
      iconColorInfo: t,
      iconColorSuccess: r,
      iconColorWarning: o,
      iconColorError: n,
      textColorCircle: i,
      textColorLineInner: "rgb(255, 255, 255)",
      textColorLineOuter: i,
      fillColor: t,
      fillColorInfo: t,
      fillColorSuccess: r,
      fillColorWarning: o,
      fillColorError: n,
      lineBgProcessing: "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"
    }
  },
  yh = {
    name: "Progress",
    common: Be,
    self: bh
  },
  yi = yh,
  wh = {
    titleFontSizeSmall: "26px",
    titleFontSizeMedium: "32px",
    titleFontSizeLarge: "40px",
    titleFontSizeHuge: "48px",
    fontSizeSmall: "14px",
    fontSizeMedium: "14px",
    fontSizeLarge: "15px",
    fontSizeHuge: "16px",
    iconSizeSmall: "64px",
    iconSizeMedium: "80px",
    iconSizeLarge: "100px",
    iconSizeHuge: "125px",
    iconColor418: void 0,
    iconColor404: void 0,
    iconColor403: void 0,
    iconColor500: void 0
  },
  xh = e => {
    const {
      textColor2: t,
      textColor1: r,
      errorColor: o,
      successColor: n,
      infoColor: i,
      warningColor: l,
      lineHeight: d,
      fontWeightStrong: a
    } = e;
    return Object.assign(Object.assign({}, wh), {
      lineHeight: d,
      titleFontWeight: a,
      titleTextColor: r,
      textColor: t,
      iconColorError: o,
      iconColorSuccess: n,
      iconColorInfo: i,
      iconColorWarning: l
    })
  },
  Ch = {
    name: "Result",
    common: Be,
    self: xh
  },
  Sh = Ch,
  kh = {
    thPaddingSmall: "6px",
    thPaddingMedium: "12px",
    thPaddingLarge: "12px",
    tdPaddingSmall: "6px",
    tdPaddingMedium: "12px",
    tdPaddingLarge: "12px"
  },
  Ph = e => {
    const {
      dividerColor: t,
      cardColor: r,
      modalColor: o,
      popoverColor: n,
      tableHeaderColor: i,
      tableColorStriped: l,
      textColor1: d,
      textColor2: a,
      borderRadius: s,
      fontWeightStrong: u,
      lineHeight: f,
      fontSizeSmall: h,
      fontSizeMedium: p,
      fontSizeLarge: v
    } = e;
    return Object.assign(Object.assign({}, kh), {
      fontSizeSmall: h,
      fontSizeMedium: p,
      fontSizeLarge: v,
      lineHeight: f,
      borderRadius: s,
      borderColor: Ae(r, t),
      borderColorModal: Ae(o, t),
      borderColorPopover: Ae(n, t),
      tdColor: r,
      tdColorModal: o,
      tdColorPopover: n,
      tdColorStriped: Ae(r, l),
      tdColorStripedModal: Ae(o, l),
      tdColorStripedPopover: Ae(n, l),
      thColor: Ae(r, i),
      thColorModal: Ae(o, i),
      thColorPopover: Ae(n, i),
      thTextColor: d,
      tdTextColor: a,
      thFontWeight: u
    })
  },
  $h = {
    name: "Table",
    common: Be,
    self: Ph
  },
  zh = $h,
  Th = e => {
    const {
      textColor1: t,
      textColor2: r,
      fontWeightStrong: o,
      fontSize: n
    } = e;
    return {
      fontSize: n,
      titleTextColor: t,
      textColor: r,
      titleFontWeight: o
    }
  },
  Ih = {
    name: "Thing",
    common: Be,
    self: Th
  },
  _h = Ih,
  Rh = e => {
    const {
      iconColor: t,
      primaryColor: r,
      errorColor: o,
      textColor2: n,
      successColor: i,
      opacityDisabled: l,
      actionColor: d,
      borderColor: a,
      hoverColor: s,
      lineHeight: u,
      borderRadius: f,
      fontSize: h
    } = e;
    return {
      fontSize: h,
      lineHeight: u,
      borderRadius: f,
      draggerColor: d,
      draggerBorder: `1px dashed ${a}`,
      draggerBorderHover: `1px dashed ${r}`,
      itemColorHover: s,
      itemColorHoverError: le(o, {
        alpha: .06
      }),
      itemTextColor: n,
      itemTextColorError: o,
      itemTextColorSuccess: i,
      itemIconColor: t,
      itemDisabledOpacity: l,
      itemBorderImageCardError: `1px solid ${o}`,
      itemBorderImageCard: `1px solid ${a}`
    }
  },
  Mh = Et({
    name: "Upload",
    common: Be,
    peers: {
      Button: bl,
      Progress: yi
    },
    self: Rh
  }),
  Oh = Mh,
  Bh = c("svg", {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c("path", {
    d: "M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z",
    fill: "currentColor"
  })),
  Lh = c("svg", {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c("path", {
    d: "M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z",
    fill: "currentColor"
  })),
  Eh = c("svg", {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c("path", {
    d: "M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z",
    fill: "currentColor"
  })),
  Ah = L([L("body >", [S("image-container", "position: fixed;")]), S("image-preview-container", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 `), S("image-preview-overlay", `
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background: rgba(0, 0, 0, .3);
 `, [zo()]), S("image-preview-toolbar", `
 z-index: 1;
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 border-radius: var(--n-toolbar-border-radius);
 height: 48px;
 bottom: 40px;
 padding: 0 12px;
 background: var(--n-toolbar-color);
 box-shadow: var(--n-toolbar-box-shadow);
 color: var(--n-toolbar-icon-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `, [S("base-icon", `
 padding: 0 8px;
 font-size: 28px;
 cursor: pointer;
 `), zo()]), S("image-preview-wrapper", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 pointer-events: none;
 `, [$n()]), S("image-preview", `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: all;
 margin: auto;
 max-height: calc(100vh - 32px);
 max-width: calc(100vw - 32px);
 transition: transform .3s var(--n-bezier);
 `), S("image", `
 display: inline-flex;
 max-height: 100%;
 max-width: 100%;
 `, [ze("preview-disabled", `
 cursor: pointer;
 `), L("img", `
 border-radius: inherit;
 `)])]),
  Vt = 32,
  wi = q({
    name: "ImagePreview",
    props: Object.assign(Object.assign({}, so), {
      onNext: Function,
      onPrev: Function,
      clsPrefix: {
        type: String,
        required: !0
      }
    }),
    setup(e) {
      const t = ae("Image", "-image", Ah, ph, e, ee(e, "clsPrefix"));
      let r = null;
      const o = O(null),
        n = O(null),
        i = O(void 0),
        l = O(!1),
        d = O(!1),
        {
          localeRef: a
        } = ro("Image");

      function s() {
        const {
          value: U
        } = n;
        if (!r || !U) return;
        const {
          style: J
        } = U, V = r.getBoundingClientRect(), de = V.left + V.width / 2, fe = V.top + V.height / 2;
        J.transformOrigin = `${de}px ${fe}px`
      }

      function u(U) {
        var J, V;
        switch (U.key) {
          case " ":
            U.preventDefault();
            break;
          case "ArrowLeft":
            (J = e.onPrev) === null || J === void 0 || J.call(e);
            break;
          case "ArrowRight":
            (V = e.onNext) === null || V === void 0 || V.call(e);
            break;
          case "Escape":
            we();
            break
        }
      }
      Te(l, U => {
        U ? Oe("keydown", document, u) : Ie("keydown", document, u)
      }), nt(() => {
        Ie("keydown", document, u)
      });
      let f = 0,
        h = 0,
        p = 0,
        v = 0,
        y = 0,
        w = 0,
        x = 0,
        P = 0,
        k = !1;

      function b(U) {
        const {
          clientX: J,
          clientY: V
        } = U;
        p = J - f, v = V - h, Bn(Q)
      }

      function m(U) {
        const {
          mouseUpClientX: J,
          mouseUpClientY: V,
          mouseDownClientX: de,
          mouseDownClientY: fe
        } = U, Me = de - J, $e = fe - V, De = `vertical${$e>0?"Top":"Bottom"}`, Ke = `horizontal${Me>0?"Left":"Right"}`;
        return {
          moveVerticalDirection: De,
          moveHorizontalDirection: Ke,
          deltaHorizontal: Me,
          deltaVertical: $e
        }
      }

      function R(U) {
        const {
          value: J
        } = o;
        if (!J) return {
          offsetX: 0,
          offsetY: 0
        };
        const V = J.getBoundingClientRect(),
          {
            moveVerticalDirection: de,
            moveHorizontalDirection: fe,
            deltaHorizontal: Me,
            deltaVertical: $e
          } = U || {};
        let De = 0,
          Ke = 0;
        return V.width <= window.innerWidth ? De = 0 : V.left > 0 ? De = (V.width - window.innerWidth) / 2 : V.right < window.innerWidth ? De = -(V.width - window.innerWidth) / 2 : fe === "horizontalRight" ? De = Math.min((V.width - window.innerWidth) / 2, y - (Me ? ? 0)) : De = Math.max(-((V.width - window.innerWidth) / 2), y - (Me ? ? 0)), V.height <= window.innerHeight ? Ke = 0 : V.top > 0 ? Ke = (V.height - window.innerHeight) / 2 : V.bottom < window.innerHeight ? Ke = -(V.height - window.innerHeight) / 2 : de === "verticalBottom" ? Ke = Math.min((V.height - window.innerHeight) / 2, w - ($e ? ? 0)) : Ke = Math.max(-((V.height - window.innerHeight) / 2), w - ($e ? ? 0)), {
          offsetX: De,
          offsetY: Ke
        }
      }

      function z(U) {
        Ie("mousemove", document, b), Ie("mouseup", document, z);
        const {
          clientX: J,
          clientY: V
        } = U;
        k = !1;
        const de = m({
            mouseUpClientX: J,
            mouseUpClientY: V,
            mouseDownClientX: x,
            mouseDownClientY: P
          }),
          fe = R(de);
        p = fe.offsetX, v = fe.offsetY, Q()
      }
      const A = ue(bi, null);

      function $(U) {
        var J, V;
        if ((V = (J = A == null ? void 0 : A.previewedImgPropsRef.value) === null || J === void 0 ? void 0 : J.onMousedown) === null || V === void 0 || V.call(J, U), U.button !== 0) return;
        const {
          clientX: de,
          clientY: fe
        } = U;
        k = !0, f = de - p, h = fe - v, y = p, w = v, x = de, P = fe, Q(), Oe("mousemove", document, b), Oe("mouseup", document, z)
      }

      function _(U) {
        var J, V;
        (V = (J = A == null ? void 0 : A.previewedImgPropsRef.value) === null || J === void 0 ? void 0 : J.onDblclick) === null || V === void 0 || V.call(J, U);
        const de = Ce();
        M = M === de ? 1 : de, Q()
      }
      const K = 1.5;
      let F = 0,
        M = 1,
        C = 0;

      function T() {
        M = 1, F = 0
      }

      function H() {
        var U;
        T(), C = 0, (U = e.onPrev) === null || U === void 0 || U.call(e)
      }

      function N() {
        var U;
        T(), C = 0, (U = e.onNext) === null || U === void 0 || U.call(e)
      }

      function Y() {
        C -= 90, Q()
      }

      function re() {
        C += 90, Q()
      }

      function ve() {
        const {
          value: U
        } = o;
        if (!U) return 1;
        const {
          innerWidth: J,
          innerHeight: V
        } = window, de = Math.max(1, U.naturalHeight / (V - Vt)), fe = Math.max(1, U.naturalWidth / (J - Vt));
        return Math.max(3, de * 2, fe * 2)
      }

      function Ce() {
        const {
          value: U
        } = o;
        if (!U) return 1;
        const {
          innerWidth: J,
          innerHeight: V
        } = window, de = U.naturalHeight / (V - Vt), fe = U.naturalWidth / (J - Vt);
        return de < 1 && fe < 1 ? 1 : Math.max(de, fe)
      }

      function W() {
        const U = ve();
        M < U && (F += 1, M = Math.min(U, Math.pow(K, F)), Q())
      }

      function oe() {
        if (M > .5) {
          const U = M;
          F -= 1, M = Math.max(.5, Math.pow(K, F));
          const J = U - M;
          Q(!1);
          const V = R();
          M += J, Q(!1), M -= J, p = V.offsetX, v = V.offsetY, Q()
        }
      }

      function Q(U = !0) {
        var J;
        const {
          value: V
        } = o;
        if (!V) return;
        const {
          style: de
        } = V, fe = yl((J = A == null ? void 0 : A.previewedImgPropsRef.value) === null || J === void 0 ? void 0 : J.style);
        let Me = "";
        if (typeof fe == "string") Me = fe + ";";
        else
          for (const De in fe) Me += `${yc(De)}: ${fe[De]};`;
        const $e = `transform-origin: center; transform: translateX(${p}px) translateY(${v}px) rotate(${C}deg) scale(${M});`;
        k ? de.cssText = Me + "cursor: grabbing; transition: none;" + $e : de.cssText = Me + "cursor: grab;" + $e + (U ? "" : "transition: none;"), U || V.offsetHeight
      }

      function we() {
        l.value = !l.value, d.value = !0
      }

      function ye() {
        M = Ce(), F = Math.ceil(Math.log(M) / Math.log(K)), p = 0, v = 0, Q()
      }
      const ne = {
        setPreviewSrc: U => {
          i.value = U
        },
        setThumbnailEl: U => {
          r = U
        },
        toggleShow: we
      };

      function Le(U, J) {
        if (e.showToolbarTooltip) {
          const {
            value: V
          } = t;
          return c(fi, {
            to: !1,
            theme: V.peers.Tooltip,
            themeOverrides: V.peerOverrides.Tooltip,
            keepAliveOnHover: !1
          }, {
            default: () => a.value[J],
            trigger: () => U
          })
        } else return U
      }
      const Ne = D(() => {
          const {
            common: {
              cubicBezierEaseInOut: U
            },
            self: {
              toolbarIconColor: J,
              toolbarBorderRadius: V,
              toolbarBoxShadow: de,
              toolbarColor: fe
            }
          } = t.value;
          return {
            "--n-bezier": U,
            "--n-toolbar-icon-color": J,
            "--n-toolbar-color": fe,
            "--n-toolbar-border-radius": V,
            "--n-toolbar-box-shadow": de
          }
        }),
        {
          inlineThemeDisabled: He
        } = Re(),
        Ee = He ? Fe("image-preview", void 0, Ne, e) : void 0;
      return Object.assign({
        previewRef: o,
        previewWrapperRef: n,
        previewSrc: i,
        show: l,
        appear: Nr(),
        displayed: d,
        previewedImgProps: A == null ? void 0 : A.previewedImgPropsRef,
        handleWheel(U) {
          U.preventDefault()
        },
        handlePreviewMousedown: $,
        handlePreviewDblclick: _,
        syncTransformOrigin: s,
        handleAfterLeave: () => {
          T(), C = 0, d.value = !1
        },
        handleDragStart: U => {
          var J, V;
          (V = (J = A == null ? void 0 : A.previewedImgPropsRef.value) === null || J === void 0 ? void 0 : J.onDragstart) === null || V === void 0 || V.call(J, U), U.preventDefault()
        },
        zoomIn: W,
        zoomOut: oe,
        rotateCounterclockwise: Y,
        rotateClockwise: re,
        handleSwitchPrev: H,
        handleSwitchNext: N,
        withTooltip: Le,
        resizeToOrignalImageSize: ye,
        cssVars: He ? void 0 : Ne,
        themeClass: Ee == null ? void 0 : Ee.themeClass,
        onRender: Ee == null ? void 0 : Ee.onRender
      }, ne)
    },
    render() {
      var e, t;
      const {
        clsPrefix: r
      } = this;
      return c(Ve, null, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e), c(vn, {
        show: this.show
      }, {
        default: () => {
          var o;
          return this.show || this.displayed ? ((o = this.onRender) === null || o === void 0 || o.call(this), xt(c("div", {
            class: [`${r}-image-preview-container`, this.themeClass],
            style: this.cssVars,
            onWheel: this.handleWheel
          }, c(bt, {
            name: "fade-in-transition",
            appear: this.appear
          }, {
            default: () => this.show ? c("div", {
              class: `${r}-image-preview-overlay`,
              onClick: this.toggleShow
            }) : null
          }), this.showToolbar ? c(bt, {
            name: "fade-in-transition",
            appear: this.appear
          }, {
            default: () => {
              if (!this.show) return null;
              const {
                withTooltip: n
              } = this;
              return c("div", {
                class: `${r}-image-preview-toolbar`
              }, this.onPrev ? c(Ve, null, n(c(pe, {
                clsPrefix: r,
                onClick: this.handleSwitchPrev
              }, {
                default: () => Bh
              }), "tipPrevious"), n(c(pe, {
                clsPrefix: r,
                onClick: this.handleSwitchNext
              }, {
                default: () => Lh
              }), "tipNext")) : null, n(c(pe, {
                clsPrefix: r,
                onClick: this.rotateCounterclockwise
              }, {
                default: () => c(xu, null)
              }), "tipCounterclockwise"), n(c(pe, {
                clsPrefix: r,
                onClick: this.rotateClockwise
              }, {
                default: () => c(wu, null)
              }), "tipClockwise"), n(c(pe, {
                clsPrefix: r,
                onClick: this.resizeToOrignalImageSize
              }, {
                default: () => c(ku, null)
              }), "tipOriginalSize"), n(c(pe, {
                clsPrefix: r,
                onClick: this.zoomOut
              }, {
                default: () => c(Su, null)
              }), "tipZoomOut"), n(c(pe, {
                clsPrefix: r,
                onClick: this.zoomIn
              }, {
                default: () => c(Cu, null)
              }), "tipZoomIn"), n(c(pe, {
                clsPrefix: r,
                onClick: this.toggleShow
              }, {
                default: () => Eh
              }), "tipClose"))
            }
          }) : null, c(bt, {
            name: "fade-in-scale-up-transition",
            onAfterLeave: this.handleAfterLeave,
            appear: this.appear,
            onEnter: this.syncTransformOrigin,
            onBeforeLeave: this.syncTransformOrigin
          }, {
            default: () => {
              const {
                previewedImgProps: n = {}
              } = this;
              return xt(c("div", {
                class: `${r}-image-preview-wrapper`,
                ref: "previewWrapperRef"
              }, c("img", Object.assign({}, n, {
                draggable: !1,
                onMousedown: this.handlePreviewMousedown,
                onDblclick: this.handlePreviewDblclick,
                class: [`${r}-image-preview`, n.class],
                key: this.previewSrc,
                src: this.previewSrc,
                ref: "previewRef",
                onDragstart: this.handleDragStart
              }))), [
                [yn, this.show]
              ])
            }
          })), [
            [Hr, {
              enabled: this.show
            }]
          ])) : null
        }
      }))
    }
  }),
  xi = Ge("n-image-group"),
  Dh = so,
  Fh = q({
    name: "ImageGroup",
    props: Dh,
    setup(e) {
      let t;
      const {
        mergedClsPrefixRef: r
      } = Re(e), o = `c${$r()}`, n = Fr(), i = a => {
        var s;
        t = a, (s = d.value) === null || s === void 0 || s.setPreviewSrc(a)
      };

      function l(a) {
        if (!(n != null && n.proxy)) return;
        const u = n.proxy.$el.parentElement.querySelectorAll(`[data-group-id=${o}]:not([data-error=true])`);
        if (!u.length) return;
        const f = Array.from(u).findIndex(h => h.dataset.previewSrc === t);
        ~f ? i(u[(f + a + u.length) % u.length].dataset.previewSrc) : i(u[0].dataset.previewSrc)
      }
      _e(xi, {
        mergedClsPrefixRef: r,
        setPreviewSrc: i,
        setThumbnailEl: a => {
          var s;
          (s = d.value) === null || s === void 0 || s.setThumbnailEl(a)
        },
        toggleShow: () => {
          var a;
          (a = d.value) === null || a === void 0 || a.toggleShow()
        },
        groupId: o
      });
      const d = O(null);
      return {
        mergedClsPrefix: r,
        previewInstRef: d,
        next: () => l(1),
        prev: () => l(-1)
      }
    },
    render() {
      return c(wi, {
        theme: this.theme,
        themeOverrides: this.themeOverrides,
        clsPrefix: this.mergedClsPrefix,
        ref: "previewInstRef",
        onPrev: this.prev,
        onNext: this.next,
        showToolbar: this.showToolbar,
        showToolbarTooltip: this.showToolbarTooltip
      }, this.$slots)
    }
  }),
  Nh = Object.assign({
    alt: String,
    height: [String, Number],
    imgProps: Object,
    previewedImgProps: Object,
    lazy: Boolean,
    intersectionObserverOptions: Object,
    objectFit: {
      type: String,
      default: "fill"
    },
    previewSrc: String,
    fallbackSrc: String,
    width: [String, Number],
    src: String,
    previewDisabled: Boolean,
    loadDescription: String,
    onError: Function,
    onLoad: Function
  }, so),
  Lr = q({
    name: "Image",
    props: Nh,
    inheritAttrs: !1,
    setup(e) {
      const t = O(null),
        r = O(!1),
        o = O(null),
        n = ue(xi, null),
        {
          mergedClsPrefixRef: i
        } = n || Re(e),
        l = {
          click: () => {
            if (e.previewDisabled || r.value) return;
            const s = e.previewSrc || e.src;
            if (n) {
              n.setPreviewSrc(s), n.setThumbnailEl(t.value), n.toggleShow();
              return
            }
            const {
              value: u
            } = o;
            u && (u.setPreviewSrc(s), u.setThumbnailEl(t.value), u.toggleShow())
          }
        },
        d = O(!e.lazy);
      et(() => {
        var s;
        (s = t.value) === null || s === void 0 || s.setAttribute("data-group-id", (n == null ? void 0 : n.groupId) || "")
      }), et(() => {
        if (wr) return;
        let s;
        const u = ft(() => {
          s == null || s(), s = void 0, e.lazy && (s = Mf(t.value, e.intersectionObserverOptions, d))
        });
        nt(() => {
          u(), s == null || s()
        })
      }), ft(() => {
        var s;
        e.src, (s = e.imgProps) === null || s === void 0 || s.src, r.value = !1
      });
      const a = O(!1);
      return _e(bi, {
        previewedImgPropsRef: ee(e, "previewedImgProps")
      }), Object.assign({
        mergedClsPrefix: i,
        groupId: n == null ? void 0 : n.groupId,
        previewInstRef: o,
        imageRef: t,
        showError: r,
        shouldStartLoading: d,
        loaded: a,
        mergedOnClick: s => {
          var u, f;
          l.click(), (f = (u = e.imgProps) === null || u === void 0 ? void 0 : u.onClick) === null || f === void 0 || f.call(u, s)
        },
        mergedOnError: s => {
          if (!d.value) return;
          r.value = !0;
          const {
            onError: u,
            imgProps: {
              onError: f
            } = {}
          } = e;
          u == null || u(s), f == null || f(s)
        },
        mergedOnLoad: s => {
          const {
            onLoad: u,
            imgProps: {
              onLoad: f
            } = {}
          } = e;
          u == null || u(s), f == null || f(s), a.value = !0
        }
      }, l)
    },
    render() {
      var e, t;
      const {
        mergedClsPrefix: r,
        imgProps: o = {},
        loaded: n,
        $attrs: i,
        lazy: l
      } = this, d = (t = (e = this.$slots).placeholder) === null || t === void 0 ? void 0 : t.call(e), a = this.src || o.src || "", s = c("img", Object.assign(Object.assign({}, o), {
        ref: "imageRef",
        width: this.width || o.width,
        height: this.height || o.height,
        src: wr ? a : this.showError ? this.fallbackSrc : this.shouldStartLoading ? a : void 0,
        alt: this.alt || o.alt,
        "aria-label": this.alt || o.alt,
        onClick: this.mergedOnClick,
        onError: this.mergedOnError,
        onLoad: this.mergedOnLoad,
        loading: wr && l && !this.intersectionObserverOptions ? "lazy" : "eager",
        style: [o.style || "", d && !n ? {
          height: "0",
          width: "0",
          visibility: "hidden"
        } : "", {
          objectFit: this.objectFit
        }],
        "data-error": this.showError,
        "data-preview-src": this.previewSrc || this.src
      }));
      return c("div", Object.assign({}, i, {
        role: "none",
        class: [i.class, `${r}-image`, (this.previewDisabled || this.showError) && `${r}-image--preview-disabled`]
      }), this.groupId ? s : c(wi, {
        theme: this.theme,
        themeOverrides: this.themeOverrides,
        clsPrefix: r,
        ref: "previewInstRef",
        showToolbar: this.showToolbar,
        showToolbarTooltip: this.showToolbarTooltip
      }, {
        default: () => s
      }), !n && d)
    }
  }),
  Hh = L([S("list", `
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `, [j("show-divider", [S("list-item", [L("&:not(:last-child)", [B("divider", `
 background-color: var(--n-merged-border-color);
 `)])])]), j("clickable", [S("list-item", `
 cursor: pointer;
 `)]), j("bordered", `
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `), j("hoverable", [S("list-item", `
 border-radius: var(--n-border-radius);
 `, [L("&:hover", `
 background-color: var(--n-merged-color-hover);
 `, [B("divider", `
 background-color: transparent;
 `)])])]), j("bordered, hoverable", [S("list-item", `
 padding: 12px 20px;
 `), B("header, footer", `
 padding: 12px 20px;
 `)]), B("header, footer", `
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `, [L("&:not(:last-child)", `
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]), S("list-item", `
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [B("prefix", `
 margin-right: 20px;
 flex: 0;
 `), B("suffix", `
 margin-left: 20px;
 flex: 0;
 `), B("main", `
 flex: 1;
 `), B("divider", `
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]), zn(S("list", `
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)), Tn(S("list", `
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),
  jh = Object.assign(Object.assign({}, ae.props), {
    size: {
      type: String,
      default: "medium"
    },
    bordered: Boolean,
    clickable: Boolean,
    hoverable: Boolean,
    showDivider: {
      type: Boolean,
      default: !0
    }
  }),
  Ci = Ge("n-list"),
  Uh = q({
    name: "List",
    props: jh,
    setup(e) {
      const {
        mergedClsPrefixRef: t,
        inlineThemeDisabled: r,
        mergedRtlRef: o
      } = Re(e), n = kt("List", o, t), i = ae("List", "-list", Hh, mh, e, t);
      _e(Ci, {
        showDividerRef: ee(e, "showDivider"),
        mergedClsPrefixRef: t
      });
      const l = D(() => {
          const {
            common: {
              cubicBezierEaseInOut: a
            },
            self: {
              fontSize: s,
              textColor: u,
              color: f,
              colorModal: h,
              colorPopover: p,
              borderColor: v,
              borderColorModal: y,
              borderColorPopover: w,
              borderRadius: x,
              colorHover: P,
              colorHoverModal: k,
              colorHoverPopover: b
            }
          } = i.value;
          return {
            "--n-font-size": s,
            "--n-bezier": a,
            "--n-text-color": u,
            "--n-color": f,
            "--n-border-radius": x,
            "--n-border-color": v,
            "--n-border-color-modal": y,
            "--n-border-color-popover": w,
            "--n-color-modal": h,
            "--n-color-popover": p,
            "--n-color-hover": P,
            "--n-color-hover-modal": k,
            "--n-color-hover-popover": b
          }
        }),
        d = r ? Fe("list", void 0, l, e) : void 0;
      return {
        mergedClsPrefix: t,
        rtlEnabled: n,
        cssVars: r ? void 0 : l,
        themeClass: d == null ? void 0 : d.themeClass,
        onRender: d == null ? void 0 : d.onRender
      }
    },
    render() {
      var e;
      const {
        $slots: t,
        mergedClsPrefix: r,
        onRender: o
      } = this;
      return o == null || o(), c("ul", {
        class: [`${r}-list`, this.rtlEnabled && `${r}-list--rtl`, this.bordered && `${r}-list--bordered`, this.showDivider && `${r}-list--show-divider`, this.hoverable && `${r}-list--hoverable`, this.clickable && `${r}-list--clickable`, this.themeClass],
        style: this.cssVars
      }, t.header ? c("div", {
        class: `${r}-list__header`
      }, t.header()) : null, (e = t.default) === null || e === void 0 ? void 0 : e.call(t), t.footer ? c("div", {
        class: `${r}-list__footer`
      }, t.footer()) : null)
    }
  }),
  Wh = q({
    name: "ListItem",
    setup() {
      const e = ue(Ci, null);
      return e || Pt("list-item", "`n-list-item` must be placed in `n-list`."), {
        showDivider: e.showDividerRef,
        mergedClsPrefix: e.mergedClsPrefixRef
      }
    },
    render() {
      const {
        $slots: e,
        mergedClsPrefix: t
      } = this;
      return c("li", {
        class: `${t}-list-item`
      }, e.prefix ? c("div", {
        class: `${t}-list-item__prefix`
      }, e.prefix()) : null, e.default ? c("div", {
        class: `${t}-list-item__main`
      }, e) : null, e.suffix ? c("div", {
        class: `${t}-list-item__suffix`
      }, e.suffix()) : null, this.showDivider && c("div", {
        class: `${t}-list-item__divider`
      }))
    }
  });

function $t() {
  const e = ue(wl, null);
  return e === null && Pt("use-message", "No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."), e
}
const Vh = L([S("progress", {
    display: "inline-block"
  }, [S("progress-icon", `
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `), j("line", `
 width: 100%;
 display: block;
 `, [S("progress-content", `
 display: flex;
 align-items: center;
 `, [S("progress-graph", {
    flex: 1
  })]), S("progress-custom-content", {
    marginLeft: "14px"
  }), S("progress-icon", `
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `, [j("as-text", `
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]), j("circle, dashboard", {
    width: "120px"
  }, [S("progress-custom-content", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `), S("progress-text", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `), S("progress-icon", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]), j("multiple-circle", `
 width: 200px;
 color: inherit;
 `, [S("progress-text", `
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]), S("progress-content", {
    position: "relative"
  }), S("progress-graph", {
    position: "relative"
  }, [S("progress-graph-circle", [L("svg", {
    verticalAlign: "bottom"
  }), S("progress-graph-circle-fill", `
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `, [j("empty", {
    opacity: 0
  })]), S("progress-graph-circle-rail", `
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]), S("progress-graph-line", [j("indicator-inside", [S("progress-graph-line-rail", `
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `, [S("progress-graph-line-fill", `
 height: inherit;
 border-radius: 10px;
 `), S("progress-graph-line-indicator", `
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]), j("indicator-inside-label", `
 height: 16px;
 display: flex;
 align-items: center;
 `, [S("progress-graph-line-rail", `
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `), S("progress-graph-line-indicator", `
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]), S("progress-graph-line-rail", `
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `, [S("progress-graph-line-fill", `
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `, [j("processing", [L("&::after", `
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]), L("@keyframes progress-processing-animation", `
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),
  Kh = {
    success: c(qr, null),
    error: c(Gr, null),
    warning: c(Xr, null),
    info: c(Yr, null)
  },
  qh = q({
    name: "ProgressLine",
    props: {
      clsPrefix: {
        type: String,
        required: !0
      },
      percentage: {
        type: Number,
        default: 0
      },
      railColor: String,
      railStyle: [String, Object],
      fillColor: String,
      status: {
        type: String,
        required: !0
      },
      indicatorPlacement: {
        type: String,
        required: !0
      },
      indicatorTextColor: String,
      unit: {
        type: String,
        default: "%"
      },
      processing: {
        type: Boolean,
        required: !0
      },
      showIndicator: {
        type: Boolean,
        required: !0
      },
      height: [String, Number],
      railBorderRadius: [String, Number],
      fillBorderRadius: [String, Number]
    },
    setup(e, {
      slots: t
    }) {
      const r = D(() => qe(e.height)),
        o = D(() => e.railBorderRadius !== void 0 ? qe(e.railBorderRadius) : e.height !== void 0 ? qe(e.height, {
          c: .5
        }) : ""),
        n = D(() => e.fillBorderRadius !== void 0 ? qe(e.fillBorderRadius) : e.railBorderRadius !== void 0 ? qe(e.railBorderRadius) : e.height !== void 0 ? qe(e.height, {
          c: .5
        }) : "");
      return () => {
        const {
          indicatorPlacement: i,
          railColor: l,
          railStyle: d,
          percentage: a,
          unit: s,
          indicatorTextColor: u,
          status: f,
          showIndicator: h,
          fillColor: p,
          processing: v,
          clsPrefix: y
        } = e;
        return c("div", {
          class: `${y}-progress-content`,
          role: "none"
        }, c("div", {
          class: `${y}-progress-graph`,
          "aria-hidden": !0
        }, c("div", {
          class: [`${y}-progress-graph-line`, {
            [`${y}-progress-graph-line--indicator-${i}`]: !0
          }]
        }, c("div", {
          class: `${y}-progress-graph-line-rail`,
          style: [{
            backgroundColor: l,
            height: r.value,
            borderRadius: o.value
          }, d]
        }, c("div", {
          class: [`${y}-progress-graph-line-fill`, v && `${y}-progress-graph-line-fill--processing`],
          style: {
            maxWidth: `${e.percentage}%`,
            backgroundColor: p,
            height: r.value,
            lineHeight: r.value,
            borderRadius: n.value
          }
        }, i === "inside" ? c("div", {
          class: `${y}-progress-graph-line-indicator`,
          style: {
            color: u
          }
        }, a, s) : null)))), h && i === "outside" ? c("div", null, t.default ? c("div", {
          class: `${y}-progress-custom-content`,
          style: {
            color: u
          },
          role: "none"
        }, t.default()) : f === "default" ? c("div", {
          role: "none",
          class: `${y}-progress-icon ${y}-progress-icon--as-text`,
          style: {
            color: u
          }
        }, a, s) : c("div", {
          class: `${y}-progress-icon`,
          "aria-hidden": !0
        }, c(pe, {
          clsPrefix: y
        }, {
          default: () => Kh[f]
        }))) : null)
      }
    }
  }),
  Gh = {
    success: c(qr, null),
    error: c(Gr, null),
    warning: c(Xr, null),
    info: c(Yr, null)
  },
  Xh = q({
    name: "ProgressCircle",
    props: {
      clsPrefix: {
        type: String,
        required: !0
      },
      status: {
        type: String,
        required: !0
      },
      strokeWidth: {
        type: Number,
        required: !0
      },
      fillColor: String,
      railColor: String,
      railStyle: [String, Object],
      percentage: {
        type: Number,
        default: 0
      },
      offsetDegree: {
        type: Number,
        default: 0
      },
      showIndicator: {
        type: Boolean,
        required: !0
      },
      indicatorTextColor: String,
      unit: String,
      viewBoxWidth: {
        type: Number,
        required: !0
      },
      gapDegree: {
        type: Number,
        required: !0
      },
      gapOffsetDegree: {
        type: Number,
        default: 0
      }
    },
    setup(e, {
      slots: t
    }) {
      function r(o, n, i) {
        const {
          gapDegree: l,
          viewBoxWidth: d,
          strokeWidth: a
        } = e, s = 50, u = 0, f = s, h = 0, p = 2 * s, v = 50 + a / 2, y = `M ${v},${v} m ${u},${f}
      a ${s},${s} 0 1 1 ${h},${-p}
      a ${s},${s} 0 1 1 ${-h},${p}`, w = Math.PI * 2 * s, x = {
          stroke: i,
          strokeDasharray: `${o/100*(w-l)}px ${d*8}px`,
          strokeDashoffset: `-${l/2}px`,
          transformOrigin: n ? "center" : void 0,
          transform: n ? `rotate(${n}deg)` : void 0
        };
        return {
          pathString: y,
          pathStyle: x
        }
      }
      return () => {
        const {
          fillColor: o,
          railColor: n,
          strokeWidth: i,
          offsetDegree: l,
          status: d,
          percentage: a,
          showIndicator: s,
          indicatorTextColor: u,
          unit: f,
          gapOffsetDegree: h,
          clsPrefix: p
        } = e, {
          pathString: v,
          pathStyle: y
        } = r(100, 0, n), {
          pathString: w,
          pathStyle: x
        } = r(a, l, o), P = 100 + i;
        return c("div", {
          class: `${p}-progress-content`,
          role: "none"
        }, c("div", {
          class: `${p}-progress-graph`,
          "aria-hidden": !0
        }, c("div", {
          class: `${p}-progress-graph-circle`,
          style: {
            transform: h ? `rotate(${h}deg)` : void 0
          }
        }, c("svg", {
          viewBox: `0 0 ${P} ${P}`
        }, c("g", null, c("path", {
          class: `${p}-progress-graph-circle-rail`,
          d: v,
          "stroke-width": i,
          "stroke-linecap": "round",
          fill: "none",
          style: y
        })), c("g", null, c("path", {
          class: [`${p}-progress-graph-circle-fill`, a === 0 && `${p}-progress-graph-circle-fill--empty`],
          d: w,
          "stroke-width": i,
          "stroke-linecap": "round",
          fill: "none",
          style: x
        }))))), s ? c("div", null, t.default ? c("div", {
          class: `${p}-progress-custom-content`,
          role: "none"
        }, t.default()) : d !== "default" ? c("div", {
          class: `${p}-progress-icon`,
          "aria-hidden": !0
        }, c(pe, {
          clsPrefix: p
        }, {
          default: () => Gh[d]
        })) : c("div", {
          class: `${p}-progress-text`,
          style: {
            color: u
          },
          role: "none"
        }, c("span", {
          class: `${p}-progress-text__percentage`
        }, a), c("span", {
          class: `${p}-progress-text__unit`
        }, f))) : null)
      }
    }
  });

function on(e, t, r = 100) {
  return `m ${r/2} ${r/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`
}
const Yh = q({
    name: "ProgressMultipleCircle",
    props: {
      clsPrefix: {
        type: String,
        required: !0
      },
      viewBoxWidth: {
        type: Number,
        required: !0
      },
      percentage: {
        type: Array,
        default: [0]
      },
      strokeWidth: {
        type: Number,
        required: !0
      },
      circleGap: {
        type: Number,
        required: !0
      },
      showIndicator: {
        type: Boolean,
        required: !0
      },
      fillColor: {
        type: Array,
        default: () => []
      },
      railColor: {
        type: Array,
        default: () => []
      },
      railStyle: {
        type: Array,
        default: () => []
      }
    },
    setup(e, {
      slots: t
    }) {
      const r = D(() => e.percentage.map((n, i) => `${Math.PI*n/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*i)-e.circleGap*i)*2}, ${e.viewBoxWidth*8}`));
      return () => {
        const {
          viewBoxWidth: o,
          strokeWidth: n,
          circleGap: i,
          showIndicator: l,
          fillColor: d,
          railColor: a,
          railStyle: s,
          percentage: u,
          clsPrefix: f
        } = e;
        return c("div", {
          class: `${f}-progress-content`,
          role: "none"
        }, c("div", {
          class: `${f}-progress-graph`,
          "aria-hidden": !0
        }, c("div", {
          class: `${f}-progress-graph-circle`
        }, c("svg", {
          viewBox: `0 0 ${o} ${o}`
        }, u.map((h, p) => c("g", {
          key: p
        }, c("path", {
          class: `${f}-progress-graph-circle-rail`,
          d: on(o / 2 - n / 2 * (1 + 2 * p) - i * p, n, o),
          "stroke-width": n,
          "stroke-linecap": "round",
          fill: "none",
          style: [{
            strokeDashoffset: 0,
            stroke: a[p]
          }, s[p]]
        }), c("path", {
          class: [`${f}-progress-graph-circle-fill`, h === 0 && `${f}-progress-graph-circle-fill--empty`],
          d: on(o / 2 - n / 2 * (1 + 2 * p) - i * p, n, o),
          "stroke-width": n,
          "stroke-linecap": "round",
          fill: "none",
          style: {
            strokeDasharray: r.value[p],
            strokeDashoffset: 0,
            stroke: d[p]
          }
        })))))), l && t.default ? c("div", null, c("div", {
          class: `${f}-progress-text`
        }, t.default())) : null)
      }
    }
  }),
  Zh = Object.assign(Object.assign({}, ae.props), {
    processing: Boolean,
    type: {
      type: String,
      default: "line"
    },
    gapDegree: Number,
    gapOffsetDegree: Number,
    status: {
      type: String,
      default: "default"
    },
    railColor: [String, Array],
    railStyle: [String, Array],
    color: [String, Array],
    viewBoxWidth: {
      type: Number,
      default: 100
    },
    strokeWidth: {
      type: Number,
      default: 7
    },
    percentage: [Number, Array],
    unit: {
      type: String,
      default: "%"
    },
    showIndicator: {
      type: Boolean,
      default: !0
    },
    indicatorPosition: {
      type: String,
      default: "outside"
    },
    indicatorPlacement: {
      type: String,
      default: "outside"
    },
    indicatorTextColor: String,
    circleGap: {
      type: Number,
      default: 1
    },
    height: Number,
    borderRadius: [String, Number],
    fillBorderRadius: [String, Number],
    offsetDegree: Number
  }),
  Jh = q({
    name: "Progress",
    props: Zh,
    setup(e) {
      const t = D(() => e.indicatorPlacement || e.indicatorPosition),
        r = D(() => {
          if (e.gapDegree || e.gapDegree === 0) return e.gapDegree;
          if (e.type === "dashboard") return 75
        }),
        {
          mergedClsPrefixRef: o,
          inlineThemeDisabled: n
        } = Re(e),
        i = ae("Progress", "-progress", Vh, yi, e, o),
        l = D(() => {
          const {
            status: a
          } = e, {
            common: {
              cubicBezierEaseInOut: s
            },
            self: {
              fontSize: u,
              fontSizeCircle: f,
              railColor: h,
              railHeight: p,
              iconSizeCircle: v,
              iconSizeLine: y,
              textColorCircle: w,
              textColorLineInner: x,
              textColorLineOuter: P,
              lineBgProcessing: k,
              fontWeightCircle: b,
              [ie("iconColor", a)]: m,
              [ie("fillColor", a)]: R
            }
          } = i.value;
          return {
            "--n-bezier": s,
            "--n-fill-color": R,
            "--n-font-size": u,
            "--n-font-size-circle": f,
            "--n-font-weight-circle": b,
            "--n-icon-color": m,
            "--n-icon-size-circle": v,
            "--n-icon-size-line": y,
            "--n-line-bg-processing": k,
            "--n-rail-color": h,
            "--n-rail-height": p,
            "--n-text-color-circle": w,
            "--n-text-color-line-inner": x,
            "--n-text-color-line-outer": P
          }
        }),
        d = n ? Fe("progress", D(() => e.status[0]), l, e) : void 0;
      return {
        mergedClsPrefix: o,
        mergedIndicatorPlacement: t,
        gapDeg: r,
        cssVars: n ? void 0 : l,
        themeClass: d == null ? void 0 : d.themeClass,
        onRender: d == null ? void 0 : d.onRender
      }
    },
    render() {
      const {
        type: e,
        cssVars: t,
        indicatorTextColor: r,
        showIndicator: o,
        status: n,
        railColor: i,
        railStyle: l,
        color: d,
        percentage: a,
        viewBoxWidth: s,
        strokeWidth: u,
        mergedIndicatorPlacement: f,
        unit: h,
        borderRadius: p,
        fillBorderRadius: v,
        height: y,
        processing: w,
        circleGap: x,
        mergedClsPrefix: P,
        gapDeg: k,
        gapOffsetDegree: b,
        themeClass: m,
        $slots: R,
        onRender: z
      } = this;
      return z == null || z(), c("div", {
        class: [m, `${P}-progress`, `${P}-progress--${e}`, `${P}-progress--${n}`],
        style: t,
        "aria-valuemax": 100,
        "aria-valuemin": 0,
        "aria-valuenow": a,
        role: e === "circle" || e === "line" || e === "dashboard" ? "progressbar" : "none"
      }, e === "circle" || e === "dashboard" ? c(Xh, {
        clsPrefix: P,
        status: n,
        showIndicator: o,
        indicatorTextColor: r,
        railColor: i,
        fillColor: d,
        railStyle: l,
        offsetDegree: this.offsetDegree,
        percentage: a,
        viewBoxWidth: s,
        strokeWidth: u,
        gapDegree: k === void 0 ? e === "dashboard" ? 75 : 0 : k,
        gapOffsetDegree: b,
        unit: h
      }, R) : e === "line" ? c(qh, {
        clsPrefix: P,
        status: n,
        showIndicator: o,
        indicatorTextColor: r,
        railColor: i,
        fillColor: d,
        railStyle: l,
        percentage: a,
        processing: w,
        indicatorPlacement: f,
        unit: h,
        fillBorderRadius: v,
        railBorderRadius: p,
        height: y
      }, R) : e === "multiple-circle" ? c(Yh, {
        clsPrefix: P,
        strokeWidth: u,
        railColor: i,
        fillColor: d,
        railStyle: l,
        viewBoxWidth: s,
        percentage: a,
        showIndicator: o,
        circleGap: x
      }, R) : null)
    }
  }),
  Qh = c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36"
  }, c("circle", {
    fill: "#FFCB4C",
    cx: "18",
    cy: "17.018",
    r: "17"
  }), c("path", {
    fill: "#65471B",
    d: "M14.524 21.036c-.145-.116-.258-.274-.312-.464-.134-.46.13-.918.59-1.021 4.528-1.021 7.577 1.363 7.706 1.465.384.306.459.845.173 1.205-.286.358-.828.401-1.211.097-.11-.084-2.523-1.923-6.182-1.098-.274.061-.554-.016-.764-.184z"
  }), c("ellipse", {
    fill: "#65471B",
    cx: "13.119",
    cy: "11.174",
    rx: "2.125",
    ry: "2.656"
  }), c("ellipse", {
    fill: "#65471B",
    cx: "24.375",
    cy: "12.236",
    rx: "2.125",
    ry: "2.656"
  }), c("path", {
    fill: "#F19020",
    d: "M17.276 35.149s1.265-.411 1.429-1.352c.173-.972-.624-1.167-.624-1.167s1.041-.208 1.172-1.376c.123-1.101-.861-1.363-.861-1.363s.97-.4 1.016-1.539c.038-.959-.995-1.428-.995-1.428s5.038-1.221 5.556-1.341c.516-.12 1.32-.615 1.069-1.694-.249-1.08-1.204-1.118-1.697-1.003-.494.115-6.744 1.566-8.9 2.068l-1.439.334c-.54.127-.785-.11-.404-.512.508-.536.833-1.129.946-2.113.119-1.035-.232-2.313-.433-2.809-.374-.921-1.005-1.649-1.734-1.899-1.137-.39-1.945.321-1.542 1.561.604 1.854.208 3.375-.833 4.293-2.449 2.157-3.588 3.695-2.83 6.973.828 3.575 4.377 5.876 7.952 5.048l3.152-.681z"
  }), c("path", {
    fill: "#65471B",
    d: "M9.296 6.351c-.164-.088-.303-.224-.391-.399-.216-.428-.04-.927.393-1.112 4.266-1.831 7.699-.043 7.843.034.433.231.608.747.391 1.154-.216.405-.74.546-1.173.318-.123-.063-2.832-1.432-6.278.047-.257.109-.547.085-.785-.042zm12.135 3.75c-.156-.098-.286-.243-.362-.424-.187-.442.023-.927.468-1.084 4.381-1.536 7.685.48 7.823.567.415.26.555.787.312 1.178-.242.39-.776.495-1.191.238-.12-.072-2.727-1.621-6.267-.379-.266.091-.553.046-.783-.096z"
  })),
  ep = c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36"
  }, c("path", {
    fill: "#FFCC4D",
    d: "M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"
  }), c("ellipse", {
    fill: "#664500",
    cx: "18",
    cy: "27",
    rx: "5",
    ry: "6"
  }), c("path", {
    fill: "#664500",
    d: "M5.999 11c-.208 0-.419-.065-.599-.2-.442-.331-.531-.958-.2-1.4C8.462 5.05 12.816 5 13 5c.552 0 1 .448 1 1 0 .551-.445.998-.996 1-.155.002-3.568.086-6.204 3.6-.196.262-.497.4-.801.4zm24.002 0c-.305 0-.604-.138-.801-.4-2.64-3.521-6.061-3.598-6.206-3.6-.55-.006-.994-.456-.991-1.005C22.006 5.444 22.45 5 23 5c.184 0 4.537.05 7.8 4.4.332.442.242 1.069-.2 1.4-.18.135-.39.2-.599.2zm-16.087 4.5l1.793-1.793c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0L12.5 14.086l-1.793-1.793c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l1.793 1.793-1.793 1.793c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l1.793-1.793 1.793 1.793c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414L13.914 15.5zm11 0l1.793-1.793c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0L23.5 14.086l-1.793-1.793c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l1.793 1.793-1.793 1.793c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l1.793-1.793 1.793 1.793c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414L24.914 15.5z"
  })),
  tp = c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36"
  }, c("ellipse", {
    fill: "#292F33",
    cx: "18",
    cy: "26",
    rx: "18",
    ry: "10"
  }), c("ellipse", {
    fill: "#66757F",
    cx: "18",
    cy: "24",
    rx: "18",
    ry: "10"
  }), c("path", {
    fill: "#E1E8ED",
    d: "M18 31C3.042 31 1 16 1 12h34c0 2-1.958 19-17 19z"
  }), c("path", {
    fill: "#77B255",
    d: "M35 12.056c0 5.216-7.611 9.444-17 9.444S1 17.271 1 12.056C1 6.84 8.611 3.611 18 3.611s17 3.229 17 8.445z"
  }), c("ellipse", {
    fill: "#A6D388",
    cx: "18",
    cy: "13",
    rx: "15",
    ry: "7"
  }), c("path", {
    d: "M21 17c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.739-1.109.9-2.246.478-3.377-.461-1.236-1.438-1.996-1.731-2.077-.553 0-.958-.443-.958-.996 0-.552.491-.995 1.043-.995.997 0 2.395 1.153 3.183 2.625 1.034 1.933.91 4.039-.351 5.929-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.196-.451.294-.707.294zm-6-2c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.727-1.091.893-2.083.494-2.947-.444-.961-1.431-1.469-1.684-1.499-.552 0-.989-.447-.989-1 0-.552.458-1 1.011-1 .997 0 2.585.974 3.36 2.423.481.899 1.052 2.761-.528 5.131-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.197-.451.295-.707.295z",
    fill: "#5C913B"
  })),
  rp = c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36"
  }, c("path", {
    fill: "#EF9645",
    d: "M15.5 2.965c1.381 0 2.5 1.119 2.5 2.5v.005L20.5.465c1.381 0 2.5 1.119 2.5 2.5V4.25l2.5-1.535c1.381 0 2.5 1.119 2.5 2.5V8.75L29 18H15.458L15.5 2.965z"
  }), c("path", {
    fill: "#FFDC5D",
    d: "M4.625 16.219c1.381-.611 3.354.208 4.75 2.188.917 1.3 1.187 3.151 2.391 3.344.46.073 1.234-.313 1.234-1.397V4.5s0-2 2-2 2 2 2 2v11.633c0-.029 1-.064 1-.082V2s0-2 2-2 2 2 2 2v14.053c0 .017 1 .041 1 .069V4.25s0-2 2-2 2 2 2 2v12.638c0 .118 1 .251 1 .398V8.75s0-2 2-2 2 2 2 2V24c0 6.627-5.373 12-12 12-4.775 0-8.06-2.598-9.896-5.292C8.547 28.423 8.096 26.051 8 25.334c0 0-.123-1.479-1.156-2.865-1.469-1.969-2.5-3.156-3.125-3.866-.317-.359-.625-1.707.906-2.384z"
  })),
  op = S("result", `
 color: var(--n-text-color);
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 transition:
 color .3s var(--n-bezier);
`, [S("result-icon", `
 display: flex;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `, [B("status-image", `
 font-size: var(--n-icon-size);
 width: 1em;
 height: 1em;
 `), S("base-icon", `
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), S("result-content", {
    marginTop: "24px"
  }), S("result-footer", `
 margin-top: 24px;
 text-align: center;
 `), S("result-header", [B("title", `
 margin-top: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 text-align: center;
 color: var(--n-title-text-color);
 font-size: var(--n-title-font-size);
 `), B("description", `
 margin-top: 4px;
 text-align: center;
 font-size: var(--n-font-size);
 `)])]),
  np = {
    403: rp,
    404: Qh,
    418: tp,
    500: ep,
    info: c(Yr, null),
    success: c(qr, null),
    warning: c(Xr, null),
    error: c(Gr, null)
  },
  ip = Object.assign(Object.assign({}, ae.props), {
    size: {
      type: String,
      default: "medium"
    },
    status: {
      type: String,
      default: "info"
    },
    title: String,
    description: String
  }),
  ap = q({
    name: "Result",
    props: ip,
    setup(e) {
      const {
        mergedClsPrefixRef: t,
        inlineThemeDisabled: r
      } = Re(e), o = ae("Result", "-result", op, Sh, e, t), n = D(() => {
        const {
          size: l,
          status: d
        } = e, {
          common: {
            cubicBezierEaseInOut: a
          },
          self: {
            textColor: s,
            lineHeight: u,
            titleTextColor: f,
            titleFontWeight: h,
            [ie("iconColor", d)]: p,
            [ie("fontSize", l)]: v,
            [ie("titleFontSize", l)]: y,
            [ie("iconSize", l)]: w
          }
        } = o.value;
        return {
          "--n-bezier": a,
          "--n-font-size": v,
          "--n-icon-size": w,
          "--n-line-height": u,
          "--n-text-color": s,
          "--n-title-font-size": y,
          "--n-title-font-weight": h,
          "--n-title-text-color": f,
          "--n-icon-color": p || ""
        }
      }), i = r ? Fe("result", D(() => {
        const {
          size: l,
          status: d
        } = e;
        let a = "";
        return l && (a += l[0]), d && (a += d[0]), a
      }), n, e) : void 0;
      return {
        mergedClsPrefix: t,
        cssVars: r ? void 0 : n,
        themeClass: i == null ? void 0 : i.themeClass,
        onRender: i == null ? void 0 : i.onRender
      }
    },
    render() {
      var e;
      const {
        status: t,
        $slots: r,
        mergedClsPrefix: o,
        onRender: n
      } = this;
      return n == null || n(), c("div", {
        class: [`${o}-result`, this.themeClass],
        style: this.cssVars
      }, c("div", {
        class: `${o}-result-icon`
      }, ((e = r.icon) === null || e === void 0 ? void 0 : e.call(r)) || c(pe, {
        clsPrefix: o
      }, {
        default: () => np[t]
      })), c("div", {
        class: `${o}-result-header`
      }, this.title ? c("div", {
        class: `${o}-result-header__title`
      }, this.title) : null, this.description ? c("div", {
        class: `${o}-result-header__description`
      }, this.description) : null), r.default && c("div", {
        class: `${o}-result-content`
      }, r), r.footer && c("div", {
        class: `${o}-result-footer`
      }, r.footer()))
    }
  }),
  lp = L([S("table", `
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `, [L("th", `
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `, [L("&:last-child", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), L("td", `
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `, [L("&:last-child", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), j("bordered", `
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `, [L("tr", [L("&:last-child", [L("td", `
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]), j("single-line", [L("th", `
 border-right: 0px solid var(--n-merged-border-color);
 `), L("td", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), j("single-column", [L("tr", [L("&:not(:last-child)", [L("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]), j("striped", [L("tr:nth-of-type(even)", [L("td", "background-color: var(--n-td-color-striped)")])]), ze("bottom-bordered", [L("tr", [L("&:last-child", [L("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]), zn(S("table", `
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `, [L("th", `
 background-color: var(--n-th-color-modal);
 `), L("td", `
 background-color: var(--n-td-color-modal);
 `)])), Tn(S("table", `
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `, [L("th", `
 background-color: var(--n-th-color-popover);
 `), L("td", `
 background-color: var(--n-td-color-popover);
 `)]))]),
  sp = Object.assign(Object.assign({}, ae.props), {
    bordered: {
      type: Boolean,
      default: !0
    },
    bottomBordered: {
      type: Boolean,
      default: !0
    },
    singleLine: {
      type: Boolean,
      default: !0
    },
    striped: Boolean,
    singleColumn: Boolean,
    size: {
      type: String,
      default: "medium"
    }
  }),
  dp = q({
    name: "Table",
    props: sp,
    setup(e) {
      const {
        mergedClsPrefixRef: t,
        inlineThemeDisabled: r,
        mergedRtlRef: o
      } = Re(e), n = ae("Table", "-table", lp, zh, e, t), i = kt("Table", o, t), l = D(() => {
        const {
          size: a
        } = e, {
          self: {
            borderColor: s,
            tdColor: u,
            tdColorModal: f,
            tdColorPopover: h,
            thColor: p,
            thColorModal: v,
            thColorPopover: y,
            thTextColor: w,
            tdTextColor: x,
            borderRadius: P,
            thFontWeight: k,
            lineHeight: b,
            borderColorModal: m,
            borderColorPopover: R,
            tdColorStriped: z,
            tdColorStripedModal: A,
            tdColorStripedPopover: $,
            [ie("fontSize", a)]: _,
            [ie("tdPadding", a)]: K,
            [ie("thPadding", a)]: F
          },
          common: {
            cubicBezierEaseInOut: M
          }
        } = n.value;
        return {
          "--n-bezier": M,
          "--n-td-color": u,
          "--n-td-color-modal": f,
          "--n-td-color-popover": h,
          "--n-td-text-color": x,
          "--n-border-color": s,
          "--n-border-color-modal": m,
          "--n-border-color-popover": R,
          "--n-border-radius": P,
          "--n-font-size": _,
          "--n-th-color": p,
          "--n-th-color-modal": v,
          "--n-th-color-popover": y,
          "--n-th-font-weight": k,
          "--n-th-text-color": w,
          "--n-line-height": b,
          "--n-td-padding": K,
          "--n-th-padding": F,
          "--n-td-color-striped": z,
          "--n-td-color-striped-modal": A,
          "--n-td-color-striped-popover": $
        }
      }), d = r ? Fe("table", D(() => e.size[0]), l, e) : void 0;
      return {
        rtlEnabled: i,
        mergedClsPrefix: t,
        cssVars: r ? void 0 : l,
        themeClass: d == null ? void 0 : d.themeClass,
        onRender: d == null ? void 0 : d.onRender
      }
    },
    render() {
      var e;
      const {
        mergedClsPrefix: t
      } = this;
      return (e = this.onRender) === null || e === void 0 || e.call(this), c("table", {
        class: [`${t}-table`, this.themeClass, {
          [`${t}-table--rtl`]: this.rtlEnabled,
          [`${t}-table--bottom-bordered`]: this.bottomBordered,
          [`${t}-table--bordered`]: this.bordered,
          [`${t}-table--single-line`]: this.singleLine,
          [`${t}-table--single-column`]: this.singleColumn,
          [`${t}-table--striped`]: this.striped
        }],
        style: this.cssVars
      }, this.$slots)
    }
  }),
  cp = S("thing", `
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`, [S("thing-avatar", `
 margin-right: 12px;
 margin-top: 2px;
 `), S("thing-avatar-header-wrapper", `
 display: flex;
 flex-wrap: nowrap;
 `, [S("thing-header-wrapper", `
 flex: 1;
 `)]), S("thing-main", `
 flex-grow: 1;
 `, [S("thing-header", `
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `, [B("title", `
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]), B("description", [L("&:not(:last-child)", `
 margin-bottom: 4px;
 `)]), B("content", [L("&:not(:first-child)", `
 margin-top: 12px;
 `)]), B("footer", [L("&:not(:first-child)", `
 margin-top: 12px;
 `)]), B("action", [L("&:not(:first-child)", `
 margin-top: 12px;
 `)])])]),
  up = Object.assign(Object.assign({}, ae.props), {
    title: String,
    titleExtra: String,
    description: String,
    descriptionStyle: [String, Object],
    content: String,
    contentStyle: [String, Object],
    contentIndented: Boolean
  }),
  Si = q({
    name: "Thing",
    props: up,
    setup(e, {
      slots: t
    }) {
      const {
        mergedClsPrefixRef: r,
        inlineThemeDisabled: o,
        mergedRtlRef: n
      } = Re(e), i = ae("Thing", "-thing", cp, _h, e, r), l = kt("Thing", n, r), d = D(() => {
        const {
          self: {
            titleTextColor: s,
            textColor: u,
            titleFontWeight: f,
            fontSize: h
          },
          common: {
            cubicBezierEaseInOut: p
          }
        } = i.value;
        return {
          "--n-bezier": p,
          "--n-font-size": h,
          "--n-text-color": u,
          "--n-title-font-weight": f,
          "--n-title-text-color": s
        }
      }), a = o ? Fe("thing", void 0, d, e) : void 0;
      return () => {
        var s;
        const {
          value: u
        } = r, f = l ? l.value : !1;
        return (s = a == null ? void 0 : a.onRender) === null || s === void 0 || s.call(a), c("div", {
          class: [`${u}-thing`, a == null ? void 0 : a.themeClass, f && `${u}-thing--rtl`],
          style: o ? void 0 : d.value
        }, t.avatar && e.contentIndented ? c("div", {
          class: `${u}-thing-avatar`
        }, t.avatar()) : null, c("div", {
          class: `${u}-thing-main`
        }, !e.contentIndented && (t.header || e.title || t["header-extra"] || e.titleExtra || t.avatar) ? c("div", {
          class: `${u}-thing-avatar-header-wrapper`
        }, t.avatar ? c("div", {
          class: `${u}-thing-avatar`
        }, t.avatar()) : null, t.header || e.title || t["header-extra"] || e.titleExtra ? c("div", {
          class: `${u}-thing-header-wrapper`
        }, c("div", {
          class: `${u}-thing-header`
        }, t.header || e.title ? c("div", {
          class: `${u}-thing-header__title`
        }, t.header ? t.header() : e.title) : null, t["header-extra"] || e.titleExtra ? c("div", {
          class: `${u}-thing-header__extra`
        }, t["header-extra"] ? t["header-extra"]() : e.titleExtra) : null), t.description || e.description ? c("div", {
          class: `${u}-thing-main__description`,
          style: e.descriptionStyle
        }, t.description ? t.description() : e.description) : null) : null) : c(Ve, null, t.header || e.title || t["header-extra"] || e.titleExtra ? c("div", {
          class: `${u}-thing-header`
        }, t.header || e.title ? c("div", {
          class: `${u}-thing-header__title`
        }, t.header ? t.header() : e.title) : null, t["header-extra"] || e.titleExtra ? c("div", {
          class: `${u}-thing-header__extra`
        }, t["header-extra"] ? t["header-extra"]() : e.titleExtra) : null) : null, t.description || e.description ? c("div", {
          class: `${u}-thing-main__description`,
          style: e.descriptionStyle
        }, t.description ? t.description() : e.description) : null), t.default || e.content ? c("div", {
          class: `${u}-thing-main__content`,
          style: e.contentStyle
        }, t.default ? t.default() : e.content) : null, t.footer ? c("div", {
          class: `${u}-thing-main__footer`
        }, t.footer()) : null, t.action ? c("div", {
          class: `${u}-thing-main__action`
        }, t.action()) : null))
      }
    }
  }),
  zt = Ge("n-upload"),
  ki = "__UPLOAD_DRAGGER__",
  fp = q({
    name: "UploadDragger",
    [ki]: !0,
    setup(e, {
      slots: t
    }) {
      const r = ue(zt, null);
      return r || Pt("upload-dragger", "`n-upload-dragger` must be placed inside `n-upload`."), () => {
        const {
          mergedClsPrefixRef: {
            value: o
          },
          mergedDisabledRef: {
            value: n
          },
          maxReachedRef: {
            value: i
          }
        } = r;
        return c("div", {
          class: [`${o}-upload-dragger`, (n || i) && `${o}-upload-dragger--disabled`]
        }, t)
      }
    }
  });
var Pi = globalThis && globalThis.__awaiter || function (e, t, r, o) {
  function n(i) {
    return i instanceof r ? i : new r(function (l) {
      l(i)
    })
  }
  return new(r || (r = Promise))(function (i, l) {
    function d(u) {
      try {
        s(o.next(u))
      } catch (f) {
        l(f)
      }
    }

    function a(u) {
      try {
        s(o.throw(u))
      } catch (f) {
        l(f)
      }
    }

    function s(u) {
      u.done ? i(u.value) : n(u.value).then(d, a)
    }
    s((o = o.apply(e, t || [])).next())
  })
};
const $i = e => e.includes("image/"),
  nn = (e = "") => {
    const t = e.split("/"),
      o = t[t.length - 1].split(/#|\?/)[0];
    return (/\.[^./\\]*$/.exec(o) || [""])[0]
  },
  an = /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i,
  zi = e => {
    if (e.type) return $i(e.type);
    const t = nn(e.name || "");
    if (an.test(t)) return !0;
    const r = e.thumbnailUrl || e.url || "",
      o = nn(r);
    return !!(/^data:image\//.test(r) || an.test(o))
  };

function hp(e) {
  return Pi(this, void 0, void 0, function* () {
    return yield new Promise(t => {
      if (!e.type || !$i(e.type)) {
        t("");
        return
      }
      t(window.URL.createObjectURL(e))
    })
  })
}
const pp = Vr && window.FileReader && window.File;

function vp(e) {
  return e.isDirectory
}

function gp(e) {
  return e.isFile
}

function mp(e, t) {
  return Pi(this, void 0, void 0, function* () {
    const r = [];
    let o, n = 0;

    function i() {
      n++
    }

    function l() {
      n--, n || o(r)
    }

    function d(a) {
      a.forEach(s => {
        if (s) {
          if (i(), t && vp(s)) {
            const u = s.createReader();
            i(), u.readEntries(f => {
              d(f), l()
            }, () => {
              l()
            })
          } else gp(s) && (i(), s.file(u => {
            r.push({
              file: u,
              entry: s,
              source: "dnd"
            }), l()
          }, () => {
            l()
          }));
          l()
        }
      })
    }
    return yield new Promise(a => {
      o = a, d(e)
    }), r
  })
}

function Bt(e) {
  const {
    id: t,
    name: r,
    percentage: o,
    status: n,
    url: i,
    file: l,
    thumbnailUrl: d,
    type: a,
    fullPath: s,
    batchId: u
  } = e;
  return {
    id: t,
    name: r,
    percentage: o ? ? null,
    status: n,
    url: i ? ? null,
    file: l ? ? null,
    thumbnailUrl: d ? ? null,
    type: a ? ? null,
    fullPath: s ? ? null,
    batchId: u ? ? null
  }
}

function bp(e, t, r) {
  return e = e.toLowerCase(), t = t.toLocaleLowerCase(), r = r.toLocaleLowerCase(), r.split(",").map(n => n.trim()).filter(Boolean).some(n => {
    if (n.startsWith(".")) {
      if (e.endsWith(n)) return !0
    } else if (n.includes("/")) {
      const [i, l] = t.split("/"), [d, a] = n.split("/");
      if ((d === "*" || i && d && d === i) && (a === "*" || l && a && a === l)) return !0
    } else return !0;
    return !1
  })
}
const yp = (e, t) => {
    if (!e) return;
    const r = document.createElement("a");
    r.href = e, t !== void 0 && (r.download = t), document.body.appendChild(r), r.click(), document.body.removeChild(r)
  },
  Ti = q({
    name: "UploadTrigger",
    props: {
      abstract: Boolean
    },
    setup(e, {
      slots: t
    }) {
      const r = ue(zt, null);
      r || Pt("upload-trigger", "`n-upload-trigger` must be placed inside `n-upload`.");
      const {
        mergedClsPrefixRef: o,
        mergedDisabledRef: n,
        maxReachedRef: i,
        listTypeRef: l,
        dragOverRef: d,
        openOpenFileDialog: a,
        draggerInsideRef: s,
        handleFileAddition: u,
        mergedDirectoryDndRef: f,
        triggerStyleRef: h
      } = r, p = D(() => l.value === "image-card");

      function v() {
        n.value || i.value || a()
      }

      function y(k) {
        k.preventDefault(), d.value = !0
      }

      function w(k) {
        k.preventDefault(), d.value = !0
      }

      function x(k) {
        k.preventDefault(), d.value = !1
      }

      function P(k) {
        var b;
        if (k.preventDefault(), !s.value || n.value || i.value) {
          d.value = !1;
          return
        }
        const m = (b = k.dataTransfer) === null || b === void 0 ? void 0 : b.items;
        m != null && m.length ? mp(Array.from(m).map(R => R.webkitGetAsEntry()), f.value).then(R => {
          u(R)
        }).finally(() => {
          d.value = !1
        }) : d.value = !1
      }
      return () => {
        var k;
        const {
          value: b
        } = o;
        return e.abstract ? (k = t.default) === null || k === void 0 ? void 0 : k.call(t, {
          handleClick: v,
          handleDrop: P,
          handleDragOver: y,
          handleDragEnter: w,
          handleDragLeave: x
        }) : c("div", {
          class: [`${b}-upload-trigger`, (n.value || i.value) && `${b}-upload-trigger--disabled`, p.value && `${b}-upload-trigger--image-card`],
          style: h.value,
          onClick: v,
          onDrop: P,
          onDragover: y,
          onDragenter: w,
          onDragleave: x
        }, p.value ? c(fp, null, {
          default: () => yt(t.default, () => [c(pe, {
            clsPrefix: b
          }, {
            default: () => c(du, null)
          })])
        }) : t)
      }
    }
  }),
  wp = q({
    name: "UploadProgress",
    props: {
      show: Boolean,
      percentage: {
        type: Number,
        required: !0
      },
      status: {
        type: String,
        required: !0
      }
    },
    setup() {
      return {
        mergedTheme: ue(zt).mergedThemeRef
      }
    },
    render() {
      return c(In, null, {
        default: () => this.show ? c(Jh, {
          type: "line",
          showIndicator: !1,
          percentage: this.percentage,
          status: this.status,
          height: 2,
          theme: this.mergedTheme.peers.Progress,
          themeOverrides: this.mergedTheme.peerOverrides.Progress
        }) : null
      })
    }
  }),
  xp = c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 28 28"
  }, c("g", {
    fill: "none"
  }, c("path", {
    d: "M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3h15.5zm.583 20.4l-7.807-7.68a.75.75 0 0 0-.968-.07l-.084.07l-7.808 7.68c.183.065.38.1.584.1h15.5c.204 0 .4-.035.583-.1l-7.807-7.68l7.807 7.68zM21.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v15.5c0 .208.036.408.103.593l7.82-7.692a2.25 2.25 0 0 1 3.026-.117l.129.117l7.82 7.692c.066-.185.102-.385.102-.593V6.25a1.75 1.75 0 0 0-1.75-1.75zm-3.25 3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm0 1.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2z",
    fill: "currentColor"
  }))),
  Cp = c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 28 28"
  }, c("g", {
    fill: "none"
  }, c("path", {
    d: "M6.4 2A2.4 2.4 0 0 0 4 4.4v19.2A2.4 2.4 0 0 0 6.4 26h15.2a2.4 2.4 0 0 0 2.4-2.4V11.578c0-.729-.29-1.428-.805-1.944l-6.931-6.931A2.4 2.4 0 0 0 14.567 2H6.4zm-.9 2.4a.9.9 0 0 1 .9-.9H14V10a2 2 0 0 0 2 2h6.5v11.6a.9.9 0 0 1-.9.9H6.4a.9.9 0 0 1-.9-.9V4.4zm16.44 6.1H16a.5.5 0 0 1-.5-.5V4.06l6.44 6.44z",
    fill: "currentColor"
  })));
var Sp = globalThis && globalThis.__awaiter || function (e, t, r, o) {
  function n(i) {
    return i instanceof r ? i : new r(function (l) {
      l(i)
    })
  }
  return new(r || (r = Promise))(function (i, l) {
    function d(u) {
      try {
        s(o.next(u))
      } catch (f) {
        l(f)
      }
    }

    function a(u) {
      try {
        s(o.throw(u))
      } catch (f) {
        l(f)
      }
    }

    function s(u) {
      u.done ? i(u.value) : n(u.value).then(d, a)
    }
    s((o = o.apply(e, t || [])).next())
  })
};
const Kt = {
    paddingMedium: "0 3px",
    heightMedium: "24px",
    iconSizeMedium: "18px"
  },
  kp = q({
    name: "UploadFile",
    props: {
      clsPrefix: {
        type: String,
        required: !0
      },
      file: {
        type: Object,
        required: !0
      },
      listType: {
        type: String,
        required: !0
      }
    },
    setup(e) {
      const t = ue(zt),
        r = O(null),
        o = O(""),
        n = D(() => {
          const {
            file: m
          } = e;
          return m.status === "finished" ? "success" : m.status === "error" ? "error" : "info"
        }),
        i = D(() => {
          const {
            file: m
          } = e;
          if (m.status === "error") return "error"
        }),
        l = D(() => {
          const {
            file: m
          } = e;
          return m.status === "uploading"
        }),
        d = D(() => {
          if (!t.showCancelButtonRef.value) return !1;
          const {
            file: m
          } = e;
          return ["uploading", "pending", "error"].includes(m.status)
        }),
        a = D(() => {
          if (!t.showRemoveButtonRef.value) return !1;
          const {
            file: m
          } = e;
          return ["finished"].includes(m.status)
        }),
        s = D(() => {
          if (!t.showDownloadButtonRef.value) return !1;
          const {
            file: m
          } = e;
          return ["finished"].includes(m.status)
        }),
        u = D(() => {
          if (!t.showRetryButtonRef.value) return !1;
          const {
            file: m
          } = e;
          return ["error"].includes(m.status)
        }),
        f = We(() => o.value || e.file.thumbnailUrl || e.file.url),
        h = D(() => {
          if (!t.showPreviewButtonRef.value) return !1;
          const {
            file: {
              status: m
            },
            listType: R
          } = e;
          return ["finished"].includes(m) && f.value && R === "image-card"
        });

      function p() {
        t.submit(e.file.id)
      }

      function v(m) {
        m.preventDefault();
        const {
          file: R
        } = e;
        ["finished", "pending", "error"].includes(R.status) ? w(R) : ["uploading"].includes(R.status) ? P(R) : Kr("upload", "The button clicked type is unknown.")
      }

      function y(m) {
        m.preventDefault(), x(e.file)
      }

      function w(m) {
        const {
          xhrMap: R,
          doChange: z,
          onRemoveRef: {
            value: A
          },
          mergedFileListRef: {
            value: $
          }
        } = t;
        Promise.resolve(A ? A({
          file: Object.assign({}, m),
          fileList: $
        }) : !0).then(_ => {
          if (_ === !1) return;
          const K = Object.assign({}, m, {
            status: "removed"
          });
          R.delete(m.id), z(K, void 0, {
            remove: !0
          })
        })
      }

      function x(m) {
        const {
          onDownloadRef: {
            value: R
          }
        } = t;
        Promise.resolve(R ? R(Object.assign({}, m)) : !0).then(z => {
          z !== !1 && yp(m.url, m.name)
        })
      }

      function P(m) {
        const {
          xhrMap: R
        } = t, z = R.get(m.id);
        z == null || z.abort(), w(Object.assign({}, m))
      }

      function k() {
        const {
          onPreviewRef: {
            value: m
          }
        } = t;
        if (m) m(e.file);
        else if (e.listType === "image-card") {
          const {
            value: R
          } = r;
          if (!R) return;
          R.click()
        }
      }
      const b = () => Sp(this, void 0, void 0, function* () {
        const {
          listType: m
        } = e;
        m !== "image" && m !== "image-card" || t.shouldUseThumbnailUrlRef.value(e.file) && (o.value = yield t.getFileThumbnailUrlResolver(e.file))
      });
      return ft(() => {
        b()
      }), {
        mergedTheme: t.mergedThemeRef,
        progressStatus: n,
        buttonType: i,
        showProgress: l,
        disabled: t.mergedDisabledRef,
        showCancelButton: d,
        showRemoveButton: a,
        showDownloadButton: s,
        showRetryButton: u,
        showPreviewButton: h,
        mergedThumbnailUrl: f,
        shouldUseThumbnailUrl: t.shouldUseThumbnailUrlRef,
        renderIcon: t.renderIconRef,
        imageRef: r,
        handleRemoveOrCancelClick: v,
        handleDownloadClick: y,
        handleRetryClick: p,
        handlePreviewClick: k
      }
    },
    render() {
      const {
        clsPrefix: e,
        mergedTheme: t,
        listType: r,
        file: o,
        renderIcon: n
      } = this;
      let i;
      const l = r === "image";
      l || r === "image-card" ? i = !this.shouldUseThumbnailUrl(o) || !this.mergedThumbnailUrl ? c("span", {
        class: `${e}-upload-file-info__thumbnail`
      }, n ? n(o) : zi(o) ? c(pe, {
        clsPrefix: e
      }, {
        default: () => xp
      }) : c(pe, {
        clsPrefix: e
      }, {
        default: () => Cp
      })) : c("a", {
        rel: "noopener noreferer",
        target: "_blank",
        href: o.url || void 0,
        class: `${e}-upload-file-info__thumbnail`,
        onClick: this.handlePreviewClick
      }, r === "image-card" ? c(Lr, {
        src: this.mergedThumbnailUrl || void 0,
        previewSrc: o.url || void 0,
        alt: o.name,
        ref: "imageRef"
      }) : c("img", {
        src: this.mergedThumbnailUrl || void 0,
        alt: o.name
      })) : i = c("span", {
        class: `${e}-upload-file-info__thumbnail`
      }, n ? n(o) : c(pe, {
        clsPrefix: e
      }, {
        default: () => c(cu, null)
      }));
      const a = c(wp, {
          show: this.showProgress,
          percentage: o.percentage || 0,
          status: this.progressStatus
        }),
        s = r === "text" || r === "image";
      return c("div", {
        class: [`${e}-upload-file`, `${e}-upload-file--${this.progressStatus}-status`, o.url && o.status !== "error" && r !== "image-card" && `${e}-upload-file--with-url`, `${e}-upload-file--${r}-type`]
      }, c("div", {
        class: `${e}-upload-file-info`
      }, i, c("div", {
        class: `${e}-upload-file-info__name`
      }, s && (o.url && o.status !== "error" ? c("a", {
        rel: "noopener noreferer",
        target: "_blank",
        href: o.url || void 0,
        onClick: this.handlePreviewClick
      }, o.name) : c("span", {
        onClick: this.handlePreviewClick
      }, o.name)), l && a), c("div", {
        class: [`${e}-upload-file-info__action`, `${e}-upload-file-info__action--${r}-type`]
      }, this.showPreviewButton ? c(ce, {
        key: "preview",
        quaternary: !0,
        type: this.buttonType,
        onClick: this.handlePreviewClick,
        theme: t.peers.Button,
        themeOverrides: t.peerOverrides.Button,
        builtinThemeOverrides: Kt
      }, {
        icon: () => c(pe, {
          clsPrefix: e
        }, {
          default: () => c(ii, null)
        })
      }) : null, (this.showRemoveButton || this.showCancelButton) && !this.disabled && c(ce, {
        key: "cancelOrTrash",
        theme: t.peers.Button,
        themeOverrides: t.peerOverrides.Button,
        quaternary: !0,
        builtinThemeOverrides: Kt,
        type: this.buttonType,
        onClick: this.handleRemoveOrCancelClick
      }, {
        icon: () => c(kn, null, {
          default: () => this.showRemoveButton ? c(pe, {
            clsPrefix: e,
            key: "trash"
          }, {
            default: () => c(hu, null)
          }) : c(pe, {
            clsPrefix: e,
            key: "cancel"
          }, {
            default: () => c(gu, null)
          })
        })
      }), this.showRetryButton && !this.disabled && c(ce, {
        key: "retry",
        quaternary: !0,
        type: this.buttonType,
        onClick: this.handleRetryClick,
        theme: t.peers.Button,
        themeOverrides: t.peerOverrides.Button,
        builtinThemeOverrides: Kt
      }, {
        icon: () => c(pe, {
          clsPrefix: e
        }, {
          default: () => c(yu, null)
        })
      }), this.showDownloadButton ? c(ce, {
        key: "download",
        quaternary: !0,
        type: this.buttonType,
        onClick: this.handleDownloadClick,
        theme: t.peers.Button,
        themeOverrides: t.peerOverrides.Button,
        builtinThemeOverrides: Kt
      }, {
        icon: () => c(pe, {
          clsPrefix: e
        }, {
          default: () => c(pu, null)
        })
      }) : null)), !l && a)
    }
  }),
  Pp = q({
    name: "UploadFileList",
    setup(e, {
      slots: t
    }) {
      const r = ue(zt, null);
      r || Pt("upload-file-list", "`n-upload-file-list` must be placed inside `n-upload`.");
      const {
        abstractRef: o,
        mergedClsPrefixRef: n,
        listTypeRef: i,
        mergedFileListRef: l,
        fileListStyleRef: d,
        cssVarsRef: a,
        themeClassRef: s,
        maxReachedRef: u,
        showTriggerRef: f,
        imageGroupPropsRef: h
      } = r, p = D(() => i.value === "image-card"), v = () => l.value.map(w => c(kp, {
        clsPrefix: n.value,
        key: w.id,
        file: w,
        listType: i.value
      })), y = () => p.value ? c(Fh, Object.assign({}, h.value), {
        default: v
      }) : c(In, {
        group: !0
      }, {
        default: v
      });
      return () => {
        const {
          value: w
        } = n, {
          value: x
        } = o;
        return c("div", {
          class: [`${w}-upload-file-list`, p.value && `${w}-upload-file-list--grid`, x ? s == null ? void 0 : s.value : void 0],
          style: [x && a ? a.value : "", d.value]
        }, y(), f.value && !u.value && p.value && c(Ti, null, t))
      }
    }
  }),
  $p = L([S("upload", "width: 100%;", [j("dragger-inside", [S("upload-trigger", `
 display: block;
 `)]), j("drag-over", [S("upload-dragger", `
 border: var(--n-dragger-border-hover);
 `)])]), S("upload-dragger", `
 cursor: pointer;
 box-sizing: border-box;
 width: 100%;
 text-align: center;
 border-radius: var(--n-border-radius);
 padding: 24px;
 opacity: 1;
 transition:
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-dragger-color);
 border: var(--n-dragger-border);
 `, [L("&:hover", `
 border: var(--n-dragger-border-hover);
 `), j("disabled", `
 cursor: not-allowed;
 `)]), S("upload-trigger", `
 display: inline-block;
 box-sizing: border-box;
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `, [L("+", [S("upload-file-list", "margin-top: 8px;")]), j("disabled", `
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `), j("image-card", `
 width: 96px;
 height: 96px;
 `, [S("base-icon", `
 font-size: 24px;
 `), S("upload-dragger", `
 padding: 0;
 height: 100%;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `)])]), S("upload-file-list", `
 line-height: var(--n-line-height);
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `, [L("a, img", "outline: none;"), j("disabled", `
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `, [S("upload-file", "cursor: not-allowed;")]), j("grid", `
 display: grid;
 grid-template-columns: repeat(auto-fill, 96px);
 grid-gap: 8px;
 margin-top: 0;
 `), S("upload-file", `
 display: block;
 box-sizing: border-box;
 cursor: default;
 padding: 0px 12px 0 6px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `, [To(), S("progress", [To({
    foldPadding: !0
  })]), L("&:hover", `
 background-color: var(--n-item-color-hover);
 `, [S("upload-file-info", [B("action", `
 opacity: 1;
 `)])]), j("image-type", `
 border-radius: var(--n-border-radius);
 text-decoration: underline;
 text-decoration-color: #0000;
 `, [S("upload-file-info", `
 padding-top: 0px;
 padding-bottom: 0px;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 6px 0;
 `, [S("progress", `
 padding: 2px 0;
 margin-bottom: 0;
 `), B("name", `
 padding: 0 8px;
 `), B("thumbnail", `
 width: 32px;
 height: 32px;
 font-size: 28px;
 display: flex;
 justify-content: center;
 align-items: center;
 `, [L("img", `
 width: 100%;
 `)])])]), j("text-type", [S("progress", `
 box-sizing: border-box;
 padding-bottom: 6px;
 margin-bottom: 6px;
 `)]), j("image-card-type", `
 position: relative;
 width: 96px;
 height: 96px;
 border: var(--n-item-border-image-card);
 border-radius: var(--n-border-radius);
 padding: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: border-color .3s var(--n-bezier), background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 overflow: hidden;
 `, [S("progress", `
 position: absolute;
 left: 8px;
 bottom: 8px;
 right: 8px;
 width: unset;
 `), S("upload-file-info", `
 padding: 0;
 width: 100%;
 height: 100%;
 `, [B("thumbnail", `
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: 36px;
 `, [L("img", `
 width: 100%;
 `)])]), L("&::before", `
 position: absolute;
 z-index: 1;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 opacity: 0;
 transition: opacity .2s var(--n-bezier);
 content: "";
 `), L("&:hover", [L("&::before", "opacity: 1;"), S("upload-file-info", [B("thumbnail", "opacity: .12;")])])]), j("error-status", [L("&:hover", `
 background-color: var(--n-item-color-hover-error);
 `), S("upload-file-info", [B("name", "color: var(--n-item-text-color-error);"), B("thumbnail", "color: var(--n-item-text-color-error);")]), j("image-card-type", `
 border: var(--n-item-border-image-card-error);
 `)]), j("with-url", `
 cursor: pointer;
 `, [S("upload-file-info", [B("name", `
 color: var(--n-item-text-color-success);
 text-decoration-color: var(--n-item-text-color-success);
 `, [L("a", `
 text-decoration: underline;
 `)])])]), S("upload-file-info", `
 position: relative;
 padding-top: 6px;
 padding-bottom: 6px;
 display: flex;
 flex-wrap: nowrap;
 `, [B("thumbnail", `
 font-size: 18px;
 opacity: 1;
 transition: opacity .2s var(--n-bezier);
 color: var(--n-item-icon-color);
 `, [S("base-icon", `
 margin-right: 2px;
 vertical-align: middle;
 transition: color .3s var(--n-bezier);
 `)]), B("action", `
 padding-top: inherit;
 padding-bottom: inherit;
 position: absolute;
 right: 0;
 top: 0;
 bottom: 0;
 width: 80px;
 display: flex;
 align-items: center;
 transition: opacity .2s var(--n-bezier);
 justify-content: flex-end;
 opacity: 0;
 `, [S("button", [L("&:not(:last-child)", {
    marginRight: "4px"
  }), S("base-icon", [L("svg", [Cn()])])]), j("image-type", `
 position: relative;
 max-width: 80px;
 width: auto;
 `), j("image-card-type", `
 z-index: 2;
 position: absolute;
 width: 100%;
 height: 100%;
 left: 0;
 right: 0;
 bottom: 0;
 top: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 `)]), B("name", `
 color: var(--n-item-text-color);
 flex: 1;
 display: flex;
 justify-content: center;
 text-overflow: ellipsis;
 overflow: hidden;
 flex-direction: column;
 text-decoration-color: #0000;
 font-size: var(--n-font-size);
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier); 
 `, [L("a", `
 color: inherit;
 text-decoration: underline;
 `)])])])]), S("upload-file-input", `
 display: block;
 width: 0;
 height: 0;
 opacity: 0;
 `)]);
var ln = globalThis && globalThis.__awaiter || function (e, t, r, o) {
  function n(i) {
    return i instanceof r ? i : new r(function (l) {
      l(i)
    })
  }
  return new(r || (r = Promise))(function (i, l) {
    function d(u) {
      try {
        s(o.next(u))
      } catch (f) {
        l(f)
      }
    }

    function a(u) {
      try {
        s(o.throw(u))
      } catch (f) {
        l(f)
      }
    }

    function s(u) {
      u.done ? i(u.value) : n(u.value).then(d, a)
    }
    s((o = o.apply(e, t || [])).next())
  })
};

function zp(e, t, r) {
  const {
    doChange: o,
    xhrMap: n
  } = e;
  let i = 0;

  function l(a) {
    var s;
    let u = Object.assign({}, t, {
      status: "error",
      percentage: i
    });
    n.delete(t.id), u = Bt(((s = e.onError) === null || s === void 0 ? void 0 : s.call(e, {
      file: u,
      event: a
    })) || u), o(u, a)
  }

  function d(a) {
    var s;
    if (e.isErrorState) {
      if (e.isErrorState(r)) {
        l(a);
        return
      }
    } else if (r.status < 200 || r.status >= 300) {
      l(a);
      return
    }
    let u = Object.assign({}, t, {
      status: "finished",
      percentage: i
    });
    n.delete(t.id), u = Bt(((s = e.onFinish) === null || s === void 0 ? void 0 : s.call(e, {
      file: u,
      event: a
    })) || u), o(u, a)
  }
  return {
    handleXHRLoad: d,
    handleXHRError: l,
    handleXHRAbort(a) {
      const s = Object.assign({}, t, {
        status: "removed",
        file: null,
        percentage: i
      });
      n.delete(t.id), o(s, a)
    },
    handleXHRProgress(a) {
      const s = Object.assign({}, t, {
        status: "uploading"
      });
      if (a.lengthComputable) {
        const u = Math.ceil(a.loaded / a.total * 100);
        s.percentage = u, i = u
      }
      o(s, a)
    }
  }
}

function Tp(e) {
  const {
    inst: t,
    file: r,
    data: o,
    headers: n,
    withCredentials: i,
    action: l,
    customRequest: d
  } = e, {
    doChange: a
  } = e.inst;
  let s = 0;
  d({
    file: r,
    data: o,
    headers: n,
    withCredentials: i,
    action: l,
    onProgress(u) {
      const f = Object.assign({}, r, {
          status: "uploading"
        }),
        h = u.percent;
      f.percentage = h, s = h, a(f)
    },
    onFinish() {
      var u;
      let f = Object.assign({}, r, {
        status: "finished",
        percentage: s
      });
      f = Bt(((u = t.onFinish) === null || u === void 0 ? void 0 : u.call(t, {
        file: f
      })) || f), a(f)
    },
    onError() {
      var u;
      let f = Object.assign({}, r, {
        status: "error",
        percentage: s
      });
      f = Bt(((u = t.onError) === null || u === void 0 ? void 0 : u.call(t, {
        file: f
      })) || f), a(f)
    }
  })
}

function Ip(e, t, r) {
  const o = zp(e, t, r);
  r.onabort = o.handleXHRAbort, r.onerror = o.handleXHRError, r.onload = o.handleXHRLoad, r.upload && (r.upload.onprogress = o.handleXHRProgress)
}

function Ii(e, t) {
  return typeof e == "function" ? e({
    file: t
  }) : e || {}
}

function _p(e, t, r) {
  const o = Ii(t, r);
  o && Object.keys(o).forEach(n => {
    e.setRequestHeader(n, o[n])
  })
}

function Rp(e, t, r) {
  const o = Ii(t, r);
  o && Object.keys(o).forEach(n => {
    e.append(n, o[n])
  })
}

function Mp(e, t, r, {
  method: o,
  action: n,
  withCredentials: i,
  responseType: l,
  headers: d,
  data: a
}) {
  const s = new XMLHttpRequest;
  s.responseType = l, e.xhrMap.set(r.id, s), s.withCredentials = i;
  const u = new FormData;
  if (Rp(u, a, r), u.append(t, r.file), Ip(e, r, s), n !== void 0) {
    s.open(o.toUpperCase(), n), _p(s, d, r), s.send(u);
    const f = Object.assign({}, r, {
      status: "uploading"
    });
    e.doChange(f)
  }
}
const Op = Object.assign(Object.assign({}, ae.props), {
    name: {
      type: String,
      default: "file"
    },
    accept: String,
    action: String,
    customRequest: Function,
    directory: Boolean,
    directoryDnd: {
      type: Boolean,
      default: void 0
    },
    method: {
      type: String,
      default: "POST"
    },
    multiple: Boolean,
    showFileList: {
      type: Boolean,
      default: !0
    },
    data: [Object, Function],
    headers: [Object, Function],
    withCredentials: Boolean,
    responseType: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    onChange: Function,
    onRemove: Function,
    onFinish: Function,
    onError: Function,
    onBeforeUpload: Function,
    isErrorState: Function,
    onDownload: Function,
    defaultUpload: {
      type: Boolean,
      default: !0
    },
    fileList: Array,
    "onUpdate:fileList": [Function, Array],
    onUpdateFileList: [Function, Array],
    fileListStyle: [String, Object],
    defaultFileList: {
      type: Array,
      default: () => []
    },
    showCancelButton: {
      type: Boolean,
      default: !0
    },
    showRemoveButton: {
      type: Boolean,
      default: !0
    },
    showDownloadButton: Boolean,
    showRetryButton: {
      type: Boolean,
      default: !0
    },
    showPreviewButton: {
      type: Boolean,
      default: !0
    },
    listType: {
      type: String,
      default: "text"
    },
    onPreview: Function,
    shouldUseThumbnailUrl: {
      type: Function,
      default: e => pp ? zi(e) : !1
    },
    createThumbnailUrl: Function,
    abstract: Boolean,
    max: Number,
    showTrigger: {
      type: Boolean,
      default: !0
    },
    imageGroupProps: Object,
    inputProps: Object,
    triggerStyle: [String, Object],
    renderIcon: Object
  }),
  Bp = q({
    name: "Upload",
    props: Op,
    setup(e) {
      e.abstract && e.listType === "image-card" && Pt("upload", "when the list-type is image-card, abstract is not supported.");
      const {
        mergedClsPrefixRef: t,
        inlineThemeDisabled: r
      } = Re(e), o = ae("Upload", "-upload", $p, Oh, e, t), n = Pn(e), i = D(() => {
        const {
          max: $
        } = e;
        return $ !== void 0 ? p.value.length >= $ : !1
      }), l = O(e.defaultFileList), d = ee(e, "fileList"), a = O(null), s = {
        value: !1
      }, u = O(!1), f = new Map, h = nr(d, l), p = D(() => h.value.map(Bt));

      function v() {
        var $;
        ($ = a.value) === null || $ === void 0 || $.click()
      }

      function y($) {
        const _ = $.target;
        P(_.files ? Array.from(_.files).map(K => ({
          file: K,
          entry: null,
          source: "input"
        })) : null, $), _.value = ""
      }

      function w($) {
        const {
          "onUpdate:fileList": _,
          onUpdateFileList: K
        } = e;
        _ && me(_, $), K && me(K, $), l.value = $
      }
      const x = D(() => e.multiple || e.directory);

      function P($, _) {
        if (!$ || $.length === 0) return;
        const {
          onBeforeUpload: K
        } = e;
        $ = x.value ? $ : [$[0]];
        const {
          max: F,
          accept: M
        } = e;
        $ = $.filter(({
          file: T,
          source: H
        }) => H === "dnd" && (M != null && M.trim()) ? bp(T.name, T.type, M) : !0), F && ($ = $.slice(0, F - p.value.length));
        const C = $r();
        Promise.all($.map(({
          file: T,
          entry: H
        }) => ln(this, void 0, void 0, function* () {
          var N;
          const Y = {
            id: $r(),
            batchId: C,
            name: T.name,
            status: "pending",
            percentage: 0,
            file: T,
            url: null,
            type: T.type,
            thumbnailUrl: null,
            fullPath: (N = H == null ? void 0 : H.fullPath) !== null && N !== void 0 ? N : `/${T.webkitRelativePath||T.name}`
          };
          return !K || (yield K({
            file: Y,
            fileList: p.value
          })) !== !1 ? Y : null
        }))).then(T => ln(this, void 0, void 0, function* () {
          let H = Promise.resolve();
          return T.forEach(N => {
            H = H.then(Xt).then(() => {
              N && b(N, _, {
                append: !0
              })
            })
          }), yield H
        })).then(() => {
          e.defaultUpload && k()
        })
      }

      function k($) {
        const {
          method: _,
          action: K,
          withCredentials: F,
          headers: M,
          data: C,
          name: T
        } = e, H = $ !== void 0 ? p.value.filter(Y => Y.id === $) : p.value, N = $ !== void 0;
        H.forEach(Y => {
          const {
            status: re
          } = Y;
          (re === "pending" || re === "error" && N) && (e.customRequest ? Tp({
            inst: {
              doChange: b,
              xhrMap: f,
              onFinish: e.onFinish,
              onError: e.onError
            },
            file: Y,
            action: K,
            withCredentials: F,
            headers: M,
            data: C,
            customRequest: e.customRequest
          }) : Mp({
            doChange: b,
            xhrMap: f,
            onFinish: e.onFinish,
            onError: e.onError,
            isErrorState: e.isErrorState
          }, T, Y, {
            method: _,
            action: K,
            withCredentials: F,
            responseType: e.responseType,
            headers: M,
            data: C
          }))
        })
      }
      const b = ($, _, K = {
        append: !1,
        remove: !1
      }) => {
        const {
          append: F,
          remove: M
        } = K, C = Array.from(p.value), T = C.findIndex(H => H.id === $.id);
        if (F || M || ~T) {
          F ? C.push($) : M ? C.splice(T, 1) : C.splice(T, 1, $);
          const {
            onChange: H
          } = e;
          H && H({
            file: $,
            fileList: C,
            event: _
          }), w(C)
        }
      };

      function m($) {
        var _;
        if ($.thumbnailUrl) return $.thumbnailUrl;
        const {
          createThumbnailUrl: K
        } = e;
        return K ? (_ = K($.file, $)) !== null && _ !== void 0 ? _ : $.url || "" : $.url ? $.url : $.file ? hp($.file) : ""
      }
      const R = D(() => {
          const {
            common: {
              cubicBezierEaseInOut: $
            },
            self: {
              draggerColor: _,
              draggerBorder: K,
              draggerBorderHover: F,
              itemColorHover: M,
              itemColorHoverError: C,
              itemTextColorError: T,
              itemTextColorSuccess: H,
              itemTextColor: N,
              itemIconColor: Y,
              itemDisabledOpacity: re,
              lineHeight: ve,
              borderRadius: Ce,
              fontSize: W,
              itemBorderImageCardError: oe,
              itemBorderImageCard: Q
            }
          } = o.value;
          return {
            "--n-bezier": $,
            "--n-border-radius": Ce,
            "--n-dragger-border": K,
            "--n-dragger-border-hover": F,
            "--n-dragger-color": _,
            "--n-font-size": W,
            "--n-item-color-hover": M,
            "--n-item-color-hover-error": C,
            "--n-item-disabled-opacity": re,
            "--n-item-icon-color": Y,
            "--n-item-text-color": N,
            "--n-item-text-color-error": T,
            "--n-item-text-color-success": H,
            "--n-line-height": ve,
            "--n-item-border-image-card-error": oe,
            "--n-item-border-image-card": Q
          }
        }),
        z = r ? Fe("upload", void 0, R, e) : void 0;
      _e(zt, {
        mergedClsPrefixRef: t,
        mergedThemeRef: o,
        showCancelButtonRef: ee(e, "showCancelButton"),
        showDownloadButtonRef: ee(e, "showDownloadButton"),
        showRemoveButtonRef: ee(e, "showRemoveButton"),
        showRetryButtonRef: ee(e, "showRetryButton"),
        onRemoveRef: ee(e, "onRemove"),
        onDownloadRef: ee(e, "onDownload"),
        mergedFileListRef: p,
        triggerStyleRef: ee(e, "triggerStyle"),
        shouldUseThumbnailUrlRef: ee(e, "shouldUseThumbnailUrl"),
        renderIconRef: ee(e, "renderIcon"),
        xhrMap: f,
        submit: k,
        doChange: b,
        showPreviewButtonRef: ee(e, "showPreviewButton"),
        onPreviewRef: ee(e, "onPreview"),
        getFileThumbnailUrlResolver: m,
        listTypeRef: ee(e, "listType"),
        dragOverRef: u,
        openOpenFileDialog: v,
        draggerInsideRef: s,
        handleFileAddition: P,
        mergedDisabledRef: n.mergedDisabledRef,
        maxReachedRef: i,
        fileListStyleRef: ee(e, "fileListStyle"),
        abstractRef: ee(e, "abstract"),
        acceptRef: ee(e, "accept"),
        cssVarsRef: r ? void 0 : R,
        themeClassRef: z == null ? void 0 : z.themeClass,
        onRender: z == null ? void 0 : z.onRender,
        showTriggerRef: ee(e, "showTrigger"),
        imageGroupPropsRef: ee(e, "imageGroupProps"),
        mergedDirectoryDndRef: D(() => {
          var $;
          return ($ = e.directoryDnd) !== null && $ !== void 0 ? $ : e.directory
        })
      });
      const A = {
        clear: () => {
          l.value = []
        },
        submit: k,
        openOpenFileDialog: v
      };
      return Object.assign({
        mergedClsPrefix: t,
        draggerInsideRef: s,
        inputElRef: a,
        mergedTheme: o,
        dragOver: u,
        mergedMultiple: x,
        cssVars: r ? void 0 : R,
        themeClass: z == null ? void 0 : z.themeClass,
        onRender: z == null ? void 0 : z.onRender,
        handleFileInputChange: y
      }, A)
    },
    render() {
      var e, t;
      const {
        draggerInsideRef: r,
        mergedClsPrefix: o,
        $slots: n,
        directory: i,
        onRender: l
      } = this;
      if (n.default && !this.abstract) {
        const a = n.default()[0];
        !((e = a == null ? void 0 : a.type) === null || e === void 0) && e[ki] && (r.value = !0)
      }
      const d = c("input", Object.assign({}, this.inputProps, {
        ref: "inputElRef",
        type: "file",
        class: `${o}-upload-file-input`,
        accept: this.accept,
        multiple: this.mergedMultiple,
        onChange: this.handleFileInputChange,
        webkitdirectory: i || void 0,
        directory: i || void 0
      }));
      return this.abstract ? c(Ve, null, (t = n.default) === null || t === void 0 ? void 0 : t.call(n), c(xl, {
        to: "body"
      }, d)) : (l == null || l(), c("div", {
        class: [`${o}-upload`, r.value && `${o}-upload--dragger-inside`, this.dragOver && `${o}-upload--drag-over`, this.themeClass],
        style: this.cssVars
      }, d, this.showTrigger && this.listType !== "image-card" && c(Ti, null, n), this.showFileList && c(Pp, null, n)))
    }
  }),
  sn = "/web/assets/setting-c6ca7b14.svg",
  At = Zr("prompt-store", () => {
    const e = O([{
        type: 1,
        name: "ChatGPT 中文调教指南 - 简体",
        url: "./data/prompts/prompts-zh.json",
        refer: "https://github.com/PlexPt/awesome-chatgpt-prompts-zh"
      }, {
        type: 1,
        name: "ChatGPT 中文调教指南 - 繁体",
        url: "./data/prompts/prompts-zh-TW.json",
        refer: "https://github.com/PlexPt/awesome-chatgpt-prompts-zh"
      }, {
        type: 1,
        name: "Awesome ChatGPT Prompts",
        url: "./data/prompts/prompts.csv",
        refer: "https://github.com/f/awesome-chatgpt-prompts"
      }, {
        type: 2,
        name: "",
        url: "",
        refer: ""
      }]),
      t = O(!1),
      r = O(!1),
      o = O([]),
      n = O(""),
      i = O(0),
      l = O({
        isShow: !1,
        newPrompt: {
          act: "",
          prompt: ""
        }
      }),
      d = D(() => {
        var s;
        return n.value ? (s = o.value) == null ? void 0 : s.filter(u => u.act.includes(n.value) || u.prompt.includes(n.value)) : o.value
      });

    function a(s) {
      if (s instanceof Array && s.every(u => u.act && u.prompt)) {
        if (o.value.length === 0) return o.value.push(...s), {
          result: !0,
          data: {
            successCount: s.length
          }
        };
        const u = s.filter(f => {
          var h;
          return (h = o.value) == null ? void 0 : h.every(p => f.act !== p.act && f.prompt !== p.prompt)
        });
        return o.value.push(...u), {
          result: !0,
          data: {
            successCount: u.length
          }
        }
      } else return {
        result: !1,
        msg: "提示词格式有误"
      }
    }
    return {
      promptDownloadConfig: e,
      isShowPromptSotre: t,
      isShowChatPrompt: r,
      promptList: o,
      keyword: n,
      searchPromptList: d,
      selectedPromptIndex: i,
      optPromptConfig: l,
      addPrompt: a
    }
  }, {
    persist: {
      key: "prompt-store",
      storage: localStorage,
      paths: ["promptList"]
    }
  }),
  Lp = ["href"],
  Ep = {
    key: 1
  },
  Ap = q({
    __name: "ChatNavItem",
    props: {
      navConfig: {}
    },
    setup(e) {
      return (t, r) => t.navConfig.url ? (te(), Se("a", {
        key: 0,
        href: t.navConfig.url,
        target: "_blank",
        rel: "noopener noreferrer"
      }, Ue(t.navConfig.label), 9, Lp)) : (te(), Se("div", Ep, Ue(t.navConfig.label), 1))
    }
  }),
  _i = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  Dp = e => new Promise((t, r) => setTimeout(t, e)),
  Fp = {
    class: "flex justify-center gap-3 px-8"
  },
  Np = {
    class: "flex justify-center items-center"
  },
  Hp = ["src"],
  jp = be("p", {
    class: "text-left"
  }, "提示：形容词+名词+动词+风格，描述得越详细时，效果越好。", -1),
  dn = "骑着摩托的小猫咪，疾驰在路上，动漫场景，详细的细节。",
  Up = q({
    __name: "CreateImage",
    props: {
      show: {
        type: Boolean
      }
    },
    emits: ["update:show"],
    setup(e, {
      emit: t
    }) {
      const r = e,
        o = $t(),
        n = O(""),
        i = O(""),
        l = O(!1),
        d = D({
          get: () => r.show,
          set: f => t("update:show", f)
        }),
        a = () => {
          if (!n.value) {
            o.error("请先输入关键词");
            return
          }
          l.value = !0, i.value = `/images/create?re=1&showselective=1&sude=1&kseed=7500&SFX=2&q=${encodeURIComponent(n.value)}&t=${Date.now()}`
        },
        s = () => {
          n.value = "", i.value = ""
        },
        u = () => (n.value = dn, a());
      return (f, h) => (te(), ke(E(ut), {
        class: "w-11/12 lg:w-[540px] select-none",
        show: d.value,
        "onUpdate:show": h[2] || (h[2] = p => d.value = p),
        "on-close": s,
        preset: "card",
        title: "图像创建"
      }, {
        default: X(() => [be("head", Fp, [G(E(Qe), {
          class: "flex-1",
          placeholder: "提示词",
          value: n.value,
          "onUpdate:value": h[0] || (h[0] = p => n.value = p),
          clearable: !0,
          onKeyup: Cl(a, ["enter"]),
          maxlength: "100"
        }, null, 8, ["value", "onKeyup"]), G(E(ce), {
          secondary: "",
          type: "info",
          onClick: a,
          loading: l.value
        }, {
          default: X(() => [se("开始创建")]),
          _: 1
        }, 8, ["loading"])]), be("main", Np, [i.value ? (te(), Se("iframe", {
          key: 0,
          class: "w-[310px] h-[350px] xl:w-[475px] xl:h-[520px] my-4",
          src: i.value,
          frameborder: "0",
          onLoad: h[1] || (h[1] = p => l.value = !1)
        }, null, 40, Hp)) : (te(), ke(E(no), {
          key: 1,
          class: "h-[40vh] xl:h-[60vh] flex justify-center items-center",
          description: "暂未创建"
        }, {
          extra: X(() => [G(E(ce), {
            secondary: "",
            type: "info",
            onClick: u
          }, {
            default: X(() => [se("使用示例创建")]),
            _: 1
          }), be("div", {
            class: "text-[#c2c2c2] px-2 xl:px-10"
          }, [jp, be("p", {
            class: "text-left"
          }, "示例：" + Ue(dn))])]),
          _: 1
        }))])]),
        _: 1
      }, 8, ["show"]))
    }
  }),
  co = Zr("chat-store", () => {
    const e = "/sydney/ChatHub",
      t = O(!1),
      r = O(""),
      o = O([{
        baseUrl: "https://sydney.bing.com",
        label: "Bing 官方"
      }, {
        baseUrl: "https://wss.batu0991.cc/",
        label: "Cloudflare"
      }, {
        baseUrl: location.origin,
        label: "本站"
      }, {
        baseUrl: "",
        label: "自定义",
        isCus: !0
      }]),
      n = 3e3,
      i = async d => {
        if (!d.baseUrl) return {
          isUsable: !1,
          errorMsg: "链接不可为空"
        };
        try {
          const a = Date.now(),
            s = new WebSocket(d.baseUrl.replace("http", "ws") + e),
            u = setTimeout(() => {
              s.close()
            }, n);
          return await new Promise((f, h) => {
            s.onopen = () => {
              clearTimeout(u), f(s.close())
            }, s.onerror = () => {
              clearTimeout(u), h(new Error(`聊天服务器 ${d.baseUrl} 连接失败`))
            }, s.onclose = () => h(new Error(`聊天服务器 ${d.baseUrl} 连接超时`))
          }), {
            isUsable: !0,
            delay: Date.now() - a
          }
        } catch (a) {
          return {
            isUsable: !1,
            errorMsg: a instanceof Error ? a.message : ""
          }
        }
      };
    return {
      isShowChatServiceSelectModal: t,
      sydneyConfigs: o,
      selectedSydneyBaseUrl: r,
      checkSydneyConfig: i,
      checkAllSydneyConfig: async () => {
        const d = o.value.filter(a => a.baseUrl).map(async a => {
          const s = await i(a);
          a.isUsable = s.isUsable, a.delay = s.delay
        });
        await Promise.all(d)
      }
    }
  }, {
    persist: {
      key: "chat-store",
      storage: localStorage,
      paths: ["selectedSydneyBaseUrl", "sydneyConfigs"]
    }
  });

function Wp(e) {
  const t = document.cookie.match("(^|;) ?" + e + "=([^;]*)(;|$)");
  return t ? t[2] : null
}

function Vp(e, t, r = 0, o = "/", n = "") {
  let i = e + "=" + t + ";path=" + o;
  if (n && (i += ";domain=" + n), r > 0) {
    const l = new Date;
    l.setTime(l.getTime() + r * 60 * 1e3), i += ";expires=" + l.toUTCString()
  }
  document.cookie = i
}
const st = {
  get: Wp,
  set: Vp
};
async function Kp() {
  return fetch("/sysconf", {
    credentials: "include"
  }).then(t => t.json())
}
const qp = {
  getSysConfig: Kp
};
var uo = (e => (e[e.OK = 200] = "OK", e[e.Unauthorized = 401] = "Unauthorized", e))(uo || {});
const Ri = Zr("user-store", () => {
    const t = "_U",
      r = "BingAI_Rand_IP",
      o = "BingAI_Auth_Key",
      n = O(),
      i = async () => {
        const v = await qp.getSysConfig();
        return v.code === uo.OK && (n.value = {
          ...n.value,
          ...v.data
        }), v
      }, l = () => {
        const v = new Date;
        return v.setMinutes(v.getMinutes() + CIB.config.sydney.expiryInMinutes), v
      }, d = async (v = 0) => {
        var w;
        if (v >= 10) {
          console.log(`已重试 ${v} 次，自动创建停止`);
          return
        }
        const y = await fetch("/turing/conversation/create", {
          credentials: "include"
        }).then(x => x.json()).catch(x => "error");
        ((w = y == null ? void 0 : y.result) == null ? void 0 : w.value) === "Success" ? (console.log("成功创建会话ID : ", y.conversationId), CIB.manager.conversation.updateId(y.conversationId, l(), y.clientId, y.conversationSignature)) : (await Dp(300), v += 1, console.log(`开始第 ${v} 次重试创建会话ID`), st.set(r, "", -1), d(v))
      }, a = () => st.get(t) || "", s = () => {
        a() || (CIB.config.features.enableGetChats = !1, CIB.vm.sidePanel.isVisibleMobile = !1, CIB.vm.sidePanel.isVisibleDesktop = !1, d())
      }, u = v => {
        st.set(t, v, 7 * 24 * 60, "/")
      }, f = v => {
        st.set(o, v)
      }, h = async () => {
        localStorage.clear(), sessionStorage.clear();
        const v = await caches.keys();
        for (const y of v) await caches.delete(y), console.log("del cache : ", y)
      };
    return {
      sysConfig: n,
      getSysConfig: i,
      getUserToken: a,
      checkUserToken: s,
      saveUserToken: u,
      resetCache: async () => {
        st.set(t, "", -1), st.set(r, "", -1), st.set(o, "", -1), await h()
      },
      setAuthKey: f
    }
  }, {
    persist: {
      key: "user-store",
      storage: localStorage,
      paths: []
    }
  }),
  Gp = be("div", {
    class: "text-3xl py-2"
  }, "设置用户", -1),
  Xp = be("div", {
    class: "text-xl py-2"
  }, "将删除包括 Cookie 等的所有缓存？", -1),
  Yp = q({
    __name: "ChatNav",
    setup(e) {
      const t = O(!1),
        r = O(!1),
        o = O(""),
        n = $t(),
        i = At(),
        {
          isShowPromptSotre: l
        } = ot(i),
        d = O(!1),
        a = O(!1),
        s = co(),
        {
          isShowChatServiceSelectModal: u
        } = ot(s),
        f = Ri(),
        h = {
          github: "github",
          version: "version",
          chatService: "chatService",
          promptStore: "promptStore",
          setToken: "setToken",
          compose: "compose",
          createImage: "createImage",
          reset: "reset"
        },
        p = [{
          key: h.github,
          label: "微信公众号",
          url: "https://mp.weixin.qq.com/s/yHOZJNJRqNCBCxcMz0ucWg"
        }, {
          key: h.version,
          label: "版本信息"
        }, {
          key: h.chatService,
          label: "服务选择"
        }, {
          key: h.promptStore,
          label: "提示词库"
        }, {
          key: h.setToken,
          label: "设置用户"
        }, {
          key: h.compose,
          label: "撰写文章",
          url: "/web/compose.html"
        }, {
          key: h.createImage,
          label: "图像创建"
        }, {
          key: h.reset,
          label: "一键重置"
        }],
        v = P => c(Ap, {
          navConfig: P
        }),
        y = P => {
          var k;
          switch (P) {
            case h.version:
              n.success("当前版本号为：1.8.7");
              break;
            case h.chatService:
              u.value = !0, s.checkAllSydneyConfig();
              break;
            case h.promptStore:
              l.value = !0;
              break;
            case h.setToken:
              o.value = f.getUserToken(), r.value = !0;
              break;
            case h.createImage:
              !((k = f.sysConfig) != null && k.isSysCK) && !f.getUserToken() && n.warning("体验画图功能需先登录"), a.value = !0;
              break;
            case h.reset:
              d.value = !0;
              break
          }
        },
        w = async () => {
          d.value = !1, await f.resetCache(), n.success("清理完成"), window.location.reload()
        }, x = () => {
          if (!o.value) {
            n.warning("请先填入用户 Cookie");
            return
          }
          f.saveUserToken(o.value), r.value = !1
        };
      return (P, k) => (te(), Se(Ve, null, [E(_i)() ? (te(), ke(E(rn), {
        key: 0,
        class: "select-none",
        show: t.value,
        options: p,
        "render-label": v,
        onSelect: y
      }, {
        default: X(() => [G(E(Lr), {
          class: "fixed top-6 right-4 cursor-pointer z-50",
          src: E(sn),
          alt: "设置菜单",
          "preview-disabled": !0,
          onClick: k[0] || (k[0] = b => t.value = !t.value)
        }, null, 8, ["src"])]),
        _: 1
      }, 8, ["show"])) : (te(), ke(E(rn), {
        key: 1,
        class: "select-none",
        trigger: "hover",
        options: p,
        "render-label": v,
        onSelect: y
      }, {
        default: X(() => [G(E(Lr), {
          class: "fixed top-6 right-6 cursor-pointer z-50",
          src: E(sn),
          alt: "设置菜单",
          "preview-disabled": !0
        }, null, 8, ["src"])]),
        _: 1
      })), G(E(ut), {
        show: r.value,
        "onUpdate:show": k[3] || (k[3] = b => r.value = b),
        preset: "dialog",
        "show-icon": !1
      }, {
        header: X(() => [Gp]),
        action: X(() => [G(E(ce), {
          size: "large",
          onClick: k[2] || (k[2] = b => r.value = !1)
        }, {
          default: X(() => [se("取消")]),
          _: 1
        }), G(E(ce), {
          ghost: "",
          size: "large",
          type: "info",
          onClick: x
        }, {
          default: X(() => [se("保存")]),
          _: 1
        })]),
        default: X(() => [G(E(Qe), {
          size: "large",
          value: o.value,
          "onUpdate:value": k[1] || (k[1] = b => o.value = b),
          type: "text",
          placeholder: "用户 Cookie ,仅需要 _U 的值"
        }, null, 8, ["value"])]),
        _: 1
      }, 8, ["show"]), G(E(ut), {
        show: d.value,
        "onUpdate:show": k[5] || (k[5] = b => d.value = b),
        preset: "dialog",
        "show-icon": !1
      }, {
        header: X(() => [Xp]),
        action: X(() => [G(E(ce), {
          size: "large",
          onClick: k[4] || (k[4] = b => d.value = !1)
        }, {
          default: X(() => [se("取消")]),
          _: 1
        }), G(E(ce), {
          ghost: "",
          size: "large",
          type: "error",
          onClick: w
        }, {
          default: X(() => [se("确定")]),
          _: 1
        })]),
        _: 1
      }, 8, ["show"]), G(Up, {
        show: a.value,
        "onUpdate:show": k[6] || (k[6] = b => a.value = b)
      }, null, 8, ["show"])], 64))
    }
  });

function cn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function (n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable
    })), r.push.apply(r, o)
  }
  return r
}

function qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cn(Object(r), !0).forEach(function (o) {
      Qp(e, o, r[o])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cn(Object(r)).forEach(function (o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o))
    })
  }
  return e
}

function Zp(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function un(e, t) {
  for (var r = 0; r < t.length; r++) {
    var o = t[r];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
  }
}

function Jp(e, t, r) {
  return t && un(e.prototype, t), r && un(e, r), e
}

function Qp(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}

function ev(e) {
  return tv(e) || rv(e) || ov(e) || nv()
}

function tv(e) {
  if (Array.isArray(e)) return Er(e)
}

function rv(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function ov(e, t) {
  if (e) {
    if (typeof e == "string") return Er(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Er(e, t)
  }
}

function Er(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
  return o
}

function nv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var vt = {
    FRONT: "FRONT",
    BEHIND: "BEHIND"
  },
  dt = {
    INIT: "INIT",
    FIXED: "FIXED",
    DYNAMIC: "DYNAMIC"
  },
  fn = 2,
  iv = function () {
    function e(t, r) {
      Zp(this, e), this.init(t, r)
    }
    return Jp(e, [{
      key: "init",
      value: function (r, o) {
        this.param = r, this.callUpdate = o, this.sizes = new Map, this.firstRangeTotalSize = 0, this.firstRangeAverageSize = 0, this.lastCalcIndex = 0, this.fixedSizeValue = 0, this.calcType = dt.INIT, this.offset = 0, this.direction = "", this.range = Object.create(null), r && this.checkRange(0, r.keeps - 1)
      }
    }, {
      key: "destroy",
      value: function () {
        this.init(null, null)
      }
    }, {
      key: "getRange",
      value: function () {
        var r = Object.create(null);
        return r.start = this.range.start, r.end = this.range.end, r.padFront = this.range.padFront, r.padBehind = this.range.padBehind, r
      }
    }, {
      key: "isBehind",
      value: function () {
        return this.direction === vt.BEHIND
      }
    }, {
      key: "isFront",
      value: function () {
        return this.direction === vt.FRONT
      }
    }, {
      key: "getOffset",
      value: function (r) {
        return (r < 1 ? 0 : this.getIndexOffset(r)) + this.param.slotHeaderSize
      }
    }, {
      key: "updateParam",
      value: function (r, o) {
        var n = this;
        this.param && r in this.param && (r === "uniqueIds" && this.sizes.forEach(function (i, l) {
          o.includes(l) || n.sizes.delete(l)
        }), this.param[r] = o)
      }
    }, {
      key: "saveSize",
      value: function (r, o) {
        this.sizes.set(r, o), this.calcType === dt.INIT ? (this.fixedSizeValue = o, this.calcType = dt.FIXED) : this.calcType === dt.FIXED && this.fixedSizeValue !== o && (this.calcType = dt.DYNAMIC, delete this.fixedSizeValue), this.calcType !== dt.FIXED && typeof this.firstRangeTotalSize < "u" && (this.sizes.size < Math.min(this.param.keeps, this.param.uniqueIds.length) ? (this.firstRangeTotalSize = ev(this.sizes.values()).reduce(function (n, i) {
          return n + i
        }, 0), this.firstRangeAverageSize = Math.round(this.firstRangeTotalSize / this.sizes.size)) : delete this.firstRangeTotalSize)
      }
    }, {
      key: "handleDataSourcesChange",
      value: function () {
        var r = this.range.start;
        this.isFront() ? r = r - fn : this.isBehind() && (r = r + fn), r = Math.max(r, 0), this.updateRange(this.range.start, this.getEndByStart(r))
      }
    }, {
      key: "handleSlotSizeChange",
      value: function () {
        this.handleDataSourcesChange()
      }
    }, {
      key: "handleScroll",
      value: function (r) {
        this.direction = r < this.offset ? vt.FRONT : vt.BEHIND, this.offset = r, this.param && (this.direction === vt.FRONT ? this.handleFront() : this.direction === vt.BEHIND && this.handleBehind())
      }
    }, {
      key: "handleFront",
      value: function () {
        var r = this.getScrollOvers();
        if (!(r > this.range.start)) {
          var o = Math.max(r - this.param.buffer, 0);
          this.checkRange(o, this.getEndByStart(o))
        }
      }
    }, {
      key: "handleBehind",
      value: function () {
        var r = this.getScrollOvers();
        r < this.range.start + this.param.buffer || this.checkRange(r, this.getEndByStart(r))
      }
    }, {
      key: "getScrollOvers",
      value: function () {
        var r = this.offset - this.param.slotHeaderSize;
        if (r <= 0) return 0;
        if (this.isFixedType()) return Math.floor(r / this.fixedSizeValue);
        for (var o = 0, n = 0, i = 0, l = this.param.uniqueIds.length; o <= l;) {
          if (n = o + Math.floor((l - o) / 2), i = this.getIndexOffset(n), i === r) return n;
          i < r ? o = n + 1 : i > r && (l = n - 1)
        }
        return o > 0 ? --o : 0
      }
    }, {
      key: "getIndexOffset",
      value: function (r) {
        if (!r) return 0;
        for (var o = 0, n = 0, i = 0; i < r; i++) n = this.sizes.get(this.param.uniqueIds[i]), o = o + (typeof n == "number" ? n : this.getEstimateSize());
        return this.lastCalcIndex = Math.max(this.lastCalcIndex, r - 1), this.lastCalcIndex = Math.min(this.lastCalcIndex, this.getLastIndex()), o
      }
    }, {
      key: "isFixedType",
      value: function () {
        return this.calcType === dt.FIXED
      }
    }, {
      key: "getLastIndex",
      value: function () {
        return this.param.uniqueIds.length - 1
      }
    }, {
      key: "checkRange",
      value: function (r, o) {
        var n = this.param.keeps,
          i = this.param.uniqueIds.length;
        i <= n ? (r = 0, o = this.getLastIndex()) : o - r < n - 1 && (r = o - n + 1), this.range.start !== r && this.updateRange(r, o)
      }
    }, {
      key: "updateRange",
      value: function (r, o) {
        this.range.start = r, this.range.end = o, this.range.padFront = this.getPadFront(), this.range.padBehind = this.getPadBehind(), this.callUpdate(this.getRange())
      }
    }, {
      key: "getEndByStart",
      value: function (r) {
        var o = r + this.param.keeps - 1,
          n = Math.min(o, this.getLastIndex());
        return n
      }
    }, {
      key: "getPadFront",
      value: function () {
        return this.isFixedType() ? this.fixedSizeValue * this.range.start : this.getIndexOffset(this.range.start)
      }
    }, {
      key: "getPadBehind",
      value: function () {
        var r = this.range.end,
          o = this.getLastIndex();
        return this.isFixedType() ? (o - r) * this.fixedSizeValue : this.lastCalcIndex === o ? this.getIndexOffset(o) - this.getIndexOffset(r) : (o - r) * this.getEstimateSize()
      }
    }, {
      key: "getEstimateSize",
      value: function () {
        return this.isFixedType() ? this.fixedSizeValue : this.firstRangeAverageSize || this.param.estimateSize
      }
    }]), e
  }(),
  av = {
    dataKey: {
      type: [String, Function],
      required: !0
    },
    dataSources: {
      type: Array,
      required: !0,
      default: function () {
        return []
      }
    },
    dataComponent: {
      type: [Object, Function],
      required: !0
    },
    keeps: {
      type: Number,
      default: 30
    },
    extraProps: {
      type: Object
    },
    estimateSize: {
      type: Number,
      default: 50
    },
    direction: {
      type: String,
      default: "vertical"
    },
    start: {
      type: Number,
      default: 0
    },
    offset: {
      type: Number,
      default: 0
    },
    topThreshold: {
      type: Number,
      default: 0
    },
    bottomThreshold: {
      type: Number,
      default: 0
    },
    pageMode: {
      type: Boolean,
      default: !1
    },
    rootTag: {
      type: String,
      default: "div"
    },
    wrapTag: {
      type: String,
      default: "div"
    },
    wrapClass: {
      type: String,
      default: "wrap"
    },
    wrapStyle: {
      type: Object
    },
    itemTag: {
      type: String,
      default: "div"
    },
    itemClass: {
      type: String,
      default: ""
    },
    itemClassAdd: {
      type: Function
    },
    itemStyle: {
      type: Object
    },
    headerTag: {
      type: String,
      default: "div"
    },
    headerClass: {
      type: String,
      default: ""
    },
    headerStyle: {
      type: Object
    },
    footerTag: {
      type: String,
      default: "div"
    },
    footerClass: {
      type: String,
      default: ""
    },
    footerStyle: {
      type: Object
    },
    itemScopedSlots: {
      type: Object
    }
  },
  lv = {
    index: {
      type: Number
    },
    event: {
      type: String
    },
    tag: {
      type: String
    },
    horizontal: {
      type: Boolean
    },
    source: {
      type: Object
    },
    component: {
      type: [Object, Function]
    },
    uniqueKey: {
      type: [String, Number]
    },
    extraProps: {
      type: Object
    },
    scopedSlots: {
      type: Object
    }
  },
  sv = {
    event: {
      type: String
    },
    uniqueKey: {
      type: String
    },
    tag: {
      type: String
    },
    horizontal: {
      type: Boolean
    }
  },
  Mi = function (t, r, o) {
    var n = null,
      i = D(function () {
        return t.horizontal ? "offsetWidth" : "offsetHeight"
      }),
      l = function () {
        return r.value ? r.value[i.value] : 0
      },
      d = function () {
        var s = t.event,
          u = t.uniqueKey,
          f = t.hasInitial;
        o(s, u, l(), f)
      };
    et(function () {
      typeof ResizeObserver < "u" && (n = new ResizeObserver(function () {
        d()
      }), r.value && n.observe(r.value))
    }), kl(function () {
      d()
    }), _n(function () {
      n && (n.disconnect(), n = null)
    })
  },
  dv = q({
    name: "VirtualListItem",
    props: lv,
    emits: ["itemResize"],
    setup: function (t, r) {
      var o = r.emit,
        n = O(null);
      return Mi(t, n, o),
        function () {
          var i = t.tag,
            l = t.component,
            d = t.extraProps,
            a = d === void 0 ? {} : d,
            s = t.index,
            u = t.source,
            f = t.scopedSlots,
            h = f === void 0 ? {} : f,
            p = t.uniqueKey,
            v = qt(qt({}, a), {}, {
              source: u,
              index: s
            });
          return G(i, {
            key: p,
            ref: n
          }, {
            default: function () {
              return [G(l, qt(qt({}, v), {}, {
                scopedSlots: h
              }), null)]
            }
          })
        }
    }
  }),
  hn = q({
    name: "VirtualListSlot",
    props: sv,
    emits: ["slotResize"],
    setup: function (t, r) {
      var o = r.slots,
        n = r.emit,
        i = O(null);
      return Mi(t, i, n),
        function () {
          var l, d = t.tag,
            a = t.uniqueKey;
          return G(d, {
            ref: i,
            key: a
          }, {
            default: function () {
              return [(l = o.default) === null || l === void 0 ? void 0 : l.call(o)]
            }
          })
        }
    }
  }),
  Ot;
(function (e) {
  e.ITEM = "itemResize", e.SLOT = "slotResize"
})(Ot || (Ot = {}));
var mt;
(function (e) {
  e.HEADER = "thead", e.FOOTER = "tfoot"
})(mt || (mt = {}));
var Oi = q({
  name: "VirtualList",
  props: av,
  setup: function (t, r) {
    var o = r.emit,
      n = r.slots,
      i = r.expose,
      l = t.direction === "horizontal",
      d = l ? "scrollLeft" : "scrollTop",
      a = O(null),
      s = O(),
      u = O(null),
      f;
    Te(function () {
      return t.dataSources.length
    }, function () {
      f.updateParam("uniqueIds", P()), f.handleDataSourcesChange()
    }), Te(function () {
      return t.keeps
    }, function (M) {
      f.updateParam("keeps", M), f.handleSlotSizeChange()
    }), Te(function () {
      return t.start
    }, function (M) {
      m(M)
    }), Te(function () {
      return t.offset
    }, function (M) {
      return R(M)
    });
    var h = function (C) {
        return f.sizes.get(C)
      },
      p = function () {
        return t.pageMode ? document.documentElement[d] || document.body[d] : s.value ? Math.ceil(s.value[d]) : 0
      },
      v = function () {
        var C = l ? "clientWidth" : "clientHeight";
        return t.pageMode ? document.documentElement[C] || document.body[C] : s.value ? Math.ceil(s.value[C]) : 0
      },
      y = function () {
        var C = l ? "scrollWidth" : "scrollHeight";
        return t.pageMode ? document.documentElement[C] || document.body[C] : s.value ? Math.ceil(s.value[C]) : 0
      },
      w = function (C, T, H, N) {
        o("scroll", N, f.getRange()), f.isFront() && t.dataSources.length && C - t.topThreshold <= 0 ? o("totop") : f.isBehind() && C + T + t.bottomThreshold >= H && o("tobottom")
      },
      x = function (C) {
        var T = p(),
          H = v(),
          N = y();
        T < 0 || T + H > N + 1 || !N || (f.handleScroll(T), w(T, H, N, C))
      },
      P = function () {
        var C = t.dataKey,
          T = t.dataSources,
          H = T === void 0 ? [] : T;
        return H.map(function (N) {
          return typeof C == "function" ? C(N) : N[C]
        })
      },
      k = function (C) {
        a.value = C
      },
      b = function () {
        f = new iv({
          slotHeaderSize: 0,
          slotFooterSize: 0,
          keeps: t.keeps,
          estimateSize: t.estimateSize,
          buffer: Math.round(t.keeps / 3),
          uniqueIds: P()
        }, k), a.value = f.getRange()
      },
      m = function (C) {
        if (C >= t.dataSources.length - 1) _();
        else {
          var T = f.getOffset(C);
          R(T)
        }
      },
      R = function (C) {
        t.pageMode ? (document.body[d] = C, document.documentElement[d] = C) : s.value && (s.value[d] = C)
      },
      z = function () {
        for (var C = [], T = a.value, H = T.start, N = T.end, Y = t.dataSources, re = t.dataKey, ve = t.itemClass, Ce = t.itemTag, W = t.itemStyle, oe = t.extraProps, Q = t.dataComponent, we = t.itemScopedSlots, ye = H; ye <= N; ye++) {
          var ne = Y[ye];
          if (ne) {
            var Le = typeof re == "function" ? re(ne) : ne[re];
            typeof Le == "string" || typeof Le == "number" ? C.push(G(dv, {
              index: ye,
              tag: Ce,
              event: Ot.ITEM,
              horizontal: l,
              uniqueKey: Le,
              source: ne,
              extraProps: oe,
              component: Q,
              scopedSlots: we,
              style: W,
              class: "".concat(ve).concat(t.itemClassAdd ? " " + t.itemClassAdd(ye) : ""),
              onItemResize: A
            }, null)) : console.warn("Cannot get the data-key '".concat(re, "' from data-sources."))
          } else console.warn("Cannot get the index '".concat(ye, "' from data-sources."))
        }
        return C
      },
      A = function (C, T) {
        f.saveSize(C, T), o("resized", C, T)
      },
      $ = function (C, T, H) {
        C === mt.HEADER ? f.updateParam("slotHeaderSize", T) : C === mt.FOOTER && f.updateParam("slotFooterSize", T), H && f.handleSlotSizeChange()
      },
      _ = function M() {
        if (u.value) {
          var C = u.value[l ? "offsetLeft" : "offsetTop"];
          R(C), setTimeout(function () {
            p() + v() < y() && M()
          }, 3)
        }
      },
      K = function () {
        if (s.value) {
          var C = s.value.getBoundingClientRect(),
            T = s.value.ownerDocument.defaultView,
            H = l ? C.left + T.pageXOffset : C.top + T.pageYOffset;
          f.updateParam("slotHeaderSize", H)
        }
      },
      F = function () {
        return f.sizes.size
      };
    return pn(function () {
        b()
      }), Sl(function () {
        R(f.offset)
      }), et(function () {
        t.start ? m(t.start) : t.offset && R(t.offset), t.pageMode && (K(), document.addEventListener("scroll", x, {
          passive: !1
        }))
      }), _n(function () {
        f.destroy(), t.pageMode && document.removeEventListener("scroll", x)
      }), i({
        scrollToBottom: _,
        getSizes: F,
        getSize: h,
        getOffset: p,
        getScrollSize: y,
        getClientSize: v,
        scrollToOffset: R,
        scrollToIndex: m
      }),
      function () {
        var M = t.pageMode,
          C = t.rootTag,
          T = t.wrapTag,
          H = t.wrapClass,
          N = t.wrapStyle,
          Y = t.headerTag,
          re = t.headerClass,
          ve = t.headerStyle,
          Ce = t.footerTag,
          W = t.footerClass,
          oe = t.footerStyle,
          Q = a.value,
          we = Q.padFront,
          ye = Q.padBehind,
          ne = {
            padding: l ? "0px ".concat(ye, "px 0px ").concat(we, "px") : "".concat(we, "px 0px ").concat(ye, "px")
          },
          Le = N ? Object.assign({}, N, ne) : ne,
          Ne = n.header,
          He = n.footer;
        return G(C, {
          ref: s,
          onScroll: !M && x
        }, {
          default: function () {
            return [Ne && G(hn, {
              class: re,
              style: ve,
              tag: Y,
              event: Ot.SLOT,
              uniqueKey: mt.HEADER,
              onSlotResize: $
            }, {
              default: function () {
                return [Ne()]
              }
            }), G(T, {
              class: H,
              style: Le
            }, {
              default: function () {
                return [z()]
              }
            }), He && G(hn, {
              class: W,
              style: oe,
              tag: Ce,
              event: Ot.SLOT,
              uniqueKey: mt.FOOTER,
              onSlotResize: $
            }, {
              default: function () {
                return [He()]
              }
            }), G("div", {
              ref: u,
              style: {
                width: l ? "0px" : "100%",
                height: l ? "100%" : "0px"
              }
            }, null)]
          }
        })
      }
  }
});
const cv = {
    class: "inline-block max-w-[120px] xl:max-w-[650px] overflow-hidden text-ellipsis"
  },
  uv = {
    class: "float-right"
  },
  fv = q({
    __name: "ChatPromptItem",
    props: {
      index: {},
      source: {}
    },
    setup(e) {
      const t = $t(),
        r = At(),
        {
          promptList: o,
          optPromptConfig: n
        } = ot(r),
        i = d => {
          o.value = o.value.filter(a => a.act !== d.act && a.prompt !== d.prompt), t.success("删除提示词成功")
        },
        l = d => {
          n.value.isShow = !0, n.value.type = "edit", n.value.title = "编辑提示词", n.value.tmpPrompt = d, n.value.newPrompt = {
            ...d
          }
        };
      return (d, a) => (te(), ke(E(Si), {
        class: "hover:bg-gray-100 cursor-pointer p-5"
      }, {
        description: X(() => [G(E(er), {
          type: "info"
        }, {
          default: X(() => [be("span", cv, Ue(d.source.act), 1)]),
          _: 1
        }), be("div", uv, [G(E(ce), {
          secondary: "",
          type: "info",
          size: "small",
          onClick: a[0] || (a[0] = s => l(d.source))
        }, {
          default: X(() => [se("编辑")]),
          _: 1
        }), G(E(ce), {
          secondary: "",
          class: "ml-2",
          type: "error",
          size: "small",
          onClick: a[1] || (a[1] = s => i(d.source))
        }, {
          default: X(() => [se("删除")]),
          _: 1
        })])]),
        default: X(() => [G(E(hi), {
          tooltip: !1,
          "line-clamp": 2
        }, {
          default: X(() => [se(Ue(d.source.prompt), 1)]),
          _: 1
        })]),
        _: 1
      }))
    }
  }),
  hv = {
    class: "flex justify-start flex-wrap gap-2 px-5 pb-2"
  },
  pv = ["href"],
  vv = {
    class: "flex justify-center gap-5"
  },
  gv = ["href"],
  mv = q({
    __name: "ChatPromptStore",
    setup(e) {
      const t = $t(),
        r = At(),
        {
          promptDownloadConfig: o,
          isShowPromptSotre: n,
          promptList: i,
          keyword: l,
          searchPromptList: d,
          optPromptConfig: a
        } = ot(r),
        s = O(!1),
        u = O(!1),
        f = O(!1),
        h = () => {
          a.value.isShow = !0, a.value.type = "add", a.value.title = "添加提示词", a.value.newPrompt = {
            act: "",
            prompt: ""
          }
        },
        p = () => {
          const {
            type: k,
            tmpPrompt: b,
            newPrompt: m
          } = a.value;
          if (!m.act) return t.error("提示词标题不能为空");
          if (!m.prompt) return t.error("提示词描述不能为空");
          if (k === "add") i.value = [m, ...i.value], t.success("添加提示词成功");
          else if (k === "edit") {
            if (m.act === (b == null ? void 0 : b.act) && m.prompt === (b == null ? void 0 : b.prompt)) {
              t.warning("提示词未变更"), a.value.isShow = !1;
              return
            }
            const R = i.value.findIndex(z => z.act === (b == null ? void 0 : b.act) && z.prompt === (b == null ? void 0 : b.prompt));
            R > -1 ? (i.value[R] = m, t.success("编辑提示词成功")) : t.error("编辑提示词出错")
          }
          a.value.isShow = !1
        },
        v = k => new Promise((b, m) => {
          const R = new FileReader;
          R.onload = function (z) {
            var A;
            b((A = z.target) == null ? void 0 : A.result)
          }, R.onerror = m, R.readAsText(k)
        }),
        y = async k => {
          var b;
          if (k.file.file) {
            u.value = !0;
            const m = await v(k.file.file),
              R = JSON.parse(m),
              z = r.addPrompt(R);
            z.result ? (t.info(`上传文件含 ${R.length} 条数据`), t.success(`成功导入 ${(b=z.data)==null?void 0:b.successCount} 条有效数据`)) : t.error(z.msg || "提示词格式有误"), u.value = !1
          } else t.error("上传文件有误")
        }, w = () => {
          if (i.value.length === 0) return t.error("暂无可导出的提示词数据");
          f.value = !0;
          const k = JSON.stringify(i.value),
            b = new Blob([k], {
              type: "application/json"
            }),
            m = URL.createObjectURL(b),
            R = document.createElement("a");
          R.href = m, R.download = "BingAIPrompts.json", R.click(), URL.revokeObjectURL(m), t.success("导出提示词库成功"), f.value = !1
        }, x = () => {
          i.value = [], t.success("清空提示词库成功")
        }, P = async k => {
          var R;
          if (!k.url) return t.error("请先输入下载链接");
          k.isDownloading = !0;
          let b;
          if (k.url.endsWith(".json")) b = await fetch(k.url).then(z => z.json());
          else if (k.url.endsWith(".csv")) {
            const z = await fetch(k.url).then(A => A.text());
            console.log(z), b = z.split(`
`).filter(A => A).map(A => {
              var _;
              const $ = A.split('","');
              return {
                act: $[0].slice(1),
                prompt: (_ = $[1]) == null ? void 0 : _.slice(1)
              }
            }), b.shift()
          } else return k.isDownloading = !1, t.error("暂不支持下载此后缀的提示词");
          k.isDownloading = !1;
          const m = r.addPrompt(b);
          m.result ? (t.info(`下载文件含 ${b.length} 条数据`), t.success(`成功导入 ${(R=m.data)==null?void 0:R.successCount} 条有效数据`)) : t.error(m.msg || "提示词格式有误")
        };
      return (k, b) => (te(), Se(Ve, null, [G(E(ut), {
        class: "w-11/12 xl:w-[900px]",
        show: E(n),
        "onUpdate:show": b[3] || (b[3] = m => zr(n) ? n.value = m : null),
        preset: "card",
        title: "提示词库"
      }, {
        default: X(() => [be("div", hv, [G(E(Qe), {
          class: "basis-full xl:basis-0 xl:min-w-[300px]",
          placeholder: "搜索提示词",
          value: E(l),
          "onUpdate:value": b[0] || (b[0] = m => zr(l) ? l.value = m : null),
          clearable: !0
        }, null, 8, ["value"]), G(E(ce), {
          secondary: "",
          type: "info",
          onClick: b[1] || (b[1] = m => s.value = !0)
        }, {
          default: X(() => [se("下载")]),
          _: 1
        }), G(E(ce), {
          secondary: "",
          type: "info",
          onClick: h
        }, {
          default: X(() => [se("添加")]),
          _: 1
        }), G(E(Bp), {
          class: "w-[56px] xl:w-auto",
          accept: ".json",
          "default-upload": !1,
          "show-file-list": !1,
          onChange: y
        }, {
          default: X(() => [G(E(ce), {
            secondary: "",
            type: "success",
            loading: u.value
          }, {
            default: X(() => [se("导入")]),
            _: 1
          }, 8, ["loading"])]),
          _: 1
        }), G(E(ce), {
          secondary: "",
          type: "success",
          onClick: w,
          loading: f.value
        }, {
          default: X(() => [se("导出")]),
          _: 1
        }, 8, ["loading"]), G(E(ce), {
          secondary: "",
          type: "error",
          onClick: x
        }, {
          default: X(() => [se("清空")]),
          _: 1
        })]), E(d).length > 0 ? (te(), ke(E(Oi), {
          key: 0,
          class: "h-[40vh] xl:h-[60vh] overflow-y-auto",
          "data-key": "prompt",
          "data-sources": E(d),
          "data-component": fv,
          keeps: 10
        }, null, 8, ["data-sources"])) : (te(), ke(E(no), {
          key: 1,
          class: "h-[40vh] xl:h-[60vh] flex justify-center items-center",
          description: "暂无数据"
        }, {
          extra: X(() => [G(E(ce), {
            secondary: "",
            type: "info",
            onClick: b[2] || (b[2] = m => s.value = !0)
          }, {
            default: X(() => [se("下载提示词")]),
            _: 1
          })]),
          _: 1
        }))]),
        _: 1
      }, 8, ["show"]), G(E(ut), {
        class: "w-11/12 xl:w-[600px]",
        show: E(a).isShow,
        "onUpdate:show": b[6] || (b[6] = m => E(a).isShow = m),
        preset: "card",
        title: E(a).title
      }, {
        default: X(() => [G(E(fh), {
          vertical: ""
        }, {
          default: X(() => [se(" 标题 "), G(E(Qe), {
            placeholder: "请输入标题",
            value: E(a).newPrompt.act,
            "onUpdate:value": b[4] || (b[4] = m => E(a).newPrompt.act = m)
          }, null, 8, ["value"]), se(" 描述 "), G(E(Qe), {
            placeholder: "请输入描述",
            type: "textarea",
            value: E(a).newPrompt.prompt,
            "onUpdate:value": b[5] || (b[5] = m => E(a).newPrompt.prompt = m)
          }, null, 8, ["value"]), G(E(ce), {
            block: "",
            secondary: "",
            type: "info",
            onClick: p
          }, {
            default: X(() => [se("保存")]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }, 8, ["show", "title"]), G(E(ut), {
        class: "w-11/12 xl:w-[600px]",
        show: s.value,
        "onUpdate:show": b[7] || (b[7] = m => s.value = m),
        preset: "card",
        title: "下载提示词"
      }, {
        default: X(() => [G(E(Uh), {
          class: "overflow-y-auto rounded-lg",
          hoverable: "",
          clickable: ""
        }, {
          default: X(() => [(te(!0), Se(Ve, null, Rn(E(o), (m, R) => (te(), ke(E(Wh), {
            key: R
          }, {
            suffix: X(() => [be("div", vv, [m.type === 1 ? (te(), Se("a", {
              key: 0,
              class: "no-underline",
              href: m.refer,
              target: "_blank",
              rel: "noopener noreferrer"
            }, [G(E(ce), {
              secondary: ""
            }, {
              default: X(() => [se("来源")]),
              _: 1
            })], 8, gv)) : Je("", !0), G(E(ce), {
              secondary: "",
              type: "info",
              onClick: z => P(m),
              loading: m.isDownloading
            }, {
              default: X(() => [se("下载")]),
              _: 2
            }, 1032, ["onClick", "loading"])])]),
            default: X(() => [m.type === 1 ? (te(), Se("a", {
              key: 0,
              class: "no-underline text-blue-500",
              href: m.url,
              target: "_blank",
              rel: "noopener noreferrer"
            }, Ue(m.name), 9, pv)) : m.type === 2 ? (te(), ke(E(Qe), {
              key: 1,
              placeholder: "请输入下载链接，支持 json 及 csv ",
              value: m.url,
              "onUpdate:value": z => m.url = z
            }, null, 8, ["value", "onUpdate:value"])) : Je("", !0)]),
            _: 2
          }, 1024))), 128))]),
          _: 1
        })]),
        _: 1
      }, 8, ["show"])], 64))
    }
  }),
  bv = `/* 移除顶部背景遮挡 */\r
.scroller>.top {\r
  display: none !important;\r
}\r
\r
/* 移除顶部边距 */\r
.scroller>.scroller-positioner>.content {\r
  padding-top: 0 !important;\r
}\r
\r
/* 聊天记录 */\r
.scroller .side-panel {\r
  position: fixed;\r
  right: 10px;\r
}\r
\r
@media screen and (max-width: 1536px) {\r
  :host([side-panel]) {\r
    --side-panel-width: 280px;\r
  }\r
}\r
\r
@media screen and (max-width: 767px) {\r
  :host([side-panel]) {\r
    --side-panel-width: 0;\r
  }\r
}`,
  yv = {
    class: "inline-block max-w-[310px] xl:max-w-[650px] overflow-hidden text-ellipsis"
  },
  wv = q({
    __name: "ChatPromptItem",
    props: {
      index: {},
      source: {}
    },
    setup(e) {
      const t = At(),
        {
          selectedPromptIndex: r,
          isShowChatPrompt: o,
          keyword: n
        } = ot(t),
        i = l => {
          l && (n.value = "", CIB.vm.actionBar.inputText = l.prompt, CIB.vm.actionBar.input.focus(), o.value = !1)
        };
      return (l, d) => (te(), ke(E(Si), {
        class: Mn(["hover:bg-gray-100 cursor-pointer px-5 h-[130px] flex justify-start items-center", {
          "bg-gray-100": l.index === E(r)
        }]),
        onClick: d[0] || (d[0] = a => i(l.source))
      }, {
        description: X(() => [G(E(er), {
          type: "info"
        }, {
          default: X(() => [be("span", yv, Ue(l.source.act), 1)]),
          _: 1
        })]),
        default: X(() => [G(E(hi), {
          tooltip: !1,
          "line-clamp": 2
        }, {
          default: X(() => [se(Ue(l.source.prompt), 1)]),
          _: 1
        })]),
        _: 1
      }, 8, ["class"]))
    }
  }),
  fo = e => (Pl("data-v-4813a901"), e = e(), $l(), e),
  xv = {
    key: 0,
    class: "loading-spinner"
  },
  Cv = fo(() => be("div", {
    class: "bounce1"
  }, null, -1)),
  Sv = fo(() => be("div", {
    class: "bounce2"
  }, null, -1)),
  kv = fo(() => be("div", {
    class: "bounce3"
  }, null, -1)),
  Pv = [Cv, Sv, kv],
  $v = q({
    __name: "LoadingSpinner",
    props: {
      isShow: {
        type: Boolean
      }
    },
    setup(e) {
      return (t, r) => (te(), ke(bt, {
        name: "fade"
      }, {
        default: X(() => [t.isShow ? (te(), Se("div", xv, Pv)) : Je("", !0)]),
        _: 1
      }))
    }
  });
const zv = (e, t) => {
    const r = e.__vccOpts || e;
    for (const [o, n] of t) r[o] = n;
    return r
  },
  Tv = zv($v, [
    ["__scopeId", "data-v-4813a901"]
  ]),
  Iv = {
    key: 0,
    class: "hidden lg:block"
  },
  _v = {
    key: 1
  },
  Rv = {
    class: "hidden lg:table-cell"
  },
  Mv = {
    key: 1
  },
  Ov = {
    key: 0,
    class: "flex justify-center items-center flex-wrap gap-2"
  },
  Bv = ["onClick"],
  Lv = {
    class: "flex justify-center items-center flex-wrap gap-2"
  },
  Ev = q({
    __name: "ChatServiceSelect",
    setup(e) {
      const t = co(),
        {
          isShowChatServiceSelectModal: r,
          sydneyConfigs: o,
          selectedSydneyBaseUrl: n
        } = ot(t),
        i = $t(),
        l = async s => {
          s.isUsable = void 0, s.delay = void 0;
          const u = await t.checkSydneyConfig(s);
          u.errorMsg && i.error(u.errorMsg), s.isUsable = u.isUsable, s.delay = u.delay
        }, d = s => {
          n.value = s.baseUrl, CIB.config.sydney.baseUrl = s.baseUrl, r.value = !1
        }, a = s => {
          if (s.baseUrl) {
            if (!s.baseUrl.startsWith("https://")) {
              i.error("请填写 https 开头的正确链接");
              return
            }
            return l(s)
          }
        };
      return (s, u) => (te(), ke(E(ut), {
        class: "w-11/12 lg:w-[900px]",
        show: E(r),
        "onUpdate:show": u[0] || (u[0] = f => zr(r) ? r.value = f : null),
        preset: "card",
        title: "聊天服务器设置"
      }, {
        default: X(() => [G(E(dp), {
          striped: ""
        }, {
          default: X(() => [be("tbody", null, [(te(!0), Se(Ve, null, Rn(E(o), (f, h) => (te(), Se("tr", {
            key: h
          }, [be("td", null, [f.isCus ? (te(), Se("span", Iv, Ue(f.label), 1)) : (te(), Se("span", _v, Ue(f.label), 1)), f.isCus ? (te(), ke(E(Qe), {
            key: 2,
            class: "lg:hidden",
            value: f.baseUrl,
            "onUpdate:value": p => f.baseUrl = p,
            placeholder: "自定义聊天服务器链接",
            onChange: p => a(f)
          }, null, 8, ["value", "onUpdate:value", "onChange"])) : Je("", !0)]), be("td", Rv, [f.isCus ? (te(), ke(E(Qe), {
            key: 0,
            value: f.baseUrl,
            "onUpdate:value": p => f.baseUrl = p,
            placeholder: "自定义聊天服务器链接",
            onChange: p => a(f)
          }, null, 8, ["value", "onUpdate:value", "onChange"])) : (te(), Se("span", Mv, Ue(f.baseUrl), 1))]), be("td", null, [f.baseUrl && f.isUsable === void 0 && f.delay === void 0 ? (te(), Se("div", Ov, [G(E(ce), {
            tertiary: "",
            loading: !0,
            size: "small",
            type: "info"
          })])) : f.baseUrl ? (te(), Se("div", {
            key: 1,
            class: "flex justify-center items-center flex-wrap gap-2",
            onClick: p => l(f)
          }, [f.isUsable === !1 ? (te(), ke(E(er), {
            key: 0,
            type: "error",
            class: "cursor-pointer"
          }, {
            default: X(() => [se("不可用")]),
            _: 1
          })) : Je("", !0), f.delay ? (te(), ke(E(er), {
            key: 1,
            type: "success",
            class: "cursor-pointer"
          }, {
            default: X(() => [se(Ue(f.delay) + " ms", 1)]),
            _: 2
          }, 1024)) : Je("", !0)], 8, Bv)) : Je("", !0)]), be("td", null, [be("div", Lv, [G(E(ce), {
            class: "hidden lg:table-cell",
            secondary: "",
            onClick: p => l(f)
          }, {
            default: X(() => [se("检测")]),
            _: 2
          }, 1032, ["onClick"]), f.baseUrl === E(n) ? (te(), ke(E(ce), {
            key: 0,
            secondary: "",
            type: "success"
          }, {
            default: X(() => [se("当前")]),
            _: 1
          })) : (te(), ke(E(ce), {
            key: 1,
            secondary: "",
            type: "info",
            onClick: p => d(f)
          }, {
            default: X(() => [se("选择")]),
            _: 2
          }, 1032, ["onClick"]))])])]))), 128))])]),
          _: 1
        })]),
        _: 1
      }, 8, ["show"]))
    }
  }),
  Av = be("div", {
    class: "w-0 md:w-[60px]"
  }, null, -1),
  Dv = {
    key: 0,
    class: "fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/40 z-50"
  },
  Fv = 130,
  Nv = q({
    __name: "Chat",
    setup(e) {
      const t = $t(),
        r = O(!0),
        o = At(),
        {
          isShowPromptSotre: n,
          isShowChatPrompt: i,
          keyword: l,
          promptList: d,
          searchPromptList: a,
          selectedPromptIndex: s
        } = ot(o),
        u = co(),
        {
          isShowChatServiceSelectModal: f,
          sydneyConfigs: h,
          selectedSydneyBaseUrl: p
        } = ot(u),
        v = Ri(),
        y = O(),
        w = O(!1),
        x = O(!1),
        P = O(!1),
        k = O(""),
        b = O(!1),
        m = D(() => CIB.vm.isMobile && CIB.vm.sidePanel.isVisibleMobile || !CIB.vm.isMobile && CIB.vm.sidePanel.isVisibleDesktop);
      et(async () => {
        await _(), R(), SydneyFullScreenConv.initWithWaitlistUpdate({
          cookLoc: {}
        }, 10), A(), r.value = !1, K(), F()
      });
      const R = () => {},
        z = () => {
          if (p.value) CIB.config.sydney.baseUrl = p.value, f.value = !1;
          else {
            if (f.value = !0, p.value = CIB.config.sydney.baseUrl, h.value.filter(oe => !oe.isCus).every(oe => oe.baseUrl !== p.value)) {
              const oe = h.value.find(Q => Q.isCus);
              oe && (oe.baseUrl = p.value)
            }
            u.checkAllSydneyConfig()
          }
        },
        A = async () => {
          const W = await v.getSysConfig();
          switch (W.code) {
            case uo.OK: {
              if (!W.data.isAuth) {
                P.value = !0;
                return
              }
              $(W.data)
            }
            break;
          default:
            t.error(`[${W.code}] ${W.message}`);
            break
          }
        }, $ = W => {
          W.isSysCK || v.checkUserToken(), z()
        }, _ = async () => new Promise((W, oe) => {
          sj_evt.bind("sydFSC.init", W, !0), sj_evt.fire("showSydFSC")
        }), K = () => {
          var ye, ne, Le, Ne, He, Ee, U, J, V;
          location.hostname === "localhost" && (CIB.config.sydney.hostnamesToBypassSecureConnection = CIB.config.sydney.hostnamesToBypassSecureConnection.filter(de => de !== location.hostname));
          const W = document.querySelector("cib-serp");
          W == null || W.setAttribute("alignment", "center");
          const oe = (ye = W == null ? void 0 : W.shadowRoot) == null ? void 0 : ye.querySelector("cib-conversation"),
            Q = (ne = oe == null ? void 0 : oe.shadowRoot) == null ? void 0 : ne.querySelector("cib-welcome-container");
          (Ne = (Le = Q == null ? void 0 : Q.shadowRoot) == null ? void 0 : Le.querySelector(".learn-tog-item")) == null || Ne.remove(), (Ee = (He = W == null ? void 0 : W.shadowRoot) == null ? void 0 : He.querySelector("cib-serp-feedback")) == null || Ee.remove(), _i() && ((J = (U = Q == null ? void 0 : Q.shadowRoot) == null ? void 0 : U.querySelector(".container-item")) == null || J.remove(), CIB.vm.actionBar.input.placeholder = '有问题尽管问我...（"/" 触发提示词）');
          const we = document.createElement("style");
          we.innerText = bv, (V = oe.shadowRoot) == null || V.append(we)
        }, F = () => {
          var Q, we;
          const W = (we = (Q = document.querySelector("#b_sydConvCont > cib-serp")) == null ? void 0 : Q.shadowRoot) == null ? void 0 : we.querySelector("#cib-action-bar-main"),
            oe = W.handleInputTextKey;
          W.handleInputTextKey = function (ye) {
            if (!(ye.key === "Enter" && i.value)) return oe.apply(this, [ye])
          }, CIB.vm.actionBar.input.addEventListener("compositionstart", M), CIB.vm.actionBar.input.addEventListener("compositionend", C), CIB.vm.actionBar.input.addEventListener("change", T), CIB.vm.actionBar.input.addEventListener("input", T), CIB.vm.actionBar.input.addEventListener("keydown", Y), CIB.vm.actionBar.input.addEventListener("focus", H), CIB.vm.actionBar.input.addEventListener("blur", N)
        }, M = W => {
          w.value = !0
        }, C = W => {
          w.value = !1, T(W)
        }, T = W => {
          var oe;
          w.value || (W instanceof InputEvent || W instanceof CompositionEvent) && W.target instanceof HTMLTextAreaElement && ((oe = W.target.value) != null && oe.startsWith("/") ? (i.value = !0, l.value = W.target.value.slice(1), s.value = 0) : (l.value = "", i.value = !1))
        }, H = W => {}, N = W => {
          setTimeout(() => {
            i.value = !1
          }, 200)
        }, Y = W => {
          switch (W.key) {
            case "ArrowUp":
              s.value > 0 && (s.value--, y.value && y.value.scrollToIndex(s.value));
              break;
            case "ArrowDown":
              s.value < a.value.length - 1 && (s.value++, y.value && y.value.scrollToIndex(s.value));
              break;
            case "Tab":
            case "Enter": {
              if (!CIB.vm.actionBar.inputText || !CIB.vm.actionBar.inputText.startsWith("/")) return;
              re(a.value[s.value])
            }
            break
          }
        }, re = W => {
          W && (l.value = "", CIB.vm.actionBar.inputText = W.prompt, i.value = !1)
        }, ve = () => {
          x.value = !0, setTimeout(() => {
            var W;
            if (x.value === !0) {
              x.value = !1;
              const oe = ((W = y.value) == null ? void 0 : W.getOffset()) || 0;
              s.value = Math.round(oe / Fv)
            }
          }, 100)
        }, Ce = async () => {
          if (!k.value) {
            t.error("请先输入授权码");
            return
          }
          b.value = !0, v.setAuthKey(k.value);
          const W = await v.getSysConfig();
          W.data.isAuth ? (t.success("授权成功"), P.value = !1, $(W.data)) : t.error("授权码有误"), b.value = !1
        };
      return (W, oe) => (te(), Se(Ve, null, [G(Tv, {
        "is-show": r.value
      }, null, 8, ["is-show"]), be("main", null, [E(i) ? (te(), Se("div", {
        key: 0,
        class: Mn(["box-border fixed bottom-[110px] w-full flex justify-center px-[14px] md:px-[34px] z-999", {
          "md:px-[170px]": m.value,
          "xl:px-[220px]": m.value
        }])
      }, [Av, E(d).length > 0 ? (te(), ke(E(Oi), {
        key: 0,
        ref_key: "scrollbarRef",
        ref: y,
        class: "bg-white w-full max-w-[1060px] max-h-[390px] rounded-xl overflow-y-auto",
        "data-key": "prompt",
        "data-sources": E(a),
        "data-component": wv,
        keeps: 10,
        onScroll: ve
      }, null, 8, ["data-sources"])) : (te(), ke(E(no), {
        key: 1,
        class: "bg-white w-full max-w-[1060px] max-h-[390px] rounded-xl py-6",
        description: "暂未设置提示词数据"
      }, {
        extra: X(() => [G(E(ce), {
          secondary: "",
          type: "info",
          onClick: oe[0] || (oe[0] = Q => n.value = !0)
        }, {
          default: X(() => [se("去提示词库添加")]),
          _: 1
        })]),
        _: 1
      }))], 2)) : Je("", !0)]), be("footer", null, [G(Ev), P.value ? (te(), Se("div", Dv, [G(E(ap), {
        class: "box-border w-11/12 lg:w-[400px] px-4 py-4 bg-white rounded-md",
        status: "403",
        title: "401 未授权"
      }, {
        footer: X(() => [G(E(Qe), {
          class: "w-11/12",
          value: k.value,
          "onUpdate:value": oe[1] || (oe[1] = Q => k.value = Q),
          type: "password",
          placeholder: "请输入授权码",
          maxlength: "60",
          clearable: ""
        }, null, 8, ["value"]), G(E(ce), {
          class: "mt-4",
          secondary: "",
          type: "info",
          loading: b.value,
          onClick: Ce
        }, {
          default: X(() => [se("授权")]),
          _: 1
        }, 8, ["loading"])]),
        _: 1
      })])) : Je("", !0)])], 64))
    }
  }),
  jv = q({
    __name: "index",
    setup(e) {
      return (t, r) => (te(), Se("main", null, [G(Yp), G(mv), G(Nv)]))
    }
  });
export {
  jv as
  default
};