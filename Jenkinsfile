pipeline {
  agent any
  tools {
    nodejs 'node-13.2.0'
  }

  options {
    timeout(time: 2, unit: 'MINUTES')
  }

  stages {
    stage('Instalar dependencias') {
      steps {
        sh 'npm i'
      }
    }
    stage('Correr test') {
      steps {
        sh 'npm t'
      }
    }
  }
}
