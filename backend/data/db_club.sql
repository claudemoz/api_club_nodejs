-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 17 oct. 2024 à 10:14
-- Version du serveur : 10.4.25-MariaDB
-- Version de PHP : 8.1.10
use db_club;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `db_club`
--

-- --------------------------------------------------------

--
-- Structure de la table `club`
--

CREATE TABLE `club` (
  `club_id` int(11) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  `history` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `club`
--

INSERT INTO `club` (`club_id`, `description`, `history`) VALUES
(1, 'description', 'history update');

-- --------------------------------------------------------

--
-- Structure de la table `feature`
--

CREATE TABLE `feature` (
  `feature_id` int(11) NOT NULL,
  `label` varchar(45) DEFAULT NULL,
  `type` enum('role','right') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `feature`
--

INSERT INTO `feature` (`feature_id`, `label`, `type`) VALUES
(1, 'admin', 'role'),
(2, 'editor', 'role'),
(3, 'créer présentation du club', 'right'),
(4, 'modifier présentation du club', 'right'),
(5, 'supprimer présentation du club', 'right'),
(6, 'créer actualités', 'right'),
(7, 'modifier actualités', 'right'),
(8, 'supprimer actualités', 'right'),
(9, 'créer partenaires', 'right'),
(10, 'modifier partenaires', 'right'),
(11, 'supprimer partenaires', 'right'),
(12, 'créer match', 'right'),
(13, 'modifier match', 'right'),
(14, 'supprimer match', 'right');

-- --------------------------------------------------------

--
-- Structure de la table `match`
--

CREATE TABLE `match` (
  `match_id` int(11) NOT NULL,
  `score` varchar(45) DEFAULT NULL,
  `date_match` datetime DEFAULT NULL,
  `status` enum('victoire','défaite','nul') NOT NULL,
  `team_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `match`
--

INSERT INTO `match` (`match_id`, `score`, `date_match`, `status`, `team_id`) VALUES
(1, '3 - 0', '2024-10-15 12:26:33', 'victoire', 1),
(2, '3 - 0', '2024-10-15 12:26:33', 'victoire', 1),
(3, '3 - 0', '2024-10-15 12:26:33', 'victoire', 1),
(4, '3 - 0', '2024-10-15 12:26:33', 'victoire', 1),
(5, '3 - 0', '2024-10-15 12:26:33', 'victoire', 1),
(6, '3 - 0', '2024-10-15 12:26:33', 'victoire', 1),
(7, '3 - 0', '2024-10-15 12:26:33', 'victoire', 1),
(8, '3 - 0', '2024-10-15 12:26:33', 'victoire', 1),
(9, '3 - 0', '2024-10-15 12:26:33', 'victoire', 1),
(10, '3 - 0', '2024-10-15 12:26:33', 'victoire', 1),
(11, '3 - 0', '2024-10-15 12:26:33', 'victoire', 1),
(12, '3 - 0', '2024-10-15 12:26:33', 'victoire', 1),
(13, '3 - 0', '2024-10-15 12:26:33', 'victoire', 1),
(14, '3 - 0', '2024-10-15 12:26:33', 'victoire', 1);

-- --------------------------------------------------------

--
-- Structure de la table `news`
--

CREATE TABLE `news` (
  `news_id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `summary` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `date` datetime NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `news`
--

INSERT INTO `news` (`news_id`, `title`, `summary`, `description`, `date`, `image`) VALUES
(1, 'title update1', 'summary', 'description', '2024-10-15 09:38:46', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `partner`
--

CREATE TABLE `partner` (
  `partner_id` int(11) NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `partner`
--

INSERT INTO `partner` (`partner_id`, `logo`, `url`) VALUES
(1, 'logo', 'url');

-- --------------------------------------------------------

--
-- Structure de la table `team`
--

CREATE TABLE `team` (
  `team_id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `team`
--

INSERT INTO `team` (`team_id`, `label`) VALUES
(1, ' masculine junior'),
(2, 'masculine senior,'),
(3, 'féminine junior'),
(4, 'féminine senior');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`user_id`, `firstname`, `lastname`, `email`, `password`) VALUES
(4, 'Moz', 'Toz', 'claudetsiangana@gmail.com', '$2b$10$iiA3xFDK.FXMISbnTWA8eOHgqpd6F7HyS8NVBgE0r1OJe5gLWLxAS'),
(5, 'John', 'Dohn', '1claudetsiangana@gmail.com', '$2b$10$z5Li0515Qz4gmbbMJuZEz.UoJ.aYAxnFyQGrUGc70ypCQ/N8a3Pr6');

-- --------------------------------------------------------

--
-- Structure de la table `user_feature`
--

CREATE TABLE `user_feature` (
  `user_feature_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `feature_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user_feature`
--

INSERT INTO `user_feature` (`user_feature_id`, `user_id`, `feature_id`) VALUES
(1, 4, 12),
(2, 4, 1),
(3, 5, 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `club`
--
ALTER TABLE `club`
  ADD PRIMARY KEY (`club_id`);

--
-- Index pour la table `feature`
--
ALTER TABLE `feature`
  ADD PRIMARY KEY (`feature_id`);

--
-- Index pour la table `match`
--
ALTER TABLE `match`
  ADD PRIMARY KEY (`match_id`),
  ADD KEY `team_id` (`team_id`);

--
-- Index pour la table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`news_id`);

--
-- Index pour la table `partner`
--
ALTER TABLE `partner`
  ADD PRIMARY KEY (`partner_id`);

--
-- Index pour la table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`team_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Index pour la table `user_feature`
--
ALTER TABLE `user_feature`
  ADD PRIMARY KEY (`user_feature_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `feature_id` (`feature_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `club`
--
ALTER TABLE `club`
  MODIFY `club_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `feature`
--
ALTER TABLE `feature`
  MODIFY `feature_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `match`
--
ALTER TABLE `match`
  MODIFY `match_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `news`
--
ALTER TABLE `news`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `partner`
--
ALTER TABLE `partner`
  MODIFY `partner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `team`
--
ALTER TABLE `team`
  MODIFY `team_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `user_feature`
--
ALTER TABLE `user_feature`
  MODIFY `user_feature_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `match`
--
ALTER TABLE `match`
  ADD CONSTRAINT `match_ibfk_1` FOREIGN KEY (`team_id`) REFERENCES `team` (`team_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `user_feature`
--
ALTER TABLE `user_feature`
  ADD CONSTRAINT `user_feature_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `user_feature_ibfk_2` FOREIGN KEY (`feature_id`) REFERENCES `feature` (`feature_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
