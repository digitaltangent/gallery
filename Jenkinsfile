pipeline { 
  agent any
  tools { 
    gradle "Gradle-7"
  }
  stages { 
    stage('clone the repo') {
      steps { 
        git 'https://github.com/digitaltangent/gallery.git'
      }
    }
    stage('perform installs') {
      steps { 
        sh 'node -v'
      }
    }
    
  
  }
}