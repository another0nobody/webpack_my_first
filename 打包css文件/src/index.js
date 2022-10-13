import './css/index.css'
import './less/index.less'
import $ from 'jquery'
$(function () {
  $('ul > li:odd').css('color', 'green')
  $('ul > li:even').css('color','red')
})
