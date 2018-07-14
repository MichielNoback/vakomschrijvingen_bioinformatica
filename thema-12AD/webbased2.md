# Module: Web-based informatiesystemen 2

| Gegevensveld  | Waarde |
| ------------- | ------------- |
| Osiriscode  | BFVH4DBS3  |
| ECTS  | 3 |
| Toetsvorm  | Opdracht |
| Minimum cijfer  | 5,5 |
| Docent(en)  | KEMC |
| Contactpersoon  | KEMC |
| Voertaal  | Nederlands |

## Cursusdoelen (leerdoelen)

After successfully attending this course, students are able to
- Design an API according to the REST (REpresentational State Transfer) architectural style
- Implement an API using the REST Maturity levels, up to level 3 (full HATEOAS compliant)
- Incorporate Domain Driven Design for implementing Data Transfer Objects
- Understand methods of (De)serializing POJOs to and from JSON data for communication purposes
- Test microservices using JUnit, Mockito and Spring Test (MockMVC)
- Recognize the proper use of the HTTP Status codes for communication and testing purposes
- Auto-generate full REST API documentation by using Spring REST Docs and the asciidoc plugin
- Reduc the application load by implementing pagination for accessing large resources (databases)
- Provide monitoring endpoints for assessing the application health and status through an API (using Spring Actuator)
- (optional) enable advanced scalability by configuring a Docker container for use with Kubernetes

## Inhoud

During this course, titled *From Monoliths to Microservices*, we will explore modern techniques for designing and developing applications consisting of scalable, modular microservices. These services communicate through a REST API (a developer’s UI) implemented using the Java Spring framework which is the main technique used in this course. 

The course begins by creating a single, small, microservice to which new features are added in later weeks and resulting in a mature, well documented REST API that provides insights in its usage (using HATEOAS links to resources), statistics and health information and properly communicates on error using JSON and HTTP status codes. Upon completion of the service, a Docker container configuration file (`Dockerfile`) is created for use with the Kubernetes container orchestrator for deployment as a scalable application.


**beoordeling**
Your final project, and the functionality it offers, will be assessed and graded. These aspects will be taken into account (percentage indicates weighing factor):
- General code-quality and code-documentation (10% & 5%)
- Application design, including proper use of DAO/DTOs (20%)
- Implemented Unit/ Integration tests, both positive and negative (15%)
- Documentation of the REST API endpoints using asciidoc (10%)
- Implementation of custom health and info actuator endpoints (10%)
- Functionality of the API, depending on project choice (30%)

### Literatuur en andere bronnen

**Literatuur**  
- Chapter 1 from *Testing Java Microservices*, Alex Soto Bueno, Jason Porter and Andy Gumbrecht, ISBN 9781617292897. Free chapter 1 for download at [manning publications](https://www.manning.com/books/testing-java-microservices).

**Web**
- Blackboard course thema 12
- [Bitbucket repository](https://bitbucket.org/mkempenaar/webbasedinfo2/)

### Competenties
\-

### Werkvormen  
- Hoor/werkcolleges

#### Ingangseisen 
\- 

#### Ingangseisen toets
\- 

#### Voorkennis
- It is very strongly advised to take the course “Application Design” first, since this course relies heavily on advanced Java coding skills and the Java Spring framework. 

#### Voorkennis kan worden opgedaan met
- Introductie Java
- Webbased Information Systems 1
- Application Design

#### Bronnen van zelfstudie
- Articles by [Martin Fowler and James Lewis](https://martinfowler.com/articles/microservices.html) about microservices.

#### Verplicht materiaal
Current material for 2017-2018 (blog posts and online resources, might change based on availability)
- [Martin Fowler; *the Richardson Maturity Model*](https://martinfowler.com/articles/richardsonMaturityModel.html)
- [HTTP Status Codes for REST APIs](http://www.restapitutorial.com/httpstatuscodes.html)

#### Aanbevolen materiaal
\-

