-- phpMyAdmin SQL Dump
-- version 5.2.1deb3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 28, 2024 at 01:50 AM
-- Server version: 8.0.39-0ubuntu0.24.04.2
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
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_role` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `auth`
--

INSERT INTO `auth` (`id_auth`, `worker_number`, `password`, `id_role`) VALUES
(1, 20181834, '$2b$10$h2TFfuePs.1XeYZafcueaeRRENlu26Dtdl1LO.9az3EjXbbj9Bp6u', 1);

-- --------------------------------------------------------

--
-- Table structure for table `borrow`
--

CREATE TABLE `borrow` (
  `id_borrow` int NOT NULL,
  `id_users` int DEFAULT NULL,
  `date_start` timestamp NOT NULL,
  `date_end` date DEFAULT NULL,
  `date_real` date DEFAULT NULL,
  `status` int NOT NULL,
  `applicant` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `num_account` int NOT NULL,
  `id_career` int NOT NULL,
  `semester` varchar(55) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `observations` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `teacher` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `reminder_sent` tinyint(1) DEFAULT NULL,
  `signature_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `practice_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `borrowed_objects`
--

CREATE TABLE `borrowed_objects` (
  `id_borrowed_object` int NOT NULL,
  `id_borrow` int NOT NULL,
  `id_inventory` int NOT NULL,
  `quantity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(5, 'Epson'),
(6, 'Asus');

-- --------------------------------------------------------

--
-- Table structure for table `career`
--

