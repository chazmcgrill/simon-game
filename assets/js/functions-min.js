$(document).ready(function(){function s(){var s=Math.floor(4*Math.random())+1;n.push(s),console.log(n),c(s)}function c(s){$("#"+s).addClass("filter"),setTimeout(function(){$("#"+s).removeClass("filter")},500)}console.log("site loaded");var t=!1,o=!1,n=[];console.log(s()),$(".onoff-btn").click(function(){var s=$(this);"20px"===s.css("left")?s.css("left","2px"):s.css("left","20px")}),$(".start-btn").click(function(){t?($(this).css("background","#4FB0C6"),t=!1):($(this).css("background","#9eedff"),t=!0)}),$(".strict-btn").click(function(){o?($(this).css("background","#6C49B8"),o=!1):($(this).css("background","#c9b3f9"),o=!0)})});