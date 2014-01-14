ScalaJS.impls.com_obsidian_player_Ti$class__$init$__Lcom_obsidian_player_Ti__V = (function($this) {
  $this["com$obsidian$player$Ti$_setter_$UI"] = ScalaJS.modules.scala_Predef().$qmark$qmark$qmark__Lscala_Nothing()
});

ScalaJS.impls.com_obsidian_player_UI$class__createView__Lcom_obsidian_player_UI__Lcom_obsidian_player_View = (function($this) {
  return ScalaJS.modules.scala_Predef().$qmark$qmark$qmark__Lscala_Nothing()
});
ScalaJS.impls.com_obsidian_player_UI$class__createLabel__Lcom_obsidian_player_UI__Lcom_obsidian_player_Label = (function($this) {
  return ScalaJS.modules.scala_Predef().$qmark$qmark$qmark__Lscala_Nothing()
});
ScalaJS.impls.com_obsidian_player_UI$class__$init$__Lcom_obsidian_player_UI__V = (function($this) {
  /*<skip>*/
});

/** @constructor */
ScalaJS.c.com_obsidian_player_DynamicView$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.com_obsidian_player_DynamicView$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_obsidian_player_DynamicView$.prototype.constructor = ScalaJS.c.com_obsidian_player_DynamicView$;
ScalaJS.c.com_obsidian_player_DynamicView$.prototype.init__Lscala_scalajs_js_Dynamic = (function() {
  var view = ScalaJS.g["Ti"]["UI"]["createView"]();
  var label = ScalaJS.g["Ti"]["UI"]["createLabel"]();
  label["text"] = "Hello dynamic view.";
  label["color"] = "#000000";
  label["height"] = "auto";
  label["width"] = "auto";
  view["add"](label);
  return view
});
ScalaJS.c.com_obsidian_player_DynamicView$.prototype.init = (function() {
  return this.init__Lscala_scalajs_js_Dynamic()
});
/** @constructor */
ScalaJS.inheritable.com_obsidian_player_DynamicView$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_obsidian_player_DynamicView$.prototype = ScalaJS.c.com_obsidian_player_DynamicView$.prototype;
/** @constructor */
ScalaJS.classes.com_obsidian_player_DynamicView$ = (function() {
  ScalaJS.c.com_obsidian_player_DynamicView$.call(this);
  return this.init___()
});
ScalaJS.classes.com_obsidian_player_DynamicView$.prototype = ScalaJS.c.com_obsidian_player_DynamicView$.prototype;
ScalaJS.is.com_obsidian_player_DynamicView$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_obsidian_player_DynamicView$)))
});
ScalaJS.as.com_obsidian_player_DynamicView$ = (function(obj) {
  if ((ScalaJS.is.com_obsidian_player_DynamicView$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.obsidian.player.DynamicView")
  }
});
ScalaJS.isArrayOf.com_obsidian_player_DynamicView$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_obsidian_player_DynamicView$)))
});
ScalaJS.asArrayOf.com_obsidian_player_DynamicView$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_obsidian_player_DynamicView$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.obsidian.player.DynamicView;", depth)
  }
});
ScalaJS.data.com_obsidian_player_DynamicView$ = new ScalaJS.ClassTypeData({
  com_obsidian_player_DynamicView$: 0
}, false, "com.obsidian.player.DynamicView", ScalaJS.data.java_lang_Object, {
  com_obsidian_player_DynamicView$: true,
  java_lang_Object: true
});
ScalaJS.c.com_obsidian_player_DynamicView$.prototype.$classData = ScalaJS.data.com_obsidian_player_DynamicView$;
ScalaJS.moduleInstances.com_obsidian_player_DynamicView = undefined;
ScalaJS.modules.com_obsidian_player_DynamicView = (function() {
  if ((!ScalaJS.moduleInstances.com_obsidian_player_DynamicView)) {
    ScalaJS.moduleInstances.com_obsidian_player_DynamicView = new ScalaJS.c.com_obsidian_player_DynamicView$().init___()
  };
  return ScalaJS.moduleInstances.com_obsidian_player_DynamicView
});

