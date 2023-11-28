# clusterai
Deploy mongodb with username and password, db in default is admin
check connection using mongodb compass, once connection is okay, add a database to check frontend, backend.
use IP or loadbalancer dns and paste in .env file for both auth and backend. 
auth/src/routes/login/ login controller frontend IP address:port
auth/src/utils/ mongoconnection.js mongo+srv changed to mongo

Backend
.env mongodb uri changed, reseller slug, authurl changed to IP

Frontend
.env IP of backend and auth.  SRC/utilis/ constant.js domain changed, kovaion.ai

now check the connection for both auth and backend.  npm install --force, npm start.  If it works then connection is okay. now deploy both auth and backend.
now copy node ip of both auth and backend and paste in .env.development in frontend and check it. npm install --force , npm start.  If it works, deploy in cluster.
digitalocean -mongodb
sathish8329:digibackd:v1
sathish8329:digiauth:v1
