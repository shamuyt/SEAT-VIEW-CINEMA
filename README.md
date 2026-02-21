Initial project setup – SeatView 3D Virtual Cinema

Created the base structure of the SeatView project.

- Initialized React frontend and Node.js backend
- Configured project folders and dependencies
- Added Tailwind CSS setup
- Installed Three.js and React Three Fiber
- Added basic home page layout
- Configured development environment

This commit establishes the foundation for the 3D virtual cinema seat preview system.
<img width="1920" height="1080" alt="Screenshot (3)" src="https://github.com/user-attachments/assets/74dfb03e-c966-4d81-af9d-08d4f7d90582" />

Add 3D theatre environment using Three.js

Implemented the virtual cinema hall environment.

- Created theatre floor, walls, and lighting
- Added movie projection screen
- Implemented perspective camera
- Added orbit controls for free movement
- Setup ambient and spotlight lighting

Users can now enter a virtual theatre and view the environment in real-time 3D.

Implement interactive seat selection

Added interactive seating system inside the theatre.

- Generated seat rows and seat numbering
- Made seats clickable using raycasting
- Highlight selected seat
- Display seat information panel (row, number)
- Visual differentiation for available and booked seats

Users can now select and preview any seat in the theatre.

Add seat perspective viewing simulation

Implemented seat-based viewing experience.

- Camera moves to selected seat position
- Adjusted camera to human eye height
- Camera automatically faces the screen
- Smooth transition animation
- Simulates real viewing perspective

Users can now see how the movie screen looks from each seat.
Add viewing angle and comfort rating system
<img width="1920" height="1080" alt="Screenshot (4)" src="https://github.com/user-attachments/assets/900e676e-0c70-4082-8033-59b15579b841" />

Implemented viewing comfort analysis.

- Calculated distance from seat to screen
- Computed vertical viewing angle
- Assigned comfort rating (Excellent, Good, Average, Poor)
- Displayed rating in UI panel

The system now predicts viewing comfort before booking.

Add video texture playback on theatre screen
<img width="1920" height="1080" alt="Screenshot (5)" src="https://github.com/user-attachments/assets/bcdafaaa-6aae-4937-a761-66407a4ac2b1" />

Added movie trailer playback inside the 3D screen.

- Applied video texture to projection screen
- Auto play trailer on seat selection
- Improved immersion and realism

Users now experience a realistic theatre preview.

Integrate external ticket booking redirect

Added ticket booking functionality.

- Book seat button
- Redirect to BookMyShow website
- Pass selected movie and theatre details

Users can now preview a seat and proceed to ticket booking.

Add user authentication system

Implemented login and signup functionality.

- User registration
- Login authentication
- Password hashing
- Save favorite seats

Allows users to personalize their theatre experience.

Finalize SeatView project and UI improvements

Completed SeatView 3D cinema seat preview platform.

- UI polishing and responsive design
- Performance optimizations
- Fixed camera transition issues
- Improved seat highlighting
- Updated documentation

Project ready for deployment and demonstration.
