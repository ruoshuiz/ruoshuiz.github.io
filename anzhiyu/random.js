var posts=["posts/pvz合集/","posts/A-BILIBILIAS/","posts/A-LSPatch/","posts/A-MT管理器/","posts/A-元力音乐/","posts/A-小小电脑/","posts/A-歌词适配/","posts/A-LXmusic/","posts/W-2345看图王/","posts/W-Bandizip/","posts/W-BetterGI/","posts/W-Bilidown/","posts/W-Lanzou_Electron/","posts/W-March7thAssistant/","posts/W-Ryujinx/","posts/W-LXmusic/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };