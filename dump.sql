-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: gestion_empleados
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('8c65ce3f-78fd-4a7c-8806-1b78f96cb62f','a697cfabe8b1f73c1a55f739ce2920dace318d9387004d486515896e71eaffd1','2025-03-06 07:20:02.757','20250306072002_init',NULL,NULL,'2025-03-06 07:20:02.710',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleado`
--

DROP TABLE IF EXISTS `empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleado` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombreCompleto` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `documento` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fechaNacimiento` datetime(3) NOT NULL,
  `esDesarrollador` tinyint(1) NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleado`
--

LOCK TABLES `empleado` WRITE;
/*!40000 ALTER TABLE `empleado` DISABLE KEYS */;
INSERT INTO `empleado` VALUES (4,'francisco','passarelli','1994-12-03 00:00:00.000',1,'frontend developer'),(5,'d','dasdasd','1233-03-12 00:00:00.000',1,'123131232'),(6,'fran','454654','1651-12-12 00:00:00.000',1,'sdadasd'),(7,'asdasd','asdasd','1323-03-12 00:00:00.000',1,'asdasdasd'),(8,'fran','12313123','0123-12-13 00:00:00.000',1,'12313123'),(9,'fran','4564654','1321-03-12 00:00:00.000',1,'asdadasdasd'),(10,'fararar','fas21dsa','0123-03-21 00:00:00.000',1,'asd23sadsd'),(11,'dd','12313123','0132-03-12 00:00:00.000',1,'123123'),(12,'fran','415454545','0354-12-12 00:00:00.000',1,'asdasdasd'),(13,'asdasdasd','as23123','0132-03-21 00:00:00.000',1,'asdasdasd'),(14,'asdasdasd','as23123','0132-03-21 00:00:00.000',1,'asdasdasd'),(15,'asdasdasd','as23123','0132-03-21 00:00:00.000',1,'asdasdasd'),(16,'asdasdsa','23123123','0123-03-21 00:00:00.000',1,'asdadsasdads'),(17,'asdasd','12312312','0013-03-12 00:00:00.000',1,'sdasdad'),(18,'asasdasd','3123123','0123-03-12 00:00:00.000',1,'asdasd'),(19,'asdasdasdasd','2313123123','0213-03-12 00:00:00.000',1,'12312313'),(20,'fran','40943530','1994-12-03 00:00:00.000',1,'si soy desarrollador'),(21,'asdasd','123123','0123-03-12 00:00:00.000',1,'123123123'),(22,'asdasdasd','123123123','2222-12-12 00:00:00.000',1,'adasdasd'),(23,'asdasdas','21313','1222-03-12 00:00:00.000',1,'sdasdasd'),(24,'asdasdasd','asdasdasdasd','1322-02-12 00:00:00.000',1,'123123123123'),(25,'asdasdas','123123123','1231-03-12 00:00:00.000',1,'123123123'),(26,'asdasd','23131231','1232-03-12 00:00:00.000',1,'asdasdasd'),(27,'dasdasdas','1231312','1232-03-12 00:00:00.000',1,'asdasdasd'),(28,'fran','adsasdasd','3112-12-23 00:00:00.000',1,'asdasdasdasd'),(29,'fran','1231231','1231-03-12 00:00:00.000',1,'bababab');
/*!40000 ALTER TABLE `empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleados` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullName` varchar(255) NOT NULL,
  `idNumber` varchar(50) NOT NULL,
  `birthDate` date NOT NULL,
  `isDeveloper` tinyint(1) DEFAULT '0',
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES (1,'Francisco Nicol├ís','40943530','1994-12-03',1,'fullstack developer'),(2,'AGUST├ìN GONZALEZ','46925926','1997-12-03',1,'ANGULAR DEVELOPER'),(7,'fran','40943530','1994-12-03',1,'fullstack'),(9,'Francisco Nicol├ís','4458585','1232-03-12',1,'Developer React'),(11,'empleado1','123456789','4567-03-12',1,'es empleado nuevos');
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-09 17:02:30
