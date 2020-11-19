pipeline {
  agent any
  environment {
    registry = "aimnissley/swe645"
    registryCredential = 'dockerhub'
    frontendImage = ''
  }
  stages {
    stage("Build Docker Image") {
      steps {
        script {
          checkout scm
          sh 'rm -rf *.war'
          sh 'jar -cvf Frontend.war *'
          frontendImage = docker.build("aimnissley/swe645:F-$BUILD_NUMBER")
        }
      }
    }
    stage("Push Image to DockerHub") {
      steps {
        script {
          docker.withRegistry( '', registryCredential ) {
            frontendImage.push()
          }
        }
      }
    }
    stage("Deploy to Rancher") {
      steps {
        sh 'kubectl set image deployment/frontend swe645=aimnissley/swe645:F-${BUILD_NUMBER} --kubeconfig /home/Jenkins/.kube/config'
      }
    }
  }
}
