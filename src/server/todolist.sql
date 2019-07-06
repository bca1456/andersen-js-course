/*
 Navicat Premium Data Transfer

 Source Server         : w
 Source Server Type    : MariaDB
 Source Server Version : 100406
 Source Host           : localhost:3306
 Source Schema         : course

 Target Server Type    : MariaDB
 Target Server Version : 100406
 File Encoding         : 65001

 Date: 06/07/2019 10:09:54
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
USE `course`;
-- ----------------------------
-- Table structure for todolist
-- ----------------------------
DROP TABLE IF EXISTS `todolist`;
CREATE TABLE `todolist`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `done` tinyint(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of todolist
-- ----------------------------
INSERT INTO `todolist` VALUES (1, 'create kek1', 0);
INSERT INTO `todolist` VALUES (2, 'create kek2', 0);
INSERT INTO `todolist` VALUES (3, 'create kek3', 1);

SET FOREIGN_KEY_CHECKS = 1;
