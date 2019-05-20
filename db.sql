/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

DROP DATABASE IF EXISTS `feed`;
CREATE DATABASE IF NOT EXISTS `feed` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `feed`;

DROP TABLE IF EXISTS `post`;
CREATE TABLE IF NOT EXISTS `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `available` bit(1) NOT NULL DEFAULT b'1',
  PRIMARY KEY (`id`),
  KEY `FK_post_user` (`userId`),
  CONSTRAINT `FK_post_user` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='all posts';

/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` (`id`, `description`, `userId`, `createdAt`, `available`) VALUES
	(1, 'Hello world!', 1, '2019-05-17 00:08:35', b'0'),
	(2, 'My second comment', 1, '2019-05-17 22:14:24', b'1'),
	(3, 'from graphiql', 2, '2019-05-18 03:35:20', b'1'),
	(4, 'limajs', 2, '2019-05-18 03:35:59', b'0'),
	(5, 'GraphQL for everybody', 1, '2019-05-18 10:02:32', b'0'),
	(6, 'from graphiql', 2, '2019-05-18 10:03:17', b'1'),
	(7, 'Apollo for me', 2, '2019-05-18 10:03:31', b'1'),
	(8, 'Welcome!', 2, '2019-05-18 10:07:48', b'1'),
	(9, 'This app was done with Nodejs, GraphQL, Apollo and React', 1, '2019-05-18 10:13:22', b'0'),
	(10, 'I\'m sleepy', 1, '2019-05-18 10:31:00', b'0'),
	(11, 'I\'m missing re-fetch some queries', 1, '2019-05-18 11:07:40', b'0'),
	(12, 'One more time', 1, '2019-05-18 11:13:37', b'1'),
	(13, 'What happen right now?', 1, '2019-05-18 11:14:31', b'0'),
	(14, 'It has dawned', 1, '2019-05-18 11:15:52', b'0'),
	(15, 'Test reverse', 1, '2019-05-18 15:49:17', b'0'),
	(16, 'Social network.\n\nI <3 React!', 1, '2019-05-18 15:58:43', b'0'),
	(17, 'I\'m coding... <°_°>', 1, '2019-05-18 16:03:22', b'0'),
	(18, 'I\'m awake...', 1, '2019-05-18 16:05:12', b'0'),
	(19, 'Yeah!\nThis works!', 1, '2019-05-18 16:07:38', b'0'),
	(20, 'Is it re-rendering all?', 1, '2019-05-18 16:08:09', b'0'),
	(21, 'empty', 1, '2019-05-18 18:32:26', b'0'),
	(22, 'testing', 1, '2019-05-18 18:32:58', b'0');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `nickname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `available` bit(1) NOT NULL DEFAULT b'1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQUE KEY` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='all user to access';

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `fullname`, `nickname`, `password`, `createdAt`, `available`) VALUES
	(1, 'Daniel Infante', 'infantito', '123456', '2019-05-17 21:48:12', b'1'),
	(2, 'Josh Saavedra', 'josh', '123456', '2019-05-17 22:15:10', b'1'),
	(3, 'Anibal Infante', 'kiko', 'qwerty', '2019-05-18 04:37:43', b'1');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
