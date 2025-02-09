# DDD Forum

This is a study repository on Domain-Driven Design (DDD) and Clean Architecture, exposing concepts in practice in a DDD forum application.

## Technologies Used

- **TypeScript**: Programming language used to write the application code.
- **Vitest**: Testing tool used to ensure code quality.
- **ESLint**: Linting tool to maintain code quality and consistency.
- **Day.js**: Library for date manipulation.
- **Vite**: Build and development tool.

## Concepts Used

- **Domain-Driven Design (DDD)**: Software design approach that emphasizes collaboration between domain experts and developers to create a rich domain model.
- **Clean Architecture**: Software architecture that promotes separation of concerns and independence from frameworks, databases, user interfaces, and any other external concerns.
- **Entities and Aggregates**: Fundamental DDD concepts representing domain objects and their relationships.
- **Domain Events**: Events that represent significant changes in the domain state.
- **Value Objects**: Objects defined by their attributes and do not have their own identity.
- **Repositories**: Abstractions that encapsulate data access logic.

## Project Structure

- **src/core**: Contains the core components of the application, such as entities, aggregates, domain events, errors, and utilities.
  - **entities**: Contains the domain entities and aggregates.
  - **events**: Contains the domain events.
  - **errors**: Contains the domain-specific error classes.
  - **utilities**: Contains utilities and helpers.
- **src/domain/forum**: Contains the domain logic specific to the forum context.
  - **application**: Contains the application layer, including use cases and repositories.
    - **use-cases**: Contains the use cases for the forum domain.
    - **repositories**: Contains the repository interfaces for the forum domain.
  - **enterprise**: Contains the enterprise layer, including entities and value objects specific to the forum domain.
    - **entities**: Contains the entities for the forum domain.
    - **value-objects**: Contains the value objects for the forum domain.
- **test**: Contains test utilities and in-memory implementations for repositories.

## How to Run

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run tests:
   ```bash
   pnpm test
   ```

3. Run lint:
   ```bash
   pnpm lint
   ```

4. Run lint with automatic fix:
   ```bash
   pnpm lint:fix
   ```

## Contribution

Feel free to contribute to this repository by submitting pull requests or opening issues.

