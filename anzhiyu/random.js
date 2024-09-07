var posts=["posts/pvz合集/","posts/A-BILIBILIAS/","posts/A-LSPatch/","posts/A-MT管理器/","posts/dba6fb02/","posts/3947d987/","posts/3f8b00fa/","posts/4e3c6833/","posts/5d2548b/","posts/1b7f1f1d/","posts/bae59f39/","posts/246872ec/","posts/dc74526/","posts/6041e474/","posts/c288664d/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };