# Coed Volleyball Mixer Scheduler

This project is a Coed Volleyball Mixer Scheduler that allows users to generate schedules for volleyball matches based on player inputs and specified constraints.

## Project Structure

The project is divided into two main parts: the client and the server.

### Client

The client is built using React and TypeScript. It handles user interactions and displays the generated schedules.

- **client/package.json**: Configuration file for the client-side application.
- **client/tsconfig.json**: TypeScript configuration for the client-side application.
- **client/public/index.html**: Main HTML file serving as the entry point for the React application.
- **client/src/index.tsx**: Entry point for the React application, rendering the App component.
- **client/src/App.tsx**: Main App component managing the overall layout and routing.
- **client/src/components/Scheduler.tsx**: Component for handling scheduling logic and user interactions.
- **client/src/components/MatchCard.tsx**: Component displaying details of each match in the schedule.
- **client/src/components/PlayerForm.tsx**: Component for inputting player information and uploading CSV files.
- **client/src/hooks/useScheduler.ts**: Custom hook encapsulating scheduling logic and state management.
- **client/src/services/api.ts**: Functions for making API calls to the server.
- **client/src/types/index.ts**: TypeScript types and interfaces used throughout the client application.
- **client/src/styles/app.css**: CSS styles for the client application.

### Server

The server is built using Node.js and Express, providing the backend functionality for scheduling.

- **server/package.json**: Configuration file for the server-side application.
- **server/tsconfig.json**: TypeScript configuration for the server-side application.
- **server/src/index.ts**: Entry point for the server application, setting up the Express server.
- **server/src/app.ts**: Initializes the Express application and configures middleware and routes.
- **server/src/controllers/scheduleController.ts**: Handles requests related to schedule generation.
- **server/src/routes/scheduleRoutes.ts**: Defines endpoints for schedule-related API calls.
- **server/src/services/schedulerService.ts**: Core scheduling logic and algorithms for generating schedules.
- **server/src/models/player.ts**: Defines the structure of player data used in the application.
- **server/src/utils/constraints.ts**: Utility functions for validating scheduling constraints.
- **server/src/types/index.ts**: TypeScript types and interfaces used throughout the server application.

### Shared

- **shared/src/types/index.ts**: Shared TypeScript types and interfaces for both client and server applications.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd coed-volleyball-scheduler
   ```

3. Install dependencies for both client and server:
   ```
   cd client
   npm install
   cd ../server
   npm install
   ```

4. Start the server:
   ```
   npm start
   ```

5. Start the client:
   ```
   cd client
   npm start
   ```

## Usage

- Use the PlayerForm component to input player information and upload CSV files.
- The Scheduler component will handle the scheduling logic and display the generated matches using the MatchCard component.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.