ScalaJS.is.com_obsidian_player_Label = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_obsidian_player_Label)))
});
ScalaJS.as.com_obsidian_player_Label = (function(obj) {
  if ((ScalaJS.is.com_obsidian_player_Label(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.obsidian.player.Label")
  }
});
ScalaJS.isArrayOf.com_obsidian_player_Label = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_obsidian_player_Label)))
});
ScalaJS.asArrayOf.com_obsidian_player_Label = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_obsidian_player_Label(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.obsidian.player.Label;", depth)
  }
});
ScalaJS.data.com_obsidian_player_Label = new ScalaJS.ClassTypeData({
  com_obsidian_player_Label: 0
}, true, "com.obsidian.player.Label", undefined, {
  com_obsidian_player_Label: true,
  com_obsidian_player_WithEventListener: true,
  java_lang_Object: true
});

/** @constructor */
ScalaJS.c.com_obsidian_player_PlayerView$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.com_obsidian_player_PlayerView$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.com_obsidian_player_PlayerView$.prototype.constructor = ScalaJS.c.com_obsidian_player_PlayerView$;
ScalaJS.c.com_obsidian_player_PlayerView$.prototype.init__Lcom_obsidian_player_View = (function() {
  var view = ScalaJS.g["Ti"]["UI"]["createView"]();
  var label = ScalaJS.g["Ti"]["UI"]["createLabel"]();
  label["text"] = "Player view";
  label["color"] = "blue";
  label["height"] = "auto";
  label["width"] = "auto";
  label["addEventListener"]("click", (function() {
    return (function(e) {
      ScalaJS.g["alert"](("Hi, I'm event: " + ScalaJS.anyToStringForConcat(e["type"].toString())));
      return ScalaJS.bV(undefined)
    })
  })());
  view["add"](label);
  return view
});
ScalaJS.c.com_obsidian_player_PlayerView$.prototype.init = (function() {
  return this.init__Lcom_obsidian_player_View()
});
/** @constructor */
ScalaJS.inheritable.com_obsidian_player_PlayerView$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.com_obsidian_player_PlayerView$.prototype = ScalaJS.c.com_obsidian_player_PlayerView$.prototype;
/** @constructor */
ScalaJS.classes.com_obsidian_player_PlayerView$ = (function() {
  ScalaJS.c.com_obsidian_player_PlayerView$.call(this);
  return this.init___()
});
ScalaJS.classes.com_obsidian_player_PlayerView$.prototype = ScalaJS.c.com_obsidian_player_PlayerView$.prototype;
ScalaJS.is.com_obsidian_player_PlayerView$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_obsidian_player_PlayerView$)))
});
ScalaJS.as.com_obsidian_player_PlayerView$ = (function(obj) {
  if ((ScalaJS.is.com_obsidian_player_PlayerView$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.obsidian.player.PlayerView")
  }
});
ScalaJS.isArrayOf.com_obsidian_player_PlayerView$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_obsidian_player_PlayerView$)))
});
ScalaJS.asArrayOf.com_obsidian_player_PlayerView$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_obsidian_player_PlayerView$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.obsidian.player.PlayerView;", depth)
  }
});
ScalaJS.data.com_obsidian_player_PlayerView$ = new ScalaJS.ClassTypeData({
  com_obsidian_player_PlayerView$: 0
}, false, "com.obsidian.player.PlayerView", ScalaJS.data.java_lang_Object, {
  com_obsidian_player_PlayerView$: true,
  java_lang_Object: true
});
ScalaJS.c.com_obsidian_player_PlayerView$.prototype.$classData = ScalaJS.data.com_obsidian_player_PlayerView$;
ScalaJS.moduleInstances.com_obsidian_player_PlayerView = undefined;
ScalaJS.modules.com_obsidian_player_PlayerView = (function() {
  if ((!ScalaJS.moduleInstances.com_obsidian_player_PlayerView)) {
    ScalaJS.moduleInstances.com_obsidian_player_PlayerView = new ScalaJS.c.com_obsidian_player_PlayerView$().init___()
  };
  return ScalaJS.moduleInstances.com_obsidian_player_PlayerView
});

