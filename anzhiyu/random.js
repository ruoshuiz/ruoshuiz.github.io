var posts=["posts/pvz合集/","posts/A-BILIBILIAS/","posts/A-LSPatch/","posts/A-MT管理器/","posts/A-VmosPro/","posts/A-SaltPlayer/","posts/A-元力音乐/","posts/A-光速虚拟机/","posts/A-哔哔音乐/","posts/A-小小电脑/","posts/A-歌词适配/","posts/A-LXmusic/","posts/A-爱玩机工具箱/","posts/A-瓜子影视/","posts/ATV-BBLL/","posts/S-Win10/","posts/S-Win7/","posts/S-Win8/","posts/W-2345看图王/","posts/W-360驱动大师/","posts/W-7zip/","posts/W-Bandizip/","posts/W-BetterGI/","posts/W-Bilidown/","posts/W-KMPlayer/","posts/W-Lanzou_Electron/","posts/W-March7thAssistant/","posts/W-Photoshop/","posts/W-PotPlayer/","posts/W-Ryujinx/","posts/W-VMware/","posts/W-VirtualBox/","posts/W-WSAOnWin10/","posts/W-搜狗拼音输入法/","posts/W-云萌激活/","posts/W-格式工厂/","posts/W-LXmusic/","posts/W-火绒弹窗拦截/","posts/W-百分浏览器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };