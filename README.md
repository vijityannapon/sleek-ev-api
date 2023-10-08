# Installation Guide for `sleek-ev-api`

This guide will walk you through the steps required to set up `sleek-ev-api` locally for development purposes.

## Prerequisites

Before you begin, ensure you have the following software installed on your local machine:

### 1. Node.js

- **Node.js (Version: 18.18.0 or higher)**: `sleek-ev-api` is built on top of the NestJS framework which requires Node.js.

#### Using Direct Install:

Download and install Node.js directly from [Node.js official website](https://nodejs.org/).

#### Using NVM (Node Version Manager):

If you're using multiple Node.js versions on your machine, it's recommended to use `nvm` to manage them.

1. **Install NVM**: Follow the installation instructions on the [official nvm GitHub repository](https://github.com/nvm-sh/nvm).

2. **Install Specific Node Version with NVM**:

   ```bash
   nvm install 18.18.0
   ```

3. **Git**: You'll need Git to clone the repository. If you haven't already, install Git from [Git's official website](https://git-scm.com/).

## Steps

### 1. Clone the Repository

First, you have two options to clone the repository to your local machine:

#### Using SSH:

If you have set up your SSH key with your GitHub account:

```bash
git clone git@github.com:vijityannapon/sleek-ev-api.git
```

#### Using HTTPS:

If you haven't set up SSH or prefer using HTTPS:

```bash
git clone https://github.com/vijityannapon/sleek-ev-api.git
```

### 2. Navigate to the Project Directory

Change to the project directory:

```bash
cd sleek-ev-api
```

### 3. Install Dependencies

Use npm (or yarn, depending on your preference) to install the project's dependencies:

```bash
npm install
```

### 4. Environment Configuration

Copy the `.env.example` file and rename it to `.env`. Update the necessary environment variables as required for your local setup.

### 5. Running the Application

Now, you can run the application in development mode with:

```bash
npm run start:dev
```

This will start the NestJS application, and it should be accessible at http://localhost:3000 (or another port if you've configured it differently).
