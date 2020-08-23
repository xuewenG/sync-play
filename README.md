# 介绍

这是一个可以在多个设备上同步播放视频的网页播放器。

想要实现视频的同步播放，主要的问题有以下几点：

1. 同步开始
2. 同步暂停
3. 同步调整播放进度

客户端向服务端发送视频的播放、暂停等事件很容易实现，但是如果想即时地接收其他客户端的播放事件，就需要 WebSocket 的支持。

# 演示

使用两个浏览器分别打开 [演示页面](https://blog.xuewen.me/pages/sync-play/)。

在页面中输入：

1. 视频编号：test
2. 房间号码：123456

<!-- Remove Link: https://sm.ms/delete/oR3qS8byavQJKxZXmrG672izpO -->
![登录页面](https://i.loli.net/2020/08/20/FQJb7VHZawemLSj.png)

其中房间号码可以输入任意数字，但是需要同步的浏览器的房间号要保持一致。

点击进入房间按钮后，即可进入视频播放页面。

<!-- Remove Link: https://sm.ms/delete/DAl4MIo2XTcBZvmh1iztuCUjSE -->
![视频播放页面](https://i.loli.net/2020/08/20/kuzTJLDfeSopYF6.png)

由于**浏览器限制**，打开页面后必须**先点击一次播放视频按钮**，然后才可以进行同步播放。

完成以上操作后，两个浏览器之间即可进行同步播放，在一个浏览器中的操作，都会同步到另一个浏览器中。
