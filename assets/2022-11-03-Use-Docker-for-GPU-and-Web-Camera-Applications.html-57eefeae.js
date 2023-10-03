const e=JSON.parse('{"key":"v-e7ef789e","path":"/blog/2022-11-03-Use-Docker-for-GPU-and-Web-Camera-Applications.html","title":"使用Docker辅助图像识别程序开发：在Docker中访问GPU和、USB相机以及网络","lang":"en-US","frontmatter":{"title":"使用Docker辅助图像识别程序开发：在Docker中访问GPU和、USB相机以及网络","subtitle":"Using Docker for Improving Image Recogntion Applications Development : Docker  with GPU and USB Camera and network","author":"BigBook","header-style":"text","tag":["Docker","Image Recognition","GPU Docker","Web Camera","USB Camera"],"description":"引言 在操作系统中发行应用程序，尤其是python应用程序，其环境配置常常是分发过程中的重要一环。如果像开发的时候那样手动构建，一方面工作量难以承受，另一方面经常会出现各种各样的问题。在不同的目标主机上手动构建环境，会受到目标操作系统的版本、文件系统、所安装软件包的情况影响。而且开发时所使用的一些默认安装包，到了发布的时候可能已经都被更新过，所以手动构...","head":[["meta",{"property":"og:url","content":"https://bigbookplus.github.io/blog/2022-11-03-Use-Docker-for-GPU-and-Web-Camera-Applications.html"}],["meta",{"property":"og:site_name","content":"Learning BigBook"}],["meta",{"property":"og:title","content":"使用Docker辅助图像识别程序开发：在Docker中访问GPU和、USB相机以及网络"}],["meta",{"property":"og:description","content":"引言 在操作系统中发行应用程序，尤其是python应用程序，其环境配置常常是分发过程中的重要一环。如果像开发的时候那样手动构建，一方面工作量难以承受，另一方面经常会出现各种各样的问题。在不同的目标主机上手动构建环境，会受到目标操作系统的版本、文件系统、所安装软件包的情况影响。而且开发时所使用的一些默认安装包，到了发布的时候可能已经都被更新过，所以手动构..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-18T15:49:04.000Z"}],["meta",{"property":"article:author","content":"BigBook"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:tag","content":"Image Recognition"}],["meta",{"property":"article:tag","content":"GPU Docker"}],["meta",{"property":"article:tag","content":"Web Camera"}],["meta",{"property":"article:tag","content":"USB Camera"}],["meta",{"property":"article:modified_time","content":"2023-07-18T15:49:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用Docker辅助图像识别程序开发：在Docker中访问GPU和、USB相机以及网络\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-18T15:49:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BigBook\\"}]}"]]},"headers":[{"level":2,"title":"引言","slug":"引言","link":"#引言","children":[]},{"level":2,"title":"安装和配置","slug":"安装和配置","link":"#安装和配置","children":[{"level":3,"title":"安装docker","slug":"安装docker","link":"#安装docker","children":[]},{"level":3,"title":"安装nvidia-docker","slug":"安装nvidia-docker","link":"#安装nvidia-docker","children":[]}]},{"level":2,"title":"在docker中显示GUI","slug":"在docker中显示gui","link":"#在docker中显示gui","children":[]},{"level":2,"title":"在Docker中访问usb相机","slug":"在docker中访问usb相机","link":"#在docker中访问usb相机","children":[]},{"level":2,"title":"在Docker镜像中开放端口","slug":"在docker镜像中开放端口","link":"#在docker镜像中开放端口","children":[]},{"level":2,"title":"开启更多的GPU功能支持","slug":"开启更多的gpu功能支持","link":"#开启更多的gpu功能支持","children":[]},{"level":2,"title":"创建本地镜像中心","slug":"创建本地镜像中心","link":"#创建本地镜像中心","children":[{"level":3,"title":"一些可选参数","slug":"一些可选参数","link":"#一些可选参数","children":[]},{"level":3,"title":"上传镜像","slug":"上传镜像","link":"#上传镜像","children":[]}]},{"level":2,"title":"回收空间","slug":"回收空间","link":"#回收空间","children":[{"level":3,"title":"清理所有的无用镜像","slug":"清理所有的无用镜像","link":"#清理所有的无用镜像","children":[]},{"level":3,"title":"清理指定的镜像","slug":"清理指定的镜像","link":"#清理指定的镜像","children":[]}]},{"level":2,"title":"GPU Docker with Anaconda","slug":"gpu-docker-with-anaconda","link":"#gpu-docker-with-anaconda","children":[{"level":3,"title":"第一种方式:构建DockerFile","slug":"第一种方式-构建dockerfile","link":"#第一种方式-构建dockerfile","children":[]},{"level":3,"title":"第二种方式:直接手动构建镜像","slug":"第二种方式-直接手动构建镜像","link":"#第二种方式-直接手动构建镜像","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1689695344000,"updatedTime":1689695344000,"contributors":[{"name":"Xuling Chang","email":"xuling.chang@live.com","commits":1}]},"readingTime":{"minutes":5.7,"words":1710},"filePathRelative":"blog/2022-11-03-Use-Docker-for-GPU-and-Web-Camera-Applications.md","localizedDate":"July 18, 2023","autoDesc":true}');export{e as data};