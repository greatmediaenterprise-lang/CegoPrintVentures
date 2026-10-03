# Project decisions
- Keep the website as a single-page React experience with anchor-linked sections; this lets visitors move directly between services and contact information.
- Keep the initial loading state in the React app rather than delaying navigation or requiring a service worker; this avoids trapping visitors on a loading screen.