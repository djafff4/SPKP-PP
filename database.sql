-- SQL Migration Script for SPKP-PP Majalah Terompet
-- Run this in Hostinger phpMyAdmin SQL tab

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

-- Optional: Insert Sample Data
INSERT INTO `majalah` (`title`, `slug`, `description`, `release_date`) VALUES
('Majalah Terompet - Edisi Mei 2026', 'edisi-mei-2026', 'Fokus Utama: Memperkuat Sinergi Buruh Kelautan di Era Digital.', '2026-05-01'),
('Majalah Terompet - Edisi April 2026', 'edisi-april-2026', 'Evaluasi Kebijakan Kesejahteraan Pekerja Perikanan Semester I.', '2026-04-01');
