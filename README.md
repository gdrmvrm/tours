## Tour Listing App

A simple React application that fetches and displays a list of travel tours. Users can explore tour details, remove individual tours, and re-fetch the list when needed.

### Features

- Fetch and display tours from a remote API
- Show a loading spinner while data is being fetched
- Expand/collapse long tour descriptions with a "Read More" button
- Remove individual tours from the list
- Re-fetch all tours with a single click

### Component Structure

#### App.jsx

- Fetches tours data from an external URL
- Displays a loading state while fetching
- Passes data down to the Tours component

#### Tours.jsx

- Receives and renders a list of Tour components
- Handles state updates to remove a tour
- Contains logic to re-fetch tours

#### Tour.jsx

- Displays individual tour details (name, image, price, info)
- Includes:
- A "Not Interested" button to remove the tour
- A "Read More" toggle for expanding/collapsing the description

#### Loading.jsx

- Simple spinner or loading message shown while data is being fetched

### How it Works

1. On app load, App.jsx fetches tour data and displays a loading state.
2. Once loaded, Tours.jsx renders a list of Tour components.
3. Each Tour allows users to:

- Click "Read More" to expand full info
- Click "Not Interested" to remove the tour from the list

4. If all tours are removed, a "Refresh" button is shown to re-fetch tours.

### Getting Started

```bash
npm install
npm run dev
```
