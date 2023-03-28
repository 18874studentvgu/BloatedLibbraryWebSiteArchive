# **Git, Docker, Micro Service and Three-tier Architecture**

## **Docker**

### Overview

Docker is an open platform for developing, shipping, and running applications. Docker enables developers to separate applications from the infrastructure, and package or run them in a container, which is a loosely isolated environment.

### Container’s usage and advantage

#### Advantage

- The isolation and security allows users to run many containers simultaneously on a given host.
- Containers are lightweight and contain everything needed to run the application.
- Containers can be easily shared, and every shared member gets the same container that works in the same way.

#### Usage

Docker provides tooling and a platform to manage the lifecycle of the containers:

- Develop application and its supporting components using containers.
- The container becomes the unit for distributing and testing the application.
- When ready, deploy the application into your production environment, as a container or an orchestrated service. This works the same whether your production environment is a local data center, a cloud provider, or mixed.

#### What can we do in Docker?

##### Fast, consistent delivery of applications

Docker allows developers to work in standardized environments using local containers. They are great for continuous integration and continuous delivery (CI/CD) workflows.

##### Responsive deployment and scaling

Docker’s container-based platform allows for highly portable workloads. Containers can run on a developer’s local laptop, on physical or virtual machines in a data center, on cloud providers, or in a mixture of environments.

##### Running more workloads on the same hardware

Docker is lightweight and fast. It provides a viable, cost-effective alternative to hypervisor-based virtual machines, so you can use more of your server capacity to achieve your business goals. Docker is perfect for high density environments and for small and medium deployments where you need to do more with fewer resources.

#### Docker vs. Virtual machine

- VM takes a long time to start and stop, while Docker’s container takes only a few seconds.
- Containers are lightweight.
  - They require less memory.
  - They run on the device’s OS.
  - They can be built and discarded quicklier than VMs.
- VM isolates the system resource and the working environment, while Docker only isolates the working environment and provides the resource by itself.

