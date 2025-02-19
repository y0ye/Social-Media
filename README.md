# Cat-Posting

Fun little personal project that I used to explore AWS S3 and build a simple Full-Stack project. Still want to spend alot of time on it!

## What I used

**PERN Stack**: PostgreSQL, Express.js, ReactTS, Node.js\
**AWS**: S3 bucket for image hosting\
**REST API**: POST, GET, PUT, DELETE; communicates with Postgres db\
I also used Postman for testing.


## What is it?

A simple "Social Media" web-app. Allows for sign-up, login, image posting, and commenting. 

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
- Users can comment on a post that was created

## Video
https://www.youtube.com/watch?v=8xlSnNd-Iz8

## Images
![image](https://github.com/user-attachments/assets/5d58bf12-9b2d-48c9-8379-c1e81f3fa58d)
![image](https://github.com/user-attachments/assets/f48e3ed4-2099-47d3-b604-c35ace67d3e4)
![image](https://github.com/user-attachments/assets/d2f62ed6-06c7-4366-a571-7e31a005ab95)
![image](https://github.com/user-attachments/assets/ad6b9b4d-6947-42df-9ef8-86e7be202771)
![image](https://github.com/user-attachments/assets/52df5131-fc01-41ff-8d19-393fe010a2d0)
![image](https://github.com/user-attachments/assets/2c17a61f-b490-478d-bd5b-4d5423dab807)