ScalaJS.is.com_obsidian_player_Ti = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_obsidian_player_Ti)))
});
ScalaJS.as.com_obsidian_player_Ti = (function(obj) {
  if ((ScalaJS.is.com_obsidian_player_Ti(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.obsidian.player.Ti")
  }
});
ScalaJS.isArrayOf.com_obsidian_player_Ti = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_obsidian_player_Ti)))
});
ScalaJS.asArrayOf.com_obsidian_player_Ti = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_obsidian_player_Ti(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.obsidian.player.Ti;", depth)
  }
});
ScalaJS.data.com_obsidian_player_Ti = new ScalaJS.ClassTypeData({
  com_obsidian_player_Ti: 0
}, true, "com.obsidian.player.Ti", undefined, {
  com_obsidian_player_Ti: true,
  java_lang_Object: true
});

ScalaJS.is.com_obsidian_player_UI = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_obsidian_player_UI)))
});
ScalaJS.as.com_obsidian_player_UI = (function(obj) {
  if ((ScalaJS.is.com_obsidian_player_UI(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.obsidian.player.UI")
  }
});
ScalaJS.isArrayOf.com_obsidian_player_UI = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_obsidian_player_UI)))
});
ScalaJS.asArrayOf.com_obsidian_player_UI = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_obsidian_player_UI(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.obsidian.player.UI;", depth)
  }
});
ScalaJS.data.com_obsidian_player_UI = new ScalaJS.ClassTypeData({
  com_obsidian_player_UI: 0
}, true, "com.obsidian.player.UI", undefined, {
  com_obsidian_player_UI: true,
  java_lang_Object: true
});

ScalaJS.is.com_obsidian_player_View = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_obsidian_player_View)))
});
ScalaJS.as.com_obsidian_player_View = (function(obj) {
  if ((ScalaJS.is.com_obsidian_player_View(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.obsidian.player.View")
  }
});
ScalaJS.isArrayOf.com_obsidian_player_View = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_obsidian_player_View)))
});
ScalaJS.asArrayOf.com_obsidian_player_View = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_obsidian_player_View(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.obsidian.player.View;", depth)
  }
});
ScalaJS.data.com_obsidian_player_View = new ScalaJS.ClassTypeData({
  com_obsidian_player_View: 0
}, true, "com.obsidian.player.View", undefined, {
  com_obsidian_player_View: true,
  java_lang_Object: true
});

ScalaJS.is.com_obsidian_player_WithEventListener = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.com_obsidian_player_WithEventListener)))
});
ScalaJS.as.com_obsidian_player_WithEventListener = (function(obj) {
  if ((ScalaJS.is.com_obsidian_player_WithEventListener(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "com.obsidian.player.WithEventListener")
  }
});
ScalaJS.isArrayOf.com_obsidian_player_WithEventListener = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.com_obsidian_player_WithEventListener)))
});
ScalaJS.asArrayOf.com_obsidian_player_WithEventListener = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.com_obsidian_player_WithEventListener(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lcom.obsidian.player.WithEventListener;", depth)
  }
});
ScalaJS.data.com_obsidian_player_WithEventListener = new ScalaJS.ClassTypeData({
  com_obsidian_player_WithEventListener: 0
}, true, "com.obsidian.player.WithEventListener", undefined, {
  com_obsidian_player_WithEventListener: true,
  java_lang_Object: true
});

ScalaJS.data.com_obsidian_player_FromGlobal$ = new ScalaJS.ClassTypeData({
  com_obsidian_player_FromGlobal$: 0
}, false, "com.obsidian.player.FromGlobal", ScalaJS.data.scala_scalajs_js_Object, {
  com_obsidian_player_FromGlobal$: true,
  scala_scalajs_js_GlobalScope: true,
  scala_scalajs_js_Object: true,
  scala_scalajs_js_Any: true,
  java_lang_Object: true
});

//@ sourceMappingURL=scala-player.js.map
