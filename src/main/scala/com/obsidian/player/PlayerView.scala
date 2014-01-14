package com.obsidian.player

import scala.scalajs.js
import js.Dynamic.{ global => g }
import org.scalajs.dom

object FromGlobal extends js.GlobalScope {
    def alert(msg:String):Unit = ???
    val Ti:Ti = ???
}

object PlayerView {
  def init():View = {
    val view = FromGlobal.Ti.UI.createView()
    val label = FromGlobal.Ti.UI.createLabel()
    label.text = "Player view"
    label.color = "blue"
    label.height = "auto"
    label.width = "auto"
    label.addEventListener("click", (e:dom.Event) => FromGlobal.alert("Hi, I'm event: " + e.`type`.toString))
    view.add(label)
    view
  }
}

object DynamicView {
  def init() = {
    val view = g.Ti.UI.createView()
    val label = g.Ti.UI.createLabel()
    label.text = "Hello dynamic view."
    label.color = "#000000"
    label.height = "auto"
    label.width = "auto"
    view.add(label)
    view
  }
}



trait Ti extends js.Object {
  val UI:UI = ???
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

