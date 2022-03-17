
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
DROP TABLE IF EXISTS `conversation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conversation` (
  `conversationId` binary(16) NOT NULL,
  `conversationPostId` binary(16) NOT NULL,
  `conversationReceiveProfileId` binary(16) NOT NULL,
  `conversationSendProfileId` binary(16) NOT NULL,
  `conversationContent` varchar(1000) NOT NULL,
  `conversationDate` datetime(6) NOT NULL,
  PRIMARY KEY (`conversationId`),
  KEY `conversationPostId` (`conversationPostId`),
  KEY `conversationReceiveProfileId` (`conversationReceiveProfileId`),
  KEY `conversationSendProfileId` (`conversationSendProfileId`),
  CONSTRAINT `conversation_ibfk_1` FOREIGN KEY (`conversationPostId`) REFERENCES `post` (`postId`),
  CONSTRAINT `conversation_ibfk_2` FOREIGN KEY (`conversationReceiveProfileId`) REFERENCES `profile` (`profileId`),
  CONSTRAINT `conversation_ibfk_3` FOREIGN KEY (`conversationSendProfileId`) REFERENCES `profile` (`profileId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `conversation` WRITE;
/*!40000 ALTER TABLE `conversation` DISABLE KEYS */;
INSERT INTO `conversation` VALUES (_binary '4^!•˘\Ïü\“B¨\0',_binary '‹µ•\˜\Ïü\“B¨\0',_binary 'AÉuç•\ˆ\Ïü\“B¨\0',_binary '`%-÷•\ˆ\Ïü\“B¨\0','Hi Tom I would love to try your peppers!','2022-03-17 13:50:28.000000'),(_binary '6qÁñ•¸\Ïü\“B¨\0',_binary '\»c\‰•¯\Ïü\“B¨\0',_binary '`%-÷•\ˆ\Ïü\“B¨\0',_binary 'µt•\ˆ\Ïü\“B¨\0','I can help you build a fence!','2022-03-17 14:12:00.000000'),(_binary 'cy)•¸\Ïü\“B¨\0',_binary '—™lH•˘\Ïü\“B¨\0',_binary 'k\“\\•\ˆ\Ïü\“B¨\0',_binary 'µt•\ˆ\Ïü\“B¨\0','I can help you pune!','2022-03-17 14:13:16.000000'),(_binary '\Â˛1•˘\Ïü\“B¨\0',_binary '\»c\‰•¯\Ïü\“B¨\0',_binary '`%-÷•\ˆ\Ïü\“B¨\0',_binary 'k\“\\•\ˆ\Ïü\“B¨\0','I will not be able to help you with your project but I wish you luck!','2022-03-17 13:55:26.000000'),(_binary '¯/5i•˘\Ïü\“B¨\0',_binary '‹µ•\˜\Ïü\“B¨\0',_binary 'AÉuç•\ˆ\Ïü\“B¨\0',_binary 'k\“\\•\ˆ\Ïü\“B¨\0','I am interested in your peppers!  How much for one pepper?','2022-03-17 13:55:57.000000');
/*!40000 ALTER TABLE `conversation` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `postId` binary(16) NOT NULL,
  `postProfileId` binary(16) NOT NULL,
  `postActive` tinyint NOT NULL,
  `postCategory` varchar(16) NOT NULL,
  `postContent` varchar(512) NOT NULL,
  `postDate` datetime(6) NOT NULL,
  `postPicture` varchar(255) DEFAULT NULL,
  `postTitle` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`postId`),
  KEY `postProfileId` (`postProfileId`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`postProfileId`) REFERENCES `profile` (`profileId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (_binary '¢ÜÄ•˝\Ïü\“B¨\0',_binary 'ó4õT•\ˆ\Ïü\“B¨\0',1,'harvest','I have some freshly jarred Pickels for sale!  $5 per jar.  I love pickels and I hope you do to.  Message me for more information','2022-03-17 14:17:44.000000','','Freshly Jarred Pickels'),(_binary '‹µ•\˜\Ïü\“B¨\0',_binary 'AÉuç•\ˆ\Ïü\“B¨\0',1,'harvest','I&#x27;ve got some red and yellow peppers picked fresh from my garden.  Price Negotiable.  Support local Growers!','2022-03-17 13:38:16.000000','https://res.cloudinary.com/drzdv4utb/image/upload/v1647524295/cqzka0abtluhdi9dmzdo.jpg','Peppers For Sale'),(_binary 'Åw\Òë•¯\Ïü\“B¨\0',_binary '`%-÷•\ˆ\Ïü\“B¨\0',1,'harvest','Delicious Radishes for sale! Eat them raw as a healthy snack or put them in a salad.  I love radishes and I want to share them with other people who love radishes too!  Message me for more information!','2022-03-17 13:45:28.000000','','Radishes'),(_binary 'è\'\‡O•˘\Ïü\“B¨\0',_binary 'k\“\\•\ˆ\Ïü\“B¨\0',1,'harvest','Come get some of my carrots!  All sizes for different prices.  I grow them myself.  I have about 20 or so, so first come first serve.  They are wonderful and I know you will enjoy them!','2022-03-17 13:53:00.000000','https://res.cloudinary.com/drzdv4utb/image/upload/v1647525179/doew6vwtxhv69nxbiemo.jpg','Carrots!!'),(_binary '§Y˝#•˚\Ïü\“B¨\0',_binary 'µt•\ˆ\Ïü\“B¨\0',1,'harvest','Look at this beautiful looking cucumber.  I&#x27;ve got this one and more like him for sale.  I live on the west part of ABQ so if you&#x27;re in the area come on down!','2022-03-17 14:07:55.000000','https://res.cloudinary.com/drzdv4utb/image/upload/v1647526074/xfwni1kjjslvintq1ane.jpg','I&#x27;ve Got Cucumbers For sale!'),(_binary '¨\0/•˙\Ïü\“B¨\0',_binary 'tmY◊•\ˆ\Ïü\“B¨\0',1,'harvest','I&#x27;ve got some fresh tomatoes for sale. Come and get &#x27;em! Inexpensive and delicious','2022-03-17 14:00:58.000000','https://res.cloudinary.com/drzdv4utb/image/upload/v1647525657/pqbkthwxoignz18bamjf.jpg','Tomatoes for sale'),(_binary '\»c\‰•¯\Ïü\“B¨\0',_binary '`%-÷•\ˆ\Ïü\“B¨\0',1,'hands','Hello everyone, I was wondering if anyone could help me build a fence.  It doesn&#x27;t have to be complicated, just a simple fence like the one pictured.  It&#x27;s mostly decorative.  Please message me if you are available.  Thanks!','2022-03-17 13:47:26.000000','https://res.cloudinary.com/drzdv4utb/image/upload/v1647524845/njqp3larfgyczh3nkzjd.jpg','Help building a Fence'),(_binary '\…B˛ﬁ•¸\Ïü\“B¨\0',_binary 'ó4õT•\ˆ\Ïü\“B¨\0',1,'hands','Hello Everyone, I am new to gardening and don&#x27;t know where to start.  Y&#x27;all look like wonderful people who can show me the ropes.  Where do I start??? How do I get more involved in the gardening community?','2022-03-17 14:16:06.000000','','New to Gardening'),(_binary '\ \‚>n•˚\Ïü\“B¨\0',_binary 'µt•\ˆ\Ïü\“B¨\0',1,'hands','I need help building a growing rack just like the one pictured.  Must bring your own tools.','2022-03-17 14:09:00.000000','https://res.cloudinary.com/drzdv4utb/image/upload/v1647526139/s4llhvvcq3bhfaqrappb.jpg','Growing Rack'),(_binary '—™lH•˘\Ïü\“B¨\0',_binary 'k\“\\•\ˆ\Ïü\“B¨\0',1,'hands','Hello everyone!  I could realy use an extra hand with pruning my garden.  I love having a garden, but my hands are sore from all the pruning I have to do.  Someone please help!','2022-03-17 13:54:52.000000','https://res.cloudinary.com/drzdv4utb/image/upload/v1647525291/krcmem0ptf6jjvrbljab.jpg','Need Help Pruning'),(_binary '\Áﬂ¥z•˙\Ïü\“B¨\0',_binary 'tmY◊•\ˆ\Ïü\“B¨\0',1,'hands','I&#x27;m getting older and can&#x27;t lift a shovel, but I need help digging a ditch in my garden.  $15&#x2F;hour OBO.  Message me please!','2022-03-17 14:02:39.000000','','Ditch Digging');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile` (
  `profileId` binary(16) NOT NULL,
  `profileAbout` varchar(1000) DEFAULT NULL,
  `profileActivationToken` char(32) DEFAULT NULL,
  `profileEmail` varchar(128) NOT NULL,
  `profileHash` char(97) NOT NULL,
  `profileName` varchar(32) NOT NULL,
  PRIMARY KEY (`profileId`),
  UNIQUE KEY `profileEmail` (`profileEmail`),
  UNIQUE KEY `profileName` (`profileName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
INSERT INTO `profile` VALUES (_binary 'AÉuç•\ˆ\Ïü\“B¨\0','I love Gardening','c674ca24e44946b2bce3c14803514577','taylorbadraun+30@gmail.com','$argon2id$v=19$m=65536,t=3,p=1$ScHct6hw5HvBWAILfEL9mw$68B8saXlx6Pkvw6bR6s545BeXyaL0YR4z5XYBi1+B3Y','Tom'),(_binary '`%-÷•\ˆ\Ïü\“B¨\0','I sell Radishes','7b11f1bc3be5e73452e94f72ab7e5041','taylorbadraun+31@gmail.com','$argon2id$v=19$m=65536,t=3,p=1$pdFUFpcBs4syCwgGkNL4sw$+5VKXqkIxy5HgtwqNJ06r6rTptPlxAoY3WrqVRSFEPY','Sally'),(_binary 'k\“\\•\ˆ\Ïü\“B¨\0','I sell Carrots','4589c6ceafe4e962a787d4b9f1336c4e','taylorbadraun+32@gmail.com','$argon2id$v=19$m=65536,t=3,p=1$un4xwhrEH/lv3XkaXboVeA$6Zk7ox8Ls1vpr+KdjI57pVXegn7BE9oyrA23wRb9LsU','Mary'),(_binary 'tmY◊•\ˆ\Ïü\“B¨\0','Hello my name is Bob','51d78d72268d2a5c37124f8ee395a5c6','taylorbadraun+33@gmail.com','$argon2id$v=19$m=65536,t=3,p=1$6qL1jwsIS+qaYNX4j8w2WQ$XDnMVmz9kn+fVhEuYH1gszWUK3B9Rb4NbBKMiIH23Ug','Bob'),(_binary 'µt•\ˆ\Ïü\“B¨\0','I live in the west part of ABQ and I sell cucumbers','35758362bf8c84bc7604c37b2f9495e7','taylorbadraun+34@gmail.com','$argon2id$v=19$m=65536,t=3,p=1$9M4X2DRPN99pnPxAeIsjmw$ZtvSz9s2kwkOJNhrCeqhfGWNUAUx3Xz/aU9PovMjIqk','Larry'),(_binary 'ó4õT•\ˆ\Ïü\“B¨\0','Hi I am Jen!','bb173f6f6bd2475ba34845a2a78ba442','taylorbadraun+35@gmail.com','$argon2id$v=19$m=65536,t=3,p=1$QTw7yYYpvRCFvf5iHqa+Xg$NRSAQ2WXH6nxmHwvTYhhc//JROPVNcP5sWnsNe7yerc','Jen');
/*!40000 ALTER TABLE `profile` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rating` (
  `ratingReviewedProfileId` binary(16) NOT NULL,
  `ratingReviewingProfileId` binary(16) NOT NULL,
  `ratingAmount` char(1) NOT NULL,
  `ratingContent` varchar(1000) DEFAULT NULL,
  `ratingDate` datetime(6) NOT NULL,
  PRIMARY KEY (`ratingReviewingProfileId`,`ratingReviewedProfileId`),
  KEY `ratingReviewedProfileId` (`ratingReviewedProfileId`),
  KEY `ratingReviewingProfileId` (`ratingReviewingProfileId`),
  CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`ratingReviewedProfileId`) REFERENCES `profile` (`profileId`),
  CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`ratingReviewingProfileId`) REFERENCES `profile` (`profileId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
INSERT INTO `rating` VALUES (_binary 'AÉuç•\ˆ\Ïü\“B¨\0',_binary '`%-÷•\ˆ\Ïü\“B¨\0','4','I got some peppers from Tom and I must say they are the best peppers I have ever tried.  I will keep coming back every time he has more because they are just the best.  He was located a little off the beaten path but way worth the effort.','2022-03-17 13:50:00.000000'),(_binary 'AÉuç•\ˆ\Ïü\“B¨\0',_binary 'k\“\\•\ˆ\Ïü\“B¨\0','5','Wow Tom sells the best peppers!','2022-03-17 13:56:36.000000'),(_binary '`%-÷•\ˆ\Ïü\“B¨\0',_binary 'k\“\\•\ˆ\Ïü\“B¨\0','2','I did not care for Sally and her radishes.  But I wish her well','2022-03-17 13:57:47.000000'),(_binary '`%-÷•\ˆ\Ïü\“B¨\0',_binary 'µt•\ˆ\Ïü\“B¨\0','4','I helped Sally build a fence and she is a very nice person.','2022-03-17 14:10:52.000000'),(_binary 'k\“\\•\ˆ\Ïü\“B¨\0',_binary 'µt•\ˆ\Ïü\“B¨\0','4','Mary is a nice person','2022-03-17 14:11:18.000000'),(_binary 'tmY◊•\ˆ\Ïü\“B¨\0',_binary 'µt•\ˆ\Ïü\“B¨\0','5','Delicious tomatoes!','2022-03-17 14:12:39.000000');
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

