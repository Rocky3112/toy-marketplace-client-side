const Blog = () => {
  return (
    <div className=" m-20 p-16 bg-slate-200 shadow-2xl rounded-xl">
      <div className=" text-left container">
        <h1 className=" text-xl">
          1.What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h1>
        <br />
        <br />
        <p>
          Access Token: <br /> An access token is a credential that is used to
          access protected resources in an application. It is typically a JSON
          web token (JWT) containing information such as the users identity and
          permissions. Access tokens are usually short-lived and have an
          expiration time. <br /> Refresh Token: <br /> A refresh token is a
          credential that is used to obtain a new access token once the current
          access token expires. It is a long-lived token that is issued
          alongside an access token. When the access token expires, the client
          can use the refresh token to request a new access token without
          requiring the user to re-authenticate. <br /> <br /> The flow
          typically works as follows: <br /> The client authenticates with the
          server using credentials (e.g., username/password). If the credentials
          are valid, the server generates an access token and a refresh token
          and sends them back to the client. The client includes the access
          token in each subsequent request to access protected resources. When
          the access token expires, the client can use the refresh token to
          request a new access token from the server.
        </p>
      </div>{" "}
      <br />
      <div className=" text-left container">
        <h1 className=" text-xl">2.Compare SQL and NoSQL databases?</h1>
        <br />
        <br />
        <p>
          SQL (Structured Query Language) Databases: SQL databases are based on
          a relational data model, where data is organized into tables with
          predefined schemas. They use SQL for defining and manipulating the
          data. SQL databases provide ACID (Atomicity, Consistency, Isolation,
          Durability) properties, enforce data integrity through relationships
          and constraints, and support complex queries using joins. <br />{" "}
          <br />
          NoSQL (Not Only SQL) Databases: NoSQL databases are non-relational
          databases that provide a flexible and scalable approach for handling
          large amounts of unstructured and semi-structured data. They have
          dynamic schemas, allowing for schema-less data storage. NoSQL
          databases are categorized into different types: key-value stores,
          document databases, column-family stores, and graph databases. They
          are designed for scalability, high availability, and fast read/write
          operations but may sacrifice some ACID properties for performance and
          scalability.
        </p>
      </div> <br />
      <div className=" text-left container">
        <h1 className=" text-xl">3.What is express js? What is Nest JS?</h1>
        <br />
        <br />
        <p>
          Express.js: <br /> Express.js is a popular web application framework for
          Node.js. It provides a minimalist and flexible approach to building
          web applications and APIs. Express.js simplifies common tasks such as
          routing, middleware management, and request/response handling. It
          allows developers to create server-side applications using JavaScript
          and provides a rich ecosystem of plugins and middleware for extending
          its functionality. <br /> <br /> NestJS: <br /> NestJS is a progressive TypeScript-based
          framework for building efficient, scalable, and maintainable
          server-side applications. It is built on top of Express.js and
          provides an opinionated structure inspired by Angular, making it
          suitable for building enterprise-level applications. NestJS leverages
          decorators, modules, and dependency injection to create a modular and
          testable codebase. It integrates well with other libraries and
          frameworks, such as TypeORM and GraphQL.
        </p>
      </div><br />
      <div className=" text-left container">
        <h1 className=" text-xl">2.What is MongoDB aggregate and how does it work?</h1>
        <br />
        <br />
        <p>
        MongoDB Aggregate: <br /> MongoDBs aggregate is a powerful method used to perform advanced data processing and analysis operations within the MongoDB database. It allows you to perform complex queries, transformations, aggregations, and computations on the data stored in MongoDB collections. The aggregate pipeline consists of multiple stages, including matching, grouping, projecting, sorting, and more. Each stage performs a specific operation on the data and passes the result to the next stage. By combining multiple stages in a pipeline, you can achieve complex data transformations and computations.By utilizing the aggregate framework, developers can leverage MongoDBs powerful data processing capabilities directly within the database
        </p>
      </div>
    </div>
  );
};

export default Blog;
