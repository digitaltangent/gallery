pipeline { 
  agent any
  tools {nodejs "node"}
  
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
        slackSend(channel: "#aleedaip1", message: "Build: ${env.BUILD_NUMBER}")
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
      sh 'git push --force https://${HEROKU_CREDENTIALS}@git.heroku.com/immense-thicket-43199.git master'
      slackSend(channel: "#aleedaip1", message: "Build: ${env.BUILD_NUMBER}")
    }
  }
}      
  }
}