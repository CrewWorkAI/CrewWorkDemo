```jsx
import React, { useEffect, useState } from 'react';

function UserAuth() {
  const [location, setLocation] = useState(null);
  
  // Fetch user's location data using Geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({lat: latitude, lng: longitude});
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);
  
  // Send location data to backend server when component mounts
  useEffect(() => {
    if (location) {
      fetch('/api/weather', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(location)
      })
      .then(res => res.json())
      .then((data) => console.log('Success:', data))
      .catch((error) => console.error('Error:', error));
    }
  }, [location]);
  
  return (<div>UserAuth Component</div>);
}
export default UserAuth;
```