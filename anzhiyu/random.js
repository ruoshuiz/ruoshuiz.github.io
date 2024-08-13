var posts=["2024/08/12/[Windows]洛雪音乐助手/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };