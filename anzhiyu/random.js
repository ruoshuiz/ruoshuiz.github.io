var posts=["2024/08/13/Android-洛雪音乐助手/","2024/08/14/Windows-Bandizip/","2024/08/13/Windows-Bilidown/","2024/08/13/Windows-Ryujinx/","2024/08/12/Windows-洛雪音乐助手/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };