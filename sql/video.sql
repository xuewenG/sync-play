CREATE TABLE `video`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `videoCode` varchar(50) NOT NULL COMMENT '视频编号',
  `videoUrl` varchar(255) NOT NULL COMMENT '视频地址',
  `subtitleUrl` varchar(255) NULL DEFAULT NULL COMMENT '字幕地址',
  `createTime` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `updateTime` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '修改时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `videoCode`(`videoCode`) USING BTREE COMMENT '视频编号索引'
) CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci;
