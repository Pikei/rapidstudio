-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 11, 2023 at 05:15 AM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rapid studio`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `lokalizacja`
--

CREATE TABLE `lokalizacja` (
  `ID_lokalizacji` int(11) NOT NULL,
  `adres` varchar(50) NOT NULL,
  `miasto` varchar(10) NOT NULL,
  `kodPocztowy` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lokalizacja`
--

INSERT INTO `lokalizacja` (`ID_lokalizacji`, `adres`, `miasto`, `kodPocztowy`) VALUES
(1, 'ul. Jagiellońska 74', 'Warszawa', '03-301'),
(2, 'al. 3 Maja 9', 'Kraków', '30-062'),
(3, 'Quorum Office Park, Gen. Władysława Sikorskiego 26', 'Wrocław', '53-656');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `newsletter`
--

CREATE TABLE `newsletter` (
  `ID_użytkownika` int(11) NOT NULL,
  `imie` varchar(30) NOT NULL,
  `nazwisko` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `newsletter`
--

INSERT INTO `newsletter` (`ID_użytkownika`, `imie`, `nazwisko`, `email`) VALUES
(1, 'Jan', 'Kowalski', 'j.kowalski@test.com');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `platforma`
--

CREATE TABLE `platforma` (
  `ID_platformy` int(11) NOT NULL,
  `nazwa` varchar(10) NOT NULL,
  `link` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `platforma`
--

INSERT INTO `platforma` (`ID_platformy`, `nazwa`, `link`) VALUES
(1, 'facebook', 'https://www.facebook.com'),
(2, 'twitter', 'https://twitter.com'),
(3, 'YouTube', 'https://www.youtube.com'),
(4, 'instagram', 'https://www.instagram.com'),
(5, 'linkedin', 'https://www.linkedin.com');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `praca`
--

CREATE TABLE `praca` (
  `ID_Stanowiska` int(11) NOT NULL,
  `nazwa` varchar(50) NOT NULL,
  `poziom` varchar(30) NOT NULL,
  `lokalizacja` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `praca`
--

INSERT INTO `praca` (`ID_Stanowiska`, `nazwa`, `poziom`, `lokalizacja`) VALUES
(1, 'Core Tech Engineer', 'Senior', 'Warszawa'),
(2, 'Story Tech Programmer', 'Senior', 'Warszawa'),
(3, 'Monetization Specialist', 'Senior', 'Wrocław'),
(4, 'Audio Director', '', 'Kraków'),
(5, 'Java Developer', 'Mid', 'Wrocław'),
(6, 'Game UX/UI Designer', 'Mid', 'Wrocław'),
(7, 'Lead VFX Artist', 'Mid/Senior', 'Kraków'),
(8, 'Game Tester', 'Junior', 'Kraków');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `lokalizacja`
--
ALTER TABLE `lokalizacja`
  ADD PRIMARY KEY (`ID_lokalizacji`);

--
-- Indeksy dla tabeli `newsletter`
--
ALTER TABLE `newsletter`
  ADD PRIMARY KEY (`ID_użytkownika`);

--
-- Indeksy dla tabeli `platforma`
--
ALTER TABLE `platforma`
  ADD PRIMARY KEY (`ID_platformy`);

--
-- Indeksy dla tabeli `praca`
--
ALTER TABLE `praca`
  ADD PRIMARY KEY (`ID_Stanowiska`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lokalizacja`
--
ALTER TABLE `lokalizacja`
  MODIFY `ID_lokalizacji` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `newsletter`
--
ALTER TABLE `newsletter`
  MODIFY `ID_użytkownika` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `platforma`
--
ALTER TABLE `platforma`
  MODIFY `ID_platformy` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `praca`
--
ALTER TABLE `praca`
  MODIFY `ID_Stanowiska` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
