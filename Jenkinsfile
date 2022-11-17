pipeline { 
  agent any
  tools { 
    gradle "Gradle-7"
  }
  stages { 
    stage('test push') {
      steps { 
        git 'https://github.com/digitaltangent/gallery.git'
      }
    }
    
  
  }
}