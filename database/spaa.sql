-- phpMyAdmin SQL Dump
-- version 5.2.1deb3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 13, 2024 at 06:01 AM
-- Server version: 8.0.39-0ubuntu0.24.04.1
-- PHP Version: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `spaa`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth`
--

CREATE TABLE `auth` (
  `id_auth` int NOT NULL,
  `worker_number` int NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `auth`
--

INSERT INTO `auth` (`id_auth`, `worker_number`, `password`) VALUES
(13, 20181811, '$2b$10$465kAsOXtIrWRoqjhn/3HOwAYSRmZlHSWlomQ/jYqH/ftPWzQpm1u'),
(15, 20181821, '$2b$10$9CP1mD4no1hURrQwSnHS.OhXzspPkeuRI57yo7RQKqkHejWKp4ps6');

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id_brand` int NOT NULL,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id_brand`, `name`) VALUES
(1, 'Dell'),
(2, 'HP'),
(3, 'Acer'),
(4, 'Lenovo'),
(5, 'Epson');

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `id_faculty` int NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`id_faculty`, `name`) VALUES
(1, 'Facultad de Contabilidad y Administración'),
(2, 'Facultad de Ingeniería Mecánica y Eléctrica'),
(3, 'Facultad de Ciencias Marinas');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id_history` int NOT NULL,
  `table_name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `action` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_user` int NOT NULL,
  `timestamp` timestamp NOT NULL,
  `details` text COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `id_inventory` int NOT NULL,
  `id_brand` int DEFAULT NULL,
  `id_model` int DEFAULT NULL,
  `id_faculty` int DEFAULT NULL,
  `id_module` int NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int NOT NULL,
  `folio` int NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `serie` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `not_located` int DEFAULT NULL,
  `second_custodian` int DEFAULT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`id_inventory`, `id_brand`, `id_model`, `id_faculty`, `id_module`, `name`, `quantity`, `folio`, `description`, `serie`, `not_located`, `second_custodian`, `image_url`) VALUES
(6, 2, 1, 3, 3, 'Computadora', 1, 123, 'Computadora color morado', '1234', 0, 1, 'resources/computadoraMorada.jpg'),
(7, 2, 1, 3, 3, 'Computadora', 1, 123, 'Computadora color azul', '1234', 0, 1, 'resources/computadoraazul.jpg'),
(8, 2, 1, 3, 3, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/computadoraMorada.jpg'),
(9, 2, 1, 3, 3, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/computadoraMorada.jpg'),
(10, 2, 1, 3, 3, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/computadoraMorada.jpg'),
(11, 2, 1, 3, 3, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/computadoraMorada.jpg'),
(12, 2, 1, 3, 3, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(13, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(14, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(15, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(16, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(17, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(18, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(19, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(20, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(21, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(22, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(23, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(24, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(25, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(26, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(27, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(28, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(29, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(30, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(31, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(32, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(33, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(34, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(35, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(36, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(37, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(38, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(39, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(40, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(41, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(42, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(43, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(44, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(45, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(46, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(47, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg'),
(48, 2, 1, 3, 4, 'Computadora', 1, 123, 'Computadora color verde', '1234', 0, 1, 'resources/dorada.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `lends`
--

CREATE TABLE `lends` (
  `id_loans` int NOT NULL,
  `id_user` int NOT NULL,
  `id_inventory` int NOT NULL,
  `date_start` timestamp NOT NULL,
  `date_end` int DEFAULT NULL,
  `date_real` date DEFAULT NULL,
  `status` int NOT NULL,
  `applicant` int NOT NULL,
  `num_account` int NOT NULL,
  `career` int NOT NULL,
  `semester` int NOT NULL,
  `observations` int DEFAULT NULL,
  `teacher` text COLLATE utf8mb4_unicode_ci,
  `reminder_sent` tinyint(1) DEFAULT NULL,
  `signature_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model`
--

CREATE TABLE `model` (
  `id_model` int NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model`
--

INSERT INTO `model` (`id_model`, `name`) VALUES
(1, 'XPS 13'),
(2, 'Inspiron 15'),
(3, 'Pavilion 14'),
(4, 'EliteBook 840'),
(5, 'Aspire 5'),
(6, 'Nitro 7'),
(7, 'ThinkPad X1 Carbon'),
(8, 'IdeaPad 3'),
(9, 'EcoTank L3110'),
(10, 'WorkForce WF-2850');

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

CREATE TABLE `modules` (
  `id_modules` int NOT NULL,
  `id_faculty` int NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id_role` int NOT NULL,
  `role_name` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id_role`, `role_name`) VALUES
(1, 'Laboratorista'),
(2, 'Director'),
(3, 'Practicante');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id_setting` int NOT NULL,
  `setting_name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `setting_value` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_users` int NOT NULL,
  `id_role` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int NOT NULL,
  `id_modules` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_users`, `id_role`, `name`, `status`, `id_modules`) VALUES
(13, 3, 'Jesus Emmauel', 1, 1),
(15, 1, 'Jairo', 1, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`id_auth`),
  ADD UNIQUE KEY `worker_number` (`worker_number`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id_brand`);

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`id_faculty`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id_history`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`id_inventory`),
  ADD KEY `id_brand` (`id_brand`),
  ADD KEY `id_model` (`id_model`),
  ADD KEY `id_faculty` (`id_faculty`);

--
-- Indexes for table `lends`
--
ALTER TABLE `lends`
  ADD PRIMARY KEY (`id_loans`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_inventory` (`id_inventory`);

--
-- Indexes for table `model`
--
ALTER TABLE `model`
  ADD PRIMARY KEY (`id_model`);

--
-- Indexes for table `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id_modules`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_role`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id_setting`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_users`),
  ADD KEY `id_role` (`id_role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id_brand` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `faculty`
--
ALTER TABLE `faculty`
  MODIFY `id_faculty` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id_history` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `id_inventory` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `lends`
--
ALTER TABLE `lends`
  MODIFY `id_loans` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `model`
--
ALTER TABLE `model`
  MODIFY `id_model` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `modules`
--
ALTER TABLE `modules`
  MODIFY `id_modules` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id_role` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id_setting` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_users` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `history_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_users`);

--
-- Constraints for table `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `inventory_ibfk_1` FOREIGN KEY (`id_brand`) REFERENCES `brands` (`id_brand`),
  ADD CONSTRAINT `inventory_ibfk_2` FOREIGN KEY (`id_model`) REFERENCES `model` (`id_model`),
  ADD CONSTRAINT `inventory_ibfk_3` FOREIGN KEY (`id_faculty`) REFERENCES `faculty` (`id_faculty`);

--
-- Constraints for table `lends`
--
ALTER TABLE `lends`
  ADD CONSTRAINT `lends_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_users`),
  ADD CONSTRAINT `lends_ibfk_2` FOREIGN KEY (`id_inventory`) REFERENCES `inventory` (`id_inventory`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id_role`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
