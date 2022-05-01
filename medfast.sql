-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 01, 2022 at 06:25 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `medfast`
--

-- --------------------------------------------------------

--
-- Table structure for table `bill`
--

DROP TABLE IF EXISTS `bill`;
CREATE TABLE IF NOT EXISTS `bill` (
  `bill_id` int(11) NOT NULL,
  `OrderNumber` int(11) NOT NULL,
  `total` float DEFAULT NULL,
  PRIMARY KEY (`bill_id`),
  KEY `OrderNumber` (`OrderNumber`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `buyer`
--

DROP TABLE IF EXISTS `buyer`;
CREATE TABLE IF NOT EXISTS `buyer` (
  `buyerID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `pass` varchar(30) NOT NULL,
  `phoneNo` varchar(11) NOT NULL,
  `email` varchar(60) NOT NULL,
  PRIMARY KEY (`buyerID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE IF NOT EXISTS `cart` (
  `cartID` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`cartID`),
  KEY `productID` (`productID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

DROP TABLE IF EXISTS `inventory`;
CREATE TABLE IF NOT EXISTS `inventory` (
  `productID` int(11) NOT NULL,
  `stocks` int(11) DEFAULT NULL,
  KEY `productID` (`productID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `OrderID` int(11) NOT NULL AUTO_INCREMENT,
  `cartID` int(11) NOT NULL,
  `Address` varchar(250) NOT NULL,
  `orderdate` varchar(20) NOT NULL,
  PRIMARY KEY (`OrderID`),
  KEY `cartID` (`cartID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `orders_history`
--

DROP TABLE IF EXISTS `orders_history`;
CREATE TABLE IF NOT EXISTS `orders_history` (
  `OrderID` int(11) NOT NULL,
  `paymentID` int(11) NOT NULL,
  KEY `OrderID` (`OrderID`),
  KEY `paymentID` (`paymentID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
CREATE TABLE IF NOT EXISTS `payments` (
  `paymentID` int(11) NOT NULL AUTO_INCREMENT,
  `billID` int(11) NOT NULL,
  `method` enum('credit card','jazzCash/Easypaisa','Cash on delivery') NOT NULL,
  `status` enum('True','False') NOT NULL,
  PRIMARY KEY (`paymentID`),
  KEY `billID` (`billID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `productID` int(11) NOT NULL AUTO_INCREMENT,
  `prdname` varchar(30) NOT NULL,
  `type` enum('ointment','syrup','tablets','gel') NOT NULL,
  `dosage` varchar(10) NOT NULL,
  `price` float DEFAULT NULL,
  `details` varchar(150) DEFAULT NULL,
  `Ratings` enum('1','2','3','4','5') DEFAULT NULL,
  PRIMARY KEY (`productID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `seller`
--

DROP TABLE IF EXISTS `seller`;
CREATE TABLE IF NOT EXISTS `seller` (
  `SellerID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Name` varchar(60) NOT NULL,
  `password` varchar(30) NOT NULL,
  `address` varchar(250) NOT NULL,
  `email` varchar(11) NOT NULL,
  `phone` varchar(60) NOT NULL,
  PRIMARY KEY (`SellerID`),
  UNIQUE KEY `password` (`password`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sells`
--

DROP TABLE IF EXISTS `sells`;
CREATE TABLE IF NOT EXISTS `sells` (
  `SellerID` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  KEY `SellerID` (`SellerID`),
  KEY `productID` (`productID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
