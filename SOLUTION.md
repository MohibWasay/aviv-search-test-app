# AVIV technical test solution

You can use this file to write down your assumptions and list the missing features or technical revamp that should
be achieved with your implementation.

## Notes

Write here notes about your implementation choices and assumptions.

## Questions

This section contains additional questions your expected to answer before the debrief interview.

- **What is missing with your implementation to go to production?**
- Configuration of CI/CD pipelines workflows.
- Improve Validations.
- Writing E2E tests using Playwright or Cypress.
- Integrating Kubernetes + Helms.
- Functional and Integration Tests
- API Serialization
- Internationalization
- Sentry Error Logging & Monitoring
- Product Analytics (Mixpanel)

- **How would you deploy your implementation?**
There are multiple ways this application can be deployed. I would approach it in one of the ways.
  1. Using Kubernetes and Docker with Kubernetes stack, minikube, kubectl and Docker and then using EKS to deploy to AWS 
    Reference: https://mattermost.com/blog/how-to-deploy-a-react-app-to-kubernetes-using-docker/
  2. Uploading the minified bundle to S3 and then serving it using Cloudfront.
    Reference: https://wolovim.medium.com/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af


- **If you had to implement the same application from scratch, what would you do differently?**
  I would have opted a more robust framework for developing the application. My go to framework would have been Next.js. Next.js offers server-side rendering, you can leverage edge-computing capabilities. 
  Better Search Engine Optimisation, Server Side Rendering, Server components, easy decomposition to micro-frontends. Here is how my technology stack would have looked like.
    - Next.js
    - TypeScript
    - Formik / React Hook Form
    - Atomic Design System (clean component folder architecture)
    - Micro-frontends (https://dev.to/logrocket/micro-frontend-with-react-and-nextjs-n6h)
    - BEM
    - Storybook.js
    - Playwright (E2E Tests)

- **The application aims at storing hundreds of thousands listings and millions of prices, and be accessed by millions
  of users every month. What should be anticipated and done to handle it?**

  NB : You can update the [given architecture schema](./schemas/Aviv_Technical_Test_Architecture.drawio) by importing it
  on [diagrams.net](https://app.diagrams.net/) 
