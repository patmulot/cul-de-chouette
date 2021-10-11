-- Adminer 4.7.6 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `cdc_combinations`;
CREATE TABLE `cdc_combinations` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `main_title` varchar(64) NOT NULL,
  `title` varchar(64) NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `cdc_combinations` (`id`, `main_title`, `title`, `content`) VALUES
(1,	'Les combinaisons',	'La Chouette',	'Deux dés identiques.\r\n\r\n    La valeur de la Chouette correspond au carré de la valeur des deux dés identiques :\r\n\r\n    1 pt\r\n    4 pts\r\n    9 pts\r\n    16 pts\r\n    25 pts\r\n    36 pts\r\n    Exemple : Je lance mes 2 premiers dés, j\'obtiens 1 et 4. Puis le troisième dé et j\'obtiens 4 de nouveau. Je marque donc 4x4 = 16 points.'),
(2,	'Les combinaisons',	'La Velute',	'La somme de deux dés est égale à la valeur du troisième dé.\r\n\r\n    La Velute a pour valeur le chiffre le plus élevé des trois.\r\n\r\n    La valeur de la Velute correspond au double du carré de la Velute :\r\n\r\n    Impossible\r\n    8 pts (seulement pour une Chouette-Velute)\r\n    18 pts\r\n    32 pts\r\n    50 pts\r\n    72 pts\r\n    Attention, la combinaison 1, 2, 3 est à première vue une suite, et bien que la règle de la suite soit applicable, c\'est également une Velute (1+2 = 3).'),
(3,	'Les combinaisons',	'La Chouette-Velute',	'Une Chouette + une Velute. Il y en a trois possibles : 1, 1, 2 ; 2, 2, 4 et 3, 3, 6.\r\n\r\n    La Chouette-Velute a la valeur de sa Velute. Le premier joueur qui frappe dans ses mains en criant “Pas mou le caillou !” gagne les points de la Chouette-Velute.\r\n\r\n    Si plusieurs joueurs sont à égalité lors de l\'annonce, alors les points de la Chouette-Velute sont soustraits des scores des joueurs concernés.'),
(4,	'Les combinaisons',	'Le Cul de Chouette',	'Trois dés identiques.\r\n\r\n    La valeur du Cul de Chouette correspond à 40 pts + 10 * valeur du dé :\r\n\r\n    50 pts\r\n    60 pts\r\n    70 pts\r\n    80 pts\r\n    90 pts\r\n    100 pts'),
(5,	'Les combinaisons',	'La Suite',	'Trois dés qui se suivent.\r\nla valeur de la Suite est de 10 pts');

DROP TABLE IF EXISTS `cdc_player_stats`;
CREATE TABLE `cdc_player_stats` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `player` varchar(64) NOT NULL,
  `score` int(10) NOT NULL,
  `figstats` varchar(128) NOT NULL,
  `rounds` int(10) NOT NULL,
  `siropstats` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `cdc_player_stats` (`id`, `player`, `score`, `figstats`, `rounds`, `siropstats`) VALUES
(0,	'select',	0,	'0',	0,	'0'),
(195,	'Perceval',	345,	'1,1,2,3,2,11,',	20,	'1,1,0,'),
(196,	'Kadoc',	399,	'4,2,4,13,3,6,',	32,	'17,4,13,'),
(197,	'Fab',	403,	'1,0,4,0,3,5,',	18,	'0,0,0,'),
(198,	'Pat',	61,	'0,0,0,0,0,2,',	3,	'0,0,0,'),
(199,	'getgig',	761,	'6,12,13,0,6,30,',	36,	'26,8,18,'),
(200,	'',	362,	'2,4,6,0,0,10,',	20,	'4,4,0,'),
(201,	'coucou',	351,	'3,0,3,0,1,4,',	14,	'2,2,0,'),
(202,	'coucouPat',	345,	'3,3,9,0,3,6,',	13,	'6,6,0,');

DROP TABLE IF EXISTS `cdc_presentation`;
CREATE TABLE `cdc_presentation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `main_title` varchar(64) NOT NULL,
  `title` varchar(64) NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `cdc_presentation` (`id`, `main_title`, `title`, `content`) VALUES
(1,	'PRESENTATION',	'Le cul de chouette',	'Le Cul de chouette est un jeu originaire de la série Kaamelott et se joue avec trois dés. Le but du jeu est d\'atteindre ou dépasser 343 points, le score à atteindre provenant des initiales du nom du jeu (CDC), soit les 3e, 4e et 3e lettres de l\'alphabet. La version présentée ici est le fruit d\'une compilation de règles précédentes et d\'ajouts inédits (plus de détails dans la partie « Origine des règles »). Il se veut être le plus complet possible, cependant, il est possible de ne jouer qu\'avec une partie des règles afin de rendre le jeu plus simple.');

DROP TABLE IF EXISTS `cdc_rules`;
CREATE TABLE `cdc_rules` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(64) NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `cdc_rules` (`id`, `title`, `content`) VALUES
(1,	'Déroulement du jeu',	'Le Cul de chouette se joue avec trois dés, et à deux joueurs minimum. Le but du jeu est d\'atteindre ou dépasser 343 points.\r\n\r\n    Chaque joueur lance un dé, celui qui fait le plus petit score commence. Si plusieurs joueurs font le plus petit score, ils recommencent pour se départager. Le jeu s\'effectue ensuite dans le sens inverse des aiguilles d\'une montre.\r\n\r\n    À son tour de jeu, le joueur lance deux dés (les chouettes), puis le troisième (le cul). On applique alors la règle correspondant à la combinaison formée par les trois dés. Sauf cas particulier, le joueur lançant les dés remporte les points de la combinaison réalisée.');

DROP TABLE IF EXISTS `cdc_score_rec`;
CREATE TABLE `cdc_score_rec` (
  `tr` int(10) NOT NULL,
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `player` varchar(64) NOT NULL,
  `score` varchar(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `cdc_score_rec` (`tr`, `id`, `player`, `score`) VALUES
(20,	59,	'Perceval',	'345'),
(32,	60,	'Kadoc',	'399'),
(18,	61,	'Fab',	'403'),
(2,	62,	'Pat',	'36'),
(1,	63,	'Pat',	'25'),
(11,	64,	'getgig',	'362'),
(25,	65,	'getgig',	'399'),
(20,	66,	'',	'362'),
(14,	67,	'coucou',	'351'),
(13,	68,	'coucouPat',	'345');

-- 2021-10-11 10:48:27