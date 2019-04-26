document.querySelector("#year").innerHTML = new Date().getFullYear();
var app1 = new Vue({
  el:'#app1',
  data:{
    navList: [
      {
        text: 'PORTFOLIO',
        url: 'index.html'
      },
      {
        text: 'MESSAGE',
        url: 'message.html'
      },
      {
        text: 'LOCKITIN',
        url: 'lockitin.html'
      },
      {
        text: 'CAMPING',
        url: 'camping.html'
      },
      {
        text: 'VISUAL',
        url: 'visual.html'
      }
    ]
  },
  computed:{
    currentPage: function(){
      return location.pathname.replace('/','');
    }
  }
})