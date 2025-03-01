# Deploying a Vite React Js Application on AWS EC2

### Testing the project locally

1. Clone this project
```
git clone https://github.com/anuj123upadhyay/react_1
```
2. Setup the  environment variables - `(.env)` file ( if exist => for this react_1 .env file doesnot needed) 
```
DOMAIN= ""
PORT=3000

```
3. Initialise and start the project
```
npm install
npm run start
```

### Set up an AWS EC2 instance

1. Create an IAM user & login to your AWS Console (can also deploy as the root user but deploying through IAM user is the best practice )
    - Access Type - Password
    - Permissions - Admin
2. Create an EC2 instance
    - Select an OS image - Ubuntu
    - Create a new key pair & download `.pem` file
    - Instance type - t2.micro
3. Connecting to the instance using ssh
```
ssh -i instance.pem ubunutu@<IP_ADDRESS>
```

### Configuring Ubuntu on remote VM

1. Updating the outdated packages and dependencies
```
sudo apt update
```
3. Install Git - [Guide by DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-22-04) 
4. Configure Node.js and `npm` - [Guide by DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04)

### Deploying the project on AWS

1. Clone this project in the remote VM
```
git clone https://github.com/anuj123upadhyay/react_1
```
2.Again  Setup the  environment variables - `(.env)` file if exist on your project (like it diesnot exist on my project  `react_1`)
```
DOMAIN= ""
PORT=3000

```
> For this project, we'll have to set up an [Elastic IP Address](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) for our EC2 & that would be our `DOMAIN`

3. Initialise and start the project
```
npm install
npm run start
```

> NOTE - We will have to edit the **inbound rules** in the security group of our EC2, in order to allow traffic from our particular port

> If you are on Vite then use the below command to allow Vite to expose its IP address
```
npm run dev -- --host 0.0.0.0
```
![image](https://github.com/user-attachments/assets/208ad7b0-5c07-48b6-997c-d089c6cbc892)


### Project is deployed on AWS 🎉
![image](https://github.com/user-attachments/assets/5048c08a-6593-47fa-83d7-77135f266558)

