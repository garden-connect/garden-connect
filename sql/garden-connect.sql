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
                         profileAbout VARCHAR(1000),
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
                       postActive TINYINT NOT NULL,
                       postCategory VARCHAR(16) NOT NULL,
                       postContent VARCHAR(512) NOT NULL,
                       postDate DATETIME(6) NOT NULL,
                       postPicture VARCHAR(255),
                       postTitle VARCHAR(50),
                       INDEX(postProfileId),
                       FOREIGN KEY(postProfileId) REFERENCES profile(profileId),
                       PRIMARY KEY(postId)
);
-- create the conversation entity
CREATE TABLE conversation (
                       conversationId BINARY(16) NOT NULL,
                       conversationPostId BINARY(16) NOT NULL,
                       conversationReceiveProfileId BINARY(16) NOT NULL,
                       conversationSendProfileId BINARY(16) NOT NULL,
                       conversationContent VARCHAR(1000) NOT NULL,
                       conversationDate DATETIME(6) NOT NULL,
                       INDEX(conversationPostId),
                       INDEX(conversationReceiveProfileId),
                       INDEX(conversationSendProfileId),
                       FOREIGN KEY(conversationPostId) REFERENCES post(postId),
                       FOREIGN KEY(conversationReceiveProfileId) REFERENCES profile(profileId),
                       FOREIGN KEY(conversationSendProfileId) REFERENCES profile(profileId),
                       PRIMARY KEY (conversationId)
);
-- create the rating entity (a weak entity from an m-to-m for profile --> profile)
CREATE TABLE rating (
                        ratingReviewedProfileId BINARY(16) NOT NULL,
                        ratingReviewingProfileId BINARY(16) NOT NULL,
                        ratingAmount CHAR(1) NOT NULL,
                        ratingContent VARCHAR(1000),
                        ratingDate DATETIME(6) NOT NULL,
                        INDEX(ratingReviewedProfileId),
                        INDEX(ratingReviewingProfileId),
                        FOREIGN KEY(ratingReviewedProfileId) REFERENCES profile(profileId),
                        FOREIGN KEY(ratingReviewingProfileId) REFERENCES profile(profileId),
                        PRIMARY KEY(ratingReviewingProfileId, ratingReviewedProfileId)
);