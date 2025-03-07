-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql_db:3306
-- Généré le : ven. 07 mars 2025 à 09:32
-- Version du serveur : 8.0.41
-- Version de PHP : 8.2.27

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
  `club_id` int NOT NULL,
  `description` text,
  `history` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `club`
--

INSERT INTO `club` (`club_id`, `description`, `history`) VALUES
(1, 'Hitema FC est un club de football professionnel basé dans la ville \nd\'Hitema, une métropole dynamique connue pour son ambiance passionnée et\n son amour du sport. Fondé en 1985, Hitema FC a rapidement su se faire une \n place sur la scène nationale grâce à sa jeunesse et son enthousiasme. Le club évolue actuellement au Stade d\'Hitema, un stade moderne d’une capacité de 35 000 places, offrant une atmosphère incroyable lors de chaque match.\n\nAvec une approche axée sur le développement des jeunes joueurs et une forte communauté locale, Hitema FC est devenu un club à la fois ambitieux et respecté. Les couleurs du club sont le bleu et le blanc, symbolisant à la fois la sérénité et la détermination.', 'Fondation et débuts (1985-1995) :\nHitema FC a été fondé en 1985 par un groupe de passionnés de football désireux de promouvoir le sport dans la région d’Hitema. Le club a commencé dans les ligues inférieures, mais avec une gestion ambitieuse et des infrastructures modernes, il a rapidement progressé.');

-- --------------------------------------------------------

--
-- Structure de la table `feature`
--

CREATE TABLE `feature` (
  `feature_id` int NOT NULL,
  `label` varchar(45) DEFAULT NULL,
  `type` enum('role','right') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
  `match_id` int NOT NULL,
  `score` varchar(45) DEFAULT NULL,
  `date_match` datetime DEFAULT NULL,
  `status` enum('victoire','défaite','nul') NOT NULL,
  `team_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
  `news_id` int NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `summary` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `date` datetime NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `news`
--

INSERT INTO `news` (`news_id`, `title`, `summary`, `description`, `date`, `image`) VALUES
(2, 'Victoire historique de l\\\'équipe junior', 'Nos jeunes talents remportent le championnat régional\'', NULL, '2025-03-06 22:39:31', 'https://media.istockphoto.com/id/576938444/fr/photo/collage-enfants-adultes-joueurs-de-football-en-action-sur-le-panorama-du-stade.jpg?s=612x612&w=0&k=20&c=gtcf4_CcBw6n0SkLpgmcz4-Lo7qM-cU6coMH96Fmvgo='),
(3, 'Nouveau partenariat avec un club international', 'Un accord prometteur pour le développement de nos athlètes', NULL, '2025-03-06 22:39:31', 'https://i.ytimg.com/vi/eu9lUbGJdLo/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGC0gZSgmMA8=&rs=AOn4CLAxE3_CK1LaZlxf3EMyWC3shHIguA'),
(4, 'Stages d\'été ouverts aux inscriptions', 'Opportunité unique pour les jeunes talents de se perfectionner', NULL, '2025-03-06 22:39:31', 'https://www.prepa-physique.net/wp-content/uploads/2023/02/stage-de-foot.jpeg'),
(8, 'cccccc', 'fggggggg', NULL, '2025-03-07 09:05:39', 'https://res.cloudinary.com/daogrxxyw/image/upload/v1741338338/shoes/ij8vdx0dh2zt6memcl1p.jpg'),
(9, 'coupe du monde', 'dddddd', NULL, '2025-03-07 09:19:26', 'https://www.bfmtv.com/comparateur/wp-content/uploads/2020/09/image_1-4.png');

-- --------------------------------------------------------

--
-- Structure de la table `partner`
--

CREATE TABLE `partner` (
  `partner_id` int NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
  `team_id` int NOT NULL,
  `label` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
  `user_id` int NOT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`user_id`, `firstname`, `lastname`, `email`, `password`) VALUES
(4, 'Moz', 'Toz', 'claudetsiangana@gmail.com', '$2b$10$iiA3xFDK.FXMISbnTWA8eOHgqpd6F7HyS8NVBgE0r1OJe5gLWLxAS'),
(5, 'John', 'Dohn', '1claudetsiangana@gmail.com', '$2b$10$z5Li0515Qz4gmbbMJuZEz.UoJ.aYAxnFyQGrUGc70ypCQ/N8a3Pr6'),
(6, 'User1', 'User1', 'user1@rrr.cd', '$2a$10$FWrJP8iaZY7344lrB784Zu2LWhgYTVQHBJiVrSzfSm80/6IhuEMS6');

-- --------------------------------------------------------

--
-- Structure de la table `user_feature`
--

CREATE TABLE `user_feature` (
  `user_feature_id` int NOT NULL,
  `user_id` int NOT NULL,
  `feature_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `user_feature`
--

INSERT INTO `user_feature` (`user_feature_id`, `user_id`, `feature_id`) VALUES
(1, 4, 12),
(2, 4, 1),
(3, 5, 1),
(4, 6, 2);

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
  MODIFY `club_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `feature`
--
ALTER TABLE `feature`
  MODIFY `feature_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `match`
--
ALTER TABLE `match`
  MODIFY `match_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `news`
--
ALTER TABLE `news`
  MODIFY `news_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `partner`
--
ALTER TABLE `partner`
  MODIFY `partner_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `team`
--
ALTER TABLE `team`
  MODIFY `team_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `user_feature`
--
ALTER TABLE `user_feature`
  MODIFY `user_feature_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `match`
--
ALTER TABLE `match`
  ADD CONSTRAINT `match_ibfk_1` FOREIGN KEY (`team_id`) REFERENCES `team` (`team_id`);

--
-- Contraintes pour la table `user_feature`
--
ALTER TABLE `user_feature`
  ADD CONSTRAINT `user_feature_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `user_feature_ibfk_2` FOREIGN KEY (`feature_id`) REFERENCES `feature` (`feature_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
