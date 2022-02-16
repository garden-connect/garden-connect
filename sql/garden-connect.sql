-- this is a comment in SQL (yes, the space is needed!)
-- these statements will drop the tables and re-add them
-- this is akin to reformatting and reinstalling Windows (OS X never needs a reinstall...) ;)
-- never ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever
-- do this on live data!!!!
DROP TABLE IF EXISTS rating;
DROP TABLE IF EXISTS conversation;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS profile;

-- create the profile entity
CREATE TABLE profile (
                         profileId BINARY(16) NOT NULL,
                         profileActivationToken CHAR(32),
                         profileEmail VARCHAR(128) NOT NULL,
                         profileHash CHAR(97) NOT NULL,
                         profileName VARCHAR(32) NOT NULL,
                         UNIQUE(profileEmail),
                         UNIQUE(profileName),
                         PRIMARY KEY(profileId)
);
-- create the post entity
CREATE TABLE post (
                       postId BINARY(16) NOT NULL,
                       postProfileId BINARY(16) NOT NULL,
                       postCategory VARCHAR(16) NOT NULL,
                       postContent VARCHAR(255) NOT NULL,
                       postDate DATETIME(6) NOT NULL,
                       postPicture VARCHAR(255),
                       INDEX(postProfileId),
                       FOREIGN KEY(postProfileId) REFERENCES profile(profileId),
                       PRIMARY KEY(postId)
);
-- create the conversation entity
CREATE TABLE conversation (
                       conversationId BINARY(16) NOT NULL,
                       conversationPostId BINARY(16) NOT NULL,
                       conversationProfileId BINARY(16) NOT NULL,
                       conversationDate DATETIME(6) NOT NULL,
                       conversationContent VARCHAR(2000) NOT NULL,
                       INDEX(conversationPostId),
                       INDEX(conversationProfileId),
                       FOREIGN KEY(conversationPostId) REFERENCES post(postId),
                       FOREIGN KEY(conversationProfileId) REFERENCES profile(profileId),
                       PRIMARY KEY (conversationId)
);
-- create the rating entity (a weak entity from an m-to-m for profile --> profile)
CREATE TABLE rating (
                        ratingProfileId1 BINARY(16) NOT NULL,
                        ratingProfileId2 BINARY(16) NOT NULL,
                        ratingAmount CHAR(1),
                        ratingContent VARCHAR(1000) NOT NULL,
                        ratingDate DATETIME(6) NOT NULL,
                        INDEX(ratingProfileId1),
                        INDEX(ratingProfileId2),
                        FOREIGN KEY(ratingProfileId1) REFERENCES profile(profileId),
                        FOREIGN KEY(ratingProfileId2) REFERENCES profile(profileId),
                        PRIMARY KEY(ratingProfileId1, ratingProfileId2)
);