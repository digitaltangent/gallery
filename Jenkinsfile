pipeline { 
  agent any
  tools {nodejs "node"}

  post {  
         
         success {  
             slackSend(channel: "#aleedaip1", message: "Build: ${env.BUILD_NUMBER}  URL: https://immense-thicket-43199.herokuapp.com/")  
         }  
         failure {  
             mail bcc: '', body: "<br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL of build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "ERROR CI: Project name -> ${env.JOB_NAME}", to: "aleeda@gmail.com";  
         }   
     }  
  
  stages { 
    stage("Env Variables"){
            steps{
                echo "The current build number is ${env.BUILD_NUMBER}"                                                     
            }
        }
    stage('clone the repo') {
      steps { 
        git 'https://github.com/digitaltangent/gallery.git'
      }
    }
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    //stage('Tests') {
      //steps { 
       // sh 'npm test'
    //  }
   // }
    
stage('Deploy to Heroku') {
  steps {
    withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){
      sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/immense-thicket-43199.git master'
      
    }
  }
}
 stage('Start Server') {
      steps { 
        sh 'node server'
      }
    }      
  }
}