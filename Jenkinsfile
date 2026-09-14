pipeline {
    agent any

    environment {
        BASE_URL = 'https://shop.qaautomationlabs.com'
        DEMO_EMAIL = 'demo@demo.com'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                withCredentials([
                    string(
                        credentialsId: 'demo-password',
                        variable: 'DEMO_PASSWORD'
                    )
                ]) {
                    bat 'set PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 && npx playwright test --config=playwright.config.js'
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'reports/playwright-report/**, test-results/**', allowEmptyArchive: true
        }
    }
}