Reference: [Docker overview](https://docs.docker.com/get-started/overview/)

--------------------------------------------------------------------------------------------------------------------------------------------

## **Git**

Git is a version control system used for tracking changes in computer files. It is generally used for source code management in software development.

> Git was originally authored by Linus Torvalds in 2005 for development of the Linux kernel, with other kernel developers contributing to its initial development. Since 2005, Junio Hamano has been the core maintainer. As with most other distributed version control systems, and unlike most client–server systems, every Git directory on every computer is a full-fledged repository with complete history and full version-tracking abilities, independent of network access or a central server. Git is free and open-source software distributed under the GPL-2.0-only license.
    _From: [Wikipeadia](https://en.wikipedia.org/wiki/Git)_

Git’s feature:

- Tracks history
- Free and open source
- Supports non-linear development
- Creates backups
- Scalable
- Supports collaboration
- Easier eranching
- Distributed development

The Git workflow is divided into three states:

- Working directory - Modify files in your working directory
- Staging area (Index) - Stage the files and add snapshots of them to your staging area
- Git directory (Repository) - Perform a commit that stores the snapshots permanently to your Git directory. Checkout any existing version, make changes, stage them and commit.

![Diagram showing some common Git operations. By Daniel Kinzler. This file is licensed under the Creative Commons Attribution 3.0 Unported license https://creativecommons.org/licenses/by/3.0/deed.en .No change were made to the image.](https://upload.wikimedia.org/wikipedia/commons/d/d8/Git_operations.svg)

### Branch

Branch in Git is used to keep your changes until they are ready. Meaning that you can do any update or new feature without affecting your main project. Thus, it is recommended that when you create new feature, you should put it in different branch.

When the new branch is finish and thoroughly tested than you can merge it with the main branch

#### Git’s basic command

- Create Repositories:

    ```console
    $ mkdir <your new project>/
    $ cd <your new project>
    $ git init
    ```

     **Link your local repository to Gitlab (add origin repository):**
    > [Add a remote in Git](https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html#add-a-remote)
- Make Changes:
    > Notes: If you use want to later push changes to a remote repo (eg. your project hosted on GitLab), remember to run ``git pull`` before hand to get all the latest changes from the repo.

  - add and commit files:

    ```console
    $ # in your project dir:
    $ git add <your newly added/changed files & folders>
    $ git commit -m "Your commit message here"
    ```

    **_Or:_**
  - commit all altered files (ignore all non-added files):

    ```console
    $ git commit -a -m "Your commit message here"
    ```

  - status (get an over view of your project)
- Parallel Development:
  - branch
        Create a branch:

    ```console
    $ git branch <your_new_branch> #make a new branch
    $ git switch <your_new_branch> #switch to said new branch
    ```

    Or

    ```console
    $ git checkout -b <your_new_branch> 
    ```

    > Note: Check your branches as well as the one you are currently on using `git branch --list`
  - merge:

    ```console
    $ #merge <your_new_branch> to the branch you are currently on
    $ git merge <your_new_branch>
    ```

  - rebase:
        From running `git rebase --help`:
        Assume the following history exists and the current branch is "topic":

                     A---B---C topic
                    /
                D---E---F---G master

        From this point, the result of either of the following commands:

            git rebase master
            git rebase master topic

        would be:

                             A'--B'--C' topic
                            /
                D---E---F---G master

- Sync Repositories:
  - push (get the latest changes from your local repo to the remote repo)
  - pull (get the latest changes from the remote repo to your local repo)

Additional command:

- For help with a git operation:

    ```console
    $ git <some git command> --help
    ```

Reference

- [Branch in git](https://www.simplilearn.com/tutorials/git-tutorial/what-is-git#branch_in_git)
- [Start using git](https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html)
- [Git document](https://git-scm.com/doc)

--------------------------------------------------------------------------------------------------------------------------------------------

## **Micro Service**

### 1. Defintion

Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.

### 2. Characteristics of microservices

- Autonomous
  - Each component service in a microservices architecture can be developed, deployed, operated, and scaled without affecting the functioning of other services.
  - Code or implementation between services do not need to be shared among others.
  - Well-defined APIs will be in charge of any communication between individual components.  
- Specialized**
  - Each service is designed for a set of capabilities and focuses on solving a specific problem.
  - If more code being contributed to the service and makes the service becomes complex, it can be broken down into smaller services.

### 3. Benefits of Microservices

- Agility
  - Each independent team will take ownership of their services, act within a small and well understood context, therefore is empowered to work more efficiently and independently. This shortens development cycle times.
- Easy deployment
  - Microservices enable continuous integration and continuous delivery, making it easy to try out new ideas and to roll back if something doesn’t work. The low cost of failure enables experimentation, makes it easier to update code, and accelerates time-to-market for new features.
- Technological freedom
  - Teams have the freedom to choose the best tool to solve their specific problems. As a consequence, teams building microservices can choose the best tool for each job.
- Reusable code
  - Dividing software into small, well-defined modules enables teams to use functions for multiple purposes. A service written for a certain function can be used as a building block for another feature. This allows an application to bootstrap off itself, as developers can create new capabilities without writing code from scratch.
- Resilience
  - Service independence increases an application’s resistance to failure.
  - In a monolithic architecture, if a single component fails, it can cause the entire application to fail.
  - With microservices, applications handle total service failure by degrading functionality and not crashing the entire application.

### 4. Disadvantages of Microservices

- Higer Complexity
  - Microservices may come with a higher degree of complexity. It could be a major challenge for inexperienced organizations. In addition, microservices are so independent that it can be difficult to track down errors and fix them.
- Increased Network Traffic
  - Since microservices are designed to be self-contained, they rely heavily on the network to communicate with each other. This can result in slower response times (network latency) and increased network traffic.
- Increased development time
  - Require more coordination compared to monolithic applications due to the complication
  - Because microservices are deployed independently, it can take longer to get them all up and running.
  - Additionally, developers need to be familiar with multiple technologies.
- Difficult in Global Testing and Debugging
  - Testing and debugging a microservice-based application can be difficult because the application is spread out across multiple servers and devices.
  - In order to effectively test and debug an application, you need to have access to all of the servers and devices that are part of the system.
  - This can be difficult to do in a large, distributed system.

### 5. Monolithic and Microservice Architecture

| Monolithic Architecture | Microservice Architecture |
| :----------- | :----------- |
| Consists of a single codebase with multiple modules within according to the business functionalities. | Consists of individual services with each service being responsible for exactly one functionality |
| Do not need expert domain knowledge for development | Risky to implement without domain expertise and container knowledge |
| Easier deployment | Relatetively complex deployment |
| Updating the system is a mundane process which would need the entire system to be redeployed. | Only the service which is updated needs to be redeployed. |
| Difficult to reuse modules from one software to another | Could be easily used in development of other software |

--------------------------------------------------------------------------------------------------------------------------------------------

## **Three-tier Architecture**

### 1. Definition

- A three-tier architecture is a client-server architecture in which the functional process logic, data access, computer data storage and user interface are developed and maintained as independent modules on separate platforms.
- It organizes applications into three logical and physical computing tiers: the presentation tier (or user interface), the application tier and the data tier.
- Three-tier architecture is a software design pattern and a well-established software architecture.

### 2. Tier

1. **Presentation Tier**
The presentation tier is the user interface and communication layer of the application, where the end user interacts with the application. Its main purpose is to display information to and collect information from the user. This top-level tier can run on a web browser, as a desktop application, or a graphical user interface (GUI), for example. Web presentation tiers are usually developed using HTML, CSS and JavaScript. Desktop applications can be written in a variety of languages depending on the platform.

2. **Application tier**
The application tier, also known as the logic tier or middle tier, is the heart of the application. In this tier, information collected in the presentation tier is processed - sometimes against other information in the data tier - using business logic, a specific set of business rules. The application tier can also add, delete or modify data in the data tier. The application tier is typically developed using Python, Java, Perl, PHP or Ruby, and communicates with the data tier using API calls.

3. **Data tier**
The data tier, sometimes called database tier, data access tier or back-end, is where the information processed by the application is stored and managed. This can be a relational database management system such as PostgreSQL, MySQL, MariaDB, Oracle, DB2, Informix or Microsoft SQL Server, or in a NoSQL Database server such as Cassandra, CouchDB or MongoDB. In a three-tier application, all communication goes through the application tier. The presentation tier and the data tier cannot communicate directly with one another.

### Advantages

- **Faster development**
Because each tier can be developed simultaneously by different teams, an organization can bring the application to market faster, and programmers can use the latest and best languages and tools for each tier.

- **Improved scalability**
Any tier can be scaled independently of the others as needed.

- **Improved reliability**
An outage in one tier is less likely to impact the availability or performance of the other tiers.

- **Improved security**
Because the presentation tier and data tier can't communicate directly, a well-designed application tier can function as a sort of internal firewall, preventing SQL injections and other malicious exploits.

- **Improved disruption**
Development cycle or upgrade times are significantly improved ensuring minimal disruption in customer’s experience.

### 4. Three-tier application in web development

In web development, the tiers have different names but perform similar functions:

- **The web server** is the presentation tier and provides the user interface. This is usually a web page or web site, such as an ecommerce site where the user adds products to the shopping cart, adds payment details or creates an account. The content can be static or dynamic, and is usually developed using HTML, CSS and Javascript.
- **The application server** corresponds to the middle tier, housing the business logic used to process user inputs. To continue the ecommerce example, this is the tier that queries the inventory database to return product availability, or adds details to a customer's profile. This layer often developed using Python, Ruby or PHP and runs a framework such as e Django, Rails, Symphony or ASP.NET, for example.
- **The database server** is the data or backend tier of a web application. It runs on database management software, such as MySQL, Oracle, DB2 or PostgreSQL, for example.

### 5. Other multi-tier architectures

While three-tier architecture is easily the most widely-adopted multi-tier application architecture, there are others you might encounter in your work or your research.

- **Two-tier architecture**
Two-tier architecture is the original client-server architecture, consisting of a presentation tier and a data tier; the business logic lives in the presentation tier, the data tier or both. In two-tier architecture the presentation tier - and consequently the end user - has direct access to the data tier, and the business logic is often limited. A simple contact management application, where users can enter and retrieve contact data, is an example of a two-tier application.
- **N-tier architecture**
N-tier architecture - also called multi-tier architecture - refers to any application architecture with more than one tier. But applications with more than three layers are rare, because additional layers offer few benefits and can make the application slower, harder to manage and more expensive to run. As a result, n-tier architecture and multi-tier architecture are usually synonyms for three-tier architecture.

### 6. References

[What is Three-Tier Architecture | IBM. (2023)](https://www.ibm.com/topics/three-tier-architecture). Retrieved 23 February 2023.
[What is Three-Tier Architecture? - Definition from Techopedia. (2023)](https://www.techopedia.com/definition/24649/three-tier-architecture). Retrieved 23 February 2023.


## **User-case**
### Browse book

## **Database/ER diagram**

