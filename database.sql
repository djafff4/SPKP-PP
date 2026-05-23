-- SQL Migration Script for SPKP-PP Majalah Terompet
-- Run this in Hostinger phpMyAdmin SQL tab

-- Create Database if not exists
CREATE DATABASE IF NOT EXISTS `spkp_pp`;
USE `spkp_pp`;

-- Table for Magazine Editions
CREATE TABLE IF NOT EXISTS `majalah` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `description` TEXT,
  `cover_image` VARCHAR(255) DEFAULT '/logo.jpeg',
  `file_url` VARCHAR(255),
  `release_date` DATE,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Table for Articles/Posts within a Magazine
CREATE TABLE IF NOT EXISTS `majalah_post` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `majalah_id` INT NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `content` LONGTEXT,
  `author` VARCHAR(100),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`majalah_id`) REFERENCES `majalah`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Table for Financial Records
CREATE TABLE IF NOT EXISTS `keuangan` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `type` ENUM('pemasukan', 'pengeluaran') NOT NULL,
  `amount` DECIMAL(15, 2) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `date` DATE NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Optional: Insert Sample Data
INSERT INTO `majalah` (`title`, `slug`, `description`, `release_date`) VALUES
('Majalah Terompet - Edisi Mei 2026', 'edisi-mei-2026', 'Fokus Utama: Memperkuat Sinergi Buruh Kelautan di Era Digital.', '2026-05-01'),
('Majalah Terompet - Edisi April 2026', 'edisi-april-2026', 'Evaluasi Kebijakan Kesejahteraan Pekerja Perikanan Semester I.', '2026-04-01');

-- Sample Data for Keuangan
INSERT INTO `keuangan` (`type`, `amount`, `description`, `date`) VALUES
('pemasukan', 5000000.00, 'Iuran Anggota Mei', '2026-05-10'),
('pengeluaran', 1200000.00, 'Biaya Cetak Majalah Terompet', '2026-05-15'),
('pemasukan', 2500000.00, 'Donasi CSR PT Bahari', '2026-05-20');
