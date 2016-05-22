####Install
nodemon 更改程式node 才會自動重啟用於開發時
npm install -g nodemon
npm install

####Start
npm run serve

#### Database
```
SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

CREATE DATABASE `express` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `express`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pass` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('actived','draft','deleted') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mail_pass_status` (`mail`,`pass`,`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `users` (`id`, `name`, `pass`, `mail`, `status`, `created`) VALUES
(1, 'Zac Chou', '123456789',  'zacchoume@gmail.com',  'actived',  '2016-05-22 13:03:53'),
(2, 'Phantas',  '1234567890', 'phantas@gmail.com',  'actived',  '2016-05-22 18:14:42');
```
# express-start-kit