CREATE TABLE `career` (
  `id_career` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `career`
--

INSERT INTO `career` (`id_career`, `name`) VALUES
(1, 'Ingeniería de Software'),
(2, 'Ingeniería en Mecatrónica'),
(3, 'Ingeniería en Tecnologías Electrónicas'),
(4, 'Ingeniero Mecánico Electricista'),
(5, 'Ingeniero(a) en Mecatrónica');

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `id_faculty` int NOT NULL,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
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
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `id_inventory` int NOT NULL,
  `id_brand` int DEFAULT NULL,
  `id_model` int DEFAULT NULL,
  `id_module` int NOT NULL,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int NOT NULL,
  `folio` int NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `serie` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `not_located` int DEFAULT NULL,
  `second_custodian` int DEFAULT NULL,
  `image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int NOT NULL,
  `stock` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`id_inventory`, `id_brand`, `id_model`, `id_module`, `name`, `quantity`, `folio`, `description`, `serie`, `not_located`, `second_custodian`, `image_url`, `status`, `stock`) VALUES
(1, 1, 1, 1, 'Laptop Dell XPS 13', 5, 1001, 'Ultrabook compacta', 'SN1234567890', NULL, NULL, 'https://example.com/image1.jpg', 1, 0),
(2, 2, 2, 1, 'Laptop HP Pavilion 14', 3, 1002, 'Laptop de uso general', 'SN0987654321', NULL, NULL, 'https://example.com/image2.jpg', 1, 3),
(3, 3, 3, 1, 'Monitor Acer 24\"', 10, 1003, 'Monitor Full HD', 'SN1122334455', NULL, NULL, 'https://example.com/image3.jpg', 1, 10),
(4, 4, 4, 1, 'Laptop Lenovo ThinkPad X1', 7, 1004, 'Laptop empresarial', 'SN6677889900', NULL, NULL, 'https://example.com/image4.jpg', 1, 7),
(5, 5, 5, 1, 'Impresora Epson EcoTank', 2, 1005, 'Impresora multifuncional', 'SN1234432112', NULL, NULL, 'https://example.com/image5.jpg', 1, 2),
(6, 1, 6, 1, 'Laptop Dell Inspiron 15', 4, 1006, 'Laptop multimedia', 'SN5566778899', NULL, NULL, 'https://example.com/image6.jpg', 1, 4),
(7, 2, 7, 1, 'Monitor HP EliteDisplay', 8, 1007, 'Monitor empresarial', 'SN9988776655', NULL, NULL, 'https://example.com/image7.jpg', 1, 8),
(8, 3, 8, 1, 'Laptop Acer Nitro 7', 6, 1008, 'Laptop para gaming', 'SN3344556677', NULL, NULL, 'https://example.com/image8.jpg', 1, 6),
(9, 4, 9, 1, 'Laptop Lenovo IdeaPad 3', 5, 1009, 'Laptop asequible', 'SN2233445566', NULL, NULL, 'https://example.com/image9.jpg', 1, 5),
(10, 5, 10, 1, 'Impresora Epson WorkForce', 3, 1010, 'Impresora de oficina', 'SN4455667788', NULL, NULL, 'https://example.com/image10.jpg', 1, 3),
(13, 6, 11, 2, 'Laptop', 3, 1234123, 'LAPTOP color plateado', '124432', NULL, NULL, './Asus,jpg', 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `model`
--

CREATE TABLE `model` (
  `id_model` int NOT NULL,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
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
(10, 'WorkForce WF-2850'),
(11, 'Asus vivobook');

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

CREATE TABLE `modules` (
  `id_modules` int NOT NULL,
  `id_faculty` int NOT NULL,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `modules`
--

INSERT INTO `modules` (`id_modules`, `id_faculty`, `name`) VALUES
(1, 2, 'Centro de computo'),
(2, 2, 'Laboratorio de electricidad y magnetismo'),
(3, 2, 'Laboratorio de mecanica');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id_role` int NOT NULL,
  `role_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
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
  `id_users` int NOT NULL,
  `delete` enum('0','1') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `edit` enum('0','1') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `lends` enum('0','1') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_users` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int NOT NULL,
  `id_modules` int NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_users`, `name`, `status`, `id_modules`, `email`) VALUES
(1, 'Fatima', 1, 1, 'fmarin0@ucol.mx');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`id_auth`),
  ADD UNIQUE KEY `worker_number` (`worker_number`),
  ADD KEY `auth_ibfk_1` (`id_role`);

--
-- Indexes for table `borrow`
--
ALTER TABLE `borrow`
  ADD PRIMARY KEY (`id_borrow`),
  ADD KEY `lends_ibfk_1` (`id_users`),
  ADD KEY `id_career` (`id_career`),
  ADD KEY `id_users` (`id_users`);

--
-- Indexes for table `borrowed_objects`
--
ALTER TABLE `borrowed_objects`
  ADD PRIMARY KEY (`id_borrowed_object`),
  ADD KEY `borrowed_objects_ibfk_1` (`id_borrow`),
  ADD KEY `borrowed_objects_ibfk_2` (`id_inventory`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id_brand`);

--
-- Indexes for table `career`
--
ALTER TABLE `career`
  ADD PRIMARY KEY (`id_career`);

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`id_faculty`);

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`id_inventory`),
  ADD KEY `inventory_ibfk_1` (`id_brand`),
  ADD KEY `inventory_ibfk_2` (`id_model`),
  ADD KEY `inventory_ibfk_4` (`id_module`);

--
-- Indexes for table `model`
--
ALTER TABLE `model`
  ADD PRIMARY KEY (`id_model`);

--
-- Indexes for table `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id_modules`),
  ADD KEY `modules_ibfk_1` (`id_faculty`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_role`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id_setting`),
  ADD KEY `settings_ibfk_1` (`id_users`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_users`),
  ADD KEY `users_ibfk_1` (`id_modules`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth`
--
ALTER TABLE `auth`
  MODIFY `id_auth` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `borrow`
--
ALTER TABLE `borrow`
  MODIFY `id_borrow` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `borrowed_objects`
--
ALTER TABLE `borrowed_objects`
  MODIFY `id_borrowed_object` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id_brand` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `career`
--
ALTER TABLE `career`
  MODIFY `id_career` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `faculty`
--
ALTER TABLE `faculty`
  MODIFY `id_faculty` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `id_inventory` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `model`
--
ALTER TABLE `model`
  MODIFY `id_model` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `modules`
--
ALTER TABLE `modules`
  MODIFY `id_modules` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
