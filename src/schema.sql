-- Adminer 4.8.1 MySQL 5.5.5-10.9.3-MariaDB-1:10.9.3+maria~ubu2204 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP DATABASE IF EXISTS `vivatech`;
CREATE DATABASE `vivatech` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `vivatech`;

DROP TABLE IF EXISTS `cv`;
CREATE TABLE `cv` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `cv` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `qrcode`;
CREATE TABLE `qrcode` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `qrcode` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `qrcode` int(20) DEFAULT NULL,
  `cv` int(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `qrcode` (`qrcode`),
  KEY `cv` (`cv`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`qrcode`) REFERENCES `qrcode` (`id`) ON DELETE SET NULL,
  CONSTRAINT `user_ibfk_2` FOREIGN KEY (`cv`) REFERENCES `cv` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- 2023-05-25 12:24:02