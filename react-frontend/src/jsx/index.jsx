import React from "react";
import ReactDOM from 'react-dom/client';
import Main from 'jsx/Main';

const container = document.getElementById('divMain');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render: Render an element to the root.
root.render(<Main tab="home"/>);

// During an update, there's no need to pass the container again.
// root.render(<Main name="profile" />);
