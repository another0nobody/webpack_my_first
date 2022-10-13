import './css/index.css'
import './less/index.less'
import jpgObj from './assert/QQ截图20220304141902.png'
import $ from 'jquery'
import './assert/fonts/iconfont.css'
$(function () {
  $('ul > li:odd').css('color', 'green')
  $('ul > li:even').css('color', 'red')
  let im = document.createElement('img')
  im.src = jpgObj
  document.body.appendChild(im)

  let theI = document.body.createElement('i')
  theI.classname = 'iconfont icon-weixin'
  document.body.appendChild(theI)

})
