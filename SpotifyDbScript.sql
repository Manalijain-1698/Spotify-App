create database SpotifyDemoDb

use SpotifyDemoDb

create table UserDetails(userid int primary key identity(101,1),username nvarchar(max),useremail nvarchar(100) unique,phonenumber nvarchar(10) unique,password nvarchar(max),dob date,role nvarchar(20))

create table SongDetails(songid int primary key identity(201,1),songname nvarchar(max),artistname nvarchar(50),songdescription nvarchar(max),albumname nvarchar(max),
genre nvarchar(50),songpath nvarchar(max),lyrics nvarchar(max))

alter table SongDetails
add songplaycounter int

create table PlaylistDetails(playlistid int primary key identity(301,1),playlistname nvarchar(max),userid int foreign key references UserDetails(userid),
songid int foreign key references SongDetails(songid),addeddate date,usersongplaycounter int)

create table LikedSongs(likedsongid int primary key identity(401,1),userid int foreign key references UserDetails(userid),
songid int foreign key references SongDetails(songid),addeddate date,userlikedsongplaycounter int)

create table UserLibrary(userlibraryid int primary key identity(501,1),userid int foreign key references UserDetails(userid),
playlistid int foreign key references PlaylistDetails(playlistid))

select * from INFORMATION_SCHEMA.TABLES

select * from UserDetails

select * from PlaylistDetails

select * from UserLibrary
insert into UserDetails values('Marshall', 'marshall@gmail.com', '1234567890', 'Marshall101', '1997-11-14', 'Admin')
insert into UserDetails values('Genelia', 'genelia@gmail.com', '0987654321', 'Genelia101', '1997-11-24', 'User')