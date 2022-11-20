pipeline { 
  agent any
  tools {nodejs "node"}
  
  stages { 
    stage("Env Variables"){
            steps{
                sh "printenv"                                                     
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
        //sh 'npm test'
      //}
    //}
    
stage('Deploy to Heroku') {
  steps {
    withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){
      sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/immense-thicket-43199.git master'
      slackSend(channel: "#aleedaip1", message: "Testing Slack from Jenkins!")
    }
  }
}      
  }
}