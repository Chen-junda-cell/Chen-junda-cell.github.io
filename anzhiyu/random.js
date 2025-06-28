var posts=["2024/10/24/博客发布成功！/","2025/06/28/TEST/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };