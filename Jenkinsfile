pipeline {
    agent any

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
                bat 'set PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 && npx playwright test --config=playwright.config.js'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'reports/playwright-report/**, test-results/**', allowEmptyArchive: true
        }
    }
}