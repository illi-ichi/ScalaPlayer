package com.obsidian.player

import scala.scalajs.js
import js.Dynamic.{ global => g }
import org.scalajs.dom
import scala.scalajs.js.annotation.JSBracketAccess

object FromGlobal extends js.GlobalScope {
    def alert(msg:String):Unit = ???
    val Ti:Ti = ???
}

object PlayerView {
  def init():View = {
    val view = FromGlobal.Ti.UI.createView()
    val label = FromGlobal.Ti.UI.createLabel()
    val opts = js.Dictionary()
    label.text = "Player View"
    label.color = "blue"
    label.height = "auto"
    label.width = "auto"
    label.addEventListener("click", (e:dom.Event) => FromGlobal.Ti.Media.openMusicLibrary(opts))
    view.add(label)
    view
  }
}

object DynamicView {
  def init() = {
    val view = g.Ti.UI.createView()
    val label = g.Ti.UI.createLabel()
    label.text = "Dynamic View"
    label.color = "#000000"
    label.height = "auto"
    label.width = "auto"
    view.add(label)
    view
  }
}

trait Ti extends js.Object {
  val UI:UI = ???
  val Media:Media = ???
  val API:API = ???
}

trait API extends js.Object {
}

trait Media extends js.Object {
  def openMusicLibrary(options:js.Dictionary):Unit = ???
}

trait UI extends js.Object {
  def createView():View = ???
  def createLabel():Label = ???
}

trait Label extends WithEventListener {
  var text:String
  var color:String
  var height:String
  var width:String
}

trait View extends js.Object {
  def add(l:Label):Unit
}

trait WithEventListener extends js.Object {
  def addEventListener(name:String, callback: js.Function1[dom.Event,Unit])
}
