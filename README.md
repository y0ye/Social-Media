# Cat-Posting

Fun little personal project that I used to explore AWS S3 and build a simple Full-Stack project. Still want to spend alot of time on it!

## What I used

**PERN Stack**: PostgreSQL, Express.js, ReactTS, Node.js\
**AWS**: S3 bucket for image hosting\
**REST API**: POST, GET, PUT, DELETE; communicates with Postgres db\
I also used Postman for testing.


## What is it?

A simple "Social Media" web-app. Allows for sign-up, login and image posting. 

 - Users signup with a username and password
 	- Credentials put in "users" db table  
 - Users login with their username and password
	 - Authentication is handled with a global state
		 - Definitely not the best way but its what I thought of 
- Users then have access to create a post
	- Title, image, and description
		- Image sent to AWS
			- Only image types supported by chrome (ex. not tiff)
		- Title, AWS access link, description, username all added to a "post" database entry
- After post is created users are taken back to homepage, once they leave the homepage they are signed out

## Video
https://www.youtube.com/watch?v=8xlSnNd-Iz8

## Images
![image](https://github.com/user-attachments/assets/6fc55308-dab4-4a5e-9dcf-c301be0fa05b)
![image](https://github.com/user-attachments/assets/f48e3ed4-2099-47d3-b604-c35ace67d3e4)
![image](https://github.com/user-attachments/assets/d2f62ed6-06c7-4366-a571-7e31a005ab95)
![screencapture-localhost-5173-CreatePost-2025-02-16-16_33_09](https://github.com/user-attachments/assets/e2ceecae-9bb6-469a-93e1-9c918cb270be)
![image](https://github.com/user-attachments/assets/ad5ce299-9ebe-4cf8-836a-2c9b7f86f5fc)
![image](https://github.com/user-attachments/assets/c751a500-4894-487e-9ceb-a33c25f88537